import { Outlet } from "react-router-dom"
import style from "./index.module.scss"
import Navigator from "@/layout/navigator"

const Layout = () => {
  return (
    <div className={style["layout-wrap"]}>
      <div className={style["left-part"]}>
        <div className={style["title"]}>REACT</div>
        <Navigator />
      </div>
      <div className={style["right-part"]}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
