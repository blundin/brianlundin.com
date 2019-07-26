// Configuring subscription toast
var toast_options = {
  animation: true,
  autohide: false,
  delay: 0
};

var days_after_dismissing = 4;        // '0' for debugging
var days_after_shown = 1;             // '0' for debugging

if (!shouldShowToast()) {
  $('#subscription_toast').toast('hide');
}

function shouldShowToast() {
  var show_toast = false;

  // Get updated cookies
  var date_toast_dismissed_cookie = Cookies.get('date_toast_dismissed');
  var date_toast_shown_cookie = Cookies.get('date_toast_shown');

  if (date_toast_dismissed_cookie) {
    var toast_dismissed = moment(new Date(date_toast_dismissed_cookie));
    console.log("Toast Dismissed: " + toast_dismissed.toISOString())
  }
  if (date_toast_shown_cookie) {
    var toast_shown = moment(new Date(date_toast_shown_cookie));
    console.log("Toast Shown: " + toast_shown.toISOString())
  }

  // Determine if pop up should be shown
  if ((toast_dismissed === null || toast_dismissed === undefined) &&
      (toast_shown === null || toast_shown === undefined)) {
    show_toast = true
  } else if (toast_dismissed && toast_dismissed.isValid()) {
    expires_on = moment(toast_dismissed).add(days_after_dismissing, 'days');
    if (moment().isSameOrAfter(expires_on)) {
      show_toast = true;
    }
  } else if (toast_shown && toast_shown.isValid()) {
    if (moment().isAfter(toast_shown, 'day')) {
      show_toast = true;
    }
  }

  return show_toast;
}

// Called when user closes the email subscription toast
$('.toast').on('hide.bs.toast', function (e) {
  Cookies.set('date_toast_dismissed', moment());
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 450) {
    if (shouldShowToast()) {
      $('.toast').toast(toast_options)
      $('#subscription_toast').toast('show');
      Cookies.set('date_toast_shown', moment());
    }
  }
});
