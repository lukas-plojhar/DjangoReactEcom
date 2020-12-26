from .models import Customer, Discount, Cart, CartItem
from product.models import Product
from product.serializers import ProductSerializer
from rest_framework import serializers


class CustomerSerializer(serializers.ModelSerializer):
    firstName = serializers.CharField(source='first_name')
    lastName = serializers.CharField(source='last_name')

    class Meta:
        model = Customer
        exclude = ('first_name', 'last_name', 'id')

    def create(self, validated_data):
        return Customer.objects.create(**validated_data)


class DiscountSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    code = serializers.CharField()


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()


class CartItemSerializer(serializers.Serializer):
    product = ProductSerializer()
    # regularPrice = serializers.IntegerField(source='regular_price')
    # salePrice = serializers.IntegerField(source='sale_price')
    quantity = serializers.IntegerField()

    def create(self, validated_data):
        return CartItem.objects.create(**validated_data)


class CartSerializer(serializers.Serializer):
    customer = CustomerSerializer()
    items = CartItemSerializer(many=True)
    # discount = serializers.IntegerField(source='discount.id')
    shipping = serializers.ChoiceField(choices=Cart.ShippingOptions, default=1)
    payment = serializers.ChoiceField(choices=Cart.PaymentOptions, default=1)

    def create(self, validated_data):
        customer_data = validated_data.pop('customer')
        customer = Customer.objects.create(**customer_data)
        items_data = validated_data.pop('items')
        cartitems = []

        for item in items_data:
            product_data = item['product']
            cartitems.append(
                CartItem.objects.create(
                    product=Product.objects.get(pk=product_data['id']),
                    quantity=item['quantity']
                ))

        cart = Cart.objects.create(
            customer=customer,
            payment=validated_data.pop('payment'),
            shipping=validated_data.pop('shipping')
        )

        cart.items.set(cartitems)

        return cart
