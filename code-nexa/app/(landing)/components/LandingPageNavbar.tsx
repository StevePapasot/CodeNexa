import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/api";
import Link from "next/link";
import React from 'react'

async function LandingPageNavbar() {
  const user: User | null =await currentUser();

  console.log("USER", user);

  return <nav className="flex w-screen items-center justify-between p-6">
      <div>
        <Link
          className="text-3xl font-bold text-white no-underline "
          href="/"
        >
          CodeNexaLabs
        </Link>
      </div>
      <div className="text-black font-semibold text-lg">
        {user ? (
          <div className="flex flex-row gap-x-4 items-center">
            <Link href="/lead-magnets">
              <Button variant="outline">Open App</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
  </nav>;
}

export default LandingPageNavbar;