import { useNavigate } from 'react-router-dom';
import style from '@/layout/index.module.scss';
import { useChildRoute } from '@/routes';

const Navigator = () => {
  const navigate = useNavigate();
  const childRoute = useChildRoute('/');

  const switchRoute = (path: string) => {
    navigate(path);
  };
  return (
    <div className={style['navigator']}>
      {childRoute.map((route) => {
        return (
          <div
            className={style['nav-item']}
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
