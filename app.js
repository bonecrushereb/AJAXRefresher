var pageToken = {};
$(document).ready(function() {
  $('#searchButton').click(function() {
    searchYoutube();
  });
  $('.tokenClass').click(function() {
    pageToken.current = $(this).val() == 'next' ? pageToken.nextPage : pageToken.prevPage;
    console.log(pageToken.current);
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
      q: $('#search').val(),
      part: 'snippet',  
      maxResults: 10,
      pageToken: pageToken.current
    }
  }).done(function(data) {
    pageToken.nextPage = data.nextPageToken;
    pageToken.prevPage = data.prevPageToken;
    console.log(pageToken);
    var html = '';
    $.each(data['items'], function(idx, val) {
      html+='<div class="title">' + val.snippet.title + '</div>';
      html+='<div class="url"><a href="https://www.youtube.com/watch?v=' + val.id.videoId + '" target="_blank">' + val.id.videoId + '</a></div>';
      html+='<img class="thumbnail" src="' + val.snippet.thumbnails.medium.url + '" />';
    });
    // console.log(pageToken.current);
    $('#output').html(html);
  });
};

  // var pageToken = {};
  //      $(document).ready(function(){
  //          $('#searchButton').click(function(){
  //              searchYoutube();
  //          })
  //          $('.tokenClass').click(function(){
  //              pageToken.current = $(this).val()=='next' ? pageToken.nextPage : pageToken.prevPage;
  //              searchYoutube();
  //          })
  //      })
        
  //       function searchYoutube(){
  //           $.ajax({
  //               url:'https://www.googleapis.com/youtube/v3/search',
  //               dataType:'json',
  //               type:'GET',
  //               data:{
  //                   key:'AIzaSyCoRaVE9MNlID2C-iieNNwC19l6_uTQtv0',
  //                   q:$('#search').val(),
  //                   part:'snippet',
  //                   maxResults:10,
  //                   pageToken: pageToken.current
  //               }
  //           }).done(function(data){
  //               pageToken.nextPage = data.nextPageToken;
  //               pageToken.prevPage = data.prevPageToken;
  //               console.log(pageToken)
  //               var html = "";
  //               $.each(data['items'],function(index,value){
  //                   html += '<div><div class="title">'+value.snippet.title+'</div>';
  //                   html += '<div><div class="url"><a href="https://www.youtube.com/watch?v='+value.id.videoId+'" target="_blank">'+value.id.videoId+'</a></div>';
  //                   html += '<div><img  class="thumbnail" src="'+value.snippet.thumbnails.medium.url+'"></div>';
  //                   html += '</div>';
  //               })
  //               $('#output').html(html);
  //           })
  //       }