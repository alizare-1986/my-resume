import HomeSide from "@/module/HomeSide";
import Homepage from "@/template/Homepage";

export default function Home() {
  return (
    <div style={{ display:"flex" ,flexDirection:"row"}}>
      <HomeSide />
      <Homepage />
    </div>
  );
}
