from flask import Flask, render_template, request
import requests

app = Flask(__name__)


@app.route('/home')
@app.route('/', methods=['POST', 'GET'])
def home():
    # IPStack---------------
    ip_adress = request.headers.get('X-Forwarded-For', request.remote_addr)
    access_key = "055665a80378dc3062df1b2272340728"
    url = "http://api.ipstack.com/check?access_key=" + access_key
    location = requests.get(url)
    getLocation = location.json()
    print(getLocation)

    latitude = getLocation["latitude"]
    longitude = getLocation["longitude"]


    # URL = "https://geocode.search.hereapi.com/v1/geocode"
    # location = "yogyakarta"  # taking user input
    # # Acquire from developer.here.com
    # api_key = 'GVIG0IOWHYL1R8m9a3KL9-dA9PYlAbLFwE5RLrVeiGg'
    # PARAMS = {'apikey': api_key, 'q': location}

    # # sending get request and saving the response as response object
    # r = requests.get(url=URL, params=PARAMS)
    # data = r.json()
    # # print(data)

    # # Acquiring the latitude and longitude from JSON
    # latitude = data['items'][0]['position']['lat']
    # print(latitude)
    # longitude = data['items'][0]['position']['lng']
    # print(longitude)

    api_weather = "64bb6bc59054bb41eb4db1bc5154eb76"
    getWeather = requests.get("https://api.openweathermap.org/data/2.5/weather?lat=" + str(
        latitude) + "&lon=" + str(longitude) + "&appid=" + api_weather + '&units=metric')
    weather = getWeather.json()

    cuaca = weather['weather'][0]['main']
    ketCuaca = weather['weather'][0]['description']
    icon = weather['weather'][0]['icon']
    suhu = weather['main']['temp']
    feels_like = weather['main']['feels_like']
    pressure = weather['main']['pressure']
    humidity = weather['main']['humidity']
    wind = weather['wind']['speed']
    place = weather['name']
    print(place)
    print(weather)
    print(cuaca)
    print(icon)

    data = {'weather_raw': weather, 'cuaca': cuaca, 'ketCuaca': ketCuaca, 'icon': icon, 'suhu': suhu,
            'feels_like': feels_like, 'pressure': pressure, 'humidity': humidity, 'wind': wind, 'place': place}

    return render_template("index.html", data=data)
