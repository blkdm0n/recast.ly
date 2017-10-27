var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    // dataType: 'application/json',
    data: {
      maxResults: '5',
      part: 'snippet',
      q: options,
      key: window.YOUTUBE_API_KEY,
      type: 'video'
    },
    success: function(data) {
      console.log('Sucessful search');
      callback(data);  
    },
    error: function(data) {
      console.log('Search failed');
    }
  });
};

window.searchYouTube = searchYouTube;
