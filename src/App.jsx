import Navbar from './pages/Navbar'
import Elevatepage from './pages/Elevatepage'
import './main.scss'
import FinancialPage from './pages/Financial-page'
import Introduction from './pages/Introduction'
import Faq from './pages/Faq'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Elevatepage />
      <FinancialPage />
      <Introduction />
      <Faq />
      <Footer />
    </>
  )
}

export default App
