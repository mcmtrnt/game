
async function createGame(url = 'https://cp2tvc6qbd.execute-api.us-west-1.amazonaws.com/default/createGame2') {
    hostName = document.getElementById('hostName').value.trim();
    var select = document.getElementById('category');
    var category = select.options[select.selectedIndex].value;

    if (hostName.length == 0)
    {
        document.getElementById('errorMessage').style.display = "block";
        document.getElementById('hostName').style.border = "1px solid red";
        document.getElementById('hostName').style.boxShadow = "0 0 5px 2px #f99c9c";
    }
    else
    {
        data = {"hostName": hostName, "category": category}

        const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success');
        sessionStorage.setItem("gameCode", data.gameCode);
        sessionStorage.setItem("isHost", data.isHost);
        window.location.href = "lobby.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  }
