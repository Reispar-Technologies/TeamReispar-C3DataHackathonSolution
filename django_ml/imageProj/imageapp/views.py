
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ImageSerializer
from imageProj.imageapp.models import Image
from django.http import HttpResponse
from django.shortcuts import render


##############remove start
from django.core.files.storage import FileSystemStorage



# from keras.models import load_model
# from keras.preprocessing import image
# import json
# from tensorflow import Graph
# import tensorflow as tf
# from tensorflow.keras.applications import EfficientNetB6
# from tensorflow import keras
# from tensorflow.keras.models import Model
# from tensorflow.keras import layers
# from tensorflow.keras.preprocessing import image
# from tensorflow.keras.layers import Input, Dense, BatchNormalization, Dropout, GlobalAveragePooling2D
# from tensorflow.keras.optimizers import Adam
# from tensorflow.keras.callbacks import ModelCheckpoint
# import os, cv2
#
#
# ROWS = 256
# COLS = 256
# Channel = 3
#
#
#
# model_graph = Graph()
# with model_graph.as_default():
#     tf_session = tf.compat.v1.Session()
#     with tf_session.as_default():
#         # create the base pre-trained model
#         base_model = EfficientNetB6(weights='imagenet', include_top=False, input_tensor=Input(shape=(ROWS, COLS, 3)))
#         x = base_model.output
#         x = GlobalAveragePooling2D()(x)
#         # # let's add a fully-connected layer
#         x = Dense(2024, activation='relu')(x)
#         x = BatchNormalization()(x)
#         x = Dropout(0.2)(x)
#         x = Dense(512, activation='relu')(x)
#         x = BatchNormalization()(x)
#         x = Dropout(0.2)(x)
#         x = Dense(128, activation='relu')(x)
#         x = BatchNormalization()(x)
#         x = Dropout(0.1)(x)
#         # and a logistic layer -- let's say we have 200 classes
#         predictions = Dense(2, activation='softmax')(x)
#         # this is the model we will train
#         model = Model(inputs=base_model.input, outputs=predictions)
#         # The model weights (that are considered the best) are loaded into the model
#         model.load_weights('model/EfficientNetB6.h5')
#



# print('Confidence percentile %s %% ,it is Predicted: %s' %(round(max(preds[0][0:2]),2),round(preds[0][0],0)))
# ```

#####################remove end

def index(request):
    images = Image.objects.all().order_by("-time")
    context={"a": images}
    return render(request, 'index.html', context)

############# remove start
def predict_image(request):
    fileObj = request.FILES['myfile']
    #to rectify file space bug
    # filename = request.FILES['myfile'].name
    # modified_name = ''.join([i for i in filename if i!=" "])
    # fs = FileSystemStorage()
    # filePathName = fs.save(modified_name, fileObj)
    # ###
    # filePathName = fs.url(filePathName)
    # test_image='.'+filePathName
    #
    # img = cv2.imread(test_image, cv2.IMREAD_COLOR)
    #  #cv2.IMREAD_GRAYSCALE
    # img = cv2.resize(img, (ROWS, COLS), interpolation=cv2.INTER_CUBIC)
    # image = tf.reshape(img,(-1, ROWS, COLS,3))
    # with model_graph.as_default():
    #     with tf_session.as_default():
    #         preds = model.predict(image, steps=1) # Predict image
    #
    # pred_label = round(preds[0][0],0)
    # confidence=round(max(preds[0][0:2]),2)
###change "prediction"
    context ={"filePathName": filePathName, "prediction": 'pred_label', "Confidence":'confidence'}
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
