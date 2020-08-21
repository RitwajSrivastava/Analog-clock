$(document).ready(function (){
    function run(){
        var date = new Date();
        var h= date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        var hpos= (h+6)*30 + (m*6)/12;
        var mpos= (m+30)*6 + (s*6)/60;
        var spos= (s+30)*6;
        $("*").css("transform-origin", "0 0");
        $("#hr").css("transform", "rotate(" + hpos + "deg)");
        $("#min").css("transform", "rotate(" + mpos + "deg)");
        $("#sec").css("transform", "rotate(" + spos + "deg)");
    };
    var interval = setInterval(run,1000);
});

