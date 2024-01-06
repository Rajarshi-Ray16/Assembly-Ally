// function enableSecondForm() {
//     document.getElementById('textForm').removeAttribute('disabled');
// }

function answerQuestion() {
    const questionInput = document.getElementById('questionInput').value;
    const reversedAnswer = questionInput.split('').reverse().join('');
    if (document.getElementById('outputCard').hidden === true) {
        document.getElementById('outputCard').hidden = false;
        document.getElementById('answerOutput').value = questionInput + " - " + reversedAnswer;
    } else {
        if (document.getElementById('answerOutput').rows >= 3) {
            document.getElementById('answerOutput').rows += 1;
        }
        document.getElementById('answerOutput').value += "\n" + questionInput + " - " + reversedAnswer;
    }   
    document.getElementById('questionInput').value = "";
}


function updateFileList() {
    const input = document.getElementById('fileInput');
    let fileList = document.getElementById('fileList');
    fileList.innerHTML = '';

    let fileContainer = document.createElement('div');
    fileContainer.className = 'file-container';

    for (let i = 0; i < input.files.length; i++) {
        if (i > 0 && i % 5 === 0) {
            fileList.appendChild(fileContainer);
            fileContainer = document.createElement('div');
            fileContainer.className = 'file-container';
        }

        const fileName = input.files[i].name;
        const displayFileName = fileName.length > 25 ? fileName.substr(0, 11) + '...' + fileName.substr(-11) : fileName;

        let fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `<span class="badge badge-secondary">${displayFileName}</span>`;

        let deleteIcon = document.createElement('span');
        deleteIcon.className = 'delete-file';
        deleteIcon.innerHTML = '❌';
        deleteIcon.onclick = function () {
            console.log("deleteIcon clicked")
            let updatedFiles = new DataTransfer();
            for (let index = 0; index < input.files.length; index++) {
                if (index === i) {
                    continue;
                }
                updatedFiles.items.add(input.files[index]);
            }
            input.files = updatedFiles.files;
            updateFileList();
        };

        fileItem.appendChild(deleteIcon);
        fileContainer.appendChild(fileItem);
    }

    fileList.appendChild(fileContainer);
    document.getElementById('questionInput').removeAttribute('disabled');
    document.getElementById('questionInput').placeholder = "Type your Question..."
}
