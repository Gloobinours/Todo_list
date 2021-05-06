
var lists = [
    // {
    //     id: 1,
    //     title: 'Faire le menage',
    //     tasks: [
    //         {
    //             id: 2,
    //             text: 'Attrape le balais'
    //         }
    //     ]
    // }
]
var textInput = document.getElementById("textInput");
textInput.focus(); // Gets the focus when the page is loaded
var id = 0;

// const addLine = () => {
//     var text = textInput.value; // gets the value
//     textInput.value = '';
//     textInput.focus(); // gets the focus when the function addLine is called
//     if (text != '') { // If text is empty, 
//         var li = document.createElement('li');
//         var button = document.createElement('button');

//         var output = document.createTextNode(text);
//         var buttonText = document.createTextNode('x');

//         li.appendChild(output);
//         button.appendChild(buttonText);
//         li.appendChild(button);
//         document.getElementById('table').appendChild(li);

//         li.setAttribute('key', id);
//         tasks.push({
//             text: text,
//             id: id,
//             subTasks: []
//         });
//         id += 1;

//         button.addEventListener('click', e => { // Removes line when cross is clicked
//             e.target.parentElement.remove();
//             var targetId = e.target.parentElement.getAttribute('key');
//             var targetIndex = tasks.findIndex(task => task.id == targetId);
//             tasks.splice(targetIndex, 1);
//             textInput.focus();
//         });

//     }
// };

const addList = () => {
    
    var title = textInput.value; // gets the value
    textInput.value = ''; // Resets the input
    if (title != '') { // If title is not empty, 
        var li = document.createElement('li');
        var button = document.createElement('button');
        var a = document.createElement('a');
        var titleText = document.createTextNode(title);
        var buttonText = document.createTextNode('x');

        a.appendChild(titleText)
        li.addEventListener('click', e => {
            document.getElementById('modal').style.display = 'block';
        });
        li.appendChild(a);
        button.appendChild(buttonText);
        li.appendChild(button);
        document.getElementById('table').appendChild(li);

        li.setAttribute('key', id);
        lists.push({
            id,
            title,
            tasks: []
        });
        id += 1;

        button.addEventListener('click', e => { // Removes line when cross is clicked
            e.target.parentElement.remove();
            var targetId = e.target.parentElement.getAttribute('key');
            var targetIndex = lists.findIndex(task => task.id == targetId);
            lists.splice(targetIndex, 1); // removes the elements from lists
            textInput.focus();
        });

    }
};

// Executes function addLine when key enter is pressed
textInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        addList();
    }
});
