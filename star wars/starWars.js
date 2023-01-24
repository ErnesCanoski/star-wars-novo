  function next() {
        fetch("https://swapi.dev/api/people/" + i)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(function (data) {
        let ul = document.getElementById("people");
        ul.innerHTML = `<table border = 2px solid black>
            <td>name:${data.name}</td>
            <tr>
            <td>height:${data.height}</td>
            <tr>
            <td>mass:${data.mass}</td>
            <tr>
            <td>gender:${data.gender}</td>
            <tr>
            <td>appearances:${data.films}</td>
            <tr>
            </table>`
    })
    i++;
    }

    function prev() {
        if(i < 1) {
            fetch("https://swapi.dev/api/people/" + 1)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(function (data) {
        let ul = document.getElementById("container");
        ul.innerHTML = `<table border = 2px solid black>
            <td>name:${data.name}</td>
            <tr>
            <td>height:${data.height}</td>
            <tr>
            <td>mass:${data.mass}</td>
            <tr>
            <td>gender:${data.gender}</td>
            <tr>
            <td>appearances:${data.films}</td>
            <tr>
            </table>`

            i = 1;
    })} else {
            fetch("https://swapi.dev/api/people/" + i)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(function (data) {
        let ul = document.getElementById("container");
        ul.innerHTML = `<table border = 2px solid black>
            <td>name:${data.name}</td>
            <tr>
            <td>height:${data.height}</td>
            <tr>
            <td>mass:${data.mass}</td>
            <tr>
            <td>gender:${data.gender}</td>
            <tr>
            <td>appearances:${data.films}</td>
            <tr>
            </table>`
            i = i - 1;
    })
        }
    }



































//fetch za people
// let i = 0;

// function next(){
    
// }

// function previous(){
//     if(i < 1){
//         alert("cannot go back");
//     }
// }


// let btn = document.getElementById("btn").addEventListener("click", function () {
//     fetch("https://swapi.dev/api/people").then(function (response) {
//         console.log(response);
//         let data = response.json();
//         return data;
//     }).then(function (data) {
//         console.log(data)
//         printPeople(data.results);
//     })
//     //function za iminja
//     function printPeople(people) {
//         let ul = document.getElementById("container");
//         let html = "";
//         for (let person of people) {
//             html += `<table border = 2px solid black>
//             <td>name:${person.name}</td>
//             <tr>
//             <td>height:${person.height}</td>
//             <tr>
//             <td>mass:${person.mass}</td>
//             <tr>
//             <td>gender:${person.gender}</td>
//             <tr>
//             <td>appearances:${person.films}</td>
//             <tr>
//             </table>`
//         }
//         ul.innerHTML += html;
//     }
// });

// //fetch za starships
// let btn1 = document.getElementById("btn1").addEventListener("click", function () {
//     fetch("https://swapi.dev/api/starships/?page=2").then(function (response) {
//         console.log(response);
//         let data = response.json()
//         return data;
//     }).then(function (data) {
//         console.log(data);
//         starships(data.results);
//     })
//     //funckija za starships
//     function starships(ships) {
//         let ul = document.getElementById("ships");
//         let html = "";
//         for (let ship of ships) {
//             html += `<table border=2px solid black>
//             <td>name:${ship.name}</td>
//             <tr>
//             <td>model:${ship.model}</td>
//             <tr>
//             <td>manufacturer:${ship.manufacturer}</td>
//             <tr>
//             <td>cost:${ship.cost}</td>
//             <tr>                        
//             <td>Poeple Capacity:${ship.passengers}</td>
//             <tr>
//             <td>class:${ship.starship_class}</td>
//             </table>`
//         }
//         ul.innerHTML += html;
//     }
// });

// // let nextButton = document.getElementById("btn2");
// // nextButton.innerHTML = "Next";
// // nextButton.onclick = () => {
// //     let container = document.getElementById("container");
// //     container.innerHTML = "";

//     // fetch za next button 
// //         fetch("https://swapi.dev/api/people/3/")
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log(data);
// //             container.innerHTML = `<table border=2px solid black>
// //                 <td>name:${data.name}</td>
// //                 <tr>
// //              <td>height:${data.height}</td>
// //                  <tr>
// //                  <td>mass:${data.mass}</td>
// //                  <tr>
// //                  <td>hair color:${data.hair_color}</td>
// //                  <tr>                        
// //                  <td>skin color:${data.skin_color}</td>
// //                  <tr>
// //                  <td>eye color:${data.eye_color}</td>
// //                  <td>birth year:${data.birth_year}</td>
// //              <td>gender:${data.gender}</td>
// //                  </table>`
// //         });
// // };