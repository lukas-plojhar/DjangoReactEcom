from rest_framework import serializers
from .models import Order
from carts.serializers import CartSerializer
from customers.serializers import CustomerSerializer


class OrderSerializer(serializers.ModelSerializer):
    cart = CartSerializer()
    customer = CustomerSerializer()
    orderState = serializers.IntegerField(source='state')

    class Meta:
        model = Order
        exclude = ('state',)
