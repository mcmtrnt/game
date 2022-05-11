
async function joinGame(url = 'https://hjs0sxm035.execute-api.us-east-1.amazonaws.com/default/joinGame') {
    document.getElementById('errorMessage').style.display = "none";
    playerName = document.getElementById('playerName').value.trim().toUpperCase();
    gameCode = document.getElementById('gameCode').value.trim().toUpperCase();
    await getPlayers(gameCode, playerName);
    if (document.getElementById('errorMessage').style.display != 'block')
    {
        if (playerName.length == 0)
        {
            document.getElementById('errorMessage').innerHTML = "Please enter your name";
            document.getElementById('errorMessage').style.display = "block";
            document.getElementById('playerName').style.border = "1px solid red";
            document.getElementById('playerName').style.boxShadow = "0 0 5px 2px #f99c9c";

            document.getElementById('gameCode').style.border = "none";
            document.getElementById('gameCode').style.boxShadow = "none";
        }
        else if ((/[^a-zA-Z0-9]/.test(playerName)))
        {
            document.getElementById('errorMessage').innerHTML = "Your name can only contain letters and numbers";
            document.getElementById('errorMessage').style.display = "block";
            document.getElementById('playerName').style.border = "1px solid red";
            document.getElementById('playerName').style.boxShadow = "0 0 5px 2px #f99c9c";

            document.getElementById('gameCode').style.border = "none";
            document.getElementById('gameCode').style.boxShadow = "none";
        }
        else if (gameCode.length != 5 || (/[^a-zA-Z]/.test(gameCode)))
        {
            document.getElementById('errorMessage').innerHTML = "Please enter a 5-letter game code";
            document.getElementById('errorMessage').style.display = "block";
            document.getElementById('gameCode').style.border = "1px solid red";
            document.getElementById('gameCode').style.boxShadow = "0 0 5px 2px #f99c9c";

            document.getElementById('playerName').style.border = "none";
            document.getElementById('playerName').style.boxShadow = "none";
        }
    }
    if (document.getElementById('errorMessage').style.display != 'block')
    {
        console.log('here');
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
        console.log(data);

        sessionStorage.setItem("gameCode", gameCode);
        sessionStorage.setItem("isHost", data.isHost);
        sessionStorage.setItem("playerName", data.playerName);
        sessionStorage.setItem("words", data.words);
        sessionStorage.setItem("score", data.score);
        window.location.href = "lobby.html";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('errorMessage').innerHTML = "That game code may have expired";
            document.getElementById('errorMessage').style.display = "block";
            document.getElementById('gameCode').style.border = "1px solid red";
            document.getElementById('gameCode').style.boxShadow = "0 0 5px 2px #f99c9c";

            document.getElementById('playerName').style.border = "none";
            document.getElementById('playerName').style.boxShadow = "none";
        });
    }
  }


  async function getPlayers(gameCode, playerName, url = 'https://hjs0sxm035.execute-api.us-east-1.amazonaws.com/default/getPlayers') {
    postData = {"gameCode": gameCode}

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

        isStarted = data['Items'][0]['isStarted']['BOOL'];
        if (isStarted == true)
        {
            document.getElementById('errorMessage').innerHTML = "The game has already started";
            document.getElementById('errorMessage').style.display = "block";

            document.getElementById('playerName').style.border = "none";
            document.getElementById('playerName').style.boxShadow = "none";
            document.getElementById('gameCode').style.border = "none";
            document.getElementById('gameCode').style.boxShadow = "none";
        }
        else
        {
            for (i = 0; i < data['Count']; i++)
            {
                thisPlayerName = data['Items'][i]['playerName']['S'];
                console.log(thisPlayerName);
                console.log(playerName);
                if (playerName == thisPlayerName)
                {
                    document.getElementById('errorMessage').innerHTML = "That name has already been taken";
                    document.getElementById('errorMessage').style.display = "block";
                    document.getElementById('playerName').style.border = "1px solid red";
                    document.getElementById('playerName').style.boxShadow = "0 0 5px 2px #f99c9c";

                    document.getElementById('gameCode').style.border = "none";
                    document.getElementById('gameCode').style.boxShadow = "none";
                }
            }
        }
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
