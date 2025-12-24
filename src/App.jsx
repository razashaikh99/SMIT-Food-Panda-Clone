import Routes from './AppRoutes/AppRoutes'
import Footer from './Components/Common/Footer/Footer'
import Navbar from './Components/Common/Header/Navbar'
import './Styles/Tailwind.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  )
}

export default App
