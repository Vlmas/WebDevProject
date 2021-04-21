from django.db import models


# Create your models here.
class Engine(models.Model):
    volume = models.IntegerField(default=0)
    type = models.CharField(default='', max_length=50)
    configuration = models.CharField(max_length=50, default='')
    power = models.IntegerField(default=0)

    class Meta:
        verbose_name = 'Engine'
        verbose_name_plural = 'Engines'

    def to_json(self):
        return {
            'id': self.id,
            'volume': self.volume,
            'type': self.type,
            'configuration': self.configuration,
            'power': self.power
        }

    def __str__(self):
        return f'{self.id} -> Engine: {self.volume}L {self.configuration}'


class Gearbox(models.Model):
    type = models.CharField(default='', max_length=100)
    gearCount = models.IntegerField(default=0)
    clutchCount = models.IntegerField(default=0)

    class Meta:
        verbose_name = 'Gearbox'
        verbose_name_plural = 'Gearboxes'

    def to_json(self):
        return {
            'id': self.id,
            'type': self.type,
            'gearCount': self.gearCount,
            'clutchCount': self.clutchCount
        }

    def __str__(self):
        return f'{self.id} -> Gearbox: {self.type}, {self.gearCount} speed'


class Car(models.Model):
    modelName = models.CharField(max_length=30, default='')
    body = models.CharField(max_length=30, default='')
    photoForList = models.CharField(max_length=200, default='')
    photoForShow = models.CharField(max_length=200, default='')
    startingPrice = models.IntegerField(default=0)
    engine = models.ForeignKey(Engine, on_delete=models.CASCADE, null=True, related_name='cars')
    gearBox = models.ForeignKey(Gearbox, on_delete=models.CASCADE, null=True, related_name='cars')
    dimensions = models.CharField(max_length=100, default='')

    class Meta:
        verbose_name = 'Car'
        verbose_name_plural = 'Cars'

    def to_json(self):
        return {
            'id': self.id,
            'modelName': self.modelName,
            'body': self.body,
            'photoForList': self.photoForList,
            'photoForShow': self.photoForShow,
            'startingPrise': self.startingPrice,
            'engine': self.engine.to_json(),
            'gearBox': self.gearBox.to_json(),
            'dimensions': self.dimensions
        }

    def __str__(self):
        return f'{self.id} -> Car: {self.modelName}, {self.body}'


class ConceptCar(models.Model):
    name = models.CharField(default='', max_length=100)
    releaseDate = models.IntegerField(default=2030)
    description = models.TextField(default='')
    assetUrl = models.CharField(max_length=200, default='')

    class Meta:
        verbose_name = 'Concept Car'
        verbose_name_plural = 'Concept Cars'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'releaseDate': self.releaseDate,
            'description': self.description,
            'assetUrl': self.assetUrl
        }

    def __str__(self):
        return f'{self.id} -> ConceptCar: {self.name}'


class Url(models.Model):
    name = models.CharField(default='', max_length=100)
    url = models.CharField(default='', max_length=200)

    class Meta:
        verbose_name = 'URL'
        verbose_name_plural = 'URLs'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'url': self.url
        }

    def __str__(self):
        return f'{self.id} -> URL: {self.name}'