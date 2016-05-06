function jmp2Page(thePage) {
    setTimeout(function () {
        location.href = thePage;
    }, 300);
}
//------- theme Selection -------
$(".sel_theme").click(function () {
    var theme = $(this).attr('id');
    var body_theme = $('body').attr('class');
    if (body_theme != theme) {
        $(".material-icons").removeClass("theme_tick");
    }
    $(this).find(".material-icons").addClass("theme_tick");
    // Store
    localStorage.setItem("theme_set", theme);

    $('body').removeClass(body_theme);
    //  --- add theme -----
    $('body').addClass(theme);
    $('#index-html').addClass(theme);
});
//------- localStorage -------

//------- edit Selection -------
var selected_id = new Array();
$(".currency").click(function () {
    var currency_status = $(this).attr('class');
    var nonselected = "non-selected";
    if ($(this).hasClass(nonselected)) {
        $(this).removeClass(nonselected);
        console.log("this.id: " + $(this).attr('id'));
        selected_id.push($(this).attr('id'));
    }
    else {
        $(this).addClass(nonselected);
        selected_id.pop($(this).attr('id'));
    }
    localStorage.setItem("selected_id", selected_id);
    console.log("selected_id: " + selected_id);
})


//--------- search ---------
$("span.add").click(function () {
    $('.nav_s').addClass('nav_gone'); //正常nav隐藏
    $('#nav_search').addClass('nav_search'); //search nav显
    $('.inpt_search').addClass('input_search_show');
    $(this).addClass('srch_icon_l');
    if ($(this).hasClass('srch_icon_l')) {
        $('#inpt_search').focus();
        $('#edit_main li').addClass('gone');
    }
});
$(".i_close").click(function () {
    $('.nav_s').removeClass('nav_gone');
    $('#nav_search').removeClass('nav_search');
    $('#edit_main li').removeClass('gone');

})