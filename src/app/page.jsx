import Are from "@/components/are/Are";
import Footer from "@/components/footer/Footer";
import Info from "@/components/info/Info";
import Navbar from "@/components/navbar/Navbar";
import Number from "@/components/number/Number";
import White from "@/components/white/White";

export default function Home() {
  return(
    <div>
      <Navbar />
      <Footer />
      <Info />
      <Number />
      <Are />
      <White />
    </div>
  )
}