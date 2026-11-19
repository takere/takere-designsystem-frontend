import { Spacing } from "@/features/Spacing";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("spacing");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Spacing />;
}
