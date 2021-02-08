from django.urls import path
from . import views

urlpatterns = [
    path('', views.CustomerListAPIView.as_view(), name='list_create_customer'),
    path('<int:pk>/', views.CustomerDetailAPIView.as_view(), name='detail_customer'),
]
