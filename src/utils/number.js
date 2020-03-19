/* eslint-disable import/prefer-default-export */

export const getPercentageDecimal = (value = 0, range, decimal = 1) => (range ? value / range : 0).toFixed(decimal)
