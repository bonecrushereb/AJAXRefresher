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
      q: 'surfing',
      part: 'snippet'
    }
  }).done(function(data) {
    $.each(data['items'], function(idx, val) {
      console.log(val);
    });
  });
};