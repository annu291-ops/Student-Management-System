// Get elements
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

// Load students from localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];

// Function to render students in table
function renderStudents() {
  studentList.innerHTML = "";
  students.forEach((student, index) => {
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>${student.marks}</td>
        <td>
          <button class="edit" onclick="editStudent(${index})">Edit</button>
          <button class="delete" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
    studentList.innerHTML += row;
  });
}

// Add student
studentForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const course = document.getElementById("course").value;
  const marks = document.getElementById("marks").value;

  const newStudent = { name, roll, course, marks };
  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));

  studentForm.reset();
  renderStudents();
});

// Edit student
function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("roll").value = student.roll;
  document.getElementById("course").value = student.course;
  document.getElementById("marks").value = student.marks;

  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}

// Delete student
function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}

// Initial render
renderStudents();
