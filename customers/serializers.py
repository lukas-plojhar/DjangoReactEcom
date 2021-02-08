from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    firstName = serializers.CharField(source='first_name')
    lastName = serializers.CharField(source='last_name')

    class Meta:
        model = Customer
        exclude = ('first_name', 'last_name')

    def create(self, validated_data):
        return Customer.objects.create(**validated_data)