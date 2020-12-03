from .models import Customer, Discount, Cart, CartItem
from product.serializers import ProductSerializer
from rest_framework import serializers
from django.core import serializers as django_serializers


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class DiscountSerializer(serializers.ModelSerializer):
    absolute_amount = serializers.SerializerMethodField()

    class Meta:
        model = Discount
        fields = ('code', 'amount', 'absolute_amount')


class CartItemSerializer(serializers.ModelSerializer):
    product_id = ProductSerializer()

    class Meta:
        model = CartItem
        exclude = ('id', 'cart_id')


class CartSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    cart_items = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        exclude = ('id',)

    # def get_total(self, obj):
    #     total = 0
    #     discount = Discount.objects.get(code=self.instance.discount.code)
    #     cart_items = CartItem.objects.select_related('product_id').filter(cart_id=self.instance.id)
    #     for item in cart_items:
    #         total += item.product_id.sale_price * item.quantity
    #
    #     # nutno pridat jeste shipping, payment, atd.
    #
    #     return total

    def get_cart_items(self, obj):
        serializer = CartItemSerializer(
            CartItem.objects.filter(cart_id=self.instance.id),
            many=True)
        return serializer.data

    def get_total(self, obj):

        return 1000
