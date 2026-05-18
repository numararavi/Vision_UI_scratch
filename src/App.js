import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Vision UI Dashboard React example components
import Sidenav from "./examples/Sidenav";

// Vision UI Dashboard React themes
import theme from "./assets/theme";

// Vision UI Dashboard React routes
import routes from "./routes";

// Vision UI Dashboard React contexts
import { useVisionUIController, setMiniSidenav } from "./context";

export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Handle Sidenav Hover (Buka otomatis saat kursor masuk)
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Scroll ke atas setiap kali ganti halaman
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // Fungsi untuk merender Route secara dinamis dari routes.js
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route path={route.route} element={<route.component />} key={route.key} />;
      }
      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Sidebar hanya muncul jika layout-nya adalah 'dashboard' */}
      {layout === "dashboard" && (
        <Sidenav
          color={sidenavColor}
          brand=""
          brandName="VISION UI FREE"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      )}

      <Routes>
        {getRoutes(routes)}
        {/* Halaman default jika URL tidak ditemukan */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}