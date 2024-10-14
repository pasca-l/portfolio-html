// function called when document is ready
$(document).ready(function () {
  // check if anchor is in the URL
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  // move to the top of the document
  window.scrollTo(0, 0);
});
