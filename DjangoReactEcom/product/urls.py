from django.urls import path, include
from . import views

urlpatterns = [
    path('api/product/', views.ProductListCreate.as_view())
]
