import PageHeader from "../PageHeader/PageHeader";

const HomeSection = ({
  children,
  id,
  title,
}: Readonly<{
  children?: React.ReactNode;
  id: string;
  title: string;
}>) => {
  return (
    <section id={id} className="border-solid border-2 w-full">
      <PageHeader title={title} />
      {children}
    </section>
  );
};

export default HomeSection;
