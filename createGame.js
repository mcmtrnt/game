

async function createGame(url = 'https://hjs0sxm035.execute-api.us-east-1.amazonaws.com/default/newGame') {
    hostName = document.getElementById('hostName').value.trim();
    var select = document.getElementById('category');
    var category = select.options[select.selectedIndex].value;

    postData = {"hostName": hostName, "category": category}

    if (hostName.length == 0)
    {
        document.getElementById('errorMessage').style.display = "block";
        document.getElementById('hostName').style.border = "1px solid red";
        document.getElementById('hostName').style.boxShadow = "0 0 5px 2px #f99c9c";
    }
    else
    {
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
            console.log(data.gameCode);

            sessionStorage.setItem("gameCode", data.gameCode);
            sessionStorage.setItem("isHost", data.isHost);
            sessionStorage.setItem("playerName", data.playerName);
            sessionStorage.setItem("words", data.words);
            window.location.href = "lobby.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  }

