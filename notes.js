const addTitle = document.getElementById("addTitle");
const addText = document.getElementById("addText");
const addNoteButton = document.getElementById("addNote");
const notesDiv = document.getElementById("notes");
// let notes = [];
showNotes();
function addNotes() {
  let notes = localStorage.getItem("notes"); //comes in string only
  if (notes === null) {
    notes = []; //no notes present
  } else {
    notes = JSON.parse(notes);
  }

  if (addText.value == "") {
    alert("Add Your Note");
    return;
  }

  const noteObj = {
    title: addTitle.value,
    text: addText.value,
  };

  addTitle.value = "";
  addText.value = "";

  notes.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
  //   console.log(addText.value);
}
function showNotes() {
  let notesHTML = "";
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    return;
  } else {
    notes = JSON.parse(notes); //string to arr
  }
  for (let i = 0; i < notes.length; i++) {
    notesHTML += ` 
        <div class="note">
           <button class="deleteNote" id=${i} onclick="deleteNote(${i})" >Delete</button>
           <div class="title">${
             notes[i].title === "" ? "Note" : notes[i].title
           } </div>
           <div class="text">${notes[i].text}</div>
       </div>
   `;
  }
  // console.log(notes);
  notesDiv.innerHTML = notesHTML; // notes wali id me add ho jaegaaa check upr notes div kya hai uss id pr jaake yeh add ho jaega dynamically
}

addNoteButton.addEventListener("click", addNotes);

function deleteNote(ind) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    return;
  } else {
    notes = JSON.parse(notes); //string to arr
  }
  notes.splice(ind, 1); //use for deleting like arr=[1,2,3,4] ind=2 so 2nd index sey 1 delete karde
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
