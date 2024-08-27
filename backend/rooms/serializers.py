from rest_framework import serializers
from .models import *



class RoomTypeImageSerializer(serializers.ModelSerializer):
     class Meta:
          model = RoomImage
          fields = ['image']

class RoomTypeSerializer(serializers.ModelSerializer):
     room_type_images = RoomTypeImageSerializer(many=True,read_only=True)
     class Meta:
          model = RoomType
          fields = ['uuid','title','detail','room_type_images']