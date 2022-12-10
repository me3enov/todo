function getColorClass(string) {
  let color = string;
  switch (color) {
    case 'gray':
      color = 'rubric__title_gray';
      break;
    case 'green':
      color = 'rubric__title_green';
      break;
    case 'blue':
      color = 'rubric__title_blue';
      break;
    case 'pink':
      color = 'rubric__title_pink';
      break;
    case 'lightGreen':
      color = 'rubric__title_lightGreen';
      break;
    case 'fuchsia':
      color = 'rubric__title_fuchsia';
      break;
    case 'black':
      color = 'rubric__title_black';
      break;
    case 'coral':
      color = 'rubric__title_coral';
      break;
    default:
      color = 'rubric__title_gray';
  }
  return color;
}

export default getColorClass;


// function getColorClass(color) {
//   switch (color) {
//     case "gray":
//       return "rubric__title_gray";
//     case "green":
//       return "rubric__title_green";
//     case "blue":
//       return "rubric__title_blue";
//     case "pink":
//       return "rubric__title_pink";
//     case "lightGreen":
//       return "rubric__title_lightGreen";
//     case 'fuchsia':
//       return "rubric__title_fuchsia";
//     case 'black':
//       return "rubric__title_black";
//     case 'coral':
//       return "rubric__title_coral";
//     default:
//       return "rubric__title_gray";
//   }
// };
