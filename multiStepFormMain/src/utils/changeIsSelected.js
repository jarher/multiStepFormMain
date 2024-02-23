export default function changeIsSelected (userData, cardIndex) {
    userData.planSelected.forEach((element, index) => {
      cardIndex == index
        ? (element.isSelected = true)
        : (element.isSelected = false);
    });
}
