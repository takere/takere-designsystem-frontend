import { Forms } from "@/features/Forms";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("forms");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Forms />;
}
