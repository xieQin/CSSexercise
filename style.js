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

    function memfactorial(n) {
    	if(!memfactorial.cache) {
    		memfactorial.cache = {
    			"0" : 1,
    			"1" : 1
    		};
    	}
    	if(!memfactorial.cache.hasOwnProperty(n)) {
    		memfactorial.cache[n] = n * memfactorial(n-1);
    	}
    	return memfactorial.cache[n];
    }

    var fact = memfactorial(6);

    // var a = new Date();
    // var x = a.getTime();

    // for(var i = 0 ; i< 100000; i++) {
    // 	function () {
    // 		;
    // 	}
    // }

    // var b = new Date();
    // var y = b.getTime();
    // alert(y-x);

    // var a = new Date();
    // var x = a.getTime();

    // for(var i = 0 ; i< 100000; i++) {
    // 	new Function();
    // }

    // var b = new Date();
    // var y = b.getTime();
    // alert(y-x);
    // document.write([2, 3, 1, 4, 5, 6].sort());
    var a = new Object();
    var b = new Object();
    var c = new Object();
    a.id = 1;
    b.id = 2;
    c.id = 3;
    a.date = new Date(2012, 3, 12);
    b.date = new Date(2012, 1, 15);
    c.date = new Date(2012, 2, 10);
    var arr = [a, b, c];
    arr.sort(
    	function (x, y) {
    		return x.date - y.date;
    	}
    );
})