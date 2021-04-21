from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    # path('cars/<str:car_body>/'),
    # path('models/<str:model_name/>'),
    # path('search/<str:pattern>/'),
    # path('future/'),
    # path('dive-into-lexus/'),
    # path('build-your-lexus'),
    path('login/', obtain_jwt_token)
]