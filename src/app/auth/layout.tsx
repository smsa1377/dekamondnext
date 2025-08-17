"use client"
import {useEffect} from "react";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/navigation";

export default function AuthLayout({children}: { children: React.ReactNode }) {

    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) router.push("/dashboard");
    }, [user, router]);

    if (user) return null;
    return <>{children}</>;
}
