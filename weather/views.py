from django.shortcuts import render
import requests
from django import forms
from django.conf import settings
from django.http import JsonResponse
import json


class CityForm(forms.Form):
    city = forms.CharField(label='Город', max_length=100)


def get_weather(city):
    url = f"http://api.weatherapi.com/v1/current.json?key={settings.WEATHERAPI_KEY}&q={city}&lang=ru"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return {
            "city": data["location"]["name"],
            "temperature": data["current"]["temp_c"],
            "condition": data["current"]["condition"]["text"],
            "humidity": data["current"]["humidity"],
            "wind_speed": data["current"]["wind_kph"],
        }
    return None


def weather_forecast(request):
    city = request.GET.get('city', '').strip()

    if not city:
        return JsonResponse({"error": "Введите название города!"}, status=400)

    api_key = settings.WEATHERAPI_KEY  # API-ключ из settings.py
    url = f"http://api.weatherapi.com/v1/forecast.json?key={api_key}&q={city}&days=3&lang=ru"

    try:
        response = requests.get(url, timeout=5)  # Добавляем таймаут
        response.raise_for_status()  # Проверяем наличие HTTP-ошибок
        data = response.json()

        # Логируем все данные, которые пришли с API
        print(f"Данные с API: {data}")

        # Проверяем, есть ли прогноз
        if "forecast" not in data:
            return JsonResponse({"error": "Прогноз недоступен для этого города."}, status=400)

        weather_data = {
            "city": data["location"]["name"],
            "temperature": data["current"]["temp_c"],
            "condition": data["current"]["condition"]["text"],
            "humidity": data["current"]["humidity"],
            "wind_speed": data["current"]["wind_kph"]
        }

        forecast_data = []
        for day in data["forecast"]["forecastday"]:
            forecast_data.append({
                "date": day["date"],
                "temperature_max": day["day"]["maxtemp_c"],
                "temperature_min": day["day"]["mintemp_c"],
                "condition": day["day"]["condition"]["text"]
            })

        return JsonResponse({
            'weather_data': weather_data,
            'forecast_data': forecast_data
        })

    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": f"Ошибка запроса: {str(e)}"}, status=500)





def home(req):
    return render(req, 'main/index.html')

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
