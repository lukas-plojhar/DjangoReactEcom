from .models import Review
from .serializers import ReviewSerializer
from rest_framework import generics

# GET /reviews/
class ReviewListAPIView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

# GET /reviews/{id}/
class ReviewDetailAPIView(generics.RetrieveAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

