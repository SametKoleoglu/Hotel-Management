from rest_framework.generics import ListAPIView, CreateAPIView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from . import serializers
from . import models


class BannerList(ListAPIView):
    serializer_class = serializers.BannerSerializer
    queryset = models.Banner.objects.all()


class ProfileList(ListAPIView):
    serializer_class = serializers.ProfileSerializer
    queryset = models.Profile.objects.all()


class UserCreateView(CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()


class UserSigninView(APIView):
    def post(self, request):
        serializer = serializers.UserSigninSerializer(data=request.data)

        if serializer.is_valid():
            error = None
            try:
                profile = models.Profile.objects.get(
                    mobile=serializer.validated_data["mobile"]
                )
                user = profile.user
                if user.check_password(serializer.validated_data["password"]):
                    token, created = Token.objects.get_or_create(user=profile.user)
                    _token = token.key
                else:
                    _token = None
                    error = "Invalid Credentials !!!"
            except models.Profile.DoesNotExist:
                _token = None
                error = "Invalid Credentials !!!"
            return Response({"token": _token, "error": error})


class MobileValidate(APIView):
    def post(self, request):
        serializer = serializers.UserMobileSerializer(data=request.data)

        if serializer.is_valid():
            error = None
            try:
                profile = models.Profile.objects.get(
                    mobile=serializer.validated_data["mobile"]
                )
            except models.Profile.DoesNotExist:
                error = "Invalid Mobile Number"
            return Response({"error": error})


class OTPValidate(APIView):
    def post(self, request):
        serializer = serializers.OTPSerializer(data=request.data)

        if serializer.is_valid():
            error = None
            if serializer.validated_data["otp"] != "1234":
                error = "OTP not correct !!!"

            return Response({"error": error})


class ChangePassword(APIView):
    def post(self, request):
        serializer = serializers.ChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            error = None
            try:
                profile = models.Profile.objects.get(
                    mobile=serializer.validated_data["mobile"]
                )
                user = profile.user
                if user:
                    user.password = make_password(
                        serializer.validated_data["password"]
                    )
                    user.save()
                else:
                    error = "Invalid Detail !!!"
            except models.Profile.DoesNotExist:
                error = "Invalid Mobile Number"
            return Response({"error": error})
