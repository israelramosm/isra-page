import HomeSection from "../components/HomeSection/HomeSection";
import Presentation from "../components/Presentation/Presentation";

export default function Home() {
  return (
    <section className="h-full flex flex-col justify-evenly">
      {/* Photo by Lukas: https://www.pexels.com/photo/white-apple-keyboard-near-white-cup-917463/ */}
      <HomeSection id="presentation" className="bg-cover bg-top lg:bg-center bg-[url('assets/profile-bg.jpg')]">
        {/* Presentation */}
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
      <HomeSection id="experience" className="border-solid border-2">
        {/* Experience */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          itaque impedit consequatur laborum architecto, consequuntur, facilis
          distinctio inventore dolores possimus velit tempora perferendis sit,
          ea similique deserunt repellat neque eum!
        </p>
      </HomeSection>
      <HomeSection id="skills" className="border-solid border-2">
        {/* Skills */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          itaque impedit consequatur laborum architecto, consequuntur, facilis
          distinctio inventore dolores possimus velit tempora perferendis sit,
          ea similique deserunt repellat neque eum!
        </p>
      </HomeSection>
      <HomeSection id="language" className="border-solid border-2">
        {/* Languages */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          itaque impedit consequatur laborum architecto, consequuntur, facilis
          distinctio inventore dolores possimus velit tempora perferendis sit,
          ea similique deserunt repellat neque eum!
        </p>
      </HomeSection>
      <HomeSection id="education" className="border-solid border-2">
        {/* Education */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          itaque impedit consequatur laborum architecto, consequuntur, facilis
          distinctio inventore dolores possimus velit tempora perferendis sit,
          ea similique deserunt repellat neque eum!
        </p>
      </HomeSection>
      <HomeSection id="certifications" className="border-solid border-2">
        {/* Certifications */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          itaque impedit consequatur laborum architecto, consequuntur, facilis
          distinctio inventore dolores possimus velit tempora perferendis sit,
          ea similique deserunt repellat neque eum!
        </p>
      </HomeSection>
    </section>
  );
}
