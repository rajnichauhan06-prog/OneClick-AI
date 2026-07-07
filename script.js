 // OneClick AI Version 2

let currentTool = "";

function scrollToTools() {
    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });
}

function openTool(tool) {

    currentTool = tool;

    const title = document.getElementById("toolTitle");

    switch(tool){

        case "rewriter":
            title.innerHTML = "📝 AI Text Rewriter";
            break;

        case "summary":
            title.innerHTML = "📄 AI Summarizer";
            break;

        case "qr":
            title.innerHTML = "📱 QR Generator";
            break;

        case "code":
            title.innerHTML = "💻 Code Generator";
            break;

        case "background":
            title.innerHTML = "🖼 Background Remover";
            break;

        default:
            title.innerHTML = "Choose a Tool";

    }

    document.getElementById("inputText").value="";
    document.getElementById("outputText").value="";

    document.querySelector(".workspace").scrollIntoView({
        behavior:"smooth"
    });

}

document.getElementById("runBtn").addEventListener("click",function(){

    let input=document.getElementById("inputText").value.trim();

    if(input===""){
        alert("Please enter some text first.");
        return;
    }

    let output="";

    switch(currentTool){

        case "rewriter":

            output=
            "✨ Rewritten Version:\n\n"+
            input.replace(/\bgood\b/gi,"excellent")
                 .replace(/\bbad\b/gi,"poor");

            break;

        case "summary":

            output=
            "📄 Summary:\n\n"+
            input.substring(0,180);

            if(input.length>180){
                output+="...";
            }

            break;

        case "qr":

            output=
            "📱 QR generation will be connected in Version 3.";

            break;

        case "code":

            output=
`// Example JavaScript

function hello(){

    console.log("${input}");

}`;

            break;

        case "background":

            output=
            "🖼 Background remover will be added in Version 3.";

            break;

        default:

            output=
            "Select a tool first.";

    }

    document.getElementById("outputText").value=output;

});
