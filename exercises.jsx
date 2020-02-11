const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
  }; 
  
  const panda = (
    <img 
      src={pics.panda} 
      alt="Lazy Panda" />
  );
  
  const owl = (
    <img 
      src={pics.owl} 
      alt="Unimpressed Owl" />
  );
  
  const owlCat = (
    <img 
      src={pics.owlCat} 
      alt="Ghastly Abomination" />
  );
  //ESTE ES UN EJEMPLO DE USO DE VARIABLES EN JSX
  function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }
  
  const kitty = (
      <img onClick={makeDoggy}
          src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
          alt="kitty" />
  );
  
  ReactDOM.render(kitty , document.getElementById('excercises'));
  //INYECTANDO FUNCIONES
  