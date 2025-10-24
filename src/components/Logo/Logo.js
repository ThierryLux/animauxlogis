import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  return (
    <section className="">

      <Link className="" href="/">
        <Image
          src="/logos/logo.png"
          alt={siteName}
          width={206}
          height={109}
          property
          />
      </Link>

    </section>
  );
}
