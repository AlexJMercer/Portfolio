// all your JS code

var mixedMode = {
  name: "htmlmixed",
  scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                 mode: null},
                {matches: /(text|application)\/(x-)?vb(a|script)/i,
                 mode: "vbscript"}]
};

function editor(id) {
  CodeMirror.fromTextArea(document.getElementById(id), {
    mode:  mixedMode,
    keyMap: "sublime",
    readOnly: true,
    lineNumbers: true,
    theme: "monokai"
  });
}

function editorCSS(id) {
  CodeMirror.fromTextArea(document.getElementById(id), {
    mode:  'text/css',
    keyMap: "sublime",
    readOnly: true,
    lineNumbers: true,
    theme: "monokai"
  });
}

function editorSCSS(id) {
  CodeMirror.fromTextArea(document.getElementById(id), {
    mode:  "text/x-scss",
    keyMap: "sublime",
    readOnly: true,
    lineNumbers: true,
    theme: "monokai"
  });
}

function killCM(id) {
    /*CodeMirror.fromTextArea(id.toTextArea());
*/
}


window.onload = function() {

        editor('links');
        editor('template');
        editorSCSS('myScss');
        editorCSS('myCss');
        editorCSS('minificados');
    };


    /*$('.modal').on('hidden.bs.modal', function () {
      killCM('cards');
    })*/
