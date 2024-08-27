from django.contrib import admin
from .models import *

from django.utils.safestring import mark_safe


class RoomImageInline(admin.TabularInline):
     model = RoomImage
     extra = 1
     
class RoomTypeAdmin(admin.ModelAdmin):
     inlines = [RoomImageInline]
     list_display = ['uuid','title','first_image']
     search_fields = ['title']
     ordering = ['title']
     
     def first_image(self, obj):
          first_image = obj.room_type_images.first()
          if first_image:
               return mark_safe('<img src="%s" width="50" />' % first_image.image.url)
          
     first_image.allow_tags = True
     

admin.site.register(RoomType, RoomTypeAdmin)
admin.site.register(Room)
admin.site.register(Booking)
admin.site.register(Payment)
admin.site.register(Gallery)
admin.site.register(RoomImage)

