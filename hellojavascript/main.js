window.onload=function(){
    //document.write("Hello JavaScript")
};
$(function(){//$(document).ready(function)完整寫法 只使用一次的function不用寫名子
    $("input").on("click",function(){//$找到畫面內容 .on開始監看element前提發生 執行結果
        //alert("Hi");
        //$("h1").text($("li:first").text()); //第一個選項
        //$("h1").text($("li:last").text());
        //$("h1").text($("li").eq(1).text()); //類似array
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        var image=['hellojavascript\76a7aa003a9e3c0cf699e307682d6f94.JPG','hellojavascript\1190121143473497_b.JPG','hellojavascript\images.JPG']
        $("h1").text($("li").eq(randomChildNumber).text());
        //$('<img src="' + image[Math.floor(randomChildNumber)] + '">').appendTo("id"); 
        $("id").append($(image[randomChildNumber]));
    });
});
