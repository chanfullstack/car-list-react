import "./CarPost.css"

function CarPost(props) {
    const { car, onBgClick } = props
    return (
        <div className="car-post">
            <div className="car-post-bg" onClick={onBgClick} />
            <div className="car-post-content">
                <img src={car.thumbnailUrl} />
                <h4>{car.title}</h4>
            </div>

        </div>
    )
}

export default CarPost;