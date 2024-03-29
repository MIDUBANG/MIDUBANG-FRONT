import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@style/reset.css";
import { CookiesProvider } from "react-cookie";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "@store/store";
import UseScrollToTop from "@hooks/UseScrollToTop";

import { persistor } from "@store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <UseScrollToTop />
          <App />
          {/* <BottomNavbar></BottomNavbar> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </CookiesProvider>,
);
