from django.db import models
from django.contrib.auth.models import User
import uuid


class RoomType(models.Model):
     uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
     title = models.CharField(max_length=100)
     detail = models.JSONField(null=True, blank=True)
     
     def __str__(self):
         return self.title
    
     class Meta:
         verbose_name_plural = "Room Type"
    
class Room(models.Model):
     room_type = models.ForeignKey(RoomType, on_delete=models.CASCADE)
     room_no = models.CharField(max_length=100)
     room_desc = models.TextField(null=True, blank=True)
     
     def __str__(self):
         return self.room_type.title
     
     class Meta:
         verbose_name_plural = "Room"
     

class Booking(models.Model):
     room_no = models.ForeignKey(Room, on_delete=models.CASCADE)
     user = models.ForeignKey(User, on_delete=models.CASCADE)
     booking_date = models.DateTimeField(auto_now_add=True)
     total_guest = models.IntegerField()
     checkin_date = models.DateField()
     checkout_date = models.DateField()
     booking_amount = models.DecimalField(max_digits=10, decimal_places=2)
     booking_detail = models.JSONField(null=True, blank=True)
     
     def __str__(self):
         return f"{self.room_no.room_no} - {self.user} "
    
    
     class Meta:
         verbose_name_plural = "Booking"
         
class Payment(models.Model):
     booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
     txt_id = models.TextField()
     total_amount = models.DecimalField(max_digits=10, decimal_places=2)
     response_data = models.TextField()
     payment_date = models.DateTimeField(auto_now_add=True)
     
     
class Gallery(models.Model):
    image = models.ImageField(upload_to="gallery/")
    

class RoomImage(models.Model):
    room_type = models.ForeignKey(RoomType, on_delete=models.CASCADE,null=True,related_name="room_type_images")
    image = models.ImageField(upload_to="room_type_images/")
    
    
    class Meta:
        verbose_name_plural = "Room Image"
        
    def __str__(self):
        return self.room_type.title