# Generated by Django 5.1 on 2024-08-23 06:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0004_gallery_alter_room_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='RoomImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='room_type/')),
                ('room_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rooms.roomtype')),
            ],
        ),
    ]