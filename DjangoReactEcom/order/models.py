from django.db import models

class Order(models.Model):

    class OrderState(models.TextChoices):
        NEW = '1',
        SENT = '2',
        RETURNED = '3',
        FAILED = '4',

    cart = models.ForeignKey('cart.cart', on_delete=models.CASCADE, null=False)
    customer = models.ForeignKey('cart.customer', on_delete=models.CASCADE, null=False)
    created = models.DateTimeField(auto_now=True)
    order_state = models.IntegerField(choices=OrderState.choices, default=OrderState.NEW)

    def __str__(self):
        return f'#{self.id} od {self.customer} v {self.created}'