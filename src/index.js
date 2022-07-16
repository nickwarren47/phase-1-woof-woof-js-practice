// // On the page, there is a div with the id of "dog-bar". When the page loads,
// // use fetch to get all of the pup data from your server. When you have this 
// // information, you'll need to add a span with the pup's name to the dog bar 
// // (ex: <span>Mr. Bonkers</span>).
// const nameBar = document.querySelector('#dog-bar');
// const dogSummary = document.querySelector('#dog-summary-container');
// const dogInfo = document.querySelector('#dog-info');

// function showDogs(){
//     fetch('http://localhost:3000/pups')
//     .then (res => res.json())
//     // .then (json => console.log(json))
//     .then (data => data.forEach(displayDogNames))
// }

// function displayDogNames(dog){
//     const dogName = document.createElement('span');
//     dogName.textContent = dog.name;
//     // console.log(dog.name)
//     nameBar.append(dogName);


// // // When a user clicks on a pup's span in the div#dog-bar,
// // // that pup's info (image, name, and isGoodDog status) should 
// // // show up in the div with the id of "dog-info".
//     const renderingDogInfo = () => {
//         const dogNameInfo = document.createElement('h2');
//         dogNameInfo.textContent = dog.name;
//         const dogIsGood = document.createElement('button');
//         dogIsGood.id = 'goodDogButton';
//         // dogIsGood.textContent = "Dog Good/Dog Bad"
//         dogIsGood.textContent = dog.isGoodDog;
//         const dogPicture = document.createElement('img');
//         dogPicture.src = dog.image;
//         dogInfo.append(dogNameInfo, dogIsGood, dogPicture);
//         addButtonToDogs(dogIsGood, dog)
//     }
//     dogName.addEventListener('click', renderingDogInfo);
    // console.log(dogName);
// }

// // When a user clicks the Good Dog/Bad Dog button, two things should happen:

// // * The button's text should change from Good to Bad or Bad to Good
// // * The corresponding pup object in the database should be updated to reflect the new isGoodDog value
// // You can update a dog by making a PATCH request to /pups/:id and including the 
// // updated isGoodDog status in the body of the request.
// const addButtonToDogs = (dogIsGood, dog) => {
//     const pushButton = document.getElementById('goodDogButton')
//     pushButton.addEventListener('click', () => {
//         if (dog.isGoodDog === true){
//             pushButton.textContent = 'Is Good'
//         } else {pushButton.textContent = 'Is Bad'};
//         debugger;
//     })
// }
// showDogs();

/* 
On the page, there is a div with the id of "dog-bar". When the page loads,
use fetch to get all of the pup data from your server. When you have this 
information, you'll need to add a span with the pup's name to the dog bar 
*/
const dogBar = document.querySelector('#dog-bar')

function getPupData(){
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(dataArray => showPupName(dataArray))
    // .then(data => data.forEach(showPupName))
}

// function showPupName(dog){
//         const dogName = document.createElement('span');
//         dogName.textContent = dog.name;
//         dogBar.append(dogName);
// }


const showPupName = (dogsArray) => {
    dogsArray.forEach((object) => {
        const dogName = document.createElement('span');
        dogName.textContent = object.name;
        dogBar.append(dogName);
        /*
        When a user clicks on a pup's span in the div#dog-bar, that 
        pup's info (image, name, and isGoodDog status) should show 
        up in the div with the id of "dog-info". Display the pup's 
        info in the div with the following elements:
        an img tag with the pup's image url
        an h2 with the pup's name
        a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false.
        */
        function displayDog(){
            const dogInfo = document.querySelector('#dog-info')
            const pupPic = document.createElement('img')
            const pupName = document.createElement('h2')
            const dogGoodButton = document.createElement('button');
            dogGoodButton.id = 'goodDogButton';
            pupPic.src = object.image;
            // console.log(dog)
            pupName.textContent = object.name;
            dogGoodButton.textContent = object.isGoodDog;
            dogInfo.textContent="";
            dogInfo.append(pupPic, pupName, dogGoodButton);
            dogGoodButton.addEventListener('click', ()=>{dogDeterminer(dogGoodButton)})
            
        }
    dogName.addEventListener('click', displayDog);
    // console.log(showPupName)
    })
}
function dogDeterminer(dogGoodButton){
    if(dogGoodButton.textContent === "true"){
        dogGoodButton.textContent = "false"
    }else if(dogGoodButton.textContent === "false"){
        dogGoodButton.textContent = "true"
    }
}

getPupData();










