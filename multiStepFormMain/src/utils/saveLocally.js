export default function saveInLocalStorage(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}
