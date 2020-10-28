from django.db import models

def upload_path(instance, filename):
    return '/'.join(['covid_images', filename])

class Image(models.Model):
    name = models.CharField(max_length=32, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to=upload_path)
