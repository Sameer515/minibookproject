//import CSS
import "./index.css";

//import Data books
import { data } from "./books";

//import fucnation Book where we get the books and render them in the page
import Book from "./Book";

function App() {
  return (
    <section className="App">
      {data.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

export default App;
