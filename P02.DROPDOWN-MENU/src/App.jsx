import Navbar from './components/Navbar.jsx'
import './styles/App.css'
import ImgDesktop from './images/image-hero-desktop.png'
import ImgClient1 from './images/client-databiz.svg'
import ImgClient2 from './images/client-audiophile.svg'
import ImgClient3 from './images/client-meet.svg'
import ImgClient4 from './images/client-maker.svg'

function App() {
  
  return (
    <>
    <Navbar/>

    <div className='Home'>



    <div className='Col-Home'>
      <div className='title-home'>
        Make
        <br/>
        remote work
      </div>
      <div className='desc-home'>Get your team in sycnc, no matter your location.
        Streamline processes, create team rituals, and watch productivity soar.
      </div>
      <button className='btn-home'>Learn more</button>
      
      <div className='client-home'>
      <img src={ImgClient1} />
      <img src={ImgClient2} />
      <img src={ImgClient3} />
      <img src={ImgClient4} />
      </div>
      </div>  
      

    <div className='Col-Home'>
    <img className='Img-Home' src={ImgDesktop} />
   
    </div>

    </div>
 


    
 

    
    </>
  )
}

export default App
