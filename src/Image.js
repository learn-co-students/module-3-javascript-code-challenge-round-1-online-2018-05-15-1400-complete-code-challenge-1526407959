class Image {
  constructor(attributes) {
    this.id = attributes.id ;
    this.url = attributes.url;
    this.name = attributes.name;
    this.likes = attributes.like_count;
    this.comments = attributes.comments;
  }
  formatComment(comment){
    return `<li>${comment.content}</li>`
  };
}

function getPic() {
  $.getJSON('https://randopic.herokuapp.com/images/6', function(response){
    var image = new Image(response);
    $('#image').attr('src', image.url);
    $('#image').attr('data-id', image.id);
    $('#name').html(image.name);
    $('#likes').html(image.likes);

    var commentsList = "";
    image.comments.forEach(function(comment){
      commentsList += image.formatComment(comment)
    })

    $('#comments').html(commentsList)
  });
}

function likeFeatureFront() {
  $('button#like_button').on('click', function () {
    var likes = $('#likes').text();
    likes ++;
    $('#likes').text(likes);
  })
}

function likeFeatureBack() {
  $('button#like_button').on('click', function () {
    var likes = $('#likes').text();
    var imageId = $('#image').data('id');

    var data = {image_id : imageId}

    $.ajax({
      url: 'https://randopic.herokuapp.com/likes',
      type: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      success: function (data) {
        console.log(data);
      }
    });
  });
}

function commentFront() {
  $('input[type="submit"]').on('click', function(e){
    e.preventDefault();
    var comment = $('input#comment_input').val();
    $('#comments').append(`<li>${comment}</li>`);
  })
}

$(function() {
  getPic();
  likeFeatureFront();
  likeFeatureBack();
  commentFront();
})
