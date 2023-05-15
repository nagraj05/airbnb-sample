import Nav from "./nav"
import MainContent from "./MainContent"
import Card from "./Card"
import Carddata from './Carddata'



function App(){
  const elements = Carddata.map(data =>{
    return <Card 
                key={data.id} 
                img={data.img} 
                price={data.price} 
                num={data.num} 
                line={data.line} 
                country={data.country}
                openSpots={data.openSpots}
                location={data.location}
                />
  })
  return(
    <>
    <Nav />
    <MainContent />
    <div className="card-box">
    {elements}
    </div>
    </>
  )
}
export default App;