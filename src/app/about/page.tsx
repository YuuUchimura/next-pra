import Parent from "@/app/components/Parent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>About</h1>
      <Button variant="secondary" className="mx-5">
        Button
      </Button>
      <Button asChild>
        <Link href="/">TOP</Link>
      </Button>
    </>
  );
}
