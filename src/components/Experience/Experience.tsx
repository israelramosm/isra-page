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
    <>
      <h3>{position}</h3>
      <h4>{company}</h4>
      <span>{dates}</span>
    </>
  );

  const Content = ({ children }: { children?: ReactNode }) => <>{children}</>;
  return (
    <>
      {EXPERIENCE_DATA.map((e, i) => (
        <div key={i}>
          <Header position={e.position} company={e.company} dates={e.dates} />
          <Content>
            <p>{e.summary}</p>
            <ul className="list-disc ml-12">
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </Content>
        </div>
      ))}
    </>
  );
}
