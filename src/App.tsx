import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorBoundary"
// import ErrorBoundary from "react-error-boundaries"
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import Loading from "./components/Loading";
import routes from "@/routes";
import "cropperjs/dist/cropper.css";

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
