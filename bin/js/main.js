window.onload = LoadAll();

async function LoadAll(){
    try{
        Promise.all(
            [
                
            ]
        )
    }catch(error){
        console.error(error.toString());
    }
}

async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  

function changeGifs(){
    try{
        let htmlImage = $("#jenga-man-loading");
        const gifs = ['./bin/assets/img/jengman-adventure.gif' ]
        const firstGifTime = 10000;
        
        htmlImage.attr('src', gifs[0]); //<=== going through space
        sleep(firstGifTime); //<============== how long to sleep
        htmlImage.attr('src', gifs[1]); //<=== landing and turning tree into bookshelf
    }catch(error){
        console.error(`error at changing gifs\nerror code: ${error}`);
    }
}

function animateSpace(){
    var canvas = document.getElementById('canvas');

    // getting the size of the window screen 
    var width       = window.innerWidth;
    var height      = window.innerHeight;
    canvas.width    = width;
    canvas.height   = height;

    animate(canvas);
}

// may not need
function animate(canvas) {
    var image = document.createElement('img');
    image.src = 'spaceship.png'; // the ship flying 
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    var ctx = canvas.getContext('2d');
  
    var x = 0;
    var y = 0;
  
    var speed = 5;
  
    var end_time = new Date().getTime() + 5000; //5 seconds in milliseconds
  
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.drawImage(image, x, y);
  
      x += speed;
      y += speed;
  
      if (x > canvas.width) {
        x = 0;
      } else if (x < 0) {
        x = canvas.width;
      }
  
      if (y > canvas.height) {
        y = 0;
      } else if (y < 0) {
        y = canvas.height;
      }
  
      if (new Date().getTime() > end_time) {
        clearInterval(interval);
      }
  
      requestAnimationFrame(loop);
    }
  
    var interval = setInterval(loop, 1000/60); // 60 frames per second
  
    loop();
}
  