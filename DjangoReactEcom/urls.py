from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
                  # Backend
                  path('admin/', admin.site.urls),

                  # API
                  path('products/', include('products.urls')),
                  path('carts/', include('carts.urls')),
                  path('orders/', include('orders.urls')),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
