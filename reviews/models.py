from django.db import models

class Review (models.Model):
    class Source(models.TextChoices):
        OWN = '0',
        HEUREKA = '1'

    product = models.ForeignKey('products.product', on_delete=models.CASCADE, null=False)
    created = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    source = models.CharField(max_length=1, choices=Source.choices, default=Source.HEUREKA)


    def __str__(self):
        return f'#{self.id} ({self.created})'
