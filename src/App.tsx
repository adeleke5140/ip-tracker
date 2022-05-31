import Layout from "./components/Layout"
import HeaderTitle from "./components/HeaderTitle"
import SearchForm from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderTitle title="IP Address Tracker" />
        <SearchForm />
      </Layout>
    </div>
  )
}

function Button() {
  return <button>click me</button>
}

export default App
