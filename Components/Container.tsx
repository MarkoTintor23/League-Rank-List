export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="max-w-5xl mx-auto p-4">{children}</main>;
}
