import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Swal from "sweetalert2";

const loginAlert = () => {
    Swal.fire({
      title: "Login Required",
      text: "กรุณาล็อคอินก่อนเข้าถึงข้อมูลและการให้บริการ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#ed6c02",
      focusConfirm: false,
    });
  };

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(1.5)" }}
  >
    •
  </Box>
);

const card1 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมโยธาธิการและผังเมือง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" , userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวงชนบท
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรุงเทพมหานคร
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} การรถไฟฟ้าแห่งประเทศไทย
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} บริษัทรถไฟฟ้ามหานคร
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมโยธาธิการและผังเมือง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวงชนบท
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรุงเทพมหานคร
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} การรถไฟฟ้าแห่งประเทศไทย
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} บริษัทรถไฟฟ้ามหานคร
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent>
    <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมโยธาธิการและผังเมือง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวงชนบท
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรุงเทพมหานคร
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} การรถไฟฟ้าแห่งประเทศไทย
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} บริษัทรถไฟฟ้ามหานคร
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card4 = (
  <React.Fragment>
    <CardContent>
    <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมโยธาธิการและผังเมือง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวงชนบท
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรมทางหลวง
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} กรุงเทพมหานคร
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} การรถไฟฟ้าแห่งประเทศไทย
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} บริษัทรถไฟฟ้ามหานคร
      </Typography>
    </CardContent>
  </React.Fragment>
);


export default function M2() {
    
  return (
    <div className={styles.image}>
      <Head>
        <title>Company Management</title>
        <meta name="description" content="Developed by Varobol Co,Ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className="ImHead1">
        <br/>
          <Typography variant="h3" gutterBottom component="b">
            Module 2
          </Typography>
            <br/>
          <Typography variant="h4" gutterBottom component="b">
            Project Management Professional (PMP)
          </Typography>
        </div>

        <Box sx={{ minWidth: 600, mt:2, mb:5 }}>
          <Typography variant="h4"sx={{color: 'white'}} gutterBottom component="b">
          <b>โปรแกรมบริหารโครงการ</b>
          </Typography>
          <br />
          <Typography variant="h6" sx={{color: 'white'}}gutterBottom component="b">
          <b>บริหารโครงการสำรวจความเป็นไปได้และผลกระทบสิ่งแวดล้อม</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card1}</Card>
          </Box>

          <Typography variant="h6"sx={{color: 'white'}} gutterBottom component="b">
          <b>บริหารโครงการสำรวจและออกแบบเพื่อการก่อสร้าง</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card2}</Card>
          </Box>

          <Typography variant="h6"sx={{color: 'white'}} gutterBottom component="b">
          <b>โครงการเวนคืนอสังหาริมทรัพย์</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card3}</Card>
          </Box>

          <Typography variant="h6" sx={{color: 'white'}} gutterBottom component="b">
            <b>บริหารโครงการควบคุมการก่อสร้าง</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card4}</Card>
          </Box>
        </Box>
      </main>
    </div>
  );
}
