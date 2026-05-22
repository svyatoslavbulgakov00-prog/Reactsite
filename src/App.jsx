import './index.css'
import { useEffect } from 'react'

function App() {

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
              Интерактивный гид по Старому Осколу — город с богатой историей,
              промышленным развитием и уютной современной атмосферой.
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
                Старый Оскол — это крупный промышленный и культурный центр,
                расположенный в Белгородской области. Город сочетает в себе
                историческое наследие, современную архитектуру и развитую
                инфраструктуру.
              </p>

              <p className="description">
                Здесь гармонично соседствуют жилые районы, парки, набережные,
                образовательные учреждения и промышленные предприятия,
                формируя комфортную среду для жизни и работы.
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

            <div className="hero-image">
              <img
                src="https://oskol.city/upload/resize_cache/iblock/3e3/duwrm7pix5wuq7fmrf4biilmbtn9h73z/856_569_1/Staryy-Oskol-_1_.jpg"
                alt=""
              />
            </div>

          </section>

          {/* INFO */}
          <section className="info-section fade-section">

            <div className="info-card">
              <h3>История города</h3>
              <p>
                Основанный в XVI веке как оборонительная крепость,
                Старый Оскол сыграл важную роль в защите южных рубежей России.
                Со временем он превратился в промышленный центр региона.
              </p>
            </div>

            <div className="info-card">
              <h3>Культура</h3>
              <p>
                В городе развита культурная жизнь: работают театры, музеи,
                библиотеки и творческие пространства. Проводятся фестивали,
                выставки и городские мероприятия.
              </p>
            </div>

            <div className="info-card">
              <h3>Природа</h3>
              <p>
                Старый Оскол окружён зелёными зонами, парками и реками.
                Город активно благоустраивается, создаются новые зоны отдыха
                и прогулочные маршруты.
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
                Современный город с богатой историей и активным развитием
              </h2>

              <p>
                Старый Оскол является одним из крупнейших промышленных центров
                Белгородской области. Он известен своей металлургией, транспортной
                инфраструктурой и устойчивым экономическим развитием.
              </p>

              <p>
                Несмотря на промышленную направленность, город остаётся зелёным и
                комфортным для жизни. Здесь много парков, скверов, спортивных
                объектов и зон отдыха для жителей всех возрастов.
              </p>

              <p>
                В последние годы активно развивается городская среда:
                строятся новые жилые комплексы, обновляются дороги,
                благоустраиваются общественные пространства.
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
              Интерактивный цифровой гид по Старому Осколу,
              созданный для изучения города, его истории и культуры.
            </p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <h3>Навигация</h3>
              <a href="#">Главная</a>
              <a href="#">Места</a>
              <a href="#">Галерея</a>
              <a href="#">Карта</a>
            </div>

            <div className="footer-column">
              <h3>Информация</h3>
              <a href="#">История</a>
              <a href="#">Культура</a>
              <a href="#">Новости</a>
              <a href="#">Контакты</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Oskol City Guide. Все права защищены.</p>
        </div>

      </footer>
    </>
  )
}

export default App