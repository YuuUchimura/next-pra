import Parent from "@/components/Parent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>About</h1>
      <Button variant="secondary" className="mx-5">
        Button
      </Button>
      <Button asChild>
        <Link href="/">TOP</Link>
      </Button>
      <Button asChild>
        <Link href="/info">Info</Link>
      </Button>
    </>
  );
}
