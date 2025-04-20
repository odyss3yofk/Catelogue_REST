from django.db import models


class Product(models.Model):
    product_name = models.CharField(max_length=30)
    produuct_type = models.CharField(max_length=30)


class Purifiers(models.Model):
    purifier_name = models.CharField(max_length=50)
    purifier_price = models.CharField(max_length=10)
    purifier_type = models.CharField(max_length=50)
    purifier_image = models.ImageField()
