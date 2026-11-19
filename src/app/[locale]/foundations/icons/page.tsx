import { Icons } from "@/features/Icons";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("icons");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Icons />;
}
