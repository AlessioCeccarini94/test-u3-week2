import { useState } from "react"
import { Form, ListGroup, Spinner, Button, Alert } from "react-bootstrap"

const Search = function () {
  const [weatherData, setWeatherData] = useState(null)
  const [cityInput, setCityInput] = useState("")
  const [descriptionFilter, setDescriptionFilter] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const SearchingCity = (cityName) => {
    if (!cityName) return

    setLoading(true)
    setError(null)
    setWeatherData(null)
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=97ab1f2ca067001a39f0a1f84a73ce34&units=metric`

    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("City not found")
        }
      })
      .then((cities) => {
        setWeatherData(cities), setLoading(false)
        console.log(cities)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        setError(error.message)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    SearchingCity(cityInput)
    setDescriptionFilter("")
  }

  const filtered = weatherData
    ? weatherData.list.filter((item) =>
        item.weather[0].description
          .toLowerCase()
          .includes(descriptionFilter.toLowerCase())
      )
    : []

  return (
    <div className="p-3">
      <h2>Cerca Previsioni Meteo</h2>

      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Control
          type="search"
          placeholder="Inserisci il nome della città (es. Roma, London)..."
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          required
        />
        <Button type="submit" className="mt-2" disabled={loading}>
          Cerca
        </Button>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {!loading && weatherData && (
        <>
          <h4 className="mt-4">Previsioni per: {weatherData.city.name}</h4>
          <Form className="mb-3">
            <Form.Control
              type="text"
              placeholder="cerca la tua città..."
              value={descriptionFilter}
              onChange={(e) => setDescriptionFilter(e.target.value)}
            />
          </Form>

          <ListGroup>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <ListGroup.Item key={item.dt}>
                  {item.dt_txt} — {item.weather[0].description}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="text-center text-muted">
                Nessun risultato trovato per il filtro.
              </ListGroup.Item>
            )}
          </ListGroup>
        </>
      )}
    </div>
  )
}
export default Search
