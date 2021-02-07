from rest_framework import serializers
from .models import Order
from carts.serializers import CartSerializer, CustomerSerializer


class OrderSerializer(serializers.ModelSerializer):
    cart = CartSerializer()
    orderState = serializers.IntegerField(source='order_state')

    class Meta:
        model = Order
        exclude = ('customer','order_state',)
