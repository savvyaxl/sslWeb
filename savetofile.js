// https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
function saveTextAsFile()
{
    var textToSave = document.getElementById("script_out").innerHTML;
	textToSave = textToSave.replace('<table border="1"></table>','');
	textToSave = textToSave.replace(/<br>/ig,"\n");
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = getSelected('radio', 'action_type' ) + getScriptExt ();
 
 download(textToSave, fileNameToSaveAs);
 
//    downloadLink.download = fileNameToSaveAs;
//    downloadLink.innerHTML = "Download File";
//    downloadLink.href = textToSaveAsURL;
//    downloadLink.onclick = destroyClickedElement;
//    downloadLink.style.display = "none";
//    document.body.appendChild(downloadLink);
// 
//    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 