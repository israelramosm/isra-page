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
      className={`w-full pl-4 pr-4 lg:pl-0 lg:pr-0 ${className}`}
    >
      <div className="mx-auto container border-solid border-2">{children}</div>
    </section>
  );
};

export default HomeSection;
