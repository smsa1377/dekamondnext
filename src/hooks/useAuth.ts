"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {User} from "@/types/types";
import {toast} from "react-toastify"

export function useAuth() {
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== "undefined") {
            const savedUser = localStorage.getItem("user");
            return savedUser ? JSON.parse(savedUser) : null;
        }
        return null;
    });
    const router = useRouter();

    const login = (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        router.push("/dashboard");
        toast.success("successfully logged in!");
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/auth");
    };

    return {user, login, logout};
}
