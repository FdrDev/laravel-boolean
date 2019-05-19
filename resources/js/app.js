/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


function showAnswer(){
  var me = $(this);
  console.log();
  var answerBox = me.next();
  answerBox.toggleClass("show");
  answer.fadeIn();
}




function init(){
  var answer = $(".faq span");

  answer.click(showAnswer);


}


$(document).ready(init);
