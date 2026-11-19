import { Patterns } from "@/features/Patterns";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("patterns");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Patterns />;
}
