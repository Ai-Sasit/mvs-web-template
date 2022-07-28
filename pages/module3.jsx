import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

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

const card3 = (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรมโยธาธิการและผังเมือง
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรมทางหลวงชนบท
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรมทางหลวง
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรุงเทพมหานคร
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} การรถไฟฟ้าแห่งประเทศไทย
      </Typography>
      <Typography
        variant="body2"
        sx={{ cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} บริษัทรถไฟฟ้ามหานคร
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card4 = (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรมโยธาธิการและผังเมือง
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรมทางหลวงชนบท
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรมทางหลวง
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} กรุงเทพมหานคร
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} การรถไฟฟ้าแห่งประเทศไทย
      </Typography>
      <Typography
        variant="body2"
        sx={{ cursor: "pointer", userSelect: "none" }}
        onClick={loginAlert}
        component="div"
      >
        {bull} บริษัทรถไฟฟ้ามหานคร
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function M3() {

  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="body2"
          sx={{ cursor: "pointer", userSelect: "none" }}
          href="https://docdro.id/QvM30eX"
          component="a"
        >
          {bull} Company Profile
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="body2"
          sx={{ cursor: "pointer", userSelect: "none" }}
          href="https://docdro.id/9FEqTlF"
          component="a"
        >
          {bull} ผลงานบริษัท
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className={styles.image}>
      <Head>
        <title>Company Management</title>
        <meta name="description" content="Developed by Varobol Co,Ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className="ImHead2">
          <br />
          <Typography variant="h3" gutterBottom component="b">
            Module 3
          </Typography>
          <br />
          <Typography variant="h4" gutterBottom component="b">
            Enterprise Content Management (ECM)
          </Typography>
        </div>

        <Box sx={{ minWidth: 600, mt: 2, mb: 5 }}>
          <Typography
            variant="h4"
            sx={{ color: "white" }}
            gutterBottom
            component="b"
          >
            <b>โปรแกรมบริหารข้อมูลในองค์กร</b>
          </Typography>
          <br />
          <Typography
            variant="h6"
            sx={{ color: "white" }}
            gutterBottom
            component="b"
          >
            <b>ข้อมูล Company Profile</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card1}</Card>
          </Box>

          <Typography
            variant="h6"
            sx={{ color: "white" }}
            gutterBottom
            component="b"
          >
            <b>ข้อมูลโครงการต่างๆของบริษัทที่แล้วเสร็จแล้ว</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card2}</Card>
          </Box>

          <Typography
            variant="h6"
            sx={{ color: "white" }}
            gutterBottom
            component="b"
          >
            <b>ข้อมูลโครงการต่างๆของบริษัทที่ดำเนินการอยู่</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card3}</Card>
          </Box>

          <Typography
            variant="h6"
            sx={{ color: "white" }}
            gutterBottom
            component="b"
          >
            <b>ข้อมูลโครงการต่างๆของบริษัทที่คาดหวังในอนาคต</b>
          </Typography>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card4}</Card>
          </Box>
        </Box>
      </main>
    </div>
  );
}
