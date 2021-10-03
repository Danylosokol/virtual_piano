document.addEventListener("keydown", function(event){
    if(event.code === "KeyA"){
        let audio = new Audio("white_keys/A.mp3");
        let result = audio.play();
        if(result === undefined){
            console.log("The 'A' key is pressed")
        }
    }
    else if(event.code === "KeyS"){
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/S.mp3";
        let result = audio.play();
        if(result === undefined){
            console.log("The 'S' key is pressed");
        }
    }
    else if(event.code === "KeyD"){
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/D.mp3"
        let result = audio.play();
        if(result === undefined){
            console.log("The 'D' key is pressed");
        }
    }
    else if(event.code === "KeyF"){
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/F.mp3"
        let result = audio.play();
        if(result === undefined) {
            console.log("The 'F' key is pressed");
        }
    }
    else if(event.code === "KeyG"){
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/G.mp3"
        let result = audio.play();
        if(result === undefined) {
            console.log("The 'G' key is pressed");
        }
    }
    else if(event.code === "KeyH"){
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/H.mp3";
        let result = audio.play();
        if(result === undefined){
            console.log("The 'H' key is pressed");
        }
    }
    else if(event.code === "KeyJ"){
        let audio = new Audio("white_keys/J.mp3");
        let result = audio.play();
        if(result === undefined) {
            console.log("The 'J' key is pressed");
        }
    }
    else{
        console.log("Unbound key was pressed");
    }
})