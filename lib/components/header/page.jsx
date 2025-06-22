import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header>
      <ul className="flex justify-start items-center h-16 bg-blue-600 text-white px-4 space-x-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
