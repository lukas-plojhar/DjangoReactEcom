from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


class ProductListAPIView(generics.ListCreateAPIView):
    """
    Return all products
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductUpsellListAPIView(generics.ListAPIView):
    """
    Return upsell products
    """
    queryset = Product.objects.filter(is_upsell=True)
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveAPIView):
    """
    Return product by ID
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

