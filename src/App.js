import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InsertForm from "./components/InsertForm";
import BooksContainer from "./components/Book/BooksContainer";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <InsertForm />
        <BooksContainer />
      </Container>
    </>
  );
}

export default App;
