from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProductListAPIView.as_view(), name='list_create_product'),
    path('upsells/', views.ProductUpsellListAPIView.as_view(), name='list_upsell_product'),
    path('<int:pk>/', views.ProductDetailAPIView.as_view(), name='detail_product')
]
