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

//Upload dialog
var html_dialog = '';
html_dialog += '<div id="dialog-uploadForm">';
html_dialog += '<div id="image_properties"></div>';
html_dialog += '<form method="post" enctype="multipart/form-data">';
html_dialog += "{% csrf_token %}";
html_dialog += '<p>{{ form.non_field_errors }}</p>';
html_dialog += '<p>{{ form.docfile.label_tag }} {{ form.docfile.help_text }}</p>';
html_dialog += '<p>{{ form.docfile.errors }}{{ form.docfile }}</p>';
html_dialog += "<p><input type='submit' value='Upload' /></p>";
html_dialog += "<input type='text' value='' id='location' name='location'>";
html_dialog += "</form>";
html_dialog += "</div>";

$('body').prepend( html_dialog );

$( "#dialog-uploadForm" ).dialog({
    autoOpen: false,
    height: 480,
    width: 640,
    modal: true,

});