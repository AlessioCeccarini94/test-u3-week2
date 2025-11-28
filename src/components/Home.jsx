import CitiesList from "./CitiesList"
import { Container, Row } from "react-bootstrap"

const Home = ({ cities }) => {
  return (
    <>
      <Container>
        <Row xs={1} md={2} className="my-2">
          {cities.map((cityName) => (
            <CitiesList props={cityName} key={cityName} />
          ))}
        </Row>
      </Container>
    </>
  )
}
export default Home
