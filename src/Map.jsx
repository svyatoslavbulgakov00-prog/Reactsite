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
  title: "Парк Победы",
  type: "park",
  position: [51.307696811986794, 37.88906621293881],
  desc: "Парк Победы — зона отдыха и прогулок"
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
        <button onClick={() => setFilter("center")}>Центр</button>
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