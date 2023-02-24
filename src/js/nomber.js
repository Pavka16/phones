export default function switchPhoneNumber(PhoneNumber) {
  const newNumber = PhoneNumber.replace(/(\s|-|\(|\))/g, '').replace(/^(7|86)/, '+$&').replace(/^8\d{10}$/, (str) => str.replace(/^8/, '+7'));
  return newNumber;
}
