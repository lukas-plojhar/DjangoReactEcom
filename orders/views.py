from rest_framework import views, generics
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.response import Response
import json

from .models import Order
from .serializers import OrderSerializer
from customers.models import Customer
from customers.serializers import CustomerSerializer
from carts.models import Cart, CartItem
from carts.serializers import CartSerializer, CartItemSerializer
from products.models import Product
from DjangoReactEcom.mailService import send_new_order_confirmation


# POST /orders/create
class OrderCreateAPIView(views.APIView):
    def post(self, request):
        # Get data from request
        data = json.loads(request.body)

        # Save customer
        customer = data['customer']
        customer_serializer = CustomerSerializer(data=customer)
        if customer_serializer.is_valid():
            customer_serializer.save()

        customer = Customer.objects.last()

        # Save cart
        cart = Cart(
            payment=data['payment'],
            shipping=data['shipping']
        )
        cart.save()

        # Save cart items
        items = data['items']
        for item in items:
            cart_item = CartItem(
                cart=cart,
                product=Product.objects.get(id=item['product']['id']),
                quantity=item['quantity']
            )
            cart_item.save()

        # Save order
        order = Order(
            cart=cart,
            customer=customer,
            state=Order.OrderState.NEW
        )
        order.save()

        # Send confirmation email
        send_new_order_confirmation(orderId=order.id)

        return Response(order.id, status=HTTP_201_CREATED)


# GET /orders/
class OrderListAPIView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


# GET /orders/{id}/
class OrderDetailAPIView(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


# PUT /orders/{id}/update
class OrderUpdateAPIView(views.APIView):
    def put(self, request, pk):
        # Getting data
        data = json.loads(request.body)
        order = Order.objects.get(id=pk)

        # Updating customer
        customer = Customer.objects.get(id=order.customer.id)
        customer_serializer = CustomerSerializer(instance=customer, data=data['customer'])
        if customer_serializer.is_valid():
            customer_serializer.save()

        # Updating cart (ONLY shipping and payment)
        cart = Cart.objects.get(id=order.cart.id)
        cart_serializer = CartSerializer(instance=cart, data=data['cart'])
        if cart_serializer.is_valid():
            cart_serializer.save()

        return Response(status=HTTP_200_OK)
