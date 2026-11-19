import { Colors } from "@/features/Colors";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("colors");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Colors />;
}
