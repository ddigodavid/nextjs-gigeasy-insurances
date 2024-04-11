import CurrencyFormatter from "@/constants/currency/CurrencyFormatter";
import convertCentsToDollars from "./convertCentsToDollars";
import FractionCurrencyFormatter from "@/constants/currency/FractionCurrencyFormatter";

const formatCurrency = (val = '0', areCents = false) => {
	let value = Number(val) || 0;
  
	if (areCents) {
	  value = convertCentsToDollars(value);
	}
  
	return value % 1 === 0
	  ? CurrencyFormatter.format(value)
	  : FractionCurrencyFormatter.format(value);
  }
  
  export default formatCurrency;