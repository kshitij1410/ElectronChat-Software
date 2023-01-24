// import React from "react";
// // import { ipcRenderer } from "electron";

// export default function App()
// {
//     const temp="from App.js ";
//     const solve=temp+"file";
//     // const sendNotification = ()=>{
//     //     ipcRenderer.send('notify',"my custom notification");
//     // }
//     // const sendNotification  = ()=>{
//     //     window.sendNotification('You are hacked');
//     // }

//     const sendNotification = ()=>{
//         electron
//         .notificationApi
//         .sendNotification("my custom message" , 'ipcRenderer.send("notify","Harmful code!!!")');

//     }

//     return (
//         <>
//         <h1> {solve}</h1>
//         <button onClick={sendNotification}>Send Notification</button>
//         </>
//     );
// }

import React, { useEffect } from "react";
import HomeView from "./views/Home.js";
import SettingView from "./views/Setting";
// import Navbar from "./components/Navbar";
import ChatView from "./views/Chat";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Provider } from "react-redux";
import WelcomeView from "./views/Welcome";
// import configureStore from "./store";
import { listenToAuthChanges } from "./actions/auth.js";
import { useDispatch, useSelector } from "react-redux";
import StoreProvider from "./store/StoreProvider";
import LoadingView from "./components/shared/LoadingView";
import { listenToConnectionChanges } from "./actions/app";
// const store = configureStore();

const ContentWrapper = ({ children }) => (
  <div className="content-wrapper">{children}</div>
);

//Private Route
function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const user = useSelector(({ auth }) => auth.user);
  const isOnline = useSelector(({ app }) => app.isOnline);

  const alertOnlineStatus = () => {
    window.alert(navigator.onLine ? "online" : "offline");
  };

  useEffect(() => {
    dispatch(listenToAuthChanges());
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());

    return () => {
      unsubFromAuth();
      unsubFromConnection();
    };
  }, [dispatch]);

  if (isChecking) {
    return <LoadingView />;
  }

  if (!isOnline) {
    return (
      <LoadingView message="Application has been disconnected from the internet. Please reconnect..." />
    );
  }

  return (
    <Router>
      <ContentWrapper>
        <Routes>
          <Route path="/" exact element={<WelcomeView />} />
          <Route
            path="/home"
            exact
            element={
              <PrivateRoute isAuthenticated={user}>
                <HomeView />
              </PrivateRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <PrivateRoute isAuthenticated={user}>
                <SettingView />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <PrivateRoute isAuthenticated={user}>
                <ChatView />
              </PrivateRoute>
            }
          />
        </Routes>
      </ContentWrapper>
    </Router>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  );
}

// export default function App() {

//    useEffect(()=>{
//     store.dispatch(listenToAuthChanges());
//    },[])

//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <div className="content-wrapper">
//           <Routes>
//             <Route path="/" exact element={<WelcomeView />} />

//             <Route path="/home" exact element={<HomeView />} />

//             <Route path="/setting" element={<SettingView />} />
//             {/* <Route path="/login" element={<LoginView />} /> */}
//             <Route path="/chat/:id" element={<ChatView />} />

//             {/* <Route path="/register" element={<RegisterView />} /> */}
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// }
