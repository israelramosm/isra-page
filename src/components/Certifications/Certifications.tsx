import Link from "next/link";
import TitleHeader from "../Headers/TitleHeader";
import { CERTIFICATIONS_DATA } from "./certificationsData";

export default function Certifications() {
  return (
    <>
      {CERTIFICATIONS_DATA.map((c, i) => (
        <div key={i} className="pb-4">
          <Link href={c.link}><TitleHeader subtitle={c.name} rightText={c.date} /></Link>
        </div>
      ))}
    </>
  );
}
