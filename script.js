let names = [
  "Aman",
  "Aman singh",
  "Abhijeet",
  "Abhishak",
  "Bobby",
  "Bittu",
  "Ram",
  "Shyam",
  "Shivam Soni",
  "Yash goyal",
  "manoj",
  "Cat",
  "Dog",
  "Ranu",
  "kartik",
  "keshav",
  "Aakesh",
  "Krishan chand",
  "Rohan shani",
  "Rajkumar Soni",
  "Hariom Soni",
  "Rajni soni",
  "Sidhi bansal",
  "Sidhi Gupta",
  "Ritik ama",
  "Gurushran Singh",
  "Archit Verma",
  "Abhilash",
  "Tinku",
];

let sortedNames = names.sort();

// reference
let input = document.getElementById("input");

// Execute function on keyup
input.addEventListener("keyup", (e) => {
  // loop through above array
  //initially remove all elements (so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();

  for (let i of sortedNames) {
    //convert input to lowerCase and compair with each string

    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      // create li element
      let listItem = document.createElement("li");
      // One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}