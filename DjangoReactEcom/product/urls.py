from django.urls import path
from . import views

urlpatterns = [
    path('product/<int:id>', views.ProductList.as_view())
]
