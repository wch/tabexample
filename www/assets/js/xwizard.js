//
// Shiny ammends
//

$(".wizardnav-next").click(function(){
    var currdiv = $(this).parent().closest(".tab-pane").attr("id");
    var currid = parseInt(currdiv.split("step")[1]);
    disablePanel(currid);
    navigateToPanel(currid + 1);
});

$(".wizardnav-prev").click(function(){
    var currdiv = $(this).parent().closest(".tab-pane").attr("id");
    var currid = parseInt(currdiv.split("step")[1]);
    disablePanel(currid);
    navigateToPanel(currid - 1);
});

function disablePanel(panelid) {
    $("#step" + panelid).removeClass("active");
    $("#lbl-step" + panelid).removeClass("active");
    $("#lbl-step" + panelid).trigger("hidden");
}

function navigateToPanel(panelid) {
    $("#step" + panelid).addClass("active");
    $("#lbl-step" + panelid).addClass("active");
    $("#lbl-step" + panelid).trigger("shown");
}
