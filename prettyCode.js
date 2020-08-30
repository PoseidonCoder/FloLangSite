(function() {
    var head = document.querySelector("head");

    var cmCSS = document.createElement("link");
    cmCSS.rel = "stylesheet";
    cmCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/codemirror.min.css";

    var cmJS = document.createElement("script");
    cmJS.src = "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/codemirror.min.js";

    var cobalt = document.createElement("link");
    cobalt.rel = "stylesheet";
    cobalt.href = "https://codemirror.net/theme/cobalt.css";

    head.appendChild(cmCSS);
    head.appendChild(cmJS);
    head.appendChild(cobalt);
    
    onload = ()=> {
        var code = document.getElementsByClassName("code");
        for (var i=0; i<code.length; i++) {
            CodeMirror(code[i], {
                value: code[i].getAttribute("data-code"),
                lineNumbers: true,
                readOnly: true,
                theme: "cobalt"
            });
        
            var lineBreaks = code[i].getAttribute("data-code").split("\n").length;
        
            document.getElementsByClassName("CodeMirror")[i].style.height =  lineBreaks * 25 + "px";
        }
    }
})()
