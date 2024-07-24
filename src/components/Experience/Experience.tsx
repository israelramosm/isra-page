import { ReactNode } from "react";
import { EXPERIENCE_DATA } from "./ExperienceData";
import TitleHeader from "../Headers/TitleHeader";

export default function Experience() {
  const Content = ({ children }: { children?: ReactNode }) => (
    <div className="md:mx-8 mt-4">{children}</div>
  );

  return (
    <div>
      {EXPERIENCE_DATA.map((e, i) => (
        <div key={i} className="[&:not(:first-child)]:mt-8">
          <TitleHeader title={e.position} subtitle={e.company} rightText={e.dates} />
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
