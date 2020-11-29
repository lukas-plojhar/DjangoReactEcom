from .models import Customer, Discount, Cart, CartItem
from rest_framework import serializers
from django.core import serializers as django_serializers


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = ('code', 'amount')


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        exclude = ('id', 'cart_id')


class CartSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    discount = DiscountSerializer()
    cart_items = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        exclude = ('id',)

    def get_cart_items(self, obj):
        serializer = CartItemSerializer(
            CartItem.objects.filter(cart_id=self.instance.id),
            many=True)
        return serializer.data
