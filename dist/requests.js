"use strict";
async function getToken() {
    try {
        let clientId = "7ed70e8c54dc428f9bb6c6e766152d6f";
        let clientSecret = "8be6baa6b28b45ba970ca93435fe08af";
        let response = await fetch(`https://accounts.spotify.com/api/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: clientId,
                client_secret: clientSecret,
            }),
        });
        let data = await response.json();
        let accessToken = data.access_token;
        return accessToken;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
async function getSongInfo() {
    let access_token = await getToken();
    console.log(access_token);
    let response = await fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    });
    console.log(response);
    let data = await response.json();
    console.log(data);
    const songUrl = data.external_urls.spotify;
    console.log("Song URL:", songUrl);
}
getSongInfo();
