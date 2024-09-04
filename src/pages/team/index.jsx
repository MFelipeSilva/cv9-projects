import { team } from "../../utils/team";

import "./style.css";

function Team() {
  return (
    <section className="team-container">
      <div className="content">
        <div className="text-container">
          <h2>Nossa Equipe</h2>
        </div>
        <div className="cards-container">
          {team.map((member) => (
            <div className="card">
              <img src={member.image} alt="" />
              <h3>{member.title}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
