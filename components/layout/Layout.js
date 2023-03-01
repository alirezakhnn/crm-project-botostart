import Link from "next/link";

function Layout({children})  {
    return(
        <>
            <header className="header">
                <h2>Botostart CRM</h2>
                <Link href="/add-customer">Add Customer</Link>
            </header>
            <main className="main">{children}</main>
            <footer className="footer">
                <a href="https://botostart.ir" target="_blank" rel="noreferrer">Botostart</a> Next.js Course | CRM Project &copy;
            </footer>
        </>
    );
}

export default Layout;