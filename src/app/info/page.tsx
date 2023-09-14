import Parent from "@/components/Parent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Info</h1>
      <Button>
        <Link href="/">Top</Link>
      </Button>
      <Button>
        <Link href="/about">About</Link>
      </Button>
    </>
  );
}
