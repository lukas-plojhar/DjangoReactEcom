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
            total += item.product.sale_price * item.quantity

        return total

    # Get export string of items for package label
    def get_label_for_items(self):
        items = self.get_items()
        label_string = ''

        for item in items:
            label_string += item.get_package_label() + ' '

        return label_string

    def export_as_list(self, static):
        # Get total amount
        if self.cart.payment == Cart.PaymentOptions.COD:
            total = self.get_total()
        else:
            total = 0

        # Put data into row
        row = [self.id,
               self.customer.first_name,
               self.customer.last_name,
               self.customer.address,
               self.customer.city,
               self.customer.postcode,
               self.customer.email,
               self.customer.phone,
               total,
               self.get_label_for_items()
               ]

        # Add static data
        row.extend(static)

        # Update order status
        # self.update_state(state=Order.OrderState.DISPATCHED)

        return row

    # Change order state
    def update_state(self, state):
        self.state = state
        return self.save()
