from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('engines/', engine_list),
    path('engines/<int:engine_id>/', engine_detail),
    path('gearboxes/', gearbox_list),
    path('gearboxes/<int:gearbox_id>/', gearbox_detail),
    path('models/', CarListAPIView.as_view()),
    path('models/<str:model_name>/', CarDetailAPIView.as_view()),
    path('models/bodies/<str:body>/', CarListByBodyAPIView.as_view()),
    path('urls/', UrlListAPIView.as_view()),
    path('urls/<str:name>/', UrlDetailAPIView.as_view()),
    path('future/', ConceptCarListGenericView.as_view()),
    path('future/<int:concept_id>/', ConceptCarDetailAPIView.as_view()),
    path('login/', obtain_jwt_token)
]