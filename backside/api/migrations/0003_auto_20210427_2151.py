# Generated by Django 2.2 on 2021-04-27 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210427_2150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='engine',
            name='power',
            field=models.IntegerField(default=0),
        ),
    ]
