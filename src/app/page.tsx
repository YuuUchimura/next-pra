import Parent from "@/components/Parent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TOP</h1>
      <Button variant="secondary" className="mx-5">
        Button
      </Button>
      {/* `@radix-ui/react-slot`によってLinkにButtonの見た目を渡せる。  */}
      <Button asChild>
        <Link href="/about">About</Link>
      </Button>
      <Parent initialCount={1} />
    </>
  );
}
