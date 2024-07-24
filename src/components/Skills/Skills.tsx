import { SKILS_DATA } from "./skillsData";

export default function Skills() {
  return (
    <div>
      {SKILS_DATA.map((d, i) => (
        <div key={i} className="[&:not(:first-child)]:mt-4">
          <h3 className="font-semibold">{d.name}</h3>
          <p className="font-medium md:ml-8 mt-4">{d.primary.join(" | ")}</p>
          <p className="md:ml-8 mt-4">{d.secondary.join(" | ")}</p>
        </div>
      ))}
    </div>
  );
}
