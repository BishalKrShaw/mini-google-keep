const main = document.querySelector("main");
const addNotesBtn = document.querySelector("#addNotes");

const addNotes = () => {

  const noteForm = document.createElement("form");
  noteForm.className = 'notes'; // 2nd way : noteForm.classList.add('notes)

  noteForm.innerHTML = `
    <div class="title">
      <input type="text" placeholder="Title">
    </div>
    <div class="content">
      <textarea placeholder="Content"></textarea>
    </div>
    <div class="delete">
      <button type="button" class="deleteBtn">Delete</button>
    </div>
  `;

  // Add event listener to the form to prevent its default submission
  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
  })

  // Add event listener to the delete button to remove the note
  noteForm.querySelector(".deleteBtn").addEventListener("click", () => {
    main.removeChild(noteForm);
  })

  main.appendChild(noteForm);
  
};

addNotesBtn.addEventListener("click", addNotes);
