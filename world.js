$(document).ready(function(){
    
    $("#lookup").on('click', function(){
        if($("#check").is(":checked")){
            searchAll();
        }
        else if ($("#country").val() != ""){
            search($("#country").val());
        }
    });
});

function search(query){
    var link = 'https://info2180-lab7-jasonhinds13.c9users.io/world.php?country='+query;
    $.ajax(link,{
        method: 'GET',
    }).done(function(res){
        alert($(res).text());
        $("#result").html(res);
    }).fail(function(fail){
        $("#result").html('<b>EPIC FAIL 500 - AJAX ERROR!</b>');
    });
}

function searchAll(){
    var link = 'https://info2180-lab7-jasonhinds13.c9users.io/world.php?all=true';
    
    $.ajax(link,{
        method: 'GET',
    }).done(function(res){
        $("#result").html(res);
    }).fail(function(fail){
        $("#result").html('<b>EPIC FAIL 500 - AJAX ERROR!</b>');
    });
}