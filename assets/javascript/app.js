$(document).ready(function(){

     $(".content .tab-content").hide();
     $(".content .tab-content:first-child").show();
     $(".tabs").click(function(){
        var current_tab = $(this).attr("id");
        $(".content .tab-content").hide();
        $("."+current_tab).show();
      })
});