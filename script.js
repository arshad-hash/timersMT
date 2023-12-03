
const activeTimers = document.getElementById("active-timer");
const audio = new Audio('./alarmtone.mp3');


function startNewTimer(){
 const hours =document.getElementById("hours").value || 0;
 const minutes =document.getElementById("minutes").value || 0;
 const seconds = document.getElementById("seconds").value || 0;

 if(!hours && !minutes && !seconds)
 {
    alert("please enter a valid time");
    return;
 }
  const totalTimeInSeconds = 
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    createTimer(totalTimeInSeconds);
  

}



function createTimer(timeInSeconds){
    const timerDiv = document.createElement("div");
    const timerDisplay = document.createElement("span");
    timerDiv.appendChild(timerDisplay);

    const timeInterval = setInterval( ()=>{
        timeInSeconds--;
        const displayHours = Math.floor(timeInSeconds/3600);
        const displayMinutes = Math.floor(timeInSeconds%3600/60);
        const displaySeconds = Math.floor(timeInSeconds%60);


        timerDisplay.textContent = `Time Left   :${displayHours}:${displayMinutes}:${displaySeconds}`;
        
        if(displaySeconds<=0 && displayHours<=0 && displayMinutes<=0)
        {
            clearInterval(timeInterval);

            const endMessage = document.createElement("div");
            endMessage.classList = "red";
            endMessage.innerText = "timer is up!";
             timerDisplay.innerHTML = "";
        
            timerDiv.appendChild(endMessage);
            
                // Play the audio
        audio.play();
     
        
        }
        
        

      },1000);

    //   stop button

      const stopButton = document.createElement("button");
      stopButton.innerText = "Stop";

     stopButton.onclick=()=>{
        audio.pause();
        clearInterval(timeInterval);
     }

     //Delet button
     const deleteButton = document.createElement("button");
     deleteButton.innerText = "Delete";

    deleteButton.onclick=()=>{
       clearInterval(timeInterval);
     timerDiv.remove(); 
     audio.pause(); 
    } 
      activeTimers.appendChild(timerDiv);
      timerDiv.appendChild(stopButton);
      timerDiv.appendChild(deleteButton);

}