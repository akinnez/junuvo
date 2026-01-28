import { notFound } from "next/navigation";

type LayoutParams = Promise<{ accountType: string }>;

export default async function CreateUserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  const { accountType } = await params;

  // Final runtime check
  if (accountType !== "personal" && accountType !== "business") {
    notFound();
  }
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-5 my-10">
      <div className="text-button bg-avatar text-xs font-semibold py-1 px-2 rounded-full w-fit">
        {`${accountType}`.toUpperCase()} ACCOUNT
      </div>
      {children}
    </div>
  );
}
