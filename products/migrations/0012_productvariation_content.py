# Generated by Django 3.1.4 on 2021-03-11 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20210311_1051'),
    ]

    operations = [
        migrations.AddField(
            model_name='productvariation',
            name='content',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
    ]
