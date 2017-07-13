/*
*   联系电话号码添加js
*/
$(document).ready(function(e) {
    $('.add_click,#btn_cl').click(function(){
        $('.add_down').slideToggle();
    })
   var num=2;
    $('.add_down_click img').click(function(){
        num++;
        // var html=$('.min_table li:last').clone(true);
        var html=' <li class="information_div_one li_a"> ' +
            '<div class="dis_table_cell2"> ' +
            '<div class="input-group_gai dis_table mag"> ' +
            '<span class="input-group_gai dis_table_cell1">号码<i class="number">2</i>：</span> ' +
            '<input type="text" class="information_input_control dis_table_cell2" placeholder="Username"> ' +
            '</div> ' +
            '</div> ' +
            '<span class="dis_table_cell1 biao_zu"><a class="number_close"></a></span> </li>';
        var this_ht=$('.min_table li:last').after(html);
        $('.min_table li:last').find('.number').text(num);
        if($('.add_down').height()>=255){
            $('.add_down').css("height","255px");
        }
    })
    $(document).on("click",".number_close", function(){
        $(this).parents('li').remove();
        num--;
        var ab=1;
       for(var i=0;i<$('.min_table li').length;i++){
           $('.number')[i].innerHTML=ab;
           ab++;
       }
        if($('.add_down').height()<255){
            $('.add_down').css("height","auto")
        }
        if($('.add_down').height()>=255){
            $('.add_down').css("height","255px");
        }
    })
})

