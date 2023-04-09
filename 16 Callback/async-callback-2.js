// Callback 1
let notes = [];

function destroyAllNote() {
  notes = [];
  console.log("Sucessfully deleted all notes", notes);
}

function updateAllNotes(callback) {
  notes.map((note) => {
    note.todo = "Updated content";
    note.updatedBy = "admin";
    note.updatedAt = new Date().toLocaleTimeString();
    return note;
  });
  console.log("Sucessfully updated all notes", notes);
  callback();
}

function createTodosNote(callback1, callback2) {
  setTimeout(() => {
    notes.push({
      todo: "This is a new note",
      createdBy: "nhloc",
      createdAt: new Date().toLocaleTimeString(),
    });
    callback1(callback2);
  }, 1000);
}

function onClickButton() {
  createTodosNote(updateAllNotes, destroyAllNote);
}

onClickButton();
