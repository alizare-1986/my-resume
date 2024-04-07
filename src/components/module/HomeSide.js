import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { GiRotaryPhone } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { MdSchool } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";

import styles from "./HomeSide.module.css";

const HomeSide = () => {
  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          borderBottom: "10px dotted blue",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src="/alizare.jpg"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            border: "5px solid green",
          }}
          priority="false"
          alt="name"
        />
        <h1
          style={{
            color: "green",
            fontWeight: "900",
            fontFamily: "monospace",
            marginTop: "15px",
          }}
        >
          علی عنایت زارع
        </h1>
        <h3 style={{ marginBottom: "30px", marginTop: "15px" }}>
          برنامه نویس فرانت اند
        </h3>
      </div>
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://github.com/alizare-1986"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <CgMail style={{ fontSize: "30px", color: "blue" }} />
          alianayatzare.a.a.1986@gmail.com
        </a>
        <a></a>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "15px",
          }}
        >
          <GiRotaryPhone style={{ fontSize: "30px", color: "blue" }} />
          9166410051(98+)
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "15px",
          }}
        >
          <CiLocationOn style={{ fontSize: "30px", color: "blue" }} />
          خوزستان ، دزفول
        </p>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          width: "450px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "450px",
            justifyContent: "center",
          }}
        >
          <IoPersonCircleOutline
            style={{ fontSize: "50px", color: "skyblue" }}
          />
          <span style={{ fontSize: "20px", color: "skyblue" }}>
            خلاصه رزومه
          </span>
          <span style={{ color: "skyblue" }}>
            -------------------------------
          </span>
        </p>
        <span
          style={{
            letterSpacing: "1px",
            lineHeight: "25px",
            fontFamily: "fantasy",
            marginTop: "20px",
            width: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          برنامه نویس FrontEnd با بیش از سه سال سابقه کار در زمینه طراحی و اجرای
          وب اپلیکیشن ها. علاقمند به چالشه ای جد ید و توس عه اپلیکی شن ها با
          تکنولوژی های جدید.
        </span>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          width: "450px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "450px",
            justifyContent: "center",
          }}
        >
          <GrLanguage style={{ fontSize: "30px", color: "skyblue" }} />

          <span style={{ fontSize: "20px", color: "skyblue" }}>زبان</span>
          <span style={{ color: "skyblue" }}>
            -----------------------------------------
          </span>
        </p>
        <div className={styles.tables}>
          <div className={styles.table}>
            <h2>مهارت</h2>
            <p>خواندن</p>
            <p>نوشتن</p>
            <p>گفتاری</p>
            <p>شنیداری</p>
          </div>
          <div className={styles.percent}>
            <h2>میزان</h2>
            <p>60%</p>
            <p>30%</p>
            <p>20%</p>
            <p>20%</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "450px",
            justifyContent: "center",
          }}
        >
          <MdSchool style={{ fontSize: "30px", color: "skyblue" }} />

          <span style={{ fontSize: "20px", color: "skyblue" }}>
            سوابق تحصیلی
          </span>
          <span style={{ color: "skyblue" }}>
            ------------------------------
          </span>
        </p>
        <div className={styles.educational}>
          <h2> کاردانی برق</h2>
          <p>گرایش:الکتروتکنیک</p>
          <p>خوزستان،دزفول</p>
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          width: "450px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "450px",
            justifyContent: "center",
          }}
        >
          <MdDeveloperMode style={{ fontSize: "30px", color: "skyblue" }} />

          <span style={{ fontSize: "20px", color: "skyblue" }}>مهارت ها</span>
          <span style={{ color: "skyblue" }}>
            -----------------------------------
          </span>
        </p>
        <div className={styles.tables}>
          <div className={styles.table}>
            <p>Html-css</p>
            <p>React.js</p>
            <p>Typescript</p>
            <p>Graphql</p>
          </div>
          <div>
            <p>javascript</p>
            <p>Next.js</p>
            <p>Tailwind</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSide;
