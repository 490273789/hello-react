import React from 'react';
import { Suspense, lazy, ReactNode, useState, useEffect } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Loading from '@components/Loading';
import { isString } from '../utils/index';
import Layout from '@/layout';

export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}

interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element: React.ReactNode | string;
  index?: false;
  path: string;
  meta?: MetaProps;
  isLink?: string;
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    meta: { title: '首页' },
    children: [
      {
        path: '/',
        element: 'jsx',
        meta: { title: 'jsx' }
      },
      {
        path: '/event',
        element: 'event',
        meta: { title: '事件' }
      },
      {
        path: '/this',
        element: 'this',
        meta: { title: 'this' }
      },
      {
        path: '/state',
        element: 'state',
        meta: { title: 'state & props' }
      },
      {
        path: '/drag',
        element: 'drag',
        meta: { title: 'useDrag' }
      },
      {
        path: '/form',
        element: 'form',
        meta: { title: 'useForm' }
      },
      {
        path: '/animation',
        element: 'animation',
        meta: { title: 'useAnimation' }
      },
      {
        path: '/reactRoute',
        element: 'reactRouter',
        meta: { title: 'reactRoute' },
        children: [
          {
            path: 'pageOne',
            element: 'reactRouter.pageOne',
            meta: { title: 'pageOne' }
          },
          {
            path: 'pageTwo/:id',
            element: 'reactRouter.pageTwo',
            meta: { title: 'pageTwo' }
          },
          {
            path: 'pageThree',
            element: 'reactRouter.pageThree',
            meta: { title: 'pageThree' }
          }
        ]
      },
      {
        path: '/hooks',
        element: 'hooks',
        meta: { title: 'hooks' }
      },
      {
        path: '/use-callback',
        element: 'hooks.useCallbackDemo',
        meta: { title: 'useCallback' }
      },
      {
        path: '/ui-component',
        element: 'uiComponent',
        meta: { title: '自定义组件' }
      },
      {
        path: '/zustand',
        element: 'zustand',
        meta: { title: 'zustand' }
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

// 返回懒加载元素
const LazyElement = (path: string): ReactNode => {
  const allPath = path.split('.');
  const dir = allPath[0];
  const file = allPath.length === 2 ? allPath[1] : 'index';
  const ImportComponent = lazy(() => import(`@/views/${dir}/${file}.tsx`));
  return (
    <Suspense fallback={<Loading />}>
      <ImportComponent />
    </Suspense>
  );
};

// 将懒加载元素安装到routes中
const handleFilterElement = (routes: RouteObject[]) => {
  const res: RouteObject[] = [];
  routes.forEach((ele) => {
    const temp: RouteObject = { ...ele };
    if (ele.children?.length) temp.children = handleFilterElement(ele.children);
    if (isString(ele.element))
      temp.element = LazyElement(ele.element as string);
    res.push(temp);
  });
  return res;
};

const getChildRoute = (routes: RouteObject[], path: string) => {
  const queue: RouteObject[] = [...routes];
  while (queue.length > 0) {
    const route = queue.shift();
    if (route?.path === path) {
      return route?.children ?? [];
    }
    if (route?.children) {
      for (let i = 0, len = route?.children.length; i < len; i++) {
        queue.push(route?.children[i]);
      }
    }
    return [];
  }
};

export const useChildRoute = (path: string) => {
  const [route, setRoute] = useState<RouteObject[]>([]);
  useEffect(() => {
    const childRoute = getChildRoute(routes, path) ?? [];
    setRoute(childRoute);
  }, [path]);

  return route;
};

const route = handleFilterElement(routes);
const finalRoutes = createBrowserRouter(route);

export default finalRoutes;
