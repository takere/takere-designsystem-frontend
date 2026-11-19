import { Typography } from "@/features/Typography";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("typography");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Typography />;
}
