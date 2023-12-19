const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //to prevent direct execution of submit form
  
  const word = document.querySelector('#word').value;
  const results = document.querySelector('#results');
  
  const characterCount = word.length;
   console.log(`Number of characters: ${characterCount}`);

   let play = function playMusic() {
    let audio = new Audio("audio.mp3");
    audio.play()
   }

   let image = function showThala() {
    document.getElementById(img).src='thala.png'
   }  
  // Check if the input is a valid string
      if (typeof word !== 'string') {
        throw new Error('Input must be a string');
      }
      
      if (characterCount === 7) {
        var message = 'THALA FOR A REASON'
        play()
        
      } else {
        message = 'NOT THALA'
      }
      
      results.innerHTML = `<span>  ${message} </span>`;
      
  
})