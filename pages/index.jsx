import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/image/logo.png";
import VBLogo from "../assets/image/VBlogo.png";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div className={styles.image}>
      <Head>
        <title>Company Management</title>
        <meta name="description" content="Developed by Varobol Co,Ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <img src={Logo.src} alt="GG"className="logo" />
        <Typography variant="h4" component="b" sx={{mt:2, color: '#FFFFFF'}}>
          COMPANY MANAGEMENT
        </Typography>
        <Typography variant="h6" sx={{color:"#ffffff"}} component="div">
          Developed by Varobol Co,Ltd <img src={VBLogo.src} alt="sss" style={{height: "3vmin" , mb:"-0.5vmin"}} />
        </Typography>
        <Button variant="contained" color="warning" size="large" sx={{ mt: 3 }} href="/aboutUs">
          เข้าสู่ระบบ
        </Button>
      </main>
    </div>
  );
}
