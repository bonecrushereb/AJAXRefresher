var pageToken = '';
$(document).ready(function() {
  $('#searchButton').click(function() {
    searchYoutube();
  });
  $('.tokenClass').off('click').click(function() {
    pageToken.current = $(this).val() == 'next' ? pageToken.nextPage : pageToken.prevPage;
    console.log(pageToken.nextPage);
    searchYoutube();
  });
});

function searchYoutube() {
  var pageToken = {};
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    type: 'GET',
    data: {
      key: 'AIzaSyCoRaVE9MNlID2C-iieNNwC19l6_uTQtv0',
      q: $('#search').val(),
      part: 'snippet',  
      maxResults: 10,
      pageToken: pageToken.current
    }
  }).done(function(data) {
    console.log(data);
    // console.log(data.nextPageToken);
    pageToken.nextPage = data.nextPageToken;
    pageToken.prevPage = data.prevPageToken;
    var html = '';
    $.each(data['items'], function(idx, val) {
      // console.log(val.id);
      html+='<div class="title">' + val.snippet.title + '</div>';
      html+='<div class="url"><a href="https://www.youtube.com/watch?v=' + val.id.videoId + '" target="_blank">' + val.id.videoId + '</a></div>';
      html+='<img class="thumbnail" src="' + val.snippet.thumbnails.medium.url + '" />';
    });
    $('#output').html(html);
  });
};

