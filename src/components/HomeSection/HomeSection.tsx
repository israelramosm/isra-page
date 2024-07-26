const HomeSection = ({
  children,
  id,
  className,
}: Readonly<{
  children?: React.ReactNode;
  id: string;
  className?: string;
}>) => {
  return (
    <section
      id={id}
      className={`w-full pl-4 pr-4 md:pl-8 md:pr-8 xl:pl-0 xl:pr-0 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default HomeSection;
