from django.urls import path
from . import views


urlpatterns = [
    path('', views.CartList.as_view(), name='cart_list'),
    path('<int:pk>/detail/', views.CartDetailAPIView.as_view(), name='cart_detail'),
    path('<hash>/update/', views.CartUpdateAPIView.as_view(), name='cart_update'),
]

# class ProductManageView(BaseManageView):
#     VIEWS_BY_METHOD = {
#         'DELETE': ProductDestroyView.as_view,
#         'GET': ProductDetailsView.as_view,
#         'PUT': ProductUpdateView.as_view,
#         'PATCH': ProductUpdateView.as_view
#     }