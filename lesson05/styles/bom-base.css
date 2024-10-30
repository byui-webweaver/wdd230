const input = document.querySelector('#favchap');
const notesInput = document.querySelector('#notes'); //Select the notes input
const button = document.querySelector('button');
const list = document.querySelector('#list')

button.addEventListener('click', function() {
    if (input.value != '' && notesInput.value != '') {

        const li = document.createElement('li');  //Create a new li item
        const deleteButton = document.createElement('button'); //Create a delete button

        //Populate the li elements with the chapter and notes
        li.textContent = `${input.value} - Notes: ${notesInput.value}`;

        deleteButton.textContent = '✖️'; //Populate the button textContent with a x
        li.append(deleteButton); //Append the li element with the delete button
        list.append(li); //Append the li element to the ul in your HTML

        //Add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
        }); 

        input.focus(); //Send the focus to the input element
        input.value = ''; //Change the input value to nothing
        notesInput.value = ''; //Clear notes and input value

    } else {
        alert('Enter a chapter and an added note!');
    }
});
    