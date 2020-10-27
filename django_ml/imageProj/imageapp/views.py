
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ImageSerializer
from .models import Image
from django.http import HttpResponse


class ImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Image to be viewed or edited.
    """
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

#Overiding post to recieve only the uploaded images
    def post(self, request, *args, **kwargs):
        name = request.data['name']
        image = request.data['image']
        Image.objects.create(name=name, image = image)
        return HttpResponse({'message': "Image Upload Successful"}, status=200)
