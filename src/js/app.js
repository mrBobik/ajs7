export class Validator {
	validateUsername(username) {
        const firstSymbolStr = /^[^0-9_-]/;
        const firstSymbol = firstSymbolStr.test(username);
        const lastSymbolStr = /[^0-9_-]$/;
        const lastSymbol = lastSymbolStr.test(username);
        const numbersInRowStr =/^((?!\d{4}).)*$/;
        const numbersInRow = numbersInRowStr.test(username);
        const symbolsAllowedStr =/^[a-zA-Z0-9_-]+$/;
        const symbolsAllowed = symbolsAllowedStr.test(username);       
        if (firstSymbol && lastSymbol && numbersInRow && symbolsAllowed) {
            return true;
        }
        else {
            return false; 
        }
    }
}