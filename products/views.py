from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


class ProductListAPIView(generics.ListCreateAPIView):
    """
    Returns all products
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveAPIView):
    """
    Return a specific products by ID
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

