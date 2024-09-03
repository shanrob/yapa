from django.http import JsonResponse
from .models import Weather
from .serializers import WeatherSerializer

def weather_list(request):
  allWeather = Weather.objects.all()
  serializer = WeatherSerializer(allWeather, many=True)
  return JsonResponse(serializer.data, safe=False)