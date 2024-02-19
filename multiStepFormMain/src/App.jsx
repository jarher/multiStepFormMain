import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserStatesProvider from "./Providers/userStatesProvider.jsx";

const UserInfo = lazy(() => import("./pages/UserInfo/UserInfo"));
const Plan = lazy(() => import("./pages/Plan/Plan"));
const AddOns = lazy(() => import("./pages/AddOns/AddOns"));
const Summary = lazy(() => import("./pages/Summary/Summary"));
const Confirm = lazy(() => import("./pages/Confirm/Confirm"));

function App() {
  return (
    <main className="main">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Navbar />
      <Router>
        <UserStatesProvider>
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
        </UserStatesProvider>
      </Router>
    </main>
  );
}

export default App;
