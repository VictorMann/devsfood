export const formatMoeda = val => {
    val = parseFloat(val);
    return val.toFixed(2).replace('.', ',');
};