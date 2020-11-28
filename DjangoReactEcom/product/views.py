from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


class ProductList(generics.ListCreateAPIView):
    """
    Returns all products
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveAPIView):
    """
    Return a specific product by ID
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

