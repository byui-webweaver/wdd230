const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') { //Check if input is empty, if not, then
        displayList(input.value); //Call displayList with the input.value
        chaptersArray.push(input.value); //Push the input.value into the chaptersArray
        setChapterList(); //Update the localStorage with the new array calling a function named setChapterList
        input.value = ''; //set input.value to nothing
        input.focus(); //Set the focus back to the input
    } else {
        alert('Enter a chapter!');
    }
});

function displayList(item) {
    
    const li = document.createElement('li');//pull all the code that builds a list item from the previous button click even listener
    const deleteButton = document.createElement('button'); // Create a delete button

    li.textContent = item; 
    deleteButton.textContent = '✖️'; //delete button text
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    
    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    console.log('Deleting chapter');  
}

function setChapterList () {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList () {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); //Remove the delete symbol from the end
    chaptersArray = chaptersArray.filter((item) => item !== chapter); //Filter out the chapter
    setChapterList(); // Update localStorage
}
