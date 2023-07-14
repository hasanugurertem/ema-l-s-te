function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var goButton = document.getElementById("go-button");
var urlInput = document.getElementById("url-input");
var content = document.getElementById("content");

goButton.addEventListener("click", function() {
    var url = urlInput.value;
    loadURL(url);
});

function loadURL(url) {
    content.innerHTML = "<iframe src=" + url + "></iframe>";
}
<script>
function gotoTwitter() {
    var twitterInput = document.getElementById("twitter-input");
    var twitterAddress = twitterInput.value;

    if (twitterAddress.startsWith("http://") || twitterAddress.startsWith("https://")) {
        window.open(twitterAddress);
    } else {
        window.open("https://twitter.com/" + twitterAddress);
    }
}
</script>


