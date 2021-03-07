from .models import Product, ProductImage, ProductTab
from rest_framework import serializers


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('image',)


class ProductTabSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTab
        fields = ('name', 'content')


class ProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    regularPrice = serializers.IntegerField(source='regular_price')
    salePrice = serializers.IntegerField(source='sale_price')
    shortDescription = serializers.CharField(source='short_description')
    numberOfReviews = serializers.CharField(source='number_of_reviews')
    stock = serializers.SerializerMethodField()

    # Custom fields
    featuredImage = serializers.SerializerMethodField()
    imageGallery = serializers.SerializerMethodField()
    tab = serializers.SerializerMethodField()

    class Meta:
        model = Product
        exclude = (
            'regular_price',
            'sale_price',
            'description',
            'short_description',
            'export_name',
            'is_upsell',
            'number_of_reviews'
        )

    def get_stock(self, obj):
        return True if obj.stock > 0 else False

    def get_featuredImage(self, obj):
        images = list(ProductImage.objects.filter(product=obj).filter(is_main=True))
        return ProductImageSerializer(images, many=True).data

    def get_imageGallery(self, obj):
        images = list(ProductImage.objects.filter(product=obj).filter(is_main=False))
        return ProductImageSerializer(images, many=True).data

    def get_tab(self, obj):
        tabs = list()
        tabs.append(ProductTab(name="Popis", content=obj.description))
        tabs.extend(list(ProductTab.objects.filter(product=obj)))
        return ProductTabSerializer(tabs, many=True).data
