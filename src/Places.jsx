import { Link } from 'react-router-dom'

export default function Places() {

  const places = [
    {
      id: 1,
      title: "Парк Победы",
      text: "Один из самых красивых парков города с аллеями, фонтанами и зонами отдыха для прогулок.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      id: 2,
      title: "Набережная",
      text: "Место для вечерних прогулок с красивыми видами и спокойной атмосферой у воды.",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      id: 3,
      title: "Центральная площадь",
      text: "Главное общественное пространство города, где проходят праздники и мероприятия.",
      img: "https://images.unsplash.com/photo-1508050919630-b135583b29ab"
    },
    {
      id: 4,
      title: "Краеведческий музей",
      text: "Музей истории города с экспозициями о культуре, развитии и наследии региона.",
      img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305"
    }
  ]

  return (
    <div className="places">

      <h1 className="places-title">Места Старого Оскола</h1>

      <div className="places-grid">

        {places.map((place, index) => (
          <div
            key={place.id}
            className={`place-card ${index % 2 === 1 ? "right" : ""}`}
          >

            <img src={place.img} alt={place.title} />

            <div className="place-content">

              <h2>{place.title}</h2>

              <p>{place.text}</p>

              <Link to={`/place/${place.id}`} className="btn">
                Подробнее
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}