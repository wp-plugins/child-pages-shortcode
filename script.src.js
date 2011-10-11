(function(){
    var $ = jQuery;
    $.fn.equalHeights = function() {
        var currentTallest = 0;
        $(this).each(function(){
            if ($(this).height() > currentTallest) {
                currentTallest = $(this).height();
            }
        });
        $(this).height(currentTallest);
        return this;
    };
    $.event.add(window, "load", function(){
        $(".child_pages .child_page-container").equalHeights();
    });
})(jQuery);
