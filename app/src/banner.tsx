import React from "react";
import logo from "../logoWhite.png";
import Link from "next/link";
import Image from "next/image";

export function TopBanner() {
  return (
    <div className="top-banner">
      <Link href="/">
        <Image src={logo} alt="LonteStat Logo" width={150} height={150} />
      </Link>
      <Link href="/about">About</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/packages">Packages & Pricing</Link>
      <Link href="/princess-tea-parties">Princess Tea Parties</Link>
      <Link href="/corporate-community">Corporate & Community</Link>
      <button>Events</button>
      <button>Contact</button>
      <button>Apply</button>
    </div>
  );
}
