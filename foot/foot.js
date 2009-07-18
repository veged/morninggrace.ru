(function($){
    if (jQuery.browser.msie) $(function(){
        var footTd = $('.layout td:last'),
            otherTds = footTd.closest('tr').prevAll('tr').find('td:last'),
            container = $('.container:first');
        function resizeFoot() {
            var otherTdsHeight = 0;
            otherTds.each(function(){ otherTdsHeight += $(this).height() });
            footTd.height(1);
            setTimeout(function(){
                footTd.height(Math.max(1, container.height() - otherTdsHeight));
            }, 1);
        }
        $(window).bind('load resize', resizeFoot);
    });
})(jQuery);
