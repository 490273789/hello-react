import { useNavigate, createSearchParams, Outlet } from "react-router-dom";
export default function RouteIndex() {
  const navigate = useNavigate();

  const handleJump1 = () => {
    const a = {
      name: "wsv",
      age: "18",
    };
    navigate({
      pathname: "/reactRoute/pageOne",
      search: `?${createSearchParams(a)}`,
    });
  };

  const handleJump2 = () => {
    const id = 1;
    // 动态传参
    navigate(`/reactRoute/pageTwo/${id}`);
  };

  const handleJump3 = () => {
    navigate("/reactRoute/pageThree", { state: { id: 8 } });
  };

  return (
    <div>
      <div className="content-title">路由跳转</div>
      <div className="common_button" onClick={handleJump1}>
        跳转search方式
      </div>
      <div className="common_button" onClick={handleJump2}>
        跳转params方式
      </div>
      <div className="common_button" onClick={handleJump3}>
        跳转state方式
      </div>
      <Outlet />
    </div>
  );
}
