const colours = [
    'green',
    'red',
    'yellow',
    'pink',
    'gray',
    'Blue',
    'brown',
    'green',
    'orange',
    'violet',
  
    'rgba(133,122,200)',
    '#f15025',
  ];
  
  const btn = document.getElementById('btn');
  
  const colour = document.querySelector('.colour');
  btn.addEventListener('click', function () {
  
      const randNumber = changeColour();
    document.body.style.backgroundColor = colours[randNumber];
    colour.textContent = colours[randNumber];
  });
  
  function changeColour() {
    return Math.floor(Math.random() * colours.length);
  }
  