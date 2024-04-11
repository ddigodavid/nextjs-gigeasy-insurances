import DefaultFormatterProps from './DefaultFormatterProps';

const FractionCurrencyFormatter = new Intl.NumberFormat('en-US', {
  ...DefaultFormatterProps,
  minimumFractionDigits: 2,
});

export default FractionCurrencyFormatter;
