# Generated by Django 5.1 on 2024-08-23 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=155)),
                ('email', models.CharField(max_length=200)),
                ('mobile', models.IntegerField()),
                ('message', models.TextField()),
                ('add_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]