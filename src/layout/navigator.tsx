import { useNavigate, useLocation } from "react-router-dom";

import cs from "classnames";

import style from "@/layout/index.module.scss";
import { routes } from "@/routes";

const Navigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const switchRoute = (path: string) => {
    navigate(path);
  };
  return (
    <div className={style["navigator"]}>
      {routes[0].children?.map((route) => {
        return (
          <div
            className={cs(
              style["nav-item"],
              location.pathname === route.path ? style.active : "",
            )}
            key={route.path}
            onClick={() => switchRoute(route.path!)}
          >
            {route?.meta?.title}
          </div>
        );
      })}
    </div>
  );
};
export default Navigator;
