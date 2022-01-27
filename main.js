showNotes();
  

let addBtn = document.getElementById("add");

addBtn.addEventListener("click", function(e) {

    let addTxt = document.getElementById("Txt");

    let notes = localStorage.getItem("new-notes");
  
    if (notes == null) notesObj = [];

    else notesObj = JSON.parse(notes);
  
    notesObj.push(addTxt.value);

    localStorage.setItem("new-notes", JSON.stringify(notesObj));

    addTxt.value = "";
  
    showNotes();
});
  
// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("new-notes");
  
    if (notes == null) notesObj = [];

    else notesObj = JSON.parse(notes);
  
    let html = "";
  
    notesObj.forEach(function(element, index) {

        html += `<div class="noteCard my-2 mx-2 card">
                <div class="card-body">
                    <h5 class="card-title">
                        Note ${index + 1}
                    </h5>
                    <p class="card-text"> 
                        ${element}
                    </p>
   
                  <button id="${index}" onclick=
                    "deleteNote(this.id)"
                    class="btn btn-primary">
                    Delete Note
                </button>
            </div>
        </div>`;
    });
  
    let notesElm = document.getElementById("new-notes");
  
    if (notesObj.length != 0) notesElm.innerHTML = html;
    else
        notesElm.innerHTML = `write something down`;
}
  

function deleteNote(index) {
    let notes = localStorage.getItem("new-notes");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    notesObj.splice(index, 1);
  
    localStorage.setItem("new-notes", 
        JSON.stringify(notesObj));
  
    showNotes();
}