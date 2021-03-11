from django.contrib import admin
from .models import Product, ProductVariation, ProductImage, ProductTab

admin.site.register(Product)
admin.site.register(ProductVariation)
admin.site.register(ProductImage)
admin.site.register(ProductTab)