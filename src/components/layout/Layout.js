import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NextAuthProvider from "@/providers/NextAuthProvider";

function Layout({ children }) {
  const style = { minHeight: "1400px", marginTop: "120px", width: "100%" };
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <NextAuthProvider>
        <Header />
        <div style={style}>{children}</div>
        <Footer />
      </NextAuthProvider>
    </div>
  );
}

export default Layout;
