from django.db import models


class CartItem(models.Model):
    cart_id = models.ForeignKey('cart', on_delete=models.CASCADE)
    product_id = models.ForeignKey('product.product', on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField(default=1, null=False)

    def __str__(self):
        return f'Product {self.product_id.name} x {self.quantity}'

class Cart(models.Model):
    """
        Model for cart containing products, order form data and shipping and payment methods
        """

    class ShippingOptions(models.TextChoices):
        CESKA_POSTA = '1', 'Česká pošta'

    class PaymentOptions(models.TextChoices):
        COD = '1', 'Na dobirku'
        CC = '2', 'Platba kartou'

    hash = models.CharField(max_length=11, null=False, default='TEST')
    customer = models.ForeignKey('customer', on_delete=models.CASCADE, null=True)
    shipping = models.CharField(max_length=1, choices=ShippingOptions.choices, default=ShippingOptions.CESKA_POSTA)
    payment = models.CharField(max_length=1, choices=PaymentOptions.choices, default=PaymentOptions.COD)
    discount = models.ForeignKey('discount', on_delete=models.PROTECT, null=True)
    # additional_services = xxx

    def __str__(self):
        return f'Cart {self.hash}: customer {self.customer}'


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
