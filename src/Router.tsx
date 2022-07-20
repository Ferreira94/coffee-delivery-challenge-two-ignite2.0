import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

import { Home, Cart } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
