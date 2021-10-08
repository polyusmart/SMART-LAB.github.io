var total_num;
var current = 1;
var delay = false;

$(document).ready(function() {
    total_num = parseInt($('#m-news-imgs').attr('number'));
    news_button();
    
    setInterval(function() {
        if (delay) {
            delay = false;
        } else {
            var news;
            if (current >= total_num) {
                news = 1;
            } else {
                news = current + 1;
            }
            $('img.m-news-img[news!="' + news + '"][news!="' + current + '"]').css('z-index', '7');
            $('div.m-news-text[news!="' + news + '"][news!="' + current + '"]').css('z-index', '7');
            $('li.m-news-img-btn[news!="' + news + '"]').attr('current', 'false');

            $('img.m-news-img[news="' + news + '"]').css('opacity', '0').css('z-index', '9');
            $('div.m-news-text[news="' + news + '"]').css('opacity', '0').css('z-index', '9');
            $('li.m-news-img-btn[news="' + news + '"]').attr('current', 'true');

            $('img.m-news-img[news="' + current + '"]').css('z-index', '8');
            $('div.m-news-text[news="' + current + '"]').css('z-index', '8');
            current = news;
            $('img.m-news-img[news="' + news + '"], div.m-news-text[news="' + news + '"]').animate({
                opacity: 1.0,}, 500);
        }
    }, 5000);
});

function news_button() {
    $('li.m-news-img-btn').click(function() {
        delay = true;
        var news = parseInt($(this).attr('news'));
        if (news == current) {
            return;
        }
        $('img.m-news-img[news!="' + news + '"][news!="' + current + '"]').css('z-index', '7');
        $('div.m-news-text[news!="' + news + '"][news!="' + current + '"]').css('z-index', '7');
        $('li.m-news-img-btn[news!="' + news + '"]').attr('current', 'false');
        
        $('img.m-news-img[news="' + news + '"]').css('opacity', '0').css('z-index', '9');
        $('div.m-news-text[news="' + news + '"]').css('opacity', '0').css('z-index', '9');
        $('li.m-news-img-btn[news="' + news + '"]').attr('current', 'true');
        
        $('img.m-news-img[news="' + current + '"]').css('z-index', '8');
        $('div.m-news-text[news="' + current + '"]').css('z-index', '8');
        current = news;
        
        $('img.m-news-img[news="' + news + '"], div.m-news-text[news="' + news + '"]').animate({
            opacity: 1.0,}, 500);
    });
}