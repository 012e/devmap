export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-4">{children}</div>
    </div>
  );
}
