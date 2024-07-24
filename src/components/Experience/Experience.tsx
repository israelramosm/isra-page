import { ReactNode } from "react";
import { EXPERIENCE_DATA } from "./ExperienceData";

export default function Experience() {
  const Header = ({
    position,
    company,
    dates,
  }: {
    position: string;
    company: string;
    dates: string;
  }) => (
    <div className="mb-4">
      <span className="float-end font-light text-gray-400">{dates}</span>
      <h3 className="text-lg font-semibold">{position}</h3>
      <h4 className="text-sm">{company}</h4>
    </div>
  );

  const Content = ({ children }: { children?: ReactNode }) => (
    <div className="md:mx-8">{children}</div>
  );

  return (
    <div>
      {EXPERIENCE_DATA.map((e, i) => (
        <div key={i} className="[&:not(:first-child)]:mt-8">
          <Header position={e.position} company={e.company} dates={e.dates} />
          <Content>
            <p className="mb-4">{e.summary}</p>
            <ul className="list-disc ml-12">
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </Content>
        </div>
      ))}
    </div>
  );
}
