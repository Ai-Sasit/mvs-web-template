import Head from "next/head";
import * as React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

import Im1 from "../assets/image/im1.png";
import Im2 from "../assets/image/im2.png";
import Im3 from "../assets/image/im3.png";
import Im4 from "../assets/image/im4.png";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import Swal from "sweetalert2";

export default function AboutUs() {
  const card = (
    <React.Fragment>
      <CardContent sx={{ color: "white" }}>
        <Typography variant="h5" component="div">
          ติดต่อเรา
        </Typography>
        <Typography>
          111/83 ถนนนครสวรรค์ แขวงวัดโสมนัส เขตป้อมปราบศัตรูพ่าย กรุงเทพฯ 10100
          โทรศัพท์ : (02) 281-1981 โทรสาร : (02) 629-8936
        </Typography>
      </CardContent>
    </React.Fragment>
  );

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

  return (
    <div className={styles.image}>
      <Head>
        <title>Company Management</title>
        <meta name="description" content="Developed by Varobol Co,Ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main
        style={{
          minHeight: "92vh",
          justifyItems: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: "70vw", mt: 5 }}
        >
          <Typography variant="h4"  sx={{color:"#ffffff"}} gutterBottom component="b">
            About Us
          </Typography>
          <Typography variant="body1" sx={{color:"#ffffff"}}gutterBottom>
            บริษัท เอ็ม.วี.เอส. คอนซัลแท้นส์ จำกัด ได้ก่อตั้งขึ้นเมื่อวันที่ 21
            พฤษภาคม 2535 โดยมีวัตถุประสงค์หลักคือ
            ให้บริการรับเป็นที่ปรึกษาและสํารวจออกแบบงานด้าน
            วิศวกรรมโยธาและในปัจุบันบริษัทฯ มีบุคลากรหลัก
            วิศวกรหลักที่มีประสบการณ์ ในแต่ละสาขาของวิศวกรรมโยธา
            และบุคลากรสนับสนุน ที่มีประสิทธิภาพ รวมทั้งได้มี
            การนําเอาเทคโนโลยีอุปกรณ์เครื่องมือที่ทันสมัยใหม่
            และโปรแกรมคอมพิวเตอร์มาใช้ พัฒนาการทำงานให้ดีขึ้นตลอดเวลา
            การบริหารงานของบริษัทฯ มีการบริหารงานโดย คณะกรรมการ
            เป็นผู้กําหนดนโยบายการบริหาร และมีกรรมการผู้จัดการ เป็นผู้ควบคุม
            การดําเนินการตามนโยบาย โดยมีการแบ่งสายงานออกเป็นฝ่ายต่างๆ
            ตามลักษณะของ งานและความเชี่ยวชาญของแต่และสาขา
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: "20%", mt: 2 }}
            onClick={loginAlert}
          >
            Company Projects
          </Button>
        </Box>
        <Typography
          variant="h4"
          gutterBottom
          component="b"
          sx={{ mt: 3,color:"white" }}
        >
          Company Management
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ mt: 1 }}
        >
          <Card sx={{ maxWidth: 300, textAlign: "center" }}>
            <CardActionArea href="/module1">
              <CardMedia
                component="img"
                height="140"
                image={Im1.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ส่วนที่ 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  โปรแกรมบริหารภายในองค์กร ERP/CRM Software
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300, textAlign: "center" }}>
            <CardActionArea href="/module2">
              <CardMedia
                component="img"
                height="140"
                image={Im2.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ส่วนที่ 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  โปรแกรมบริหารโครงการ Project management Professional (PMP)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300, textAlign: "center" }}>
            <CardActionArea href="/module3">
              <CardMedia
                component="img"
                height="140"
                image={Im3.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ส่วนที่ 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  โปรแกรมบริหารข้อมูลในองค์กร Enterprise Content Management
                  (ECM)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300, textAlign: "center" }}>
            <CardActionArea href="/module4">
              <CardMedia
                component="img"
                height="140"
                image={Im4.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ส่วนที่ 4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  โปรแกรมจัดเก็บข้อมูลให้กลายเป็น ข้อมูลดิจิตอล Digital Process
                  Automation (DPA)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        <Card
          variant="outlined"
          sx={{
            mt: 5,
            marginBottom: 5,
            width: "70vw",
            backgroundColor: "#00000099",
          }}
        >
          {card}
        </Card>
      </main>
    </div>
  );
}
