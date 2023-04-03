const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = (e) => {
    e.preventDefault();

    if (xhr.readyState === xhr.DONE) {
        let title = xhr.response['data']['title'];
        pollTitle.innerText = title;
        let answers = xhr.response['data']['answers'];
        for (let answer in answers) {
            let template = `
            <button class="poll__answer">
                ${answers[answer]}
            </button>
            `;
            pollAnswers.insertAdjacentHTML('beforeend', template);
        }
    }
}

pollAnswers.onclick = () => {
    alert('Спасибо, Ваш голос засчитан!');
}

xhr.open('GET','https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json'
xhr.send();