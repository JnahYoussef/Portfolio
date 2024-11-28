"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Accueil",
        path: "/",
    },
    {
        name: "A propos",
        path: "/about",
    },
    {
        name: "Projets",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const Nav = () => {
  const pathname = usePathname();
    return (
    <nav className="flex gap-12">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}> 
                    {link.name}
                </Link>
            );
        })}
    </nav>
  )
}

export default Nav;