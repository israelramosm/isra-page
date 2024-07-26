import Link from 'next/link';
import TitleHeader from '../Headers/TitleHeader';
import { CERTIFICATIONS_DATA } from './certificationsData';

export default function Certifications() {
  return (
    <>
      {CERTIFICATIONS_DATA.map((c, i) => (
        <Link key={i} href={c.link}>
          <div className="mb-4 w-full rounded-lg border border-gray-300 bg-white p-2 text-left font-medium text-gray-900 hover:bg-gray-100">
            <TitleHeader subtitle={c.name} rightText={c.date} />
          </div>
        </Link>
      ))}
    </>
  );
}
