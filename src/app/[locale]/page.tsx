import { Overview } from "@/features/Overview";
import { initPage, type PageProps } from "@/lib/page";

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Overview />;
}
