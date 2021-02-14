from django.db import models
from carts.models import Cart, CartItem


class Order(models.Model):
    class OrderState(models.TextChoices):
        ABANDONED = '0', 'Opustene'
        NEW = '1', 'Cekajici'
        DISPATCHED = '2', 'Odeslane'
        DELIVERED = '3', 'Dorucene'
        RETURNED = '4', 'Vracene'
        FAILED = '5', 'Selhalo'

    cart = models.ForeignKey('carts.cart', on_delete=models.CASCADE, null=False)
    customer = models.ForeignKey('customers.customer', on_delete=models.CASCADE, null=False)
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=255, choices=OrderState.choices, default=OrderState.ABANDONED)

    def __str__(self):
        return f'#{self.id} od {self.customer} v {self.created}'

    # Get all items in order
    def get_items(self):
        return CartItem.objects.filter(cart=self.cart)

    # Get order total
    def get_total(self):
        items = self.get_items()
        total = 0
        for item in items:
            total += item.product.sale_price

        return total

    # Get export string of items for package label
    def get_export_string_for_package(self):
        items = self.get_items()
        export_string = ''

        for item in items:
            export_string += item.get_export_string()
            export_string += ' '

        return export_string

    # 62011306;Jana;Paulusova;Stare Dobrkovice;Cesky Krumlov;38101;jana.paulusova@gmail.com;732447971;0;"2 ID ";DR;0.5;7000;7+41;FO
    def export_as_list(self):
        static = ['DR', '0.5', '7000', '7+41', 'FO']
        row = [self.id,
               self.customer.first_name,
               self.customer.last_name,
               self.customer.address,
               self.customer.city,
               self.customer.postcode,
               self.customer.email,
               self.customer.phone,
               (self.get_total(), 0)[self.cart.payment == Cart.PaymentOptions.CC],
               self.export_items()
               ]

        row.extend(static)
        self.change_state(Order.OrderState.DISPATCHED)
        return row

   # Change order state
    def change_state(self, state):
        self.state = state
        self.save()
        return 0
