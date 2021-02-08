from .models import Discount, Cart, CartItem
from products.models import Product
from products.serializers import ProductSerializer
from customers.serializers import CustomerSerializer
from rest_framework import serializers


class DiscountSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    code = serializers.CharField()

class CartItemSerializer(serializers.Serializer):
    product = serializers.IntegerField()
    quantity = serializers.IntegerField()

    def create(self, validated_data):
        return CartItem.objects.create(**validated_data)


class CartSerializer(serializers.Serializer):
    shipping = serializers.ChoiceField(choices=Cart.ShippingOptions.choices, default=1)
    payment = serializers.ChoiceField(choices=Cart.PaymentOptions.choices, default=1)

    def create(self, validated_data):
        customer_data = validated_data.pop('customer')
        items_data = validated_data.pop('items')
        cartitems = []

        for item in items_data:
            product_data = item['products']
            cartitems.append(
                CartItem.objects.create(
                    product=Product.objects.get(pk=product_data['id']),
                    quantity=item['quantity']
                ))

        cart = Cart.objects.create(
            payment=validated_data.pop('payment'),
            shipping=validated_data.pop('shipping')
        )

        cart.items.set(cartitems)

        return cart

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
