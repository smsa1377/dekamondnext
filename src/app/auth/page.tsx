import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styles from "./auth.module.scss";

export default function AuthPage() {
    return(
        <div className={styles.container}>
            <h2>Login Page</h2>
            <>
                <Input label="Email" type="email" placeholder="Email" required/>
                <Button type="submit">Login</Button>
            </>
        </div>
    )
}
