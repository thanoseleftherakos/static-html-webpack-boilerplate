if (module.hot) {
  module.hot.accept();
}

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function() {
    console.log("hello");
});