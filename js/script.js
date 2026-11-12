/* Ai genererad kod som fixar cirklar för parkeringsplatser */
const parkingMap = document.querySelector(".parking-labels");

if (!parkingMap) {
  throw new Error("Parkeringskartan saknar SVG-lager.");
}

const svgNamespace = "http://www.w3.org/2000/svg";
const parkingRows = [
  { count: 18, firstX: 14, step: 22.06, y: 251 },
  { count: 23, firstX: 13.25, step: 22.52, y: 350 },
  { count: 30, firstX: 13.3, step: 22.63, y: 402 },
  { count: 48, firstX: 766, step: 22.96, y: 402 },
  { count: 85, firstX: 11.3, step: 22.55, y: 535 },
];

let spaceNumber = 1;

for (const row of parkingRows) {
  for (let index = 0; index < row.count; index += 1) {
    const x = row.firstX + index * row.step;
    const label = document.createElementNS(svgNamespace, "g");
    const number = document.createElementNS(svgNamespace, "text");

    label.setAttribute("class", "parking-label");
    number.setAttribute("x", x.toFixed(2));
    number.setAttribute("y", row.y);
    number.textContent = spaceNumber;

    label.append(number);
    parkingMap.append(label);
    spaceNumber += 1;
  }
}
