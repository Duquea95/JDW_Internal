export function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function adjustPrice(item){
    const { Bezel, Case, Dial, "Strap/Bracelet": StrapBracelet, "Selling Price": SellingPrice } = item;
    const containsAFM = [Bezel, Case, Dial, StrapBracelet].some(value => value.includes('AFM'));
    const price = parseFloat(SellingPrice.replace(/,/g, ''));
    const adjustedPrice = containsAFM ? (price / 2) * 1.4 : (price / 2) * 1.25;
    return adjustedPrice.toFixed(2); // Fixed to 2 decimal places
  };