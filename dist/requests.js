"use strict";
// interface Data {
//   access_token: string;
//   expires_in: number;
//   token_type: string;
// }
// async function getToken(): Promise<string> {
//   try {
//     let clientId: string = "7ed70e8c54dc428f9bb6c6e766152d6f";
//     let clientSecret: string = "8be6baa6b28b45ba970ca93435fe08af";
//     let response = await fetch(`https://accounts.spotify.com/api/token`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         grant_type: "client_credentials",
//         client_id: clientId,
//         client_secret: clientSecret,
//       }),
//     });
//     let data: Data = await response.json();
//     let accessToken: string = data.access_token;
//     return accessToken;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
// async function getSongInfo(){
//     let access_token: string = await getToken();
//     console.log(access_token);
//     let response=await fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl',{
//         method:'GET',
//         headers:{
//             'Authorization':`Bearer ${access_token}`
//         }
//     })
//     let data=await response.json();
//     console.log(data);
//     const songUrl = data.href;
//     console.log("Song URL:", songUrl);
// }
let body = document.getElementById("spotify");
body.innerHTML = `
       <h1>Spotify</h1>
       <audio controls>
       <source src="let last_christmas=new song("Last Christmas","https://ia600101.us.archive.org/3/items/Wham--LastChristmas/Wham%21%20%E2%80%94%20%27Last%20Christmas%27.mp3","Wham!")
" type="audio/mp3">;
       Your browser does not support the audio element.
      </audio>`;
