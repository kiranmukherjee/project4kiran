function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
        .dataTransfer
        .clearData();
}

class Art {
   
    constructor(artValue){   
       this.artValue= artValue;
        }
    checkValue(){
        if(this.artValue > 2)
        {console.log("You like art")}
        if (this.artValue < 2)
        {console.log("You don't like art")}
        }
}

let piece1 = new Art(1);

piece1.checkValue();
    
        


// window.getCount = function(parent, getChildrensChildren){
//     var relevantChildren = 0;
//     var children = parent.childNodes.length;
//     for(var i=0; i < children; i++){
//         if(parent.childNodes[i].nodeType != 3){
//             if(getChildrensChildren)
//                 relevantChildren += getCount(parent.childNodes[i],true);
//             relevantChildren++;
//         }
//     }
//     if (relevantChildren <= 4){
//         return("you dont like art")
//     }
//     else (relevantChildren > 4);{ 
//         return("you like art")
//     }
// }

// submissionbtn = document.getElementById("submission")

// submissionbtn.onclick = function() {
//     document.getElementById("txtOutput").innerHTML = getCount(document.getElementById('test'), false);
    
// }

