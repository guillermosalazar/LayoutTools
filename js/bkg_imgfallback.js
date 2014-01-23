$( "*" ).each(function(){
    var bkg_img = $(this).css("background-image");
    var img_fallback = $(this).css("content");
    var element = $(this);

    if( bkg_img !== "none" )
    {
        var url = extractUrl(bkg_img);
        $.ajax({ 
            type: "GET",
            url: url,
            statusCode: {
                404: function(xhr) {
                    element.css("background-image", 'url('+img_fallback+')');
                    element.click(function(){
                        alert(bkg_img);
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