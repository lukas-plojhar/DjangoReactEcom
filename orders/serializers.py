from rest_framework import serializers
from .models import Order
from carts.serializers import CartSerializer, CartItemSerializer
from customers.serializers import CustomerSerializer


class OrderSerializer(serializers.ModelSerializer):
    cart = CartSerializer()
    customer = CustomerSerializer()
    # state = serializers.CharField(source='get_state_display')
    created = serializers.DateTimeField(format='%d.%m.%Y %H:%M', read_only=True)
    # updated = serializers.DateTimeField(format='%d.%m.%Y %H:%M', read_only=True)

    class Meta:
        model = Order
        exclude = ['state','updated']



