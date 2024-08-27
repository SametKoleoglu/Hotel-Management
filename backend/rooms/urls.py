from django.urls import path
from .views import *


urlpatterns = [
    path("room-types/", RoomTypeList.as_view()),
    path("room-types/<str:uuid>/", RoomTypeDetail.as_view()),
]
