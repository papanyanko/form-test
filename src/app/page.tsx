import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-evenly">
        <Link href="/controlled">controlled</Link>
        <Link href="/rhf">rhf</Link>
        <Link href="/uncontrolled">uncontrolled</Link>
        <Link href="/server-action">server-action</Link>
      </div>
    </main>
  );
}
