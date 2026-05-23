import { useParams, Link } from "react-router-dom"
import places from "./placesData.js"

export default function Place() {
  const { id } = useParams()

  const place = places.find(p => p.id === Number(id))

  if (!place) {
    return <div className="place-page">Место не найдено</div>
  }

  return (
    <div className="place-page">

      {/* HERO */}
      <div className="place-hero">

        <img src={place.image} alt={place.title} />

        <div className="place-hero-content">

          <h1>{place.title}</h1>

          <p className="place-short">{place.short}</p>

          {/* BUTTONS */}
          <div className="place-actions">

            <Link
              to={`/map?id=${place.id}`}
              className="btn"
            >
              📍 Открыть на карте
            </Link>

            <Link to="/places" className="btn secondary">
              ← Назад
            </Link>

          </div>

        </div>

      </div>

      {/* INFO BLOCK */}
      <div className="place-info">

        <div className="info-card">
          <h3>Описание</h3>
          <p>{place.full}</p>
        </div>

        <div className="info-card">
          <h3>Информация</h3>
          <p>Тип: городская локация</p>
          <p>Город: Старый Оскол</p>
          <p>Доступ: свободный</p>
        </div>

      </div>

      {/* GALLERY */}
      <div className="place-gallery">

        <h2>Галерея</h2>

        <div className="gallery-grid">

          <img src={place.image} />
          <img src={place.image} />
          <img src={place.image} />

        </div>

      </div>

    </div>
  )
}