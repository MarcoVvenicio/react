import { useState} from 'react';
import './App.css';
import Book from '../src/components/Book/Book';
import Img from '../src/components/Book/Img';


function App() {


const [books, setBooks ] = useState(
  [
    {
      nome:"A descoberta do mundo",
      autor:"Clarice Lispector",
      paginas:"480",
      imagem: Img
      
    },
    {
      nome:"Gênero e desigualdades",
      autor:"Flávia Biroli",
      paginas:"210"
    },
  ]);
  
  

  const onHandleBook = (event) => {
    event.preventDefault(event);
    const newBooks = [...books,
    {
      nome: event.target.nome.value,
      autor: event.target.autor.value,
      paginas: event.target.paginas.value
    }
  ];
    setBooks(newBooks);
  }


  return (
    <div className="App">

      <h1>Meu primeiro exemplo React</h1>

      <form onSubmit={onHandleBook}>
        <input type="text" id="nome" placeholder="Digite o nome do livro"></input>
        <input type="text" id="autor" placeholder="Digite o nome do livro"></input>
        <input type="text" id="paginas" placeholder="Digite o nome do livro"></input>
      </form>


      {books.map((book, index) => {
        return(
          <Book key={index}
          Img
          nome={book.nome}
          autor={book.autor}
          paginas={book.paginas}
          imagem={book.imagem} />
        )
      })}


      <button onClick={onHandleBook}>Cadastrar livro</button>

    </div>
  );
}

export default App;
