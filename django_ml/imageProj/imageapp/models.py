from django.db import models

from django.utils import timezone
from django.core.files.storage import FileSystemStorage


from keras.models import load_model
from keras.preprocessing import image
import json
from tensorflow import Graph
import tensorflow as tf
#Ml classes
img_height, img_width=28,28


#
model_graph = Graph()
with model_graph.as_default():
    tf_session = tf.compat.v1.Session()
    with tf_session.as_default():
        trained_model=load_model('./model/my_model.h5')#### trained_model




def upload_path(instance, filename):
    return '/'.join(['covid_images', filename])


class Image(models.Model):
    name = models.CharField(max_length=32, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to=upload_path)
    prediction = models.CharField(max_length = 12, blank=True)
    time = models.DateTimeField(default = timezone.now)


    def pred(self):
        fileObj =self.image
        fs = FileSystemStorage()
        filePathName = fs.save(fileObj.name, fileObj)
        filePathName = fs.url(filePathName)
        test_image='.'+filePathName
        img = image.load_img(test_image, target_size=(img_height, img_width))
        x_arr=image.img_to_array(img)

        x=x_arr.reshape(-1, img_height* img_width)/255.0
        with model_graph.as_default():
            with tf_session.as_default():
                pred = trained_model.predict(x)
        import numpy as np
        pred_label = np.argmax(pred[0])
        return pred_label

    def save(self, *args, **kwargs):
        if not self.prediction:
            self.prediction= self.pred()
        super(Image, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
