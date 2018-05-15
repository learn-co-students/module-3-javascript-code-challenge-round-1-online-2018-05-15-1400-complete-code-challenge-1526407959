document.addEventListener('DOMContentLoaded', function() {
  const imageId = 7 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
})

const myImage = document.getElementById('image');
const myInit = { method: 'GET',
                 name: "name",
               };
const myRequest = new Request('http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg', myInit);

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});

function likesCount() {
  document.getElementById("like_button").click();
}

//function httpGet() {
//  var xhr = new XMlHttpRequest();
//  xhr.open("GET", "https://randopic.herokuapp.com/images/:image_id", true);
//  xhr.send();

//  xhr.addEventListener("readystatechange", processRequest, false);
//}

//function processRequest(e) {
//  if (xhr.readyState == 4 && xhr.status == 200) {
//    alert(xhr.response.ip);
//  }
//}
