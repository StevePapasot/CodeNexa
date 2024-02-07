import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/api";
import Link from "next/link";
import React from 'react'

async function LandingPageNavbar() {
  const user: User | null =await currentUser();

  console.log("USER", user);

  return <nav className="flex w-screen items-center justify-between p-6">
      {/* <div>
        <img src="../code-nexa/components/images/3.png" alt="CodeNexa-Logo" className="h-8" />
      </div> */}
      <div>
        <Link
          className="text-2xl font-bold text-black-500 no-underline"
          href="/"
        >
          CodeNexaLabs
        </Link>
      </div>
      <div className="text-black-500 font-semibold text-lg">
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