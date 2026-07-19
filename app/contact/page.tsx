import { sections } from "../content";
import { SectionPage } from "../section-page";

const section = sections.find((item) => item.slug === "contact")!;

export default function Page() {
  return <SectionPage section={section} />;
}
