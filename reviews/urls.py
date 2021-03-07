from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReviewListAPIView.as_view(), name='list_review'),
    path('<int:pk>/', views.ReviewDetailAPIView.as_view(), name='detail_review'),
]
