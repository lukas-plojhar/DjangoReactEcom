from .models import Discount, Cart, CartItem
from products.models import Product
from products.serializers import ProductSerializer
from customers.serializers import CustomerSerializer
from rest_framework import serializers


class CartItemSerializer(serializers.Serializer):
    product = ProductSerializer()
    quantity = serializers.IntegerField()


class CartSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    shipping = serializers.CharField(source='get_shipping_display')
    payment = serializers.CharField(source='get_payment_display')
    items = serializers.SerializerMethodField()

    def get_items(self, instance):
        items = CartItem.objects.filter(cart__id=instance.id)
        serialized_items = CartItemSerializer(items, many=True)
        return serialized_items.data

    def update(self, instance, validated_data):
        instance.payment = validated_data.get('payment', instance.payment)
        instance.shipping = validated_data.get('shipping', instance.shipping)
        return instance


