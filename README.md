Javasript|JQuery Tools for HTML design/layout

Before </body>:
```html
<style type="text/css">
    #dialog-uploadForm{
        background-color: white;
        position: relative;
        z-index: 9999;
        padding: 30px;
        color: black;
    }
    .ui-widget-overlay { 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100% !important; 
        height: 100% !important; 
        background: #aaaaaa;
        opacity: 0.3;
    }
</style>
<div id="dialog-uploadForm">
    <div id="image_properties"></div>
    <form method="post" enctype="multipart/form-data">
        {% csrf_token %}
        <p>{{ form.non_field_errors }}</p>
        <p>{{ form.docfile.label_tag }} {{ form.docfile.help_text }}</p>
        <p>{{ form.docfile.errors }}{{ form.docfile }}</p>
        <p><input type='submit' value='Upload' /></p>
        <input type='hidden' value='' id='location' name='location'>
    </form>
</div>
<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js" type="text/javascript"></script>
<script src="https://rawgithub.com/guillermosalazar/LayoutTools/master/js/imgfallback.js"></script>
```

Image:
```html
<img src="/path/to/image.jpg" alt="" data-fallback="http://placehold.it/100x100">
```

Background Image:
```html
.element-with-background-image{
    background-image: url(../img/menu/bg.jpg);
    content: "http://placehold.it/20x55";
}
```