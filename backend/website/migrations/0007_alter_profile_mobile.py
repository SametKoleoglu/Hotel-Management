# Generated by Django 5.1 on 2024-08-25 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0006_alter_profile_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='mobile',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
