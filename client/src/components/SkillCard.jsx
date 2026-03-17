export default function SkillCard({title, level}) {

  return (

    <div className="skill-card">

      <h3>{title}</h3>

      <progress value={level} max="100"></progress>

    </div>

  );

}