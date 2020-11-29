from django.contrib import admin
from .models import Cart, CartItem, Customer, Discount

admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Customer)
admin.site.register(Discount)
