// Configuring subscription toast
var toast_options = {
  animation: true,
  autohide: false,
  delay: 0
};

// logic for when to show subscription toast
var not_shown = true;
var dismissed_today = false;

updateCookies();
$('.toast').toast(toast_options)

function updateCookies(){
  if (Cookies.get('toast_dismissed')) {
    dismissed_today = true;
  }
}

// Called when user closes the email subscription toast
$('.toast').on('hide.bs.toast', function (e) {
  var dateDismissed = new Date();
  Cookies.set('date_dismissed', dateDismissed, {expires: 1});

  dismissed_today = true;
  Cookies.set('toast_dismissed', '1', { expires: 1 });
});

$(window).scroll(function() {
    updateCookies()
    if (!dismissed_today && not_shown) {
      if ($(window).scrollTop() > 450) {
        $('#subscription_toast').toast('show');
        not_shown = false;
      }
      else {
        $('#subscription_toast').toast('hide');
      }
    }
});

// Animation and control script for reading progress bar
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
