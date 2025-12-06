'use client'

//package import
import Image from "next/image";
import { usePathname } from "next/navigation";

//relative import
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthLayoutProps {
    children: React.ReactNode;
}


const AuthLayout = ({ children }: AuthLayoutProps) => {
    
    const pathname = usePathname();
    const isSignIn = pathname === '/sign-in';

    return <main className="bg-neutral-100 min-h-screen">
        <div className="mx-auto max-w-screen-2xl p-4">
            <nav className="flex justify-between items-center">
                <div className="flex items-center justify-between">
                    <Image src="/logo.svg" alt="logo" width={56} height={56} />
                    <h1 className="m-2 text-xl font-bold font-[cursive]">Workboard</h1>
                </div>
                <div>
                    <Button asChild variant="secondary">
                        <Link href={isSignIn? '/sign-up' : '/sign-in'}>
                            {isSignIn ? "Sign Up" : "Login"}
                        </Link>
                    </Button>
                </div>
            </nav>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-14">

                {children}
            </div>
        </div>
    </main>
}

export default AuthLayout;