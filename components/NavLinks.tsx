import Link from "next/link";

const NavLinks = () => (
  <>
    <Link href="/projects" className="hover:text-blue-600">
      Projekt
    </Link>
    <Link href="/about" className="hover:text-blue-600">
      Om mig
    </Link>
    <Link href="/contact" className="hover:text-blue-600">
      Kontakt
    </Link>
  </>
);

export default NavLinks;
