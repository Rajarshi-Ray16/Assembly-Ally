// function enableSecondForm() {
//     document.getElementById('textForm').removeAttribute('disabled');
// }

function answerQuestion() {
    const questionInput = document.getElementById('questionInput').value;
    const reversedAnswer = questionInput.split('').reverse().join('');
    document.getElementById('textForm').removeAttribute('disabled');
    document.getElementById('outputCard').hidden = false;
    document.getElementById('answerOutput').value = reversedAnswer;
    document.getElementById('outputCard').removeAttribute('disabled');
}

// function updateFileList() {
//     const input = document.getElementById('fileInput');
//     let fileList = document.getElementById('fileList');
//     fileList.innerHTML = '';

//     let fileContainer = document.createElement('div');
//     fileContainer.className = 'file-container';

//     for (let i = 0; i < input.files.length; i++) {
//         const fileName = input.files[i].name;
//         const displayFileName = fileName.length > 19 ? fileName.substr(0, 8) + '...' + fileName.substr(-8) : fileName;

//         let fileItem = document.createElement('div');
//         fileItem.className = 'file-item';
//         fileItem.innerHTML = `<span class="badge badge-secondary">${displayFileName}</span>`;

//         let deleteIcon = document.createElement('span');
//         deleteIcon.className = 'delete-file';
//         deleteIcon.innerHTML = '❌';
//         deleteIcon.onclick = function () {
//             console.log("deleteIcon clicked")
//             let updatedFiles = new DataTransfer();
//             for (let index = 0; index < input.files.length; index++) {
//                 if (index === i) {
//                     continue;
//                 }
//                 updatedFiles.items.add(input.files[index]);
//             }
//             input.files = updatedFiles.files;
//             updateFileList();
//         };

//         fileItem.appendChild(deleteIcon);
//         fileContainer.appendChild(fileItem);
//     }

//     fileList.appendChild(fileContainer);
// }


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
}
