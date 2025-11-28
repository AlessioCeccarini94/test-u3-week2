import { Button, Col, Card } from "react-bootstrap"
import { useNavigate } from "react-router"

const SingleCity = ({ data }) => {
  const navigate = useNavigate()

  console.log(data)
  return (
    <Col className="my-2" key={data.id}>
      <Card className="h-100   border rounded">
        <Card.Body className="text-center">
          <Card.Title>
            {data.city.name},{data.city.country}
          </Card.Title>
          <Card.Text>
            {data.list[0].weather[0].description}
            <br />
            {data.list[0].main.temp}°
          </Card.Text>
          <Button
            onClick={() => navigate("/details/" + data.city.id)}
            variant="light"
          >
            scopri meteo per i prossimi giorni
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCity
