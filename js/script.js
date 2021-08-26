let surnames = ["Piazza", "Pagani", "Ferrari", "Alemanno", "Lazzaroni", "Bompiani"]; 

let userSurname = prompt("Please, tell us your surname.");

// First letter only must be uppercase ---
if (userSurname.charAt(0) !== userSurname.charAt(0).toUpperCase()) {
    alert("You must type the first letter ONLY in uppercase. Reload the page to try again.");
} else {
    surnames.push(userSurname);
}

// Sorting the array
let orderedSurnames = surnames.sort();

// Adding the elements of the ordered array to the list 
for (i = 0; i < orderedSurnames.length; i++) {
   let startList = document.getElementById("list").innerHTML;
   document.getElementById("list").innerHTML = startList + "<li>" + orderedSurnames[i] + "</li>";
}


