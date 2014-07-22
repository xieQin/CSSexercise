/**
 *
 * @authors Your Name (you@example.org)
 * @date    2014-07-22 09:58:59
 * @version 1.0.1
 */
$(document).ready(function($) {
    var tabMenus = $(".tab-menuWrapper").find("li");
    var tabContents = $(".tab-contentWrapper").find("div");
    tabMenus.bind('click',function() {
    	var num = $(this).index();
    	tabContents.addClass('displaynone');
    	tabContents.eq(num).removeClass('displaynone');
    })
})