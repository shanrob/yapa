from django.db import models

class Weather(models.Model):
    city = models.CharField(max_length=100)
    temperature = models.FloatField()
    humidity = models.FloatField()
    wind_speed = models.FloatField()
    wind_direction = models.CharField(max_length=100)
    weather = models.CharField(max_length=100)
    weather_description = models.CharField(max_length=100)
    sunrise = models.CharField(max_length=100)
    sunset = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
      return self.city + ' - ' + str(self.timestamp)
