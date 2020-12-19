const game = (function() {
    let _input = document.querySelector(".container__form__input");
    let _resultDisplay = document.querySelector(".container__result");
    let _errorDisplay = document.querySelector(".container__general__error");
    let _result = 0;

    
    _input.addEventListener('input', (event) => {
        let bin = event.target.value;
        if (bin.length == 0 ) {
            displayResult('Waiting for binary.');
            displayError('');
        } else if (checkValidNumbers(bin)) {
            displayError('');
            binToDec(bin);
            displayResult();
        } else {
            displayError('Can only enter 0 or 1 in binary number format.');
        }
    })

    function checkValidNumbers(text) {
        for ( let i = 0; i < text.length; i++ ) {
            if ( text[i] != "0" && text[i] != "1")
                return false;
        }
        return true;
    }

    function binToDec(text) {
        let length = text.length;
        _result = 0;
        
        for ( let i = 0; i < length; i++ ) {
            if ( Number.parseInt(text[i]) == 1) 
                _result += Math.pow(2, length - 1 - i);
        }

        console.log(_result);

    }

    function displayError(message) {
        _errorDisplay.textContent = message;
    }

    function displayResult(message) {
        if ( message ) {
            _resultDisplay.textContent = message;
        } else {
            _resultDisplay.textContent = _result;
        }
    }

})();
