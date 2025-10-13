import './TestimonialBox.css';
import { FaStar } from 'react-icons/fa';

export default function TestimonialBox({profileImg, profileJob, profileName, text }) {
    return (
        <div className="testimonial-box">

            <div className="testimonial-stars__container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            <div className="testimonial-text__container">
                <p className="testimonial-text">{text}</p>
            </div>

            <div className="testimonial-profile__container">
                <img src={profileImg} alt="profile-image" className="testimonial-profile__img" />
                <span className="testimonial-profile__job">{profileJob}</span>
                <h2 className="testimonial-profile__name">{profileName}</h2>
            </div>

        </div>
    )
}