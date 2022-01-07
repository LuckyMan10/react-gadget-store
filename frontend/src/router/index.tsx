import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./appRoutes";
import { Home } from "pages/home";

const Router = () => {
  return (
    <main>
      <Routes>
        {appRoutes.map((page) => {
          return <Route key={page.name} element={page.Component} path={page.path} />;
        })}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};

export { Router };
