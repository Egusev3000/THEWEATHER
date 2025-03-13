from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django import forms
import random


def home(req):
    return render(req, 'main/index.html')


def weather_forecast(request):
    return render(request, 'weather/weather_forecast.html')  # Шаблон для прогноза погоды


def weather_map(request):
    return render(request, 'weather/weather_map.html')  # Шаблон для карты погоды


def about(request):
    return render(request, 'weather/about.html')  # Шаблон для страницы "О нас"


def contact(request):
    return render(request, 'weather/contact.html')  # Шаблон для страницы "Контакты"


def privacy_policy(request):
    return render(request, 'weather/privacy_policy.html')  # Шаблон для страницы "Политика конфиденциальности"


def terms_of_service(request):
    return render(request, 'weather/terms_of_service.html')  # Шаблон для страницы "Условия использования"4