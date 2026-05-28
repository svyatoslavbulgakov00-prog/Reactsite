import { Link } from 'react-router-dom'
import { useState } from "react"

export default function Places() {

  const places = [
    {
      id: 1,
      title: "Парк Победы",
      image: "/images/ploshadpobedi.jpg",
      short: "Главный парк города для прогулок, отдыха и мероприятий.",
      full: "Парк Победы — одно из самых популярных мест отдыха в Старом Осколе. Здесь расположены прогулочные зоны, аллеи, места для отдыха и памятные объекты."
    },
    {
      id: 2,
      title: "Набережная",
      image: "/images/nab.jpg",
      short: "Современная прогулочная зона у воды.",
      full: "Набережная Старого Оскола — место для вечерних прогулок, отдыха и красивых видов на город."
    },
    {
      id: 3,
      title: "Краеведческий музей",
      image: "/images/musei.jpg",
      short: "История города и региона в одном месте.",
      full: "Краеведческий музей знакомит жителей и туристов с историей Старого Оскола, культурой и развитием региона."
    },
    {
      id: 4,
      title: "Парк Металлургов",
      image: "/images/park.jpg",
      short: "Зелёная зона отдыха и прогулок.",
      full: "Парк Металлургов — спокойное место для отдыха, прогулок и семейного времяпровождения."
    },
    {
      id: 5,
      title: "Парк ВДВ",
      image: "/images/vdv.jpg",
      short: "Небольшой городской парк.",
      full: "Парк ВДВ — уютная зона отдыха с прогулочными дорожками и зелёными насаждениями."
    },
    {
      id: 6,
      title: "Парк Железнодорожников",
      image: "/images/park_j.jpg",
      short: "Парк рядом с железнодорожным районом.",
      full: "Парк Железнодорожников — зелёная зона города, популярная среди местных жителей."
    },
    {
      id: 7,
      title: "ЦМИ",
      image: "/images/Mi.jpg",
      short: "Центр молодёжных инициатив.",
      full: "ЦМИ — культурное пространство города, где проходят концерты, мероприятия и встречи молодёжи."
    },
    {
      id: 8,
      title: "Солнечный парк",
      image: "/images/atr.jpeg",
      short: "Место для отдыха и прогулок.",
      full: "Солнечный парк — современная зона отдыха с зелёными территориями и прогулочными маршрутами."
    },
    {
      id: 9,
      title: "Комсомольский парк",
      image: "/images/kom.jpg",
      short: "Классический городской парк.",
      full: "Комсомольский парк — зелёная территория для прогулок, спорта и отдыха на природе."
    },
    {
      id: 10,
      title: "Стадион Труд",
      image: "/images/trud.jpg",
      short: "Главный спортивный объект города.",
      full: "Стадион Труд используется для футбольных матчей, соревнований и спортивных мероприятий."
    },
    {
      id: 11,
      title: "Зелёный Лог",
      image: "/images/log.jpg",
      short: "Популярный район с зелёными зонами.",
      full: "Зелёный Лог сочетает современные жилые кварталы и природные пространства для прогулок."
    },
    {
      id: 12,
      title: "Олимпийский парк",
      image: "/images/olimp.jpeg",
      short: "Спорт и отдых в одном месте.",
      full: "Олимпийский парк — современная территория для прогулок, спорта и семейного отдыха."
    },
    {
      id: 13,
      title: "ТЦ Карусель",
      image: "/images/kar.jpeg",
      short: "Торговый центр города.",
      full: "ТЦ Карусель объединяет магазины, кафе и зоны отдыха для посетителей."
    },
    {
      id: 14,
      title: "Аллея Героев",
      image: "/images/al.jpg",
      short: "Мемориальная прогулочная зона.",
      full: "Аллея Героев посвящена памяти героев и является важным историческим местом города."
    },
    {
      id: 15,
      title: "ТРЦ БОШЕ",
      image: "/images/boshe.jpg",
      short: "Крупный торгово-развлекательный центр.",
      full: "БОШЕ — популярный ТРЦ Старого Оскола с кинотеатром, магазинами и ресторанами."
    },
    {
      id: 16,
      title: "ТЦ Славянский",
      image: "/images/slav.jpg",
      short: "Один из известных ТЦ города.",
      full: "ТЦ Славянский — место для покупок, встреч и повседневных услуг."
    },
    {
      id: 17,
      title: "Линия",
      image: "/images/linia.jpg",
      short: "Популярный торговый объект.",
      full: "Линия — крупный торговый комплекс с продуктами, магазинами и городской инфраструктурой."
    },
    {
      id: 18,
      title: "Арбат",
      image: "/images/arbat.jpg",
      short: "Пешеходная прогулочная зона.",
      full: "Арбат — атмосферное место для прогулок, встреч и отдыха в центре города."
    },
    {
      id: 19,
      title: "Маскарад",
      image: "/images/maskarad.jpg",
      short: "Развлекательный центр города.",
      full: "Маскарад — современное место для развлечений, отдыха и проведения свободного времени."
    }
  ]

  const POSTS_PER_PAGE = 6

  const [currentPage, setCurrentPage] = useState(1)

  const lastPostIndex = currentPage * POSTS_PER_PAGE
  const firstPostIndex = lastPostIndex - POSTS_PER_PAGE

  const currentPosts = places.slice(firstPostIndex, lastPostIndex)

  const totalPages = Math.ceil(places.length / POSTS_PER_PAGE)

  return (
    <div className="places">

      <h1 className="places-title">
        Места Старого Оскола
      </h1>

      <div className="places-grid">

        {currentPosts.map((place, index) => (
          <div
            key={place.id}
            className={`place-card ${index % 2 === 1 ? "right" : ""}`}
          >

            <img
              src={place.image}
              alt={place.title}
            />

            <div className="place-content">

              <h2>{place.title}</h2>

              <p>{place.short}</p>

              <Link
                to={`/place/${place.id}`}
                className="btn"
              >
                Подробнее
              </Link>

            </div>

          </div>
        ))}

      </div>


      <div className="pagination">

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={
              currentPage === index + 1
                ? "active"
                : ""
            }
            onClick={() =>
              setCurrentPage(index + 1)
            }
          >
            {index + 1}
          </button>
        ))}

      </div>

    </div>
  )
}