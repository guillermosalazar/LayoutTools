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
                $( "#location" ).val(absolute_src);
                var image_properties_html = 'Width:' + $( this ).width() + '<br>' + 'Height:' + $( this ).height();
                image_properties_html += '<br>' + 'Image Source:' + absolute_src;
                $( "#image_properties" ).html( image_properties_html );
                $( "#dialog-uploadForm" ).dialog( "open" );
                return false;
            });
        }
    });   
}, 1000);

$( "#dialog-uploadForm" ).dialog({
    autoOpen: false,
    height: 480,
    width: 640,
    modal: true,

});