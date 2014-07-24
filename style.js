/**
 *
 * @authors xieq (xieq@zsgjs.com)
 * @date    2014-07-22 09:58:59
 * @version 1.0.3
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
    // var len = tabMenus.length / tabs.length;
    // var countNum = 0;
    // setInterval(function() {
    // 	if(countNum != 0) {
    // 		tabMenus.eq(countNum - 1).removeClass('hoverFirst');
    // 	}
    // 	tabMenus.eq(countNum).addClass('hoverFirst');
    // 	tabContents.addClass('displaynone');
    // 	tabContents.eq(countNum).removeClass('displaynone');
    // 	if(countNum < len) {
    // 		countNum ++;
    // 	}
    // 	else {
    // 		countNum = 0;
    // 	}
    // }, 1000)
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