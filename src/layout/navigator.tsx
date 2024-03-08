import { useNavigate, useLocation } from 'react-router-dom';
import cs from 'classnames';
import style from '@/layout/index.module.scss';
import { useChildRoute } from '@/routes';

const Navigator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const childRoute = useChildRoute('/');

  const switchRoute = (path: string) => {
    navigate(path);
  };
  return (
    <div className={style['navigator']}>
      {childRoute.map((route) => {
        return (
          <div
            className={cs(
              style['nav-item'],
              location.pathname === route.path ? style.active : ''
            )}
            key={route.path}
            onClick={() => switchRoute(route.path)}
          >
            {route?.meta?.title}
          </div>
        );
      })}
    </div>
  );
};
export default Navigator;
