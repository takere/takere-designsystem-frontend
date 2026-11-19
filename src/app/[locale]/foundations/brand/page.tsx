import { Brand } from "@/features/Brand";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("brand");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Brand />;
}
