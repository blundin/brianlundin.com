var toast_options = {
  animation: true,
  autohide: false,
  delay: 0
}
$('.toast').toast(toast_options)

var not_dismissed = true;
var not_shown = true;
$(window).scroll(function() {
    if (not_dismissed) {
      if (not_shown) {
        if ($(window).scrollTop() > 200) {
          $('#subscription_toast').toast('show');
          not_shown = false;
        }
        else {
          $('#subscription_toast').toast('hide');
        }
      }
    }
});

var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.reading-progress'),
  scroll;

if (progress != null) {
  document.addEventListener('scroll', function() {
    scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
  });
}
