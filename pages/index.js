import { useEffect, useState } from "react";
import { Info } from "../components/Info";
import { Login } from "../components/Login";
import MainLayout from "../components/MainLayout";
import { Photo } from "../components/Photo";
import styles from '../styles/Home.module.css'




export default function Home() {

  const [isLogin, setIsLogin] = useState(true);
  const [isInfo, setIsInfo] = useState(true);

  return (
    <MainLayout>
      <div className={styles.container}>
        {isLogin
          ? <Login setIsLogin={setIsLogin} />
          : isInfo ? <Info setIsInfo={setIsInfo} />
            : <Photo />}
      </div>
    </MainLayout>

  )
}
