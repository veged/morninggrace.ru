(function($){
    if (jQuery.browser.msie) $(function(){
        var images = $('.content-image');
        function resizeImages() {
            images.each(function(){
                var $this = $(this);
                $this.width($this.parent().width());
            });
        }
        resizeImages();
        $(window).resize(resizeImages);
    });
})(jQuery);
