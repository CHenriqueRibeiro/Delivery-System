import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./app.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Logo from "./components/Logo/logo";
import Input from "./components/Input/input";
import Menu from "./components/Menu/menu";

export default function App() {
  return (
    <>
      <Header />
      <Logo />
      <Input />
      <Menu />
      
      <Footer />
    </>
  );
}
