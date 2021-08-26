// SOLUTION #1

// let surnames = ["Piazza", "Pagani", "Ferrari", "Alemanno", "Lazzaroni", "Bompiani"]; 

// let userSurname = prompt("Please, tell us your surname.");

// // First letter only must be uppercase ---
// if (userSurname.charAt(0) !== userSurname.charAt(0).toUpperCase()) {
//     alert("You must type the first letter ONLY in uppercase. Reload the page to try again.");
// } else {
//     surnames.push(userSurname);
// }

// // Sorting the array
// let orderedSurnames = surnames.sort();

// // Adding the elements of the ordered array to the list 
// for (i = 0; i < orderedSurnames.length; i++) {
//    let startList = document.getElementById("list").innerHTML;
//    document.getElementById("list").innerHTML = startList + "<li>" + orderedSurnames[i] + "</li>";
// }


// SOLUTION #2

let surnames = ["Piazza", "Pagani", "Ferrari", "Alemanno", "Lazzaroni", "Bompiani"]; 

let userSurname;

// Prompting the user until I get a string ---
do {
    userSurname = prompt("Please, tell us your surname. Only letters are going to be accepted!");
} while (!isNaN(parseInt(userSurname)));


// First letter ONLY must be uppercase ---
if (userSurname.charAt(0) !== userSurname.charAt(0).toUpperCase()) {
    alert("You should have typed only the first letter in uppercase. I'll make it work for you.");
    surnames.push(userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase());
} else if (userSurname.slice(1) !== userSurname.slice(1).toLowerCase()) {
    surnames.push(userSurname.charAt(0) + userSurname.slice(1).toLowerCase());
}

// Sorting the array
let orderedSurnames = surnames.sort();

// Adding the elements of the ordered array to the list 
for (i = 0; i < orderedSurnames.length; i++) {
   document.getElementById("list").innerHTML += "<li>" + orderedSurnames[i] + "</li>";
}