const items = document.querySelector('#items');
const loader = document.querySelector('#loader');

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = (e) => {
    e.preventDefault();
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');

        let currencies = xhr.response['response']['Valute'];
        for (let currency in currencies) {
            let template = `
                <div class="item">
					<div class="item__code">
					    ${currencies[currency].CharCode}
					</div>
					<div class="item__value">
					    ${currencies[currency].Value}
					</div>
					<div class="item__currency">
					    руб.
					</div>
				</div>
            `;
            items.insertAdjacentHTML('beforeend', template);
        };
    }
}

xhr.open('GET','https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json'
xhr.send();