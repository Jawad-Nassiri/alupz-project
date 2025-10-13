import "./Team.css";
import TeamBox from "./TeamBox/TeamBox";
import member1 from "../../images/team/member1.webp";
import member2 from "../../images/team/member2.jpg";
import member3 from "../../images/team/member3.jpg";
import member4 from "../../images/team/member4.jpg";

export default function Team() {
  return (
    <div className="team-container">
      <div className="team-section">
        <h1 className="team-section__title">
          Meet The Professionals Behind Our Success
        </h1>

        <div className="team-box__container">
          <TeamBox name="Leo Dora" job="Web Developer" member_img={member1} />
          <TeamBox name="Sofia Lin" job="UI/UX Designer" member_img={member2} />
          <TeamBox name="Liam Patel" job="Backend Developer" member_img={member3} />
          <TeamBox name="Ethan Ross" job="DevOps Engineer" member_img={member4} />
        </div>
        
      </div>
    </div>
  );
}
