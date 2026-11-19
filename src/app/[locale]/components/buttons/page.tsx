import { Buttons } from "@/features/Buttons";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("buttons");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Buttons />;
}
