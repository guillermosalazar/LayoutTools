setTimeout(function() {
    $("img").each(function(){
        if( $(this).context.naturalHeight == 0 && $(this).context.naturalWidth == 0){
            var src = $( this ).prop('src');
            var host = 'http://'+window.location.host;
            var absolute_src = src.replace(host,'');
            var fallback_url = $( this ).data( "fallback" );
            $( this ).unbind("error");
            $( this ).attr( "src", fallback_url+"&text="+absolute_src );
            $(this).click(function(event){
                alert( src + ' | File upload Dialog... Working on it! lml');
                return false;
            });
        }
    });    
}, 1000);