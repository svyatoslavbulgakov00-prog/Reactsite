import './index.css'

function App() {
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
              Интересный гид по Старому Осколу
            </p>
          </div>

        </aside>

        {/* MAIN */}
        <main className="main">

          {/* HERO */}
          <section className="hero">

            <div className="hero-content">

              <p className="subtitle">
                Белгородская область
              </p>

              <h1>
                Старый Оскол
              </h1>

              <p className="description">
                Старый Оскол — современный и уютный город,
                сочетающий богатую историю, культурные
                достопримечательности и красивые природные места.
              </p>

              <a
                href="https://ru.wikipedia.org/wiki/Старый_Оскол"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn"
              >
                Исследовать
              </a>

            </div>

            <div className="hero-image">
              <img
                src="https://oskol.city/upload/resize_cache/iblock/3e3/duwrm7pix5wuq7fmrf4biilmbtn9h73z/856_569_1/Staryy-Oskol-_1_.jpg"
                alt=""
              />
            </div>

          </section>

          {/* INFO BLOCKS */}

          <section className="info-section">

            <div className="info-card">
              <h3>История города</h3>

              <p>
                Старый Оскол был основан в XVI веке и долгое время
                являлся важной крепостью южных рубежей России.
              </p>
            </div>

            <div className="info-card">
              <h3>Культура</h3>

              <p>
                В городе расположены музеи, театры,
                современные арт-пространства и памятники истории.
              </p>
            </div>

            <div className="info-card">
              <h3>Природа</h3>

              <p>
                Парки, набережные и зелёные зоны делают
                Старый Оскол комфортным и красивым городом.
              </p>
            </div>

          </section>

          {/* ABOUT */}

          <section className="about-section">

            <div className="about-left">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Stary_Oskol_city.jpg"
                alt=""
              />
            </div>

            <div className="about-right">

              <p className="subtitle">
                О ГОРОДЕ
              </p>

              <h2>
                Один из самых красивых городов Белгородской области
              </h2>

              <p>
                Старый Оскол сочетает в себе современную архитектуру,
                развитую инфраструктуру, зелёные зоны и богатое
                культурное наследие.
              </p>

              <p>
                Здесь расположены театры, музеи, памятники,
                красивые улицы и места для отдыха,
                которые делают город привлекательным
                для жителей и туристов.
              </p>

            </div>

          </section>

        </main>

      </div>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-logo">
            <h2>Oskol</h2>

            <p>
              Современный гид по Старому Осколу.
              История, культура, красивые места
              и атмосфера города.
            </p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <h3>Навигация</h3>

              <a href="#">Главная</a>
              <a href="#">Места</a>
              <a href="#">Фото</a>
              <a href="#">Карта</a>
            </div>

            <div className="footer-column">
              <h3>Информация</h3>

              <a href="#">О городе</a>
              <a href="#">История</a>
              <a href="#">Новости</a>
              <a href="#">Контакты</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Interesting Oskol. Все права защищены.</p>
        </div>

      </footer>

    </>
  )
}

export default App