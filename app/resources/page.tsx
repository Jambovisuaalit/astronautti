import { sections } from "../content";
import { SectionPage } from "../section-page";

const section = sections.find((item) => item.slug === "resources")!;

export default function Page() {
  return <SectionPage section={section} />;
}
