from django.db import models


class CartItem(models.Model):
    product = models.ForeignKey('product.product', on_delete=models.PROTECT, null=True)
    quantity = models.PositiveIntegerField()


class Cart(models.Model):
    """
        Model for cart containing products, order form data and shipping and payment methods
        """

    class ShippingOptions(models.TextChoices):
        CESKA_POSTA = '1', 'Česká pošta'
        SLOVENSKA_POSTA = '2', 'Slovenská pošta'

    class PaymentOptions(models.TextChoices):
        COD = '1', 'Na dobirku'
        CC = '2', 'Platba kartou'

    customer = models.ForeignKey('customer', on_delete=models.CASCADE, null=True, blank=True)
    items = models.ManyToManyField('cartitem', blank=True)
    discount = models.ForeignKey('discount', on_delete=models.PROTECT, null=True, blank=True)
    shipping = models.CharField(max_length=1, choices=ShippingOptions.choices, default=ShippingOptions.CESKA_POSTA)
    payment = models.CharField(max_length=1, choices=PaymentOptions.choices, default=PaymentOptions.COD)

    def __str__(self):
        return f'Cart from customer {self.customer}'


class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    postcode = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.first_name} {self.last_name}: {self.email}'


class Discount(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField()
    code = models.CharField(max_length=10, null=False)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    expiry = models.DateTimeField()
    created = models.DateTimeField()
    counter = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f'{self.name} (code: {self.code}%)'
