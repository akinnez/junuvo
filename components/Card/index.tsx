function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "w-full p-6 md:p-10 bg-white shadow-xl rounded-2xl border border-gray-100 " +
        className
      }
    >
      {children}
    </div>
  );
}
export default Card;
