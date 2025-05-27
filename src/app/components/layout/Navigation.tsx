import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full flex justify-center items-center py-4 bg-card backdrop-blur sticky top-0 z-20 border-b border-border px-4">
      <div className="flex gap-8 text-lg font-semibold">
        <Link href="/" className="hover:text-primary transition">
          Home
        </Link>
        <Link href="/work" className="hover:text-primary transition">
          My Work
        </Link>
        <Link href="/hire" className="hover:text-accent transition">
          Hire Me
        </Link>
        <Link href="/contact" className="hover:text-primary transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
