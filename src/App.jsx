import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/Header/Header'
import RowPost from './Components/RowPost/RowPost'
import {originalsUrl, actionUrl, comedyUrl, romanceUrl} from './urls.js'

function App() {
  return (
    <>
      <div>
            <NavBar />
            <Banner />
            <RowPost url={originalsUrl} title="Netflix Originals" />
            <RowPost url={actionUrl} title="Action" isSmall />
            <RowPost url={comedyUrl} title="Comedy" isSmall />
            <RowPost url={romanceUrl} title="Romance" isSmall />
      </div>
    </>
  )
}

export default App
