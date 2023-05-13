import Nav from "./nav"
import MainContent from "./MainContent"
import Card from "./Card"
import Pic2  from './images/2.jpg'
import Pic9 from './images/9.jpg'
import Pic3  from './images/3.jpg'
import Pic4  from './images/4.jpg'
import Pic5  from './images/5.jpg'
import Pic6  from './images/6.jpg'
import Pic7  from './images/7.jpg'
import Pic8  from './images/8.jpg'
import katie from "./images/katie-zaferes.png"



function App(){
  return(
    <>
    <Nav />
    <MainContent />
    <div className="card-box">
    <Card img={katie} price= "$142" line="Life lessons from Kayie Zaferes" num='5.0'/>
    <Card img={Pic2} price= "$150" line="Content writing from Gabby Sanders"num='4.6'/>
    <Card img={Pic3} price= "$110" line="Programming from John Doe"num='4.8'/>
    <Card img={Pic4} price= "$200" line="HR lessons from Ria Matthews"num='5.2'/>
    <Card img={Pic5} price= "$160" line="Body building from Tommy Zen"num='4.3'/>
    <Card img={Pic6} price= "$130" line="Social Media from Samantha Ruben"num='5.8'/>
    <Card img={Pic7} price= "$180" line="Fiction Writing from Peter Pan"num='5.5'/>
    <Card img={Pic8} price= "$220" line="Yoga from Zadie Smith"num='5.1'/>
    <Card img={Pic9} price= "$250" line="Photography from Chris Lee"num="5.3"/>
    </div>
    </>
  )
}
export default App;