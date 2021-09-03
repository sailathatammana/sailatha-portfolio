export default function Pills({ technologies }) {
  const ProjTechList = technologies.map((item) => (
    <li className="pills">{item}</li>
  ));
  return <ul id="technologies-list">{ProjTechList}</ul>;
}
