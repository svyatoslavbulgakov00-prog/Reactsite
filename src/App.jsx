import { useState } from 'react'

import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home'

import Places from './Places'

import Place from './Place'

import Map from './Map'
import Weather from './Weather'

export default function App() {

  const [theme, setTheme] = useState("dark")
  const tg = import.meta.env.VITE_TELEGRAM_USERNAME
  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  return (
    <div className={`app ${theme}`}>

      <div className="layout">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div>

            <h2 className="logo">Oskol</h2>

            <nav className="nav">
              <Link to="/">Главная</Link>
              <Link to="/places">Места</Link>
              <a href="#">Галерея</a>
              <Link to="/map">Карта</Link>
              <Link to="/weather">Погода</Link>
              <a href="#">Контакты</a>
            </nav>

            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "dark" ? "☀️ Белая тема" : "🌙 Тёмная тема"}
            </button>

          </div>

          <div className="sidebar_bottom">
            <p>
              Гид по Старому Осколу — история, культура, природа и городская жизнь.
            </p>
          </div>

        </aside>

        {/* MAIN */}
        <main className="main">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/place/:id" element={<Place />} />
            <Route path="/map" element={<Map />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>

        </main>

      </div>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-top">

          <div className="footer-logo">
            <h2>Oskol</h2>
            <p>
              Современный городской гид по Старому Осколу.
            </p>
          </div>

          <div className="footer-links">

  <div className="footer-column">
    <h3>Навигация</h3>
    <a href="#">Главная</a>
    <a href="/places">Места</a>
    <a href="#">Галерея</a>
    <a href="/map">Карта</a>
  </div>

  <div className="footer-column">
    <h3>Информация</h3>
    <a href="/weather">Погода</a>
    <a href="#">Контакты</a>
<a
  href={`https://t.me/${tg}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Поддержка (Telegram)
</a>
  </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Oskol City Guide</p>
        </div>

      </footer>

    </div>
  )
}