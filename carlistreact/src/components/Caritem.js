import cars from "../data/cars";
import "./CarItem.css"


function CarItem(props) {
    const { car, onCarClick } = props;


    return (
        <div className="car-item">
            <img src={car.thumbnailUrl} onClick={() => { onCarClick(car) }} />
            <h4>{car.title}</h4>
        </div>
    )
}

export default CarItem;