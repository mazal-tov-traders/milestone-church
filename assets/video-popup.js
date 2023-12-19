 function showPopup(videoId) {
    var popup = document.getElementById('popup');
    var videoContainer = document.getElementById('videoContainer');

  
    videoContainer.innerHTML = '';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    iframe.className = 'js-youtube';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    videoContainer.appendChild(iframe);

    popup.style.display = 'block';
  }

  function closePopup() {
    var popup = document.getElementById('popup');
    var iframe = document.querySelector('#videoContainer iframe');

    if (iframe) {
   
      iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }

    if (popup) {

      document.getElementById('videoContainer').innerHTML = '';
      popup.style.display = 'none';
    }
  }