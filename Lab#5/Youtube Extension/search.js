$(document).ready(function(){
    $('#search-button').click(function(){
        search();
    });
})

function showResponse(response) {
    var responseString = response;
    //document.getElementById('response').innerHTML = responseString.items[0].id.videoId;
    var videoId = "";
    videoId = responseString.items[0].id.videoId;
    var iFrame = '<iframe width="300" height="300" src="https://www.youtube.com/embed/' + videoId + '"></iframe>';
    document.getElementById('player').innerHTML = iFrame;
}


// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube','v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyB9TF6MFM0Wi4XdUeX0E5IxVS1uP8eqa2U');
    $('#search-button').attr('disabled', false);
    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var q = $('#query').val();
    console.log(q);
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });
        // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}
// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}