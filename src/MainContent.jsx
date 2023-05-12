import photo from './images/photo-grid.png'

export default function Maincontent(){
    return(
        <section className='hero'>
             <img src={photo} alt="" className='photogrid'/>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}