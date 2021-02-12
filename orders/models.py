from django.db import models
from carts.models import CartItem


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

    def get_payment(self):
        pass

    def get_shipping(self):
        pass

    def get_total(self):
        total = 0
        items = CartItem.objects.filter(cart__id=self.cart.id)
        for item in items:
            total += int(item.product.sale_price)

        return total
