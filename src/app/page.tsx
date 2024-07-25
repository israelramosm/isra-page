import Certifications from "../components/Certifications/Certifications";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import TitleHeader from "../components/Headers/TitleHeader";
import HomeSection from "../components/HomeSection/HomeSection";
import Presentation from "../components/Presentation/Presentation";
import Skills from "../components/Skills/Skills";
import Summary from "../components/Summary/Summary";

export default function Home() {
  const Header = ({ className, title }: { className?: string, title: string }) => (
    <header>
      <h2 className={`py-8 font-bold text-xl ${className}`}>{title}</h2>
    </header>
  );
  return (
    <section className="h-full flex flex-col justify-evenly">
      {/* In this case have to hardcode the isra-page path */}
      {/* Photo by Lukas: https://www.pexels.com/photo/white-apple-keyboard-near-white-cup-917463/ */}
      <HomeSection
        id="presentation"
        className="bg-cover bg-top lg:bg-center bg-[url('/isra-page/images/profile-bg.jpg')]"
      >
        <Presentation />
      </HomeSection>
      <HomeSection id="contact-information" className="border-solid border-2">
        {/* Contact Information */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          itaque impedit consequatur laborum architecto, consequuntur, facilis
          distinctio inventore dolores possimus velit tempora perferendis sit,
          ea similique deserunt repellat neque eum!
        </p>
      </HomeSection>
      <HomeSection id="summary" className="border-solid border-2">
        <Header title="Summary" />
        <Summary />
      </HomeSection>
      <HomeSection id="experience" className="border-solid border-2">
        <Header title="Experience" />
        <Experience />
      </HomeSection>
      <HomeSection id="education" className="border-solid border-2">
        <Header title="Education" />
        <Education />
      </HomeSection>
      <HomeSection id="skills" className="border-solid border-2">
        <Header title="Skills" />
        <Skills />
      </HomeSection>
      <HomeSection id="language" className="border-solid border-2">
        <Header title="Language" />
        <h3 className="">English - C1</h3>
      </HomeSection>
      <HomeSection id="certifications" className="border-solid border-2">
        <Header title="Certifications" />
        <Certifications />
      </HomeSection>
    </section>
  );
}
