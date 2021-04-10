$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount=topic.length;

    var millisecPerDay=24*60*60*1000;//每秒1000毫秒 每分60秒 每小時60分鐘 每天24小時
    /*for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>預計日期</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }*/
    /*for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${startDate+7*x}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }*/
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        var date=new Date(startDate.getTime()+7*x*millisecPerDay).toLocaleDateString();
        $("#courseTable").append(`<td>${date.slice(5)}</td>`);//slice切割
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }
});