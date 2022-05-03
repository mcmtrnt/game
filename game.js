async function submitAnswer(answer, url = 'https://hjs0sxm035.execute-api.us-east-1.amazonaws.com/default/submitAnswer') {
    
    var gameCode = sessionStorage.getItem("gameCode");
    var playerName = sessionStorage.getItem("playerName");
    
    postData = {"gameCode": gameCode, "playerName": playerName, "answer":answer}

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
        // console.log(data);
        sessionStorage.setItem("lastAnser", answer); 

        // window.location.href = "waitingRoom.html";  //FIX
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
  }