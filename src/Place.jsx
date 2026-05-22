import { useParams, useNavigate } from 'react-router-dom'

export default function Place() {

  const { id } = useParams()
  const navigate = useNavigate()

  const data = {
    1: {
      title: "Парк Победы",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      text: "Большой городской парк с аллеями, фонтанами и зонами отдыха. Отличное место для прогулок."
    },
    2: {
      title: "Набережная",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      text: "Красивое место у воды для вечерних прогулок и отдыха."
    },
    3: {
      title: "Центральная площадь",
      img: "https://images.unsplash.com/photo-1508050919630-b135583b29ab",
      text: "Главная площадь города, где проходят события и праздники."
    },
    4: {
      title: "Краеведческий музей",
      img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305",
      text: "Музей истории города с экспозициями о культуре региона."
    }
  }

  const place = data[id]

  if (!place) return <div>Не найдено</div>

  return (
    <div className="place-page">

      {/* 🔙 BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <h1>{place.title}</h1>

      <img src={place.img} alt={place.title} />

      <p>{place.text}</p>

    </div>
  )
}