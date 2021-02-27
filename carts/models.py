from django.db import models

class CartItem(models.Model):
    cart = models.ForeignKey('carts.cart', on_delete=models.PROTECT, null=False)
    product = models.ForeignKey('products.product', on_delete=models.PROTECT, null=False)
    quantity = models.IntegerField()

    # @property
    def get_package_label(self):
        return f'{self.product.export_name} * {self.quantity}'


class Cart(models.Model):
    """
        Model for carts containing products, orders form data and shipping and payment methods
        """

    class ShippingOptions(models.TextChoices):
        CESKA_POSTA = '1', 'Česká pošta'
        SLOVENSKA_POSTA = '2', 'Slovenská pošta'

    class PaymentOptions(models.TextChoices):
        COD = '1', 'Na dobirku'
        CC = '2', 'Platba kartou'

    shipping = models.CharField(max_length=1, choices=ShippingOptions.choices, default=ShippingOptions.CESKA_POSTA)
    payment = models.CharField(max_length=1, choices=PaymentOptions.choices, default=PaymentOptions.COD)

    def __str__(self):
        return f'{self.id}'


class Discount(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField()
    code = models.CharField(max_length=10, null=False)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    expiry = models.DateTimeField()
    created = models.DateTimeField()
    counter = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f'#{self.id}: {self.name} (kod: {self.code}, sleva: {self.amount}%, vyuzito: {self.counter}x)'
