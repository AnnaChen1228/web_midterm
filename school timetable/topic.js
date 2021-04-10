var topic=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate=new Date();
function setMonthAndDay(startMonth,startDay){
    //一次設定好月分和日期
    startDate.setMonth(startMonth-1,startDay);//JS月份是從0到11
    startDate.setHours(0);//算天數忽略時分秒
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(3,27);