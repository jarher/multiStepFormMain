export default function isChecked(array) {
  return array.some((element) => element.isSelected || element.isValid);
}
