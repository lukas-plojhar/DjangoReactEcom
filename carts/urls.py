from django.urls import path
from . import views

urlpatterns = [
    path('', views.CartList.as_view(), name='cart_list'),
    path('<int:pk>/detail/', views.CartDetailAPIView.as_view(), name='cart_detail'),
    path('<hash>/update/', views.CartUpdateAPIView.as_view(), name='cart_update'),
]
