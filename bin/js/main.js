import 'gif.js';


window.onload = LoadAll();

const width        = window.innerWidth;
const height       = window.innerHeight;

async function LoadAll(){
  try{
    Promise.all(
      [
        changeGifs()
      ]
    );
  }catch(error){
    console.error(error.toString());
  }
}

function gifSpeed(element_id){
  // const htmlImage = document.getElementById("jenga-man-loading");
  
  const gif = new GIF.parse(element_id); //TODO: does not work, find a diferent method that actually works.

  const frameCount = gif.getFrameCount();
  const delay      = gif.getDelay();

  const duration = frameCount * delay;

  // console.log(`The GIF takes ${duration} seconds to play.`);
  return duration;
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
  

function changeGifs(){
  try{
    let htmlImage      = document.getElementById("jenga-man-loading");
    const gifs         = ['../assets/img/jengman-adventure.gif', '../assets/img/Landing on Aura Planet v1.gif']
    const firstGifTime = gifSpeed(htmlImage);

    htmlImage.setAttribute('src', gifs[0]); //<================ going through space
    htmlImage.setAttribute('alt', "Jengaman traveling"); //<=== going through space

    sleep(firstGifTime); //<=================================== how long to sleep

    htmlImage.setAttribute('src', gifs[1]); //<================ landing and turning tree into bookshelf
    htmlImage.setAttribute('alt', "Jengaman landing"); //<===== landing and turning tree into bookshelf
  }catch(error){
      console.error(`error at changing gifs\nerror code: ${error}`);
  }
}
