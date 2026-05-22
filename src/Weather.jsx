import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const API_KEY = "22bec8cf0e54a3a4651c538bfbbc21b6"

const LAT = 51.298
const LON = 37.835

export default function Weather() {
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState([])
  const [air, setAir] = useState(null)

  useEffect(() => {
    loadAll()
  }, [])

  const loadAll = async () => {
    await Promise.all([getWeather(), getForecast(), getAir()])
  }

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=ru&appid=${API_KEY}`
      )
      const data = await res.json()
      setCurrent(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getForecast = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=metric&lang=ru&appid=${API_KEY}`
      )
      const data = await res.json()

      if (!data?.list) return

      const daily = data.list
        .filter((_, i) => i % 8 === 0)
        .slice(0, 5)
        .map(item => ({
          day: new Date(item.dt * 1000).toLocaleDateString("ru-RU", {
            weekday: "short"
          }),
          temp: Math.round(item.main.temp)
        }))

      setForecast(daily)
    } catch (e) {
      console.log(e)
    }
  }

  const getAir = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
      )
      const data = await res.json()
      setAir(data)
    } catch (e) {
      console.log(e)
    }
  }

  const aqiText = (aqi) => {
    switch (aqi) {
      case 1: return "Отличный"
      case 2: return "Хороший"
      case 3: return "Умеренный"
      case 4: return "Плохой"
      case 5: return "Очень плохой"
      default: return "Нет данных"
    }
  }

  const translateWeather = (text) => {
    const map = {
      "clear sky": "ясно",
      "few clouds": "малооблачно",
      "scattered clouds": "переменная облачность",
      "broken clouds": "облачно",
      "shower rain": "кратковременный дождь",
      "rain": "дождь",
      "thunderstorm": "гроза",
      "snow": "снег",
      "mist": "туман"
    }
    return map[text] || text
  }

  if (!current || !current.main || !current.weather) {
    return (
      <div className="weather-page">
        <p>Загрузка данных...</p>
      </div>
    )
  }

  return (
    <div className="weather-page">

      <h1 className="weather-title">Старый Оскол — Погода</h1>

      {/* HERO */}
      <div className="weather-hero">

        <div className="hero-temp">
          <h2>{Math.round(current.main.temp)}°C</h2>

          <p>
            Ощущается как {Math.round(current.main.feels_like)}°C
          </p>

          <span>
            {translateWeather(current.weather[0].description)}
          </span>
        </div>

        <div className="hero-info">
          <p>Влажность: {current.main.humidity}%</p>
          <p>Ветер: {current.wind.speed} м/с</p>
          <p>Давление: {current.main.pressure} гПа</p>
          <p>
            Качество воздуха:{" "}
            {air?.list?.[0]?.main?.aqi
              ? aqiText(air.list[0].main.aqi)
              : "загрузка"}
          </p>
        </div>

      </div>

      {/* GRAPH */}
      <h2 className="section-title">График температуры (5 дней)</h2>

      <div className="chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={forecast}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#C89B3C"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* FORECAST */}
      <h2 className="section-title">Прогноз на 5 дней</h2>

      <div className="forecast">
        {forecast.map((day, i) => (
          <div key={i} className="forecast-card">
            <p>{day.day}</p>
            <h3>{day.temp}°C</h3>
          </div>
        ))}
      </div>

    </div>
  )
}