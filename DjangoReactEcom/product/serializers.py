from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = (
            'id',
            'google_remarketing_image',
            'facebook_remarketing_image',
        )