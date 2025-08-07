import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM Project</h2>
        <Link href="/add-customer">Add customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">Next.js course | CRM Project &copy;</footer>
    </>
  );
}

export default Layout;
