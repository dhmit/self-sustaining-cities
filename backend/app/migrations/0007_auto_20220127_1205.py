# Generated by Django 3.1.5 on 2022-01-27 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20220126_1224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='date',
            field=models.DateField(verbose_name='Event Date: YYYY-MM-DD'),
        ),
    ]