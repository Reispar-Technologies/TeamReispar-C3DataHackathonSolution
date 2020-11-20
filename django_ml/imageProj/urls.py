"""imageProj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from imageProj.imageapp import views
from django.conf.urls.static import static
from django.conf import settings
from imageProj.imageapp import views

router = routers.DefaultRouter()
router.register(r'image', views.ImageViewSet, basename='image')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('route/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('predict_image', views.predict_image, name='predict'),
    path('', views.index, name="homepage")
]
#including the static files from the media url
urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
