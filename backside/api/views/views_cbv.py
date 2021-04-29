from django.shortcuts import Http404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from api.models import Car, Url, ConceptCar
from api.serializers import CarSerializer, UrlSerializer, ConceptCarSerializer


class CarListAPIView(APIView):
    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CarDetailAPIView(APIView):
    def get_object(self, model_name):
        try:
            return Car.objects.get(modelName__iexact=model_name)
        except Car.DoesNotExist as exc:
            raise Http404

    def get(self, request, model_name=None):
        car = self.get_object(model_name)
        serializer = CarSerializer(car)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, model_name=None):
        car = self.get_object(model_name)
        serializer = CarSerializer(instance=car, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, model_name=None):
        car = self.get_object(model_name)
        car.delete()
        return Response(
            {
                'message': 'car deleted'
            },
            status=status.HTTP_200_OK
        )


class CarListByBodyAPIView(APIView):
    def get_objects(self, body):
        try:
            return Car.objects.filter(body__iexact=body)
        except Car.DoesNotExist as exc:
            raise Http404

    def get(self, request, body=None):
        cars = self.get_objects(body)
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, body=None):
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UrlListAPIView(APIView):
    def get(self, request):
        urls = Url.objects.all()
        serializer = UrlSerializer(urls, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = UrlSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UrlDetailAPIView(APIView):
    def get_object(self, name):
        try:
            return Url.objects.filter(name=name)
        except Url.DoesNotExist as exc:
            raise Http404

    def get(self, request, name=None):
        url = self.get_object(name)
        serializer = UrlSerializer(url, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, name=None):
        url = self.get_object(name)
        serializer = UrlSerializer(instance=url, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, name=None):
        url = self.get_object(name)
        url.delete()
        return Response(
            {
                'message': 'url deleted'
            },
            status=status.HTTP_200_OK
        )


class ConceptCarListGenericView(generics.ListAPIView):
    queryset = ConceptCar.objects.all()
    serializer_class = ConceptCarSerializer
    permission_classes = (IsAuthenticated,)


class ConceptCarDetailGenericView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ConceptCar.objects.all()
    serializer_class = ConceptCarSerializer


class ConceptCarListAPIView(APIView):
    def get(self, request):
        cars = ConceptCar.objects.all()
        serializer = ConceptCarSerializer(cars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ConceptCarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ConceptCarDetailAPIView(APIView):
    def get_object(self, concept_id):
        try:
            return ConceptCar.objects.get(id=concept_id)
        except ConceptCar.DoesNotExist as exc:
            raise Http404

    def get(self, request, concept_id=None):
        car = self.get_object(concept_id)
        serializer = ConceptCarSerializer(car)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, concept_id=None):
        car = self.get_object(concept_id)
        serializer = ConceptCarSerializer(instance=car, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, concept_id=None):
        car = self.get_object(concept_id)
        car.delete()
        return Response(
            {
                'message': 'concept car deleted'
            },
            status=status.HTTP_200_OK
        )