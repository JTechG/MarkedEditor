

function myFunction() {
       u("#preview").empty();
       //var display = u('#codeeditor').nodes[0].value;
       var display = editor.getValue();
       console.log("Display" + display);
       
       u("#preview").html(marked(display));
}







