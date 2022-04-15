async function createGame(url = 'https://cp2tvc6qbd.execute-api.us-west-1.amazonaws.com/default/createGame', data = {"hostName": "appTest", "category": "celebrity tweets"}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Success:', response);
        // console.log(this);
        // window.location.href = "lobby.html";
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
    return response; // parses JSON response into native JavaScript objects
  }
  
//   function test()
//   {
//     createGame('https://cp2tvc6qbd.execute-api.us-west-1.amazonaws.com/default/createGame', {"hostName": "appTest", "category": "celebrity tweets"})
//         .then(data => {
//             console.log(data); // JSON data parsed by `data.json()` call
//         });
//     }


// async function test()
// {
//     var request = new XMLHttpRequest();
//     data = {"hostName": "appTest", "category": "celebrity tweets"}
//     request.open('POST', 'https://cp2tvc6qbd.execute-api.us-west-1.amazonaws.com/default/createGame', true);
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//     request.send(data);
// }
    


// const createGame = () =>
// {
//     url = 'https://cp2tvc6qbd.execute-api.us-west-1.amazonaws.com/default/createGame';
//     data = {"hostName": "appTest", "category": "celebrity tweets"};

//     fetch(url, {
//             method: 'POST',
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//         .then(response => {
//             console.log(response)
//         })
//         .then(data => {
//         console.log('Success:', data);
//         })
//         .catch((error) => {
//         console.error('Error:', error);
//     });

// }


// async function getData() {
//     const data = await createGame();
//     console.log(data);
// }
