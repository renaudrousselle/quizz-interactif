'use strict';

var reponse = $('.reponse');
var question = $('.question');
var test = $('a');
var img = $('img');
var questionsID = [ 'r3', 'r4', 'r9' ];

$(function() {
    reponse.hide();
    test.hover(
        function() {
            // Les instructions à exécuter au survol du lien
            reponse.slideDown();
            img.hide();
            
            for (var i = 0, len = questionsID.length; i < len; i++) {
                if ($(':radio[id="' + questionsID[i] + '"]:checked').val()) {
                    $(question[i]).addClass('green');
                } else {
                    $(question[i]).addClass('red');
                }
            }
        },
        function() {
            // Les instructions à exécuter lorsque le lien n'est plus survolé
            reponse.slideUp();
            question.removeClass('red green');
            img.queue(function() {
                setTimeout(function() {
                    img.fadeIn();
                }, 400);
                img.dequeue();
            });
        }
    );
});