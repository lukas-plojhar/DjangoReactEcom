from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    regularPrice = serializers.IntegerField(source='regular_price')
    salePrice = serializers.IntegerField(source='sale_price')
    featuredImage = serializers.ImageField(source='main_image')
    stock = serializers.SerializerMethodField()

    class Meta:
        model = Product
        exclude = (
            'regular_price',
            'sale_price',
            'main_image',
            'google_remarketing_image',
            'facebook_remarketing_image',
        )

    def get_stock(self, obj):
        return True if obj.stock > 0 else False
