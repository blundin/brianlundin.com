var toast_options = {
  animation: true,
  autohide: false,
  delay: 0
}
$('.toast').toast(toast_options)
$('#subscription_toast').toast('show')

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
