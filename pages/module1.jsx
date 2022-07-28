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
        {bull} แผนกออกแบบ/ประมาณราคา
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" , userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} แผนกสำรวจ
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} แผนกควบคุมงาน
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} แผนกเวนคืนอสังหาริมทรัพย์
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} แผนกเขียนแบบ AutoCAD
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} แผนกการเงิน/การบัญชี
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} แผนกทรัพยากรบุคคล
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} แผนกธุรการ
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่อง PC ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่อง Notebook ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่อง Printer ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่องถ่ายเอกสาร ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} อุปกรณ์เสริม ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่อง PC ใน Site งาน
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่อง Notebook ใน Site งาน
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่อง Printer ใน Site งาน
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} เครื่องถ่ายเอกสาร ใน Site งาน
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} อุปกรณ์เสริม ใน Site งาน
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent>
    <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} รถยนต์ ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} รถมอเตอร์ไซค์ ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 , cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} รถยนต์ ใน Site งาน
      </Typography>
      <Typography variant="body2" sx={{cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} รถมอเตอร์ไซค์ ใน Site งาน
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card4 = (
  <React.Fragment>
    <CardContent>
    <Typography variant="body2" sx={{ mb: 1 ,cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} ในสำนักงานใหญ่
      </Typography>
      <Typography variant="body2"sx={{ cursor: "pointer", userSelect:"none"}} onClick={loginAlert} component="div">
        {bull} ใน Site งาน
      </Typography>
    </CardContent>
  </React.Fragment>
);


export default function M1() {
    
  return (
    <div className={styles.image}>
      <Head>
        <title>Company Management</title>
        <meta name="description" content="Developed by Varobol Co,Ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className="ImHead">
        <br/>
          <Typography variant="h3" gutterBottom component="b">
            Module 1
          </Typography>
            <br/>
          <Typography variant="h4" gutterBottom component="b">
            ERP/ERM software
          </Typography>
        </div>

        <Box sx={{ minWidth: 600, mt:2, mb:5 }}>
          <Typography variant="h4"sx={{color: 'white'}} gutterBottom component="b">
          <b>โปรแกรมบริหารภายในองค์กร</b>
          </Typography>
          <br />
          <Typography variant="h6" sx={{color: 'white'}}gutterBottom component="b">
          <b>บริหารทรัพยากรบุคคล</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card1}</Card>
          </Box>

          <Typography variant="h6"sx={{color: 'white'}} gutterBottom component="b">
          <b>บริหารอุปกรณ์คอมพิวเตอร์</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card2}</Card>
          </Box>

          <Typography variant="h6"sx={{color: 'white'}} gutterBottom component="b">
          <b>บริหารอุปกรณ์คอมพิวเตอร์</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card3}</Card>
          </Box>

          <Typography variant="h6" sx={{color: 'white'}} gutterBottom component="b">
            <b>บริหารอุปกรณ์คอมพิวเตอร์</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card4}</Card>
          </Box>
        </Box>
      </main>
    </div>
  );
}
