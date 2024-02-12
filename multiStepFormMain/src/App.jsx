import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const UserInfo = lazy(() => import("./pages/UserInfo/UserInfo"));
const Plan = lazy(() => import("./pages/Plan/Plan"));
const AddOns = lazy(() => import("./pages/AddOns/AddOns"));
const Summary = lazy(() => import("./pages/Summary/Summary"));
const Confirm = lazy(() => import("./pages/Confirm/Confirm"));

function App() {
  return (
    <main className="main">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <UserInfo />
              </Suspense>
            }
          />
          <Route
            path="/plan"
            element={
              <Suspense fallback={<></>}>
                <Plan />
              </Suspense>
            }
          />
          <Route
            path="/addons"
            element={
              <Suspense fallback={<></>}>
                <AddOns />
              </Suspense>
            }
          />
          <Route
            path="/summary"
            element={
              <Suspense fallback={<></>}>
                <Summary />
              </Suspense>
            }
          />
          <Route
            path="/confirm"
            element={
              <Suspense fallback={<></>}>
                <Confirm />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
