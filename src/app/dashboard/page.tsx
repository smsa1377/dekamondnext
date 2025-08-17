"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/hooks/useAuth";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) router.push("/auth");
    }, [user, router]);

    if (!user) return null;

    return (
        <div className={styles.container}>
            <h1>Welcome to the Dashboard</h1>
            <p>
                Hello, {user?.name?.first} {user?.name?.last} ({user?.email})
            </p>
        </div>
    );
}
