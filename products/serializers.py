from .models import Product, ProductVariation, ProductImage, ProductTab
from rest_framework import serializers


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('image',)


class ProductTabSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTab
        fields = ('name', 'content')


class ProductVariationSerializer(serializers.ModelSerializer):
    # productId = serializers.SerializerMethodField()
    # variationId = serializers.IntegerField(source='id')
    regularPrice = serializers.IntegerField(source='regular_price')
    salePrice = serializers.IntegerField(source='sale_price')

    class Meta:
        model = ProductVariation
        fields = ('name', 'description', 'content', 'regularPrice', 'salePrice')

    def get_productId(self, obj):
        return obj.product.id;

class ProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    shortDescription = serializers.CharField(source='short_description')
    numberOfReviews = serializers.CharField(source='number_of_reviews')
    # stock = serializers.SerializerMethodField()
    variations = serializers.SerializerMethodField()

    # Custom fields
    featuredImage = serializers.SerializerMethodField()
    imageGallery = serializers.SerializerMethodField()
    tab = serializers.SerializerMethodField()

    class Meta:
        model = Product
        exclude = (
            'description',
            'short_description',
            'is_upsell',
            'number_of_reviews',
            'stock'
        )

    def get_stock(self, obj):
        return True if obj.stock > 0 else False

    def get_featuredImage(self, obj):
        images = list(ProductImage.objects.filter(product=obj).filter(is_main=True))
        data = ProductImageSerializer(images[0]).data
        return data['image']

    def get_imageGallery(self, obj):
        images = list(ProductImage.objects.filter(product=obj).filter(is_main=False))
        data = ProductImageSerializer(images, many=True).data

        images = list()
        for image in list(data):
            images.append(image['image'])

        return images

    def get_tab(self, obj):
        tabs = list()
        tabs.append(ProductTab(name="Popis", content=obj.description))
        tabs.extend(list(ProductTab.objects.filter(product=obj)))
        return ProductTabSerializer(tabs, many=True).data

    def get_variations(self, obj):
        variations = list(ProductVariation.objects.filter(product__id=obj.id).order_by('sale_price'))
        return ProductVariationSerializer(variations, many=True).data
