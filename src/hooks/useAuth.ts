"use client";

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {User} from "@/types/types";

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    const login = (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        router.push("/dashboard");
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/auth");
    };

    return {user, login, logout};
}
