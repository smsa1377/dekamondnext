"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema, LoginSchema} from "@/lib/validation";
import {useAuth} from "@/hooks/useAuth";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styles from "./auth.module.scss";
import {UserResponse} from "@/types/types";

export default function AuthPage() {
    const {login} = useAuth();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async () => {
        const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
        // const res = await fetch("/data/api.json");
        const data: UserResponse = await res.json();
        const user = data.results[0];
        login(user);
        //     const data = await res.json();
        //     const user = data.results[0];
        //     login({
        //         name: user.name,
        //         email: user.email,
        //     });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h2 className={styles.h2}>Login Page</h2>
                <Input
                    label="Phone Number"
                    placeholder="09123456789"
                    type="text"
                    {...register("phone")}
                    error={errors.phone?.message}
                />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </Button>
            </form>
        </div>
    )
}
