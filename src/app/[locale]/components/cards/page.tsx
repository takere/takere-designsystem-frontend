import { Cards } from "@/features/Cards";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("cards");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Cards />;
}
