const progress = document.querySelector('#progress');
const form = document.querySelector('#form');
const input = document.querySelector('#file');

const xhr = new XMLHttpRequest();

form.onsubmit = (e) => {
    e.preventDefault();
    let file = input.files[0];

    if (file) {
        xhr.upload.onprogress = (prog) => {
            progress.setAttribute('max', prog.total);
            progress.value = prog.loaded;
        }
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(file);
    }
}