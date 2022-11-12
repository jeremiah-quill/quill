export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <div className="w-full bg-slate-800 text-slate-100">
        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
