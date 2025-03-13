from django.contrib import admin
from django.urls import path
from weather.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", home, name='home'),
    path('weather-forecast/', weather_forecast, name='weather_forecast'),
    path('weather-map/', weather_map, name='weather_map'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('privacy-policy/', privacy_policy, name='privacy_policy'),
    path('terms-of-service/', terms_of_service, name='terms_of_service'),
]
