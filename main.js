
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
];
var textInput = document.getElementById("textInput");
var textInput2 = document.getElementById("textInput2");
textInput.focus(); // Gets the focus when the page is loaded
var id = 0; // Icrements by 1 each time the function addLine is called

const addLine = () => { // Adds a line inside the lists
    var text = textInput2.value; // gets the value
    textInput2.value = '';
    // textInput2.focus(); // gets the focus when the function addLine is called
    if (text != '') { // If text is empty, 
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.setAttribute('class', 'closeButton');

        var output = document.createTextNode(text);
        var buttonText = document.createTextNode('x');

        li.appendChild(output);
        button.appendChild(buttonText);
        li.appendChild(button);
        document.getElementById('modal-ul').appendChild(li);

        // li.setAttribute('key', id);
        lists[id-1].tasks.push({
            text: text,
            id: id,
        });
        id += 1;

        button.addEventListener('click', e => { // Removes line when cross is clicked
            e.target.parentElement.remove();
            var targetId = e.target.parentElement.getAttribute('key');
            // var targetIndex = tasks.findIndex(task => task.id == targetId);
            // tasks.splice(targetIndex, 1);
            textInput2.focus();
        });

    };
};

const addList = () => { // Adds a list 
    
    var title = textInput.value; // gets the value
    textInput.value = ''; // Resets the input
    if (title != '') { // If title is not empty, 
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.setAttribute('class', 'closeButton');

        var a = document.createElement('a');
        var titleText = document.createTextNode(title);
        var buttonText = document.createTextNode('x');

        a.appendChild(titleText);
        a.addEventListener('click', () => {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('cache').style.display = 'block';
        });
        document.getElementById('cache').addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('cache').style.display = 'none';
        });
        li.appendChild(a);
        button.appendChild(buttonText);
        li.appendChild(button);
        document.getElementById('table').appendChild(li);

        li.setAttribute('key', id);
        lists.push({
            id: id,
            title,
            tasks: []
        });
        id += 1;

        // var modal = document.createElement('div');
        // modal.classList.add("modal");
        // var title = document.createElement('h1');
        // modal.appendChild(title);
        // var lines = document.createElement('ul');
        // lines.classList.add('modal-ul');

        button.addEventListener('click', e => { // Removes line when cross is clicked
            e.target.parentElement.remove();
            var targetId = e.target.parentElement.getAttribute('key');
            var targetIndex = lists.findIndex(task => task.id == targetId);
            lists.splice(targetIndex, 1); // removes the elements from lists
            textInput.focus();
        });

    };
};

// Executes function addList when key enter is pressed
textInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        addList();
    };
});

// Executes function addLine when key enter is pressed
textInput2.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        addLine();
    };
});
