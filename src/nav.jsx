import logo from './images/airbnb-logo.png';

export default function nav(){
    return(
        <div>
            <nav className='nav'>
                <img src={logo} alt="logo"  className='airbnblogo' />
            </nav>
        </div>
    )
}