import { SKILS_DATA } from './skillsData';

export default function Skills() {
  return (
    <div>
      {SKILS_DATA.map((d, i) => (
        <div key={i} className="[&:not(:first-child)]:mt-4">
          <h3 className="font-semibold">{d.name}</h3>
          <p className="mt-4 font-medium md:ml-8">{d.primary.join(' | ')}</p>
          <p className="mt-4 md:ml-8">{d.secondary.join(' | ')}</p>
        </div>
      ))}
    </div>
  );
}
