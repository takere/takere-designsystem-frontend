import { Feedback } from "@/features/Feedback";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("feedback");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Feedback />;
}
