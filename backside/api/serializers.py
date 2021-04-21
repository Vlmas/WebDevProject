from rest_framework import serializers
from .models import *


class UrlSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    url = serializers.CharField()

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.url = validated_data.get('url')
        instance.save()
        return instance

    def create(self, validated_data):
        url_ = Url.objects.create(
            name=validated_data['name'],
            url=validated_data['url']
        )
        return url_


class ConceptCarSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    releaseDate = serializers.IntegerField()
    description = serializers.CharField()
    assetUrl = serializers.CharField()

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        concept_car = ConceptCar.objects.create(
            name=validated_data['name'],
            releaseDate=validated_data['releaseDate'],
            description=validated_data['description'],
            assetUrl=validated_data['assetUrl']
        )
        return concept_car


class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engine
        fields = ('id', 'volume', 'type', 'configuration', 'power',)


class GearboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gearbox
        fields = ('id', 'type', 'gearCount', 'clutchCount')


class CarSerializer(serializers.ModelSerializer):
    engine = EngineSerializer(read_only=True)
    gearBox = GearboxSerializer(read_only=True)

    class Meta(serializers.ModelSerializer):
        model = Car
        fields = ('id', 'modelName', 'body', 'photoForList', 'photoForShow', 'startingPrice',
                  'engine', 'gearBox', 'dimensions')