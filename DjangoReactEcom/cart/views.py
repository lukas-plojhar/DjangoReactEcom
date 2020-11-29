from .models import Cart
from .serializers import CartSerializer

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CartList(APIView):
    """
    Lists all carts, or create a new cart.
    """

    def get(self, request, format=None):
        carts = Cart.objects.all()
        seralizer = CartSerializer(carts, many=True)
        return Response(seralizer.data)

    def post(self, request, format=None):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CartDetail(APIView):
    """
    Returns a detailed view on a cart model
    """

    def get_object(self, hash):
        try:
            return Cart.objects.get(hash=hash)
        except Cart.DoesNotExist:
            raise Http404

    def get(self, request, hash, format=None):
        cart = self.get_object(hash)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def put(self, request, hash, format=None):
        cart = self.get_object(hash)
        serializer = CartSerializer(cart, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, hash, format=None):
        cart = self.get_object(hash)
        cart.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



