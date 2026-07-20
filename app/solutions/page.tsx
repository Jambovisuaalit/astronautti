import { sections } from "../content";
import { SectionPage } from "../section-page";

const section = sections.find((item) => item.slug === "solutions")!;

export default function Page() {
  return <SectionPage section={section} />;
}
