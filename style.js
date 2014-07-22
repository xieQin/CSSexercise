/**
 *
 * @authors Your Name (you@example.org)
 * @date    2014-07-22 09:58:59
 * @version 1.0.2
 */

$(document).ready(function($) {
	var tabs = $(".tab");
    var tabMenus = $(".tab-menuWrapper").find("li");
    var tabContents = $(".tab-contentWrapper").find("div");
    tabMenus.bind('click',function() {
    	var tabsThis = $(this).parent("ul").parent("div");
    	var num = $(this).index();
    	tabsThis.find(".tab-contentWrapper").find("div").addClass('displaynone');
    	tabsThis.find(".tab-contentWrapper").find("div").eq(num).removeClass('displaynone');
    })
    tabMenus.hover(function() {
    	var num = $(this).index();
    	if(2 === num) {
    		$(this).addClass('hoverFirst');
    	}
    	else {
    		$(this).addClass('hoverSecond');
    	}
    }, function() {
    	var num = $(this).index();
    	if(2 === num) {
    		$(this).removeClass('hoverFirst');
    	}
    	else {
    		$(this).removeClass('hoverSecond');
    	}
    })
})