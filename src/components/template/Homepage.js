import styles from "./HomePage.module.css"
import Link from "next/link"
const Homepage = () => {
  return (
    <div className={styles.container}>
    
    <div className={styles.Cvmy}>
     
      <h2><Link href={"/personal"}>اطلاعات فردی</Link></h2>
        <h2><Link href={"/projectsPage"}>پروژه ها</Link></h2>
        <h2><Link href={"/"}>سوابق شغلی</Link></h2>
    </div>
  </div>
  )
}

export default Homepage
