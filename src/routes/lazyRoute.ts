import { lazy } from "react";

import Jsx from "@/views/jsx";

const Event = lazy(() => import(`@/views/event`));
const This = lazy(() => import(`@/views/this`));
const State = lazy(() => import(`@/views/state`));
const Drag = lazy(() => import(`@/views/drag`));
const Form = lazy(() => import(`@/views/form`));
const Animation = lazy(() => import(`@/views/animation`));
const ReactRouter = lazy(() => import(`@/views/reactRouter`));
const PageOne = lazy(() => import(`@/views/reactRouter/pageOne`));
const PageTwo = lazy(() => import(`@/views/reactRouter/pageTwo`));
const PageThree = lazy(() => import(`@/views/reactRouter/pageThree`));
const Hooks = lazy(() => import(`@/views/hooks`));
const UseCallback = lazy(() => import(`@/views/hooks/useCallbackDemo`));
const UiComponent = lazy(() => import(`@/views/uiComponent`));
const Zustand = lazy(() => import(`@/views/zustand`));
const ReactSpring = lazy(() => import(`@/views/animation/react-spring`));
const UseGesture = lazy(() => import(`@/views/animation/use-gesture/index`));

const TransitionGroup = lazy(
  () => import(`@/views/animation/transition-group/index`),
);
const CusComponent = lazy(() => import(`@/views/cus-component`));
const Common = lazy(() => import(`@/views/common`));
const TimeSlice = lazy(() => import("@/views/performance/time-slice"));
const ContextTest = lazy(() => import("@/views/context/index"));

export {
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
  ContextTest,
};
