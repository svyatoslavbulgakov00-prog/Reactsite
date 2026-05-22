import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

/* FIX ICONS (ВАЖНО — иначе маркеры не будут видны) */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

const places = [
  {
    id: 1,
    title: "Парк Победы (центральная зона)",
    type: "park",
    position: [51.307696811986794, 37.88906621293881],
    desc: "Парк Победы — основная зона отдыха и прогулок в городе"
  },
  {
    id: 2,
    title: "Набережная",
    type: "nature",
    position: [51.299598988140765, 37.84344703069267],
    desc: "Набережная — зона прогулок у воды"
  },
  {
    id: 3,
    title: "Краеведческий музей",
    type: "culture",
    position: [51.29838435596909, 37.832864301294585],
    desc: "Старооскольский краеведческий музей — история города и региона"
  },
  {
    id: 4,
    title: "Парк Металлургов",
    type: "park",
    position: [51.30590581696043, 37.893620366706394],
    desc: "Парк Металлургов — зелёная зона отдыха и прогулок"
  },
  {
    id: 5,
    title: "Парк ВДВ",
    type: "park",
    position: [51.30084819672479, 37.89062158121144],
    desc: "Парк ВДВ — небольшая зона отдыха и прогулок"
  },
  {
    id: 6,
    title: "Парк Железнодорожников",
    type: "park",
    position: [51.31430315200456, 37.86281926840789],
    desc: "Парк Железнодорожников — зелёная зона отдыха в районе железной дороги"
  },
  {
    id: 7,
    title: "ЦМИ",
    type: "culture",
    position: [51.29333760337067, 37.83931214753751],
    desc: "Центр Молодёжных Инициатив — культурное и образовательное пространство города"
  },
  {
    id: 8,
    title: "Солнечный парк",
    type: "park",
    position: [51.284964500615395, 37.807047825313404],
    desc: "Солнечный парк — зона отдыха, прогулок и природы"
  },
  {
    id: 9,
    title: "Комсомольский парк",
    type: "park",
    position: [51.27891339773556, 37.79841731390976],
    desc: "Комсомольский парк — зелёная зона отдыха и прогулок"
  },
  {
    id: 10,
    title: "Стадион Труд",
    type: "sport",
    position: [51.30692725749107, 37.81506978089789],
    desc: "Стадион Труд — спортивный комплекс города Старый Оскол"
  },
  {
    id: 11,
    title: "Зелёный Лог",
    type: "nature",
    position: [51.31912013936223, 37.891724325714456],
    desc: "Зелёный Лог — природная зона и жилой район с зелёными пространствами"
  },
  {
    id: 12,
    title: "Олимпийский парк",
    type: "park",
    position: [51.32459136336885, 37.89438507725824],
    desc: "Олимпийский парк — зона отдыха, спорта и прогулок"
  },
  {
    id: 13,
    title: "ТЦ Карусель",
    type: "shop",
    position: [51.30525915112367, 37.906661282428104],
    desc: "Торговый центр Карусель — магазины, кафе и услуги"
  },
  {
    id: 14,
    title: "Аллея Героев",
    type: "culture",
    position: [51.30940331962689, 37.88877471049546],
    desc: "Аллея Героев — мемориальное место памяти и прогулочная зона"
  },
  {
    id: 15,
    title: "ТРЦ БОШЕ",
    type: "shop",
    position: [51.3096702412792, 37.87322488085125],
    desc: "ТРЦ БОШЕ — крупный торгово-развлекательный центр с магазинами и кинотеатром"
  },
  {
    id: 16,
    title: "ТЦ Славянский",
    type: "shop",
    position: [51.29587125683938, 37.83539002820421],
    desc: "Торговый центр Славянский — магазины, услуги и торговые точки"
  },
  {
    id: 17,
    title: "Линия",
    type: "nature",
    position: [51.3221301555799, 37.88831013561351],
    desc: "Линия — жилой район с зелёными зонами и городской инфраструктурой"
  },
  {
    id: 18,
    title: "Арбат",
    type: "culture",
    position: [51.32086260821491, 37.88941321275793],
    desc: "Арбат — пешеходная зона и место прогулок в городе"
  },
  {
    id: 19,
    title: "Маскарад",
    type: "culture",
    position: [51.31779366426598, 37.8994120733251],
    desc: "Маскарад — культурно-развлекательное место города"
  }
]

function FlyToPlace({ position }) {
  const map = useMap()
  map.flyTo(position, 16, { duration: 1.2 })
  return null
}

export default function Map() {
  const [activePlace, setActivePlace] = useState(places[0])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  const filtered = places.filter(p => {
    return (
      (filter === "all" || p.type === filter) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className="map-page">

      <h1 className="map-title">Карта города</h1>

      {/* SEARCH */}
      <input
        className="map-search"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTERS */}
      <div className="map-filters">
  <button onClick={() => setFilter("all")}>Все</button>
  <button onClick={() => setFilter("park")}>Парки</button>
  <button onClick={() => setFilter("nature")}>Природа</button>
  <button onClick={() => setFilter("culture")}>Культура</button>
  <button onClick={() => setFilter("shop")}>ТЦ</button>
  <button onClick={() => setFilter("sport")}>Спорт</button>
</div>

      <div className="map-layout">

        {/* LIST */}
        <div className="map-list">
          {filtered.map(place => (
            <div
              key={place.id}
              className={`map-item ${activePlace.id === place.id ? "active" : ""}`}
              onClick={() => setActivePlace(place)}
            >
              <h3>{place.title}</h3>
              <p>{place.desc}</p>
            </div>
          ))}
        </div>

        {/* MAP */}
        <div className="map-container">

          <MapContainer
            center={activePlace.position}
            zoom={14}
            style={{ height: "500px", width: "100%" }}
          >

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* fly to selected */}
            <FlyToPlace position={activePlace.position} />

            {filtered.map(place => (
              <Marker
                key={place.id}
                position={place.position}
                eventHandlers={{
                  click: () => setActivePlace(place)
                }}
              >
                <Popup>
                  <b>{place.title}</b>
                  <br />
                  {place.desc}
                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>

      </div>
    </div>
  )
}