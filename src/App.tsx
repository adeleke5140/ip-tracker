import Layout from "./components/Layout"
import HeaderTitle from "./components/HeaderTitle"
import SearchForm from "./components/SearchBar"
import Map from "./components/Map"

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderTitle title="IP Address Tracker" />
        <SearchForm />
        <Map />
      </Layout>
    </div>
  )
}

function Button() {
  return <button>click me</button>
}

export default App
