import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Layout({children}) {
    const style= {minHeight:"1400px",marginTop:"120px",width:"100%"}
    return (
      <div style={{alignItems:"center",display:"flex",flexDirection:"column",width:"100%"}}>
      <Header/>
      <div style={style}>{children}</div>
      <Footer/>
      </div>
    );
}

export default Layout;