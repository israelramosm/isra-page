import Link from "next/link";
import TitleHeader from "../Headers/TitleHeader";
import { CERTIFICATIONS_DATA } from "./certificationsData";

export default function Certifications() {
  return (
    <>
      {CERTIFICATIONS_DATA.map((c, i) => (
        <Link key={i} href={c.link}>
          <div className="mb-4 p-2 font-medium border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 rounded-lg w-full text-left">
            <TitleHeader subtitle={c.name} rightText={c.date} />
          </div>
        </Link>
      ))}
    </>
  );
}
