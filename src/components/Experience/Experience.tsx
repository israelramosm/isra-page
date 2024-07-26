import { ReactNode } from 'react';
import TitleHeader from '../Headers/TitleHeader';
import { EXPERIENCE_DATA } from './experienceData';

export default function Experience() {
  const Content = ({ children }: { children?: ReactNode }) => (
    <div className="mt-4 md:mx-8">{children}</div>
  );

  return (
    <div>
      {EXPERIENCE_DATA.map((e, i) => (
        <div key={i} className="[&:not(:first-child)]:mt-8">
          <TitleHeader
            title={e.position}
            subtitle={e.company}
            rightText={e.dates}
          />
          <Content>
            <p className="mb-4">{e.summary}</p>
            <ul className="ml-12 list-disc">
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
