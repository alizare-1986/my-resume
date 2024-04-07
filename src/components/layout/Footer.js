import styles from "@/layout/Footer.module.css";
function Footer() {
  return (
    <footer
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border:"2px solid silver",
        backgroundColor: "blue",
        height:"60px",
        borderRadius:"20px",
        marginBottom:"10px"
      }}
    >
      &copy; My-CV
      <br></br>
      <div>
        made in...
        <a
          className=" text-blue-500"
          href={"https://github.com/alizare-1986"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          @AliEnayatZare
        </a>
      </div>
    </footer>
  );
}

export default Footer;
