import { getResource } from "../services/requests";

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          sizeElems = sizeBlock.querySelectorAll('option'),
          materialBlock = document.querySelector(material),
          materialElems = materialBlock.querySelectorAll('option'),
          optionsBlock = document.querySelector(options),
          optionsElems = optionsBlock.querySelectorAll('option'),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    function getPrice(api, optionElem) {
        getResource(api)
            .then(res => {
                createOptions(res, optionElem)
            })
            .catch();
    }

    function createOptions(res, optionElem) {

        res.forEach(({price1, price2, price3, price4}) => {
            let priceMass = [price1, price2, price3, price4];
            for (let i = 1; i < optionElem.length; i++) {
                optionElem[i].value = priceMass[i-1];
            }
        })
    }

    getPrice('http://localhost:3000/size', sizeElems);
    getPrice('http://localhost:3000/material', materialElems);
    getPrice('http://localhost:3000/options', optionsElems);

    function calcFunc() {
        sum = ((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Выберите размер и материал картины'
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = (sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    }

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
}

export default calc;