from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    #
    # # Images
    # main_image = models.ImageField(upload_to='products/', null=True, blank=True, default=None)
    #
    # google_remarketing_image = models.ImageField(upload_to='products/', null=True, blank=True, default=None)
    # facebook_remarketing_image = models.ImageField(upload_to='products/', null=True, blank=True, default=None)

    # Text
    headline = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    short_description = models.TextField(null=True, blank=True)

    # Pricing
    regular_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

    # Properties
    rating = models.DecimalField(default=5.0, max_digits=2, decimal_places=1)
    number_of_reviews = models.PositiveIntegerField(default=0)
    stock = models.PositiveIntegerField(default=0)
    export_name = models.CharField(max_length=255)
    is_upsell = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.id}: {self.name}'

class ProductTab(models.Model):
    product = models.ForeignKey('products.product', on_delete=models.CASCADE, null=False)
    internal_name = models.CharField(max_length=255, null=False, blank=False)
    name = models.CharField(max_length=60, null=False, blank=False)
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return f'{self.internal_name}'

class ProductImage(models.Model):
    product = models.ForeignKey('products.product', on_delete=models.CASCADE, null=False)
    image = models.ImageField(upload_to='', null=True, blank=True, default=None)
    is_main = models.BooleanField(default=False)

