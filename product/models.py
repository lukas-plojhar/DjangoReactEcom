from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    main_image = models.ImageField(upload_to='images/products/', null=True, blank=True, default=None)
    # gallery_images = models.ImageField(upload_to='images/products/', null=True, blank=True, default=None)
    google_remarketing_image = models.ImageField(upload_to='images/products/', null=True, blank=True, default=None)
    facebook_remarketing_image = models.ImageField(upload_to='images/products/', null=True, blank=True, default=None)
    headline = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    regular_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    # product_components = RichTextField(null=True, blank=True)
    stock = models.PositiveIntegerField(default=0)
    short_name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.name}'
