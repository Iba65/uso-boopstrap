import { Route, Routes } from "react-router-dom";
import ListData from "../components/ListData";
import FormData from "../components/FormData";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ListData />} />
      <Route path="/form/:idf" element={<FormData />} />
      <Route path="/nuevo" element={<FormData />} />
    </Routes>
  );
};
