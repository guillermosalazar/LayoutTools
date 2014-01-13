$("img").error(function(){

    var src = $( this ).prop('src');
    var host = 'http://'+window.location.host;
    var absolute_src = src.replace(host,'');
    var fallback_url = $( this ).data( "fallback" );

    $( this ).attr( "src", fallback_url+"&text="+absolute_src );
    
    $(this).click(function(){
        alert( src + ' | File upload Dialog... Working on it! lml');
    });
    
});