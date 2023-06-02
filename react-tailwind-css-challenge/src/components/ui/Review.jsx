//import Rating Component
import Rating from "./Rating";
//import css
import './ui.style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
const Reviews = ({title, name ,description, pros, rate, level, date}) => {
    return(
        <div className="feedback_container">
            <div className="feedback_container_left">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-sm text-gray-400 mt-2">{name}</p>
                <p className="text-md mt-2">{description}</p>
                <ul className="mt-5">
                    {pros.map((pron, index)=>(
                        <li key={index} className="text-sm"><FontAwesomeIcon icon={faStarHalfStroke} />{pron}</li>
                    ))}
                </ul>
            </div>
            <div className="feedback_container_right">
                <div>
                    <Rating level={level} point={rate}/>
                </div>
                <div>
                    <p className="text-sm text-gray-400 text-right">Reviewed on</p>
                    <p className="text-sm text-gray-400 text-right">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;