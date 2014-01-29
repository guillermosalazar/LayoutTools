$( "*" ).each(function(){
    var bkg_img = $(this).css("background-image");
    var img_fallback = $(this).css("content");
    var element = $(this);
    var host = 'http://'+window.location.host;
    var url = extractUrl(bkg_img);
    var absolute_src = url.replace(host,'');
    var dimensions = img_fallback.replace('http://placehold.it/',"").replace("'","").replace("'","").split("x");

    if( bkg_img !== "none" )
    {
        $.ajax({ 
            type: "GET",
            url: url,
            statusCode: {
                404: function(xhr) {
                    element.css("background-image", 'url('+img_fallback+')');
                    element.click(function(event){
                        $( "#location" ).val(absolute_src);
                        var image_properties_html = 'Width:' + dimensions[0] + '<br>' + 'Height:' + dimensions[1];
                        image_properties_html += '<br>' + 'Image Source:' + absolute_src;
                        $( "#image_properties" ).html( image_properties_html );
                        $( "#dialog-uploadForm" ).dialog( "open" );
                        return false;
                    });
                }
            }
        });
   
    }
});
// By Sam in Web Developer Blog: http://webdevel.blogspot.mx/ 
// http://webdevel.blogspot.mx/2009/07/jquery-quick-tip-extract-css-background.html
function extractUrl(input)
{
    // remove quotes and wrapping url()
    return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
}