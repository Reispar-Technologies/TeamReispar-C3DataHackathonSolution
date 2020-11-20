# Generated by Django 3.0.3 on 2020-10-28 14:05

from django.db import migrations, models
import imageProj.imageapp.models


class Migration(migrations.Migration):

    dependencies = [
        ('imageapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='name',
            field=models.CharField(blank=True, max_length=32),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=imageProj.imageapp.models.upload_path),
        ),
    ]
