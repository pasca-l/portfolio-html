// function called when document is ready
$(document).ready(function () {
  // check if anchor is in the URL
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  // move to the top of the document
  window.scrollTo(0, 0);

  // apply typing effect to home title and subtitle
  typeWriteEffect("#home-title");
  typeWriteEffect("#home-subtitle");
});

function typeWriteEffect(tagId) {
  var i = 0;
  const text = $(tagId).text();
  $(tagId).empty();

  function type() {
    if (i < text.length) {
      $(tagId).append(text.charAt(i));
      i++;
      setTimeout(type, 70);
    }
  }

  type();
}
