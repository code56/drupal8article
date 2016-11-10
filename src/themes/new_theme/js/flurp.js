/*$(document).ready(function () {

alert("flurp.js is loaded");

});
*/
(function ($) {
  'use strict';

  Drupal.behaviors.awesome = {
    attach: function(context, settings) {
      $('main', context).once('awesome').append('<p>Hello world</p>');
    }
  };

}(jQuery));