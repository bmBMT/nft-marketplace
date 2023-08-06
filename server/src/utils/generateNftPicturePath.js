export default function (imgObj) {
  return imgObj.name.split(' ').join('_') + "/" + imgObj.img;
}