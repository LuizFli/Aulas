import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {



  return (
    <div className='app-container'>

      <div className='app-header'>
        <Header />

      </div>
      <div className='app-body'>

        <Body />
      </div>

      <div className='div-footer'>
        <Footer />
      </div>

    </div>

  )
}

export default App
