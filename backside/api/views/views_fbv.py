from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Engine, Gearbox
from api.serializers import EngineSerializer, GearboxSerializer


@api_view(['GET', 'POST'])
def engine_list(request):
    if request.method == 'GET':
        engines = Engine.objects.all()
        serializer = EngineSerializer(engines, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EngineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def engine_detail(request, engine_id):
    try:
        engine = Engine.objects.get(id=engine_id)
    except Engine.DoesNotExist as exc:
        return Response(
            {
                'message': 'invalid id'
            },
            status=400
        )

    if request.method == 'GET':
        serializer = EngineSerializer(engine)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EngineSerializer(instance=engine, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

    elif request.method == 'DELETE':
        engine.delete()
        return Response(
            {
                'message': 'engine deleted'
            }
        )


@api_view(['GET', 'POST'])
def gearbox_list(request):
    if request.method == 'GET':
        gearboxes = Gearbox.objects.all()
        serializer = GearboxSerializer(gearboxes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GearboxSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def gearbox_detail(request, gearbox_id):
    try:
        gearbox = Gearbox.objects.get(id=gearbox_id)
    except Gearbox.DoesNotExist as exc:
        return Response(
            {
                'message': 'invalid id'
            },
            status=400
        )

    if request.method == 'GET':
        serializer = GearboxSerializer(gearbox)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GearboxSerializer(instance=gearbox, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

    elif request.method == 'DELETE':
        gearbox.delete()
        return Response(
            {
                'message': 'gearbox deleted'
            }
        )