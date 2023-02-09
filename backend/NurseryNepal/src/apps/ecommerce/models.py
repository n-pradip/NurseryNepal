from django.db import models


class ProductModel(models.Model):
    product_name = models.CharField(max_length=128)
    slug = models.SlugField()
    description = models.TextField(max_length=1500)
    price = models.PositiveIntegerField()     # auto calculate the price if discount provided
    discount = models.PositiveIntegerField()  # discount can't be more than 100%
    product_image = models.ImageField(upload_to='static/product_images', null=True, blank=True)

    def __str__(self):
        return self.product_name


class ProductCategoryModel(models.Model):
    category_name = models.CharField(max_length=128)
    slug = models.SlugField()
    description = models.TextField(max_length=1500)

    def __str__(self):
        return self.category_name


class SubscriptionModel(models.Model):
    subscription_email = models.EmailField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)


class ContactModel(models.Model):
    title = models.CharField(max_length=255)
    fullname = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=12)
    message = models.TextField(max_length=10000)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f"{self.fullname} { self.title}"

