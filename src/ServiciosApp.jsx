import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { InicioPage } from "./pages/InicioPage";
import { NosotrosPage } from "./pages/NosotrosPage";
import { ServiciosPage } from "./pages/ServiciosPage";
import { GaleriaPage } from "./pages/GaleriaPage";
import { ContactoPage } from "./pages/ContactoPage";

export const ServiciosApp = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/inicio" element={<InicioPage></InicioPage>}></Route>
        <Route path="/nosotros" element={<NosotrosPage></NosotrosPage>}></Route>
        <Route path="/servicios" element={<ServiciosPage></ServiciosPage>}></Route>
        <Route path="/galeria" element={<GaleriaPage></GaleriaPage>}></Route>
        <Route path="/contacto" element={<ContactoPage></ContactoPage>}></Route>
        <Route path="/*" element={<Navigate to='/servicios'/>}></Route>
      </Routes>
    </>
  );
};
