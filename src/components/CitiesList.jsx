import SingleCity from "./SingleCity"
import { useState, useEffect } from "react"
import { Container, Row, Spinner } from "react-bootstrap"

const CitiesList = ({ props }) => {
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(true)

  const getCity = (props) => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${props}&appid=97ab1f2ca067001a39f0a1f84a73ce34&units=metric`
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
  }
  useEffect(() => {
    getCity(props)
  }, [props])
  //  onClick={() => {
  //           getCity(props)
  //           navigate("/search")
  //         }}
  return (
    <>
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {!loading && city && <SingleCity data={city} />}
    </>
  )
}
export default CitiesList
