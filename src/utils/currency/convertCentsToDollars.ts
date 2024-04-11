/**
 * A helper util which converts cents to dollars
 */
const convertCentsToDollars = (value: number) =>
	Math.round(Number(value)) * 0.01 || 0;
  
  export default convertCentsToDollars;
  