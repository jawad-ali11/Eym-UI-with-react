import HeaderChild from '@/Components/HeaderChild'
import Portion1 from '../Components/Portion1'
import Products from '@/Components/Products'
import Description from '@/Components/Description'
import Attributes from '@/Components/Attributes'
import EymInHands from '../Components/EymInHands'
import LoginToEym from '../Components/LoginToEym'
import LandingpageBottom from '@/Components/LandingpageBottom'
import { FONT_LOADER_MANIFEST } from 'next/dist/shared/lib/constants'
import NavBar from '@/Components/NavBar'

export default function Home() {
  return (

       <div>
    <div className='sticky top-0 z-50'>
    <NavBar/> 
    </div>     
<HeaderChild/>
 <Portion1/> 
 <Products/>
<Description/>
<Attributes/> 
<EymInHands/>
<LoginToEym/>
<LandingpageBottom/>
         </div>
  )
}
