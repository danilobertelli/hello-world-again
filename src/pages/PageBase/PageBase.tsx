import { Outlet } from "react-router-dom";
import { Container, Footer, Header } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../contexts";

const PageBase = () => {
  const context = useContext(AppContext);
  const creator = context?.creator;

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer creator={creator} />
    </>
  );
};

export { PageBase };
