from django.db import models

class Order(models.Model):

    class OrderState(models.TextChoices):
        ABANDONED = '0',
        NEW = '1',
        DISPATCHED = '2',
        DELIVERED = '3',
        RETURNED = '4',
        FAILED = '5',

    cart = models.ForeignKey('carts.Cart', on_delete=models.CASCADE, null=False)
    customer = models.ForeignKey('customers.Customer', on_delete=models.CASCADE, null=False)
    created = models.DateTimeField(auto_now=True)
    state = models.IntegerField(choices=OrderState.choices, default=OrderState.ABANDONED)

    def __str__(self):
        return f'#{self.id} od {self.customer} v {self.created}'