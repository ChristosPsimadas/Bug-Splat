const text = document.getElementById("text");
const elements = document.getElementsByClassName("bug");
var bugCountText = 15;
const splatSound = new Audio("splat.mp3");


const textBank = ["You've splatted us all", "Wait I'm the last one", "Please no!", "Stop!", "I'll catch other bugs for you!", "I'm just a fly!", "No!", "We won't hurt you!", 
                    "You suck!", "You can't catch us!", "That guy was too slow anyway", "You can't win!", "There's too many of us", "Ahahaha", "We're too fast"]

function splatter(img){
     

    if(img.getAttribute('src')==="amogus.png")
    {
        img.src="splatter.png"   
        bugCountText--;
        splatSound.play();
    }

    if (!reviveBug())
    {
        text.innerHTML = textBank[bugCountText]
    }




    
    
}


function reviveBug()
{
    if (bugCountText < 8)
    {
        if (Math.random() < 0.3)
        {
            for (element of elements)
            {
                if (element.getAttribute('src') === "splatter.png")
                {
                    element.src="amogus.png";
                    bugCountText++;
                    text.innerHTML="A bug revived!";
                    return true;
                }
            }
        }
    }
    return false;
}

for (element of elements)
{
    positionElementRandomly(element);
}

function positionElementRandomly(element) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
    const maxX = screenWidth - elementWidth;
    const maxY = screenHeight - elementHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    element.style.left = x + 'px';
    element.style.top = y + 'px';
  }


  function moveElement(element) {

    
        // get the dimensions of the element
        const elementRect = element.getBoundingClientRect();
        const elementWidth = elementRect.width;
        const elementHeight = elementRect.height;
        
        // get the dimensions of the screen
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // set the initial position of the element
        let xPos = element.x;
        let yPos = element.y;
        
        // set the initial velocity of the element
        let xVel = getRandomNumber();
        let yVel = getRandomNumber();
        
        // update the position of the element based on its velocity
        function updatePosition() 
        {
            if(element.getAttribute('src')==="amogus.png")
            {
                xPos += xVel;
                yPos += yVel;

                // check if the element has hit the left or right edge of the screen
                if (xPos + elementWidth > screenWidth - 50 || xPos < 0) {
                  xVel *= -1;
                }
            
                // check if the element has hit the top or bottom edge of the screen
                if (yPos + elementHeight > screenHeight - 50 || yPos < 0) {
                  yVel *= -1;
                }
            
                // update the position of the element on the screen
                element.style.left = xPos + "px";
                element.style.top = yPos + "px";
            }

        }
    
  
    // move the element around the screen at a rate of 60 frames per second
    setInterval(updatePosition, 1000 / 60);
  }

for (element of elements)
{

    moveElement(element);
    
}
  
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }
  
  