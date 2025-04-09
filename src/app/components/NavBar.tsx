'use client';
import { useState } from "react";
import { Menu } from "../icons/Menu";
import { Closing } from "../icons/Closing";
import { Button } from "./Button";
import { InlineLink } from "./InlineLink";
import { Logo } from "../icons/Logo";

type NavItem = {
  name: string;
  link: string;
};

type NavbarProps = {
  signInLink: string;
  signUpLink: string;
  navItems: NavItem[];
  pathname?: string;
};

export function Navbar({ navItems, signInLink, signUpLink, pathname }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 grid w-full grid-cols-[1fr_1fr] md:grid-cols-[0.5fr_3fr_1.5fr] items-center gap-4">
        <div className="text-violet-600 font-bold text-xl">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center justify-between ml-4">
          {navItems.map((item) => (
            <InlineLink key={item.name} href={item.link} pathname={pathname}>
              {item.name}
            </InlineLink>
          ))}
        </nav>

        <div className="flex justify-end items-center">
          <div className="hidden md:flex gap-5 items-center">
            <InlineLink href="#">Sign in</InlineLink>
            <Button>Sign up</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="fixed inset-0 z-50 w-full bg-gray-900/90">
          <div className="bg-white w-[calc(100%-10px)] max-w-[768px] p-6 m-[5px] rounded-xl shadow-xl relative flex flex-col gap-4">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <Closing className="w-6 h-6 text-gray-800" />
            </button>

            <div className="text-violet-600 text-2xl font-bold mb-4">
              <Logo />
            </div>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <InlineLink key={item.name} href={item.link}>
                  {item.name}
                </InlineLink>
              ))}
            </nav>

            <Button className="mt-4 w-full"><InlineLink variant="light" href={signUpLink}>Sign up</InlineLink></Button>

            <p className="text-center text-sm text-gray-500">
              Existing customer?{" "}
              <InlineLink href={signInLink} className="font-medium">
                Login
              </InlineLink>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
