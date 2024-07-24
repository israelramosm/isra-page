const SectionHeader = ({ title, className }: { title: string, className?: string }) => (
  <header className={className}>
    <h1 className="py-8">{title}</h1>
  </header>
);

export default SectionHeader;
