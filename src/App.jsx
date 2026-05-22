import './index.css'
import { useEffect, useState } from 'react'

function App() {

  // ✅ безопасные картинки (без CORS)
  const images = [
    "https://images.unsplash.com/photo-1508050919630-b135583b29ab",
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
    "https://images.unsplash.com/photo-1494526585095-c41746248156"
  ]

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // 🔥 autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // ✨ scroll animation
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach(sec => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="layout">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div>
            <h2 className="logo">Oskol</h2>

            <nav className="nav">
              <a href="#">Главная</a>
              <a href="#">Места</a>
              <a href="#">Галерея</a>
              <a href="#">Карта</a>
              <a href="#">Погода</a>
              <a href="#">Контакты</a>
            </nav>
          </div>

          <div className="sidebar_bottom">
            <p>
              Интерактивный гид по Старому Осколу — город с историей,
              промышленностью и современной жизнью.
            </p>
          </div>

        </aside>

        {/* MAIN */}
        <main className="main">

          {/* HERO */}
          <section className="hero fade-section">

            <div className="hero-content">
              <p className="subtitle">Белгородская область</p>

              <h1>Старый Оскол</h1>

              <p className="description">
                Старый Оскол — крупный промышленный и культурный центр,
                расположенный в Белгородской области. Город сочетает историю,
                современную архитектуру и развитую инфраструктуру.
              </p>

              <p className="description">
                Здесь есть парки, набережные, музеи, театры и жилые районы,
                создающие комфортную среду для жизни и отдыха.
              </p>

              <a
                className="hero-btn"
                href="https://ru.wikipedia.org/wiki/Старый_Оскол"
                target="_blank"
                rel="noopener noreferrer"
              >
                Исследовать город
              </a>
            </div>

            {/* SLIDER */}
            <div className="hero-slider fade-section">

              <button className="slider-btn left" onClick={prev}>‹</button>

              <img src={images[index]} alt="Stary Oskol" />

              <button className="slider-btn right" onClick={next}>›</button>

            </div>

          </section>

          {/* INFO */}
          <section className="info-section fade-section">

            <div className="info-card">
              <h3>История</h3>
              <p>
                Основан в XVI веке как оборонительная крепость.
                Позже стал важным промышленным центром региона.
              </p>
            </div>

            <div className="info-card">
              <h3>Культура</h3>
              <p>
                Театры, музеи, выставки и фестивали формируют
                насыщенную культурную жизнь города.
              </p>
            </div>

            <div className="info-card">
              <h3>Природа</h3>
              <p>
                Город окружён зелёными зонами, парками и реками,
                создающими комфортную среду.
              </p>
            </div>

          </section>

          {/* ABOUT */}
          <section className="about-section fade-section">

            <div className="about-left">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Stary_Oskol_city.jpg"
                alt=""
              />
            </div>

            <div className="about-right">

              <p className="subtitle">О ГОРОДЕ</p>

              <h2>
                Современный город с промышленным развитием и историей
              </h2>

              <p>
                Старый Оскол является одним из крупнейших промышленных центров
                Белгородской области. Он известен металлургией, транспортом и
                экономическим развитием.
              </p>

              <p>
                Несмотря на промышленность, город остаётся зелёным и комфортным
                для жизни благодаря паркам, скверам и благоустройству.
              </p>

              <p>
                В последние годы активно обновляется инфраструктура,
                строятся новые жилые районы и общественные пространства.
              </p>

            </div>

          </section>

        </main>

      </div>

      {/* FOOTER */}
      <footer className="footer fade-section">

        <div className="footer-top">

          <div className="footer-logo">
            <h2>Oskol</h2>
            <p>
              Цифровой гид по Старому Осколу —
              история, культура и современная жизнь города.
            </p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <h3>Навигация</h3>
              <a href="#">Главная</a>
              <a href="#">Места</a>
              <a href="#">Карта</a>
              <a href="#">Галерея</a>
            </div>

            <div className="footer-column">
              <h3>Информация</h3>
              <a href="#">История</a>
              <a href="#">Культура</a>
              <a href="#">Контакты</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Oskol City Guide</p>
        </div>

      </footer>
    </>
  )
}

export default App