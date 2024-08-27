from django.urls import path
from . import views


urlpatterns = [
    path("banners/", views.BannerList.as_view()),
    path("profiles/", views.ProfileList.as_view()),
    path("signup/", views.UserCreateView.as_view()),
    path("signin/", views.UserSigninView.as_view()),
    path("mobile-validate/", views.MobileValidate.as_view()),
    path("otp-validate/", views.OTPValidate.as_view()),
    path("change-password/", views.ChangePassword.as_view()),
]
