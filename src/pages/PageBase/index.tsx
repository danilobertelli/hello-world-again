import { Outlet } from "react-router-dom";
import { Container, Footer, Header } from "../../components";

function PageBase() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default PageBase;
