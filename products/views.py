from rest_framework import generics, views
from rest_framework.response import Response
from .models import Product, ProductVariation
from .serializers import ProductSerializer, ProductVariationSerializer


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


# /products/variation/{id}
class ProductVariationAPIView(views.APIView):
    """
    Return product by variation ID
    """

    def get(self, request, pk):
        variation = ProductVariation.objects.get(pk=pk)
        return Response(ProductSerializer(variation.product).data)
