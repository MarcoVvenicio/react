import React from 'react';
import './Book.css';
import Img from '../src/components/Book/Img.js';

    const Book = (p) => {

        console.log(p);

        return(
            <div className='Book'>
                <p>{p.nome}</p>
                <p>{p.autor}</p>
                <p>{p.paginas}</p>
                <Image url="https://s2.glbimg.com/8WjMhMAzFD0a8QAhKrmR9zUx_RI=/smart/e.glbimg.com/og/ed/f/original/2021/04/06/livros-saude-mental.jpg"></Image>
            </div>

        );
    }

export default Book;