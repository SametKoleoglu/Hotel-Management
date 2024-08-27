from django.db import models
from django.contrib.auth.models import User
from rooms.models import Booking
from event.models import EventBooking
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class Review(models.Model):
     user = models.ForeignKey(User, on_delete=models.CASCADE)
     review_text = models.TextField(null=True)
     rating = models.IntegerField(default=1)
     room_booking = models.ForeignKey(Booking, on_delete=models.SET_NULL, null=True)
     event_booking = models.ForeignKey(EventBooking, on_delete=models.SET_NULL, null=True)
     add_time = models.DateTimeField(auto_now_add=True)
     
class Contact(models.Model):
     full_name = models.CharField(max_length=155,null=True)
     email = models.CharField(max_length=200,null=True)
     mobile = models.CharField(blank=True, null=True)
     message = models.TextField(null=True)
     add_time = models.DateTimeField(auto_now_add=True)
     
     
class Profile(models.Model):
     user = models.OneToOneField(User, on_delete=models.CASCADE,null=True)
     profile_image = models.ImageField(upload_to="profile_images/",null=True,blank=True)
     mobile = models.CharField(null=True,unique=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        
        Token.objects.create(user=instance)
        
     
class Career(models.Model):
     full_name = models.CharField(max_length=155,null=True)
     email = models.CharField(max_length=200,null=True)
     mobile = models.CharField(blank=True, null=True)
     message = models.TextField(null=True)
     updated_cv = models.FileField(upload_to="cv_files/")
     add_time = models.DateTimeField(auto_now_add=True)
     
     
     def __str__(self):
         return self.full_name
    

class Banner(models.Model):
     title = models.CharField(max_length=200,null=True)
     image = models.ImageField(upload_to="banners/")
     
     def __str__(self):
         return self.title
     
     
     
class ControlPanel(models.Model):
     logo = models.ImageField(upload_to="logos/")