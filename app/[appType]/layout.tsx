import { notFound } from "next/navigation";
import Navbar from "@/components/NavBar";
import { SidebarMain } from "@/components/Sidebar-main";
import { getUser } from "@/stores/userStore";

type LayoutParams = Promise<{ appType: string }>;

export default async function RootAccountLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  const { appType } = await params;

  // Final runtime check
  if (
    appType !== "CUSTOMER_INDIVIDUAL".toLowerCase() &&
    appType !== "CUSTOMER_BUSINESS".toLowerCase()
  ) {
    notFound();
  }
  await getUser.refetch();
  return (
    <div className="grid grid-cols-5 min-h-screen">
      <aside className="col-span-1 sticky top-0 h-screen border-r bg-background">
        <SidebarMain appType={appType} />
      </aside>
      <main className="col-span-4 bg-secondary">
        <Navbar />
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
