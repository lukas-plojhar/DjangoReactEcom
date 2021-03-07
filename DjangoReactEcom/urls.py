from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin Globals')

urlpatterns = [
                  # Frontend
                  path('products/', include('products.urls')),
                  path('carts/', include('carts.urls')),
                  path('orders/', include('orders.urls')),
                  path('customers/', include('customers.urls')),
                  path('reviews/', include('reviews.urls')),

                  # Backend
                  path('admin/', admin.site.urls),
                  path('', admin.site.urls),

                  # Globals
                  path('doc/', schema_view),

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
