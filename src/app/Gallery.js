import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let hasNext = index < (sculptureList.length-1);
  let hasPrev = index != 0

  function handleNextClick() {
    if(hasNext){
      setIndex(index + 1);
    }
  }
  function handlePreviousClick(){
    if(hasPrev){
          setIndex(index - 1)
    }

  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Siguiente
      </button>
      <button onClick={handlePreviousClick} disabled={!hasPrev}>
        Anterior
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}