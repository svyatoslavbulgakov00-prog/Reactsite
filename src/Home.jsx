import { useEffect, useState } from 'react'

export default function Home() {

  const images = [
    "https://images.unsplash.com/photo-1508050919630-b135583b29ab",
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
    "https://images.unsplash.com/photo-1494526585095-c41746248156"
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(p => (p + 1) % images.length)
    }, 4000)

    return () => clearInterval(t)
  }, [])

  return (
    <>

      {/* HERO */}
      <section className="hero fade-section">

        <div className="hero-content">

          <p className="subtitle">Белгородская область</p>

          <h1>Старый Оскол</h1>

          <p className="description big-text">
            Старый Оскол — один из крупнейших промышленных и культурных центров Белгородской области.
            Город сочетает в себе современную архитектуру, развитую инфраструктуру и богатую историю,
            уходящую корнями в XVI век.
          </p>

          <p className="description big-text">
            Сегодня это динамично развивающийся город, где активно строятся новые районы,
            благоустраиваются парки, появляются общественные пространства и развивается городская среда.
          </p>

          <a className="hero-btn" href="https://ru.wikipedia.org/wiki/Старый_Оскол">
            Исследовать город
          </a>

        </div>

        <div className="hero-slider">
          <img src={images[index]} />
        </div>

      </section>

      {/* INFO */}
      <section className="info-section fade-section">

        <div className="info-card">
          <h3>История города</h3>
          <p className="big-text">
            Основан в 1593 году как оборонительная крепость.
            Со временем стал важным промышленным центром России.
            Исторические события сформировали его уникальный облик.
          </p>
        </div>

        <div className="info-card">
          <h3>Культура и жизнь</h3>
          <p className="big-text">
            В городе работают театры, музеи, культурные центры и выставочные залы.
            Регулярно проходят фестивали, концерты и городские мероприятия.
          </p>
        </div>

        <div className="info-card">
          <h3>Природа и отдых</h3>
          <p className="big-text">
            Парки, скверы, набережные и зелёные зоны делают город комфортным для жизни.
            Здесь можно гулять, заниматься спортом и отдыхать на природе.
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section fade-section">

        <div className="about-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Stary_Oskol_city.jpg" />
        </div>

        <div className="about-right">

          <h2>О городе</h2>

          <p className="big-text">
            Старый Оскол — один из ключевых промышленных центров региона.
            Здесь развита металлургия, транспортная система и городская инфраструктура.
          </p>

          <p className="big-text">
            Несмотря на промышленный характер, город остаётся зелёным и комфортным.
            В последние годы активно развиваются новые районы и общественные пространства.
          </p>

          <p className="big-text">
            Город постепенно становится современным урбанистическим центром,
            сохраняя при этом свою историческую идентичность.
          </p>

        </div>

      </section>

    </>
  )
}