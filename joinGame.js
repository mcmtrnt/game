
async function joinGame(url = 'https://hjs0sxm035.execute-api.us-east-1.amazonaws.com/default/joinGame') {
    
    playerName = document.getElementById('playerName').value.trim();
    gameCode = document.getElementById('gameCode').value.trim();
    // FIX make sure gameCode is all caps

    if (playerName.length == 0)
    {
        document.getElementById('errorMessage').innerHTML = "Please enter your name";
        document.getElementById('errorMessage').style.display = "block";
        document.getElementById('playerName').style.border = "1px solid red";
        document.getElementById('playerName').style.boxShadow = "0 0 5px 2px #f99c9c";

        document.getElementById('gameCode').style.border = "none";
        document.getElementById('gameCode').style.boxShadow = "none";
    }
    else if (gameCode.length != 5)
    {
        document.getElementById('errorMessage').innerHTML = "Please enter a 5-digit game code";
        document.getElementById('errorMessage').style.display = "block";
        document.getElementById('gameCode').style.border = "1px solid red";
        document.getElementById('gameCode').style.boxShadow = "0 0 5px 2px #f99c9c";

        document.getElementById('playerName').style.border = "none";
        document.getElementById('playerName').style.boxShadow = "none";
    }
    // FIX check game code is digits only
    // FIX don't let people join if the game has already started?
    else
    {
        postData = {"gameCode": gameCode, "playerName": playerName}

        const response = await fetch(url, {
        method: 'post', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success');
        sessionStorage.setItem("gameCode", gameCode);
        sessionStorage.setItem("isHost", data.isHost);
        sessionStorage.setItem("playerName", data.playerName);
        window.location.href = "lobby.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  }
