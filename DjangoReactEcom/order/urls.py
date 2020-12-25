from django.urls import path
from . import views


urlpatterns = [
    path('create/', views.CreateAPIView.as_view(), name='create_order'),
]

# class ProductManageView(BaseManageView):
#     VIEWS_BY_METHOD = {
#         'DELETE': ProductDestroyView.as_view,
#         'GET': ProductDetailsView.as_view,
#         'PUT': ProductUpdateView.as_view,
#         'PATCH': ProductUpdateView.as_view
#     }