# Generated by Django 4.1.4 on 2023-03-05 16:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_blogpostmodel_author'),
    ]

    operations = [
        migrations.DeleteModel(
            name='SubscriptionModel',
        ),
    ]
