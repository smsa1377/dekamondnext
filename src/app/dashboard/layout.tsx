"use client"
import React, {useEffect} from "react";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/navigation";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) router.push("/auth");
    }, [user, router]);

    if (!user) return null;
    return <>{children}</>
}
