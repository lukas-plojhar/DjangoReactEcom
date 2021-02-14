from django.urls import path
from . import views

urlpatterns = [
    path('', views.OrderListAPIView.as_view(), name='list_order'),
    path('export/', views.export_new_orders, name='export_new_orders'),
    path('create/', views.OrderCreateAPIView.as_view(), name='create_order'),
    path('<int:pk>/', views.OrderDetailAPIView.as_view(), name='detail_order'),
    path('<int:pk>/update', views.OrderUpdateAPIView.as_view(), name='update_order'),
]

# class ProductManageView(BaseManageView):
#     VIEWS_BY_METHOD = {
#         'DELETE': ProductDestroyView.as_view,
#         'GET': ProductDetailsView.as_view,
#         'PUT': ProductUpdateView.as_view,
#         'PATCH': ProductUpdateView.as_view
#     }
