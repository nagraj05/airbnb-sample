import star from "./images/star.png"
import  PropTypes  from "prop-types"

export default function Card(props){
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            
            <img src={props.data.img} alt="image" className="card-image" />
            <div className="card-stats">
                <img src={star} alt="star" className="card-star"/>
                <span>{props.data.num}</span>
                <span className="gray">(6)•</span>
                <span className="gray">{props.data.country}</span>
            </div>
            <p className="para">{props.data.line}</p>
            <p className="price"><span className="bold">From {props.data.price}</span>/person</p>
        </div>
    )
}


Card.propTypes = {
    data: PropTypes.shape({
      img: PropTypes.string,
      num: PropTypes.string,
      line: PropTypes.string,
      price: PropTypes.string,
      country: PropTypes.string,
      openSpots: PropTypes.number,
      location: PropTypes.string,
    }).isRequired,
  };
  