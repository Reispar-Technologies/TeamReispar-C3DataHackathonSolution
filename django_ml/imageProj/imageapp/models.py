from django.db import models

def upload_path(filename):
    return '/'.join(['covid_images', filename])

class Image(models.Model):
    name = models.CharField(max_length=32)
    image = models.ImageField(blank=True, null=True, upload_to=upload_path)
