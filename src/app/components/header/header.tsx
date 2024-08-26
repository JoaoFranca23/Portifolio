import Image from "next/image";

import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <Image
        src="/me.jpg"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
      />
      <div>
        <h1>Hi, i´m João França! 👋</h1>
        <h2>Frontend Developer</h2>
      </div>
    </div>
  );
}
