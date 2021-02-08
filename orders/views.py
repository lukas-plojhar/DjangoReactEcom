from rest_framework import views, generics
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.response import Response
from carts.serializers import CartSerializer
from .models import Order
from .serializers import OrderSerializer
from customers.models import Customer
from customers.serializers import CustomerSerializer
import json


# POST /orders/create
class OrderCreateAPIView(views.APIView):
    def post(self, request):
        cart_serializer = CartSerializer(data=json.loads(request.body))

        if cart_serializer.is_valid():
            cart = cart_serializer.save()

        order = Order(
            cart=cart,
            customer=cart.customer,
        )
        order.save()

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
        order = Order.objects.get(pk=pk)

        data = json.loads(request.body)
        print(data['carts'])
        cart_serializer = CartSerializer(order.cart, data=data['carts'])

        print('old carts')
        print(order.cart)

        if cart_serializer.is_valid():
            cart = cart_serializer.save()

        print('new carts')
        print(order.cart)



        return Response()
