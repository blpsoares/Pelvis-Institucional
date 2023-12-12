// import Accordion from "../../components/accordion";
import Container from "../../components/container";
import SpecCard from "../../components/specCard";

const Equipe = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{
          backgroundColor: "var(--verde1)",
        }}
      >
        <SpecCard />
        <SpecCard />
      </Container>
    </>
  );
};

export default Equipe;
