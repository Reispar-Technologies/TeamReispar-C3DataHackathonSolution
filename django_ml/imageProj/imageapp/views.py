
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ImageSerializer
from imageProj.imageapp.models import Image
from django.http import HttpResponse
from django.shortcuts import render


##############remove start
from django.core.files.storage import FileSystemStorage



from keras.models import load_model
from keras.preprocessing import image
import json
from tensorflow import Graph
import tensorflow as tf
#Ml classes
img_height, img_width=28,28
# with open('./model/image_classes.json', "r") as f:  #label classes
#     labels=f.read()
# labels= json.load(labels)


#
model_graph = Graph()
with model_graph.as_default():
    tf_session = tf.compat.v1.Session()
    with tf_session.as_default():
        trained_model=load_model('./model/my_model.h5')#### trained_model
#####################remove end

def index(request):
    images = Image.objects.all().order_by("-time")
    context={"a": images}
    return render(request, 'index.html', context)

############# remove start
def predict_image(request):
    fileObj = request.FILES['myfile']
    fs = FileSystemStorage()
    filePathName = fs.save(fileObj.name, fileObj)
    filePathName = fs.url(filePathName)
    test_image='.'+filePathName
    # img = image.load_img(test_image, target_size=(img_height, img_width))
    # x_arr=image.img_to_array(img)
    #
    # x=x_arr.reshape(-1, img_height* img_width)/255.0
    # with model_graph.as_default():
    #     with tf_session.as_default():
    #         pred = trained_model.predict(x)
    #
    # import numpy as np
    # pred_label = np.argmax(pred[0])

    context ={"filePathName": filePathName, "prediction": "pred_label"}#
    return render(request, 'index.html', context)


################remove end


class ImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Image to be viewed or edited.
    """
    queryset = Image.objects.order_by('-id')[:1]
    serializer_class = ImageSerializer

#Overiding post to recieve only the uploaded images
    def post(self, request, *args, **kwargs):
        name = request.data['name']
        images = request.data['image']
        Image.objects.create(name=name, image = images, prediction=pred)
