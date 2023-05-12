import star from "./images/star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="katie" className="card-image" />
            <div className="card-stats">
                <img src={star} alt="star" className="card-star"/>
                <span>{props.num}</span>
                <span className="gray">(6)•</span>
                <span className="gray">USA</span>
            </div>
            <p className="para">{props.line}</p>
            <p className="price"><span className="bold">From {props.price}</span>/person</p>
        </div>
    )
}