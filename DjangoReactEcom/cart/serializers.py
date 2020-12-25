from .models import Customer, Discount, Cart, CartItem
from product.serializers import ProductSerializer
from rest_framework import serializers


class CustomerSerializer(serializers.ModelSerializer):
    firstName = serializers.CharField(source='first_name')
    lastName = serializers.CharField(source='last_name')

    class Meta:
        model = Customer
        exclude = ('first_name', 'last_name')


class DiscountSerializer(serializers.ModelSerializer):
    absoluteAmount = serializers.SerializerMethodField()

    class Meta:
        model = Discount
        fields = ('code', 'amount', 'absolute_amount')


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(source='product_id')

    class Meta:
        model = CartItem
        exclude = ('cart_id',)


class CartSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(required=False)
    items = serializers.SerializerMethodField(required=False, read_only=True)

    class Meta:
        model = Cart
        exclude = ('id',)

    def get_items(self, obj):
        serializer = CartItemSerializer(
            CartItem.objects.filter(cart_id=obj.id),
            many=True)
        return serializer.data


