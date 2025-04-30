import "./global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from 'sonner'

export function App() {
  return (
    <HelmetProvider>
      <Helmet 
        titleTemplate="%s | pizza.shop" 
        defaultTitle="Pizza Shop" 
      />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
