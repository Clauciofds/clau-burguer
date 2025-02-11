import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { makeRequest } from "./utils/makeRequest";



export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        loader={() => makeRequest('/products', 'GET')}
        element={
          <CreatePage>
            <Home />
          </CreatePage>
        } />
      <Route
        path="/cart"
        loader={() => makeRequest('/cart', 'GET')}
        element={
          <CreatePage>
            <Cart />
          </CreatePage>
        } />
    </Route>
  ))

function CreatePage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


