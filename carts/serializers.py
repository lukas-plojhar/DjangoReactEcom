from .models import CartItem
from products.serializers import ProductSerializer
from rest_framework import serializers


# Cart item serializer
class CartItemSerializer(serializers.Serializer):
    product = ProductSerializer()
    quantity = serializers.IntegerField()


# Cart serializer
class CartSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    shipping = serializers.CharField(source='get_shipping_display')
    payment = serializers.CharField(source='get_payment_display')
    items = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    def get_items(self, instance):
        items = CartItem.objects.filter(cart__id=instance.id)
        serialized_items = CartItemSerializer(items, many=True)
        return serialized_items.data

    def get_total(self, instance):
        total = 0
        items = CartItem.objects.filter(cart__id=instance.id)
        for item in items:
            total += item.product.sale_price

        return total

    def update(self, instance, validated_data):
        instance.payment = validated_data.get('payment', instance.payment)
        instance.shipping = validated_data.get('shipping', instance.shipping)
        return instance