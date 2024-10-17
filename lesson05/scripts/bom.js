const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

button.addEventListener('click', function() {
    if (input.value != '') {

        const li = document.createElement('li');  //Create a new li item
        const deleteButton = document.createElement('button'); //Create a delete button
        li.textContent = input.value; //Populate the li elements
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


    }
});
    