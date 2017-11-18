$(document).ready(function(){
     
    $("#lookup").on('click', function(){
        search($("#country").val());
    });
});
 
function search(query){
    var url = 'https://info2180-lab7-jasonhinds13.c9users.io/world.php?country='+query;
    $.ajax(url,{
        method: 'GET',
    }).done(function(res){
        $("#result").html(res);
        alert($(res).text());
    }).fail(function(fail){
        $("#result").html('Not found');
    });
} 

function searchAll(){
    var url = 'https://info2180-lab7-nickcaine.c9users.io/world.php?all=true';
    $.ajax(url,{
        method: 'GET',
    }).done(function(res){
        $("#result").html(res);
        alert($(res).text());
    }).fail(function(fail){
        $("#result").html('Not found');
    });
} 