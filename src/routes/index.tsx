import type { ReactNode } from "react";
import { Suspense } from "react";

import type { NonIndexRouteObject } from "react-router-dom";
import { Navigate, createBrowserRouter } from "react-router-dom";

import Loading from "@/components/Loading";

import Layout from "@/layout";

import {
  Jsx,
  Event,
  This,
  State,
  Drag,
  Form,
  Animation,
  ReactRouter,
  PageOne,
  PageTwo,
  PageThree,
  Hooks,
  UseCallback,
  UiComponent,
  Zustand,
  ReactSpring,
  UseGesture,
  TransitionGroup,
  CusComponent,
  Common,
  TimeSlice,
} from "./lazyRoute";

export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}

interface IRouteObject extends NonIndexRouteObject {
  children?: IRouteObject[];
  meta?: MetaProps;
}

export const routes: IRouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    meta: { title: "首页" },
    children: [
      {
        path: "/",
        element: <Jsx />,
        meta: { title: "jsx" },
      },
      {
        path: "/event",
        element: <Event />,
        meta: { title: "事件" },
      },
      {
        path: "/this",
        element: <This />,
        meta: { title: "this" },
      },
      {
        path: "/state",
        element: <State />,
        meta: { title: "state & props" },
      },
      {
        path: "/drag",
        element: <Drag />,
        meta: { title: "useDrag" },
      },
      {
        path: "/form",
        element: <Form />,
        meta: { title: "useForm" },
      },
      {
        path: "/animation",
        element: <Animation />,
        meta: { title: "useAnimation" },
      },
      {
        path: "/reactRoute",
        element: <ReactRouter />,
        meta: { title: "reactRoute" },
        children: [
          {
            path: "pageOne",
            element: <PageOne />,
            meta: { title: "pageOne" },
          },
          {
            path: "pageTwo/:id",
            element: <PageTwo />,
            meta: { title: "pageTwo" },
          },
          {
            path: "pageThree",
            element: <PageThree />,
            meta: { title: "pageThree" },
          },
        ],
      },

      {
        path: "/hooks",
        element: <Hooks />,
        meta: { title: "hooks" },
      },
      {
        path: "/use-callback",
        element: <UseCallback />,
        meta: { title: "useCallback" },
      },
      {
        path: "/ui-component",
        element: <UiComponent />,
        meta: { title: "自定义组件" },
      },
      {
        path: "/zustand",
        element: <Zustand />,
        meta: { title: "zustand" },
      },
      {
        path: "/react-spring",
        element: <ReactSpring />,
        meta: { title: "react-spring" },
      },
      {
        path: "/use-gesture",
        element: <UseGesture />,
        meta: { title: "use-gesture" },
      },
      {
        path: "/transition-group",
        element: <TransitionGroup />,
        meta: { title: "transition-group" },
      },
      {
        path: "cus-component",
        element: <CusComponent />,
        meta: { title: "cus-component" },
      },
      {
        path: "/common",
        element: <Common />,
        meta: { title: "common" },
      },
      {
        path: "/time-slice",
        element: <TimeSlice />,
        meta: { title: "time-slice" },
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

/**
 * 组件设置suspense
 * @param component
 * @returns
 */
const setRouteSuspense = (component: ReactNode): ReactNode => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};
const traversalRouter = (routes: IRouteObject[]) => {
  routes.forEach((route) => {
    if (route.element) route.element = setRouteSuspense(route.element);
    if (route.children) traversalRouter(route.children);
  });
};

traversalRouter(routes);
const finalRoutes = createBrowserRouter(routes);

export default finalRoutes;
