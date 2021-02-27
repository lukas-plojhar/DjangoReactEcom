from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
                  # Backend
                  path('admin/', admin.site.urls),

                  # API
                  path('doc/', schema_view),
                  path('products/', include('products.urls')),
                  path('carts/', include('carts.urls')),
                  path('orders/', include('orders.urls')),
                  path('customers/', include('customers.urls')),

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
