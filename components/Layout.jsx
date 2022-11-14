import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-900 to-zinc-900">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="w-full text-slate-100 flex-1 pt-16">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
