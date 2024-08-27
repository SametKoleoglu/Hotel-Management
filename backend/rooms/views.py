from rest_framework.generics import ListAPIView,RetrieveAPIView
from .serializers import *


class RoomTypeList(ListAPIView):
    queryset = RoomType.objects.all()
    serializer_class = RoomTypeSerializer


class RoomTypeDetail(RetrieveAPIView):
    queryset = RoomType.objects.all()
    serializer_class = RoomTypeSerializer
    lookup_field = 'uuid'