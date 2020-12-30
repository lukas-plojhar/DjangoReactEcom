from django.urls import path
from . import views


urlpatterns = [
    path('create/', views.OrderCreateAPIView.as_view(), name='create_order'),
    path('<int:pk>/detail/', views.OrderDetailAPIView.as_view(), name='detail_order'),
]

# class ProductManageView(BaseManageView):
#     VIEWS_BY_METHOD = {
#         'DELETE': ProductDestroyView.as_view,
#         'GET': ProductDetailsView.as_view,
#         'PUT': ProductUpdateView.as_view,
#         'PATCH': ProductUpdateView.as_view
#     }