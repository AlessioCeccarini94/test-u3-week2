import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Details from "./components/Details"
import MyNavbar from "./components/MyNavvabr"
import Search from "./components/Search"
import Home from "./components/Home"
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h3>Città italiane</h3>
                <Home cities={["Rome,It", "Milan,It", "Venice,It", "Bari"]} />
                <h3>Città mondiali</h3>
                <Home
                  cities={["London,GB", "New York,US", "Tokyo,JP", "Sydney,AU"]}
                />
              </div>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/italy"
            element={
              <Home
                cities={[
                  "Rome,It",
                  "Milan,It",
                  "Venice,It",
                  "Bari",
                  "Naples",
                  "catania",
                  "aosta",
                  "trieste",
                  "bologna",
                  "torino",
                  "gorgo al monticano",
                ]}
              />
            }
          />
          <Route
            path="/world"
            element={
              <Home
                cities={[
                  "London,GB",
                  "New York,US",
                  "Tokyo,JP",
                  "Sydney,AU",
                  "Tokyo,JP",
                  "Sydney,AU",
                  "Tokyo,JP",
                  "Sydney,AU",
                  "Hawai,US",
                  "los angeles,US",
                ]}
              />
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
