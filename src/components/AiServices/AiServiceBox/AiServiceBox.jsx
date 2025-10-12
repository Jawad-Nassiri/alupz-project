import './AiServiceBox.css';
import { FaArrowRight } from "react-icons/fa";

export default function AiServiceBox({img, title, desc}) {
    return (
        <div className="AiService-box">

            <div className="AiService-box__img-container">
                <img src={img} alt="AiService" className="AiService-box__img" />
            </div>

            <div className="AiService-box__content">
                <h2 className='AiService-box__title'>
                    <a href="#" className="AiService-box__link">{title}</a>
                </h2>

                <div className="AiService-box__desc">
                    <p className="AiService-box__text">{ desc }</p>
                    <a href="#" className="AiService-box__desc-link"><FaArrowRight/></a>
                </div>
            </div>

        </div>
    )
}