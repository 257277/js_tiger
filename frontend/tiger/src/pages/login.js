import styles from "../styles/login.module.css";
import { auth } from "../script/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function login(req, res) {
    const router = useRouter();
    const [user, setuser] = useAuthState(auth)
    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
        const result = await signInWithPopup(auth, googleAuth);
        router.push("/addVendor");
    }
    useEffect(() => {
        console.log(user);
    }, [user])

    return (

        <div className={styles.container}>
            <h1 className={styles.Heading}>Login With Google</h1>
            <button className={styles.btn} onClick={login}>Login</button>
        </div>
    )
}