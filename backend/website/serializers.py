from django.contrib.auth.models import User
from rest_framework import serializers
from . import models

class BannerSerializer(serializers.ModelSerializer):
     class Meta:
          model = models.Banner
          fields = ["id","title","image"]
          
          
class ProfileSerializer(serializers.ModelSerializer):
     class Meta:
          model = models.Profile
          fields = ["mobile"]
     
          
          
class UserSerializer(serializers.ModelSerializer):
     profile = ProfileSerializer()
     class Meta:
          model = User
          fields = ["first_name","last_name","username","password","email","profile"]
          
     def create(self, validated_data):
          profile_data = validated_data.pop('profile')
          user = User.objects.create(**validated_data)
          password = validated_data.pop('password')
          user.set_password(password)
          user.save()
          profile = models.Profile.objects.filter(user=user).update(mobile = profile_data['mobile'])
          return user

class UserSigninSerializer(serializers.Serializer):
     mobile = serializers.CharField()
     password = serializers.CharField()
     
     
class UserMobileSerializer(serializers.Serializer):
     mobile = serializers.CharField()
     
     
class OTPSerializer(serializers.Serializer):
     otp = serializers.CharField()
     

class ChangePasswordSerializer(serializers.Serializer):
     mobile = serializers.CharField()
     password = serializers.CharField()
