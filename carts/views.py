from django.http import Http404
from rest_framework import generics, status, mixins, viewsets
from rest_framework.mixins import CreateModelMixin
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Cart
from .serializers import CartSerializer


# GET /carts/
class CartList(APIView):
    """
    Lists all carts, or create a new carts.
    """

    def get(self, request, format=None):
        carts = Cart.objects.all()
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# GET /carts/<pk>/detail
class CartDetailAPIView(generics.RetrieveAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

# PUT /carts/<hash>/update
class CartUpdateAPIView(generics.UpdateAPIView):
    serializer_class = CartSerializer
    queryset = Cart.objects.all()
    lookup_field = "hash"
    lookup_url_kwarg = "hash"

    def get_object(self):
        resource = Cart.objects.filter(hash=self.kwargs.get('hash')).first()
        if resource:
            return resource
        else:
            return Cart(id=self.kwargs.get('hash'))
