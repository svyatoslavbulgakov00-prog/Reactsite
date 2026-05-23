import { useEffect, useState } from 'react'

export default function Home() {

  const images = [
    "/images/oskol1.jpg",
    "/images/oskol2.jpeg",
    "/images/oskol3.jpg",
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

          <p className="subtitle">Белгородская область • Россия</p>

          <h1>Старый Оскол</h1>

          <p className="description">
            Старый Оскол — один из крупнейших городов Белгородской области,
            сочетающий промышленное развитие, богатую историю и современную городскую среду.
            Здесь гармонично соседствуют природа, культура и активная городская жизнь.
          </p>

          <p className="description">
            Город известен своими парками, музеями, промышленными предприятиями и уютными
            районами для жизни. Это место, где активно развивается инфраструктура и
            создаются новые общественные пространства для жителей и гостей города.
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

        <div className="hero-slider">
          <img src={images[index]} alt="Stary Oskol" />
        </div>

      </section>

      {/* INFO */}
      <section className="info-section fade-section">

        <div className="info-card">
          <h3>История</h3>
          <p>
            Основан в XVI веке как укреплённое поселение.
            Город прошёл долгий путь развития от крепости до современного промышленного центра.
          </p>
        </div>

        <div className="info-card">
          <h3>Культура</h3>
          <p>
            В городе работают музеи, театры, культурные центры и проводятся городские мероприятия,
            фестивали и концерты для жителей.
          </p>
        </div>

        <div className="info-card">
          <h3>Природа</h3>
          <p>
            Старый Оскол окружён зелёными зонами, парками и реками,
            которые создают комфортные условия для отдыха и прогулок.
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section fade-section">

        <div className="about-right">

          <h2>О городе</h2>

          <p>
            Старый Оскол — крупный промышленный и культурный центр Белгородской области,
            активно развивающийся в последние десятилетия.
          </p>

          <p>
            Город отличается удобной инфраструктурой, современными жилыми районами,
            образовательными учреждениями и большим количеством общественных пространств.
          </p>

          <p>
            Это место, где сочетаются история, промышленность и комфортная городская среда,
            делая его важным центром региона.
          </p>

        </div>

      </section>

    </>
  )
}