import { Route, Routes } from "react-router-dom";
import ListData from "../components/ListData";
import FormData from "../components/FormData";
import CardEjem from "../components/CardEjem";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ListData />} />
      <Route path="/form/:id" element={<FormData />} />
      <Route path="/ejem" element={<CardEjem />} />
    </Routes>
  );
};
