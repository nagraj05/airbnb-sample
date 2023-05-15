import Nav from "./nav"
import MainContent from "./MainContent"
import Card from "./Card"
import Carddata from './Carddata'



function App(){
  const elements = Carddata.map(data =>{
    return <Card 
                key={data.id} 
                data={data}
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