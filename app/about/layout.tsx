import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <h2>Select subitem</h2>
        <ul>
          <li>
            <Link href="/about/bio">Biography</Link>
          </li>
          <li>
            <Link href="/about/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
      <main>{children}</main>
    </>
  );
}
