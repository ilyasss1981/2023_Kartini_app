const changeFormState = (state) => {
    const size = document.querySelectorAll('#size'),
          material = document.querySelectorAll('#material'),
          options = document.querySelectorAll('#options'),
          promocode = document.querySelectorAll('.promocode'),
          calcPrice = document.querySelector('.calc-price');

    function bindActionToElem(event, elem, prop) {

        elem.forEach(item => {
            item.addEventListener(event, function() {
                state[prop] = item.value;
                state['price'] = calcPrice.textContent;
                console.log(state);
            })
        })
    }

    bindActionToElem('change', size, 'size');
    bindActionToElem('change', material, 'material');
    bindActionToElem('change', options, 'options');
    bindActionToElem('input', promocode, 'promocode');
}

export default changeFormState;