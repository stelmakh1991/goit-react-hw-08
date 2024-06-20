import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalCSS } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <GlobalCSS />
            <App />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);