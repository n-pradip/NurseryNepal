# Generated by Django 4.1.4 on 2022-12-31 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=128)),
                ('slug', models.SlugField()),
                ('description', models.TextField(max_length=1500)),
                ('price', models.PositiveIntegerField()),
                ('discount', models.PositiveIntegerField()),
                ('product_image', models.ImageField(blank=True, null=True, upload_to='static/product_images')),
            ],
        ),
    ]
