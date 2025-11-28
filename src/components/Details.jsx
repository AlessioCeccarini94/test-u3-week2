import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import SingleCity from "./SingleCity"

const Details = () => {
  const params = useParams()
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(params)
  const cityId = params.id

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?id=${params.id}&appid=97ab1f2ca067001a39f0a1f84a73ce34&units=metric`
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("City not found")
        }
      })
      .then((cities) => {
        setCity(cities), setLoading(false)
        console.log(cities)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId])

  const fiveDaysWeather = (data) => {
    if (!data) return []
    const daily = data.list.filter((day) => day.dt_txt.includes("12:00:00"))
    return daily
  }

  const dailyForecasts = city ? fiveDaysWeather(city) : []

  return (
    <>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : (
        <Container className="my-5">
          <h2 className="text-center mb-4">Previsioni per {city.city.name}</h2>

          <Row xs={1} className="g-4 justify-content-center">
            {dailyForecasts.map((day) => (
              <Col key={day.dt}>
                <Card className="shadow-sm h-100 text-center p-2">
                  <Card.Body>
                    <Card.Title className="text-primary mb-1">
                      {new Date(day.dt_txt).toLocaleDateString("it-IT")}
                    </Card.Title>
                    <h4 className="fw-bold my-2">
                      {Math.round(day.main.temp)}°C
                    </h4>
                    <p className="small text-capitalize">
                      {day.weather[0].description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {dailyForecasts.length === 0 && (
              <Col xs={12} className="text-center text-muted">
                Nessuna previsione giornaliera trovata.
              </Col>
            )}
          </Row>
        </Container>
      )}
    </>
  )
}

export default Details
