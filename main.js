
var tasks = [
    // {
    //     id: 1,
    //     text: 'Faire le menage',
    //     subTasks: [
    //         {
    //             id: 2,
    //             text: 'Attrape le balais'
    //         }
    //     ]
    // }
]
var textInput = document.getElementById("textInput");
textInput.focus();
var id = 0;

function addLine() {
    var text = textInput.value; // gets the value
    textInput.value = '';
    textInput.focus();
    if (text != '') {
        var li = document.createElement('li');
        var button = document.createElement('button');

        var output = document.createTextNode(text);
        var buttonText = document.createTextNode('x');

        li.appendChild(output);
        button.appendChild(buttonText);
        li.appendChild(button);
        document.getElementById('table').appendChild(li);

        li.setAttribute('key', id);
        tasks.push({
            text: text,
            id: id,
            subTasks: []
        });
        id += 1;

        button.addEventListener('click', e => {
            e.target.parentElement.remove();
            var targetId = e.target.parentElement.getAttribute('key');
            var targetIndex = tasks.findIndex(task => task.id == targetId);
            tasks.splice(targetIndex, 1);
            textInput.focus();
        });

    }
};

// someArray.splice(x, 1);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        addLine();
    }
});
