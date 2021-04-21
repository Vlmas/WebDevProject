from django.contrib import admin

# Register your models here.
from api.models import *

admin.site.register(Car)
admin.site.register(ConceptCar)
admin.site.register(Engine)
admin.site.register(Gearbox)
admin.site.register(Url)