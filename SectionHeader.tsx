type SectionHeaderProps = {
  title: string;
  text: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  title,
  text,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${align === "left" ? "align-left" : ""}`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
