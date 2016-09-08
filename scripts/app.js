(function(document) {
'use strict';

var app = document.querySelector('#app');

// Sets app default base URL
app.baseUrl = '/';
if (window.location.port === '') {  // if production
// Uncomment app.baseURL below and
// set app.baseURL to '/your-pathname/' if running from folder in production
// app.baseUrl = '/JetpatSpot/';
}
// Check to make sure caching is actually enabled—it won't be in the dev environment.
app.displayInstalledToast = function() {
if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
  Polymer.dom(document).querySelector('#caching-complete').show();
}
};
// Listen for template bound event to know when bindings
// have resolved and content has been stamped to the page
app.addEventListener('dom-change', function() {
if (localStorage.getItem("username") == null || localStorage.getItem("username") == 0) {
animated.open();
setTimeout(function(){ animated.refit(); }, 300);
}
else {
  console.log(localStorage.getItem("username"));
}

});

})(document);
