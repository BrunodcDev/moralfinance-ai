"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);
    return ( 
        <nav className="border-b border-solid px-8 py-4">
            <div className="flex justify-between items-center">
                {/* LOGO */}
                <div className="flex items-center gap-4">
                    <Image src="/Logo.png" width={173} height={39} alt="MoralFinance IA" />
                </div>

                {/* BOTÃO HAMBÚRGUER (VISÍVEL EM TELAS MENORES) */}
                <button
                    className="md:hidden block text-gray-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* MENU EM TELAS MAIORES */}
                <div className="hidden md:flex items-center gap-10">
                    <Link
                        href="/"
                        className={pathname === "/" ? "text-primary font-bold" : "text-muted-foreground"}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/transactions"
                        className={
                            pathname === "/transactions"
                                ? "text-primary font-bold"
                                : "text-muted-foreground"
                        }
                    >
                        Transações
                    </Link>
                    <Link
                        href="/subscription"
                        className={
                            pathname === "/subscription"
                                ? "text-primary font-bold"
                                : "text-muted-foreground"
                        }
                    >
                        Assinatura
                    </Link>
                    {/* Botão de Usuário (sempre visível em telas maiores) */}
                    <UserButton showName />
                </div>
            </div>

            {/* MENU EM TELAS MENORES */}
            <div className={`mt-4 md:hidden ${menuOpen ? "block" : "hidden"}`}>
                <Link
                    href="/"
                    className={pathname === "/" ? "block py-2 text-primary font-bold" : "block py-2 text-muted-foreground"}
                >
                    Dashboard
                </Link>
                <Link
                    href="/transactions"
                    className={
                        pathname === "/transactions"
                            ? "block py-2 text-primary font-bold"
                            : "block py-2 text-muted-foreground"
                    }
                >
                    Transações
                </Link>
                <Link
                    href="/subscription"
                    className={
                        pathname === "/subscription"
                            ? "block py-2 text-primary font-bold"
                            : "block py-2 text-muted-foreground"
                    }
                >
                    Assinatura
                </Link>
                {/* Botão de Usuário (apenas visível em telas pequenas) */}
                <div className="mt-4">
                    <UserButton showName />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;