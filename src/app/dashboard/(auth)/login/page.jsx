"use client"
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'


const Login = () => {
const session = useSession();
const router = useRouter();





useEffect(() => {
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }
}, [session.status, router]);

if(session.status === "loading"){
  return <p>Loading...</p>
}

const handleSubmit= async(e)=>{
    e.preventDefault()

    const email = e.target[0].value
    const password= e.target[1].value

    signIn("credentials",{email, password,
      callbackUrl:"/dashboard"
    })

  }



  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <input type="email" placeholder='email' name="username" id="" className={styles.input} required />
        <input type="password" placeholder='password' name="username" id="" className={styles.input} required />

        <button className={styles.button}>Login</button>
      </form>
      

      <button onClick={() => signIn("google")}>Longin with Google</button>
    </div>
  )
}

export default Login;
