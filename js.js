const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

const itemsContainer = document.getElementById("Content");

const Sort = document.getElementById("Sort");

const Count = document.getElementById("Count");


let Conferences = [
    {
        id: 1,
        title: 'Js',
        place: 'Зала 12',
        price: 100,
        quantity: 300
    },
    {
        id: 2,
        title: 'Python',
        place: 'Зала 13',
        price: 300,
        quantity: 500
    },
    {
        id: 3,
        title: 'C',
        place: 'Зала 3',
        price: 400,
        quantity: 445
    },
    {
        id: 4,
        title: 'Java',
        place: 'Зала 10',
        price: 551,
        quantity: 120
    },
    {
        id: 5,
        title: 'React.js',
        place: 'Зала 10',
        price: 334,
        quantity: 220
    },
    {
        id: 6,
        title: 'C#',
        place: 'Зала 10',
        price: 678,
        quantity: 130
    },
];

const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};

findButton.addEventListener("click", () => {
    const foundConferences = Conferences.filter(
        (film) => film.title.search(findInput.value) !== -1
    );

    renderItemsList(foundConferences);
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(Conferences);

    findInput.value = "";
});

const itemTemplate = ({ id, title, place, price, quantity }) => `
<div class="Card" id="${id}">
    <img src="https://via.placeholder.com/235x140" />
    <div class="Card__content">
        <h2>${title}</h2>
        <p class="Card__description">${place}</p>
        <div class = "Card__bottom">
            <span>Ціна: ${price} грн</span>
            <span>Учасників: ${quantity}</span>
        </div>
    </div>
</div>`;
const addItemToPage = ({ id, title, place, price, quantity }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, place, price, quantity })
    );
};


Count.addEventListener('click', () => {
    let totalquantity = 0;
    for (let i = 0; i < Conferences.length; i++) {
        totalquantity = totalquantity + Conferences[i].quantity
    }
    document.getElementById("TotalDuration").innerHTML = `${totalquantity}`;
});


Sort.addEventListener('click', () => {
    const sortedConferences = Conferences.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    })
    renderItemsList(sortedConferences);
})



renderItemsList(Conferences);