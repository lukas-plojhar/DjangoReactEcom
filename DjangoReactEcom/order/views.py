from rest_framework import views
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.response import Response
from cart.serializers import CartSerializer
from cart.models import Cart
import json


# POST /order/create
class CreateAPIView(views.APIView):
    """
    Creates a new order
    """

    def post(self, request):
        serializer = CartSerializer(data=json.loads(request.body))
        if serializer.is_valid():
            serializer.save()

        print(serializer.errors)


        return Response('saved', status=HTTP_200_OK)


    # def post(self, request, format=None):
    #     carts = Cart.objects.all()
    #     serializer = CartSerializer(carts, data=request.data)
    #     if serializer.is_valid():
    #         print(serializer.data)
    #
    #         return Response(status=HTTP_200_OK)
    #
    #     return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
