import './TeamBox.css';

export default function TeamBox({ name, job, member_img }) {
    return (
        <div className="team-box">
            <div className="team-box__info">
                <h3 className="team-box__info-name">{name}</h3>
                <span className="team-box__info-job">{job}</span>
            </div>
            <div className="team-box__img-container">
                <img src={member_img} alt="team_member" className="team-box__img" />
            </div>
        </div>
    )
}