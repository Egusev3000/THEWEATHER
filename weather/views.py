from django.shortcuts import render
import requests
import re
from django import forms
from django.conf import settings
from django.http import JsonResponse


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

    city = re.sub(r"[^А-Яа-яЁё\-\s]", "", city)

    city = city.capitalize()

    multi_word_cities = ["Санкт-Петербург", "Нижний Новгород", "Ростов-на-Дону", "Йошкар-Ола"]

    if " " in city or "-" in city:
        for mwc in multi_word_cities:
            if city.lower() == mwc.lower():
                city = mwc
                break
    else:
        city = city.title()

    city_corrections = {
        "Щелково": "Щёлково",
        "Семенов": "Семёнов",
        "Тетюши": "Тётюши",
    }
    city = city_corrections.get(city, city)

    is_schelkovo = (city == "Щёлково")
    location_param = "55.92366755925711,37.99806848377064" if is_schelkovo else city

    api_key = settings.WEATHERAPI_KEY
    url = f"http://api.weatherapi.com/v1/forecast.json?key={api_key}&q={location_param}&days=3&lang=ru"

    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        data = response.json()

        if "location" not in data or "current" not in data or "forecast" not in data:
            return JsonResponse({"error": "Некорректные данные от API."}, status=400)

        weather_data = {
            "city": "Щёлково" if is_schelkovo else data["location"]["name"],
            "temperature": data["current"]["temp_c"],
            "condition": data["current"]["condition"]["text"],
            "humidity": data["current"]["humidity"],
            "wind_speed": data["current"]["wind_kph"]
        }

        forecast_data = [
            {
                "date": day["date"],
                "temperature_max": day["day"]["maxtemp_c"],
                "temperature_min": day["day"]["mintemp_c"],
                "condition": day["day"]["condition"]["text"]
            }
            for day in data["forecast"]["forecastday"]
        ]

        return JsonResponse({
            'weather_data': weather_data,
            'forecast_data': forecast_data
        })

    except requests.exceptions.Timeout:
        return JsonResponse({"error": "Запрос к API превысил время ожидания."}, status=504)
    except requests.exceptions.ConnectionError:
        return JsonResponse({"error": "Ошибка соединения с API."}, status=503)
    except requests.exceptions.HTTPError as http_err:
        if response.status_code == 400:
            return JsonResponse({"error": "Некорректное название города. Проверьте введённые данные."}, status=400)
        return JsonResponse({"error": f"HTTP ошибка: {str(http_err)}"}, status=500)
    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": f"Ошибка запроса: {str(e)}"}, status=500)


def home(req):
    return render(req, 'main/index.html')


def weather_map(request):
    return render(request, 'weather/weather_map.html')


def about(request):
    return render(request, 'weather/about.html')


def contact(request):
    return render(request, 'weather/contact.html')


def privacy_policy(request):
    return render(request, 'weather/privacy_policy.html')


def terms_of_service(request):
    return render(request, 'weather/terms_of_service.html')
