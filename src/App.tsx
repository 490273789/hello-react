import { Suspense } from "react";

import { RouterProvider } from "react-router";

// import ErrorBoundary from "./components/ErrorBoundary"
// import ErrorBoundary from "react-error-boundaries"
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import "cropperjs/dist/cropper.css";

import routes from "@/routes";

import Loading from "./components/Loading";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <RouterProvider router={routes} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
export default App;
