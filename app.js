$(document).ready(function() {
  $('#searchButton').click(function() {
    searchYoutube();
  });
});

function searchYoutube() {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    type: 'GET',
    data: {
      key: 'AIzaSyCoRaVE9MNlID2C-iieNNwC19l6_uTQtv0',
      q: 'test',
      part: 'snippet',  
      maxResults: 25,
      pageToken: 'CDIQAA'
    }
  }).done(function(data) {
    console.log(data);
    var nextPage = data.nextPageToken;
    var prebPage = data.prevPageToken;
    var html = '';
    $.each(data['items'], function(idx, val) {
      html+='<div class="title">' + val.snippet.title + '</div>';
      html+='<div class="url">' + val.id.videoId + '</div>';
      html+='<img class="thumbnail" src="' + val.snippet.thumbnails.medium.url + '" />';
      console.log(val);
    });
    $('#output').html(html);
  });
};