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
