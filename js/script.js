const kartBredd = 1919;
const kartHojd = 584;

const rader = [
  {
    topp: 219,
    hojd: 44,
    kanter: [
      [5, 5],
      [25, 27],
      [47, 49],
      [69, 70],
      [91, 92],
      [113, 114],
      [135, 136],
      [157, 158],
      [178, 180],
      [200, 202],
      [222, 224],
      [244, 246],
      [266, 268],
      [288, 290],
      [310, 312],
      [332, 334],
      [354, 356],
      [376, 378],
      [398, 399],
    ],
  },
  {
    topp: 318,
    hojd: 43,
    kanter: [
      [2, 3],
      [23, 25],
      [46, 48],
      [68, 70],
      [91, 93],
      [113, 115],
      [135, 138],
      [158, 160],
      [180, 182],
      [203, 205],
      [225, 227],
      [248, 250],
      [270, 272],
      [293, 295],
      [315, 317],
      [337, 339],
      [360, 362],
      [382, 384],
      [405, 407],
      [427, 429],
      [450, 452],
      [472, 474],
      [494, 497],
      [517, 518],
    ],
  },
  {
    topp: 369,
    hojd: 44,
    kanter: [
      [2, 2],
      [23, 25],
      [46, 47],
      [68, 70],
      [91, 93],
      [114, 115],
      [136, 138],
      [159, 161],
      [182, 183],
      [204, 206],
      [227, 229],
      [249, 251],
      [272, 274],
      [295, 297],
      [317, 319],
      [340, 342],
      [363, 364],
      [385, 387],
      [408, 410],
      [431, 432],
      [453, 455],
      [476, 478],
      [498, 500],
      [521, 523],
      [544, 546],
      [566, 568],
      [589, 591],
      [612, 613],
      [634, 636],
      [657, 659],
      [680, 680],
    ],
  },
  {
    topp: 370,
    hojd: 44,
    kanter: [
      [755, 755],
      [776, 778],
      [799, 801],
      [822, 824],
      [845, 847],
      [868, 870],
      [891, 893],
      [914, 916],
      [937, 939],
      [960, 962],
      [982, 985],
      [1005, 1007],
      [1028, 1030],
      [1051, 1053],
      [1074, 1076],
      [1097, 1099],
      [1120, 1122],
      [1143, 1145],
      [1166, 1168],
      [1189, 1191],
      [1212, 1214],
      [1235, 1237],
      [1258, 1260],
      [1281, 1283],
      [1304, 1306],
      [1327, 1329],
      [1350, 1352],
      [1373, 1375],
      [1396, 1398],
      [1418, 1421],
      [1441, 1443],
      [1464, 1466],
      [1487, 1489],
      [1510, 1512],
      [1533, 1535],
      [1556, 1558],
      [1579, 1581],
      [1602, 1604],
      [1625, 1627],
      [1648, 1650],
      [1671, 1673],
      [1694, 1696],
      [1717, 1719],
      [1740, 1742],
      [1763, 1765],
      [1786, 1788],
      [1809, 1811],
      [1831, 1834],
      [1854, 1855],
    ],
  },
  {
    topp: 502,
    hojd: 44,
    kanter: [
      [0, 0],
      [21, 23],
      [44, 46],
      [66, 68],
      [89, 91],
      [112, 113],
      [134, 136],
      [157, 158],
      [179, 181],
      [202, 204],
      [224, 226],
      [247, 249],
      [270, 271],
      [292, 294],
      [315, 316],
      [337, 339],
      [360, 362],
      [382, 384],
      [405, 407],
      [428, 429],
      [450, 452],
      [473, 474],
      [495, 497],
      [518, 520],
      [540, 542],
      [563, 565],
      [586, 587],
      [608, 610],
      [631, 632],
      [653, 655],
      [676, 677],
      [698, 700],
      [721, 723],
      [744, 745],
      [766, 768],
      [789, 790],
      [811, 813],
      [834, 835],
      [856, 858],
      [879, 881],
      [902, 903],
      [924, 926],
      [947, 948],
      [969, 971],
      [992, 993],
      [1014, 1016],
      [1037, 1038],
      [1059, 1061],
      [1082, 1084],
      [1104, 1106],
      [1127, 1129],
      [1149, 1151],
      [1172, 1174],
      [1195, 1196],
      [1217, 1219],
      [1240, 1241],
      [1262, 1264],
      [1285, 1286],
      [1307, 1309],
      [1330, 1331],
      [1352, 1354],
      [1375, 1377],
      [1398, 1399],
      [1420, 1422],
      [1443, 1444],
      [1465, 1467],
      [1488, 1489],
      [1510, 1512],
      [1533, 1535],
      [1556, 1557],
      [1578, 1580],
      [1601, 1602],
      [1623, 1625],
      [1646, 1647],
      [1668, 1670],
      [1691, 1692],
      [1713, 1715],
      [1736, 1737],
      [1758, 1760],
      [1781, 1782],
      [1803, 1805],
      [1826, 1828],
      [1848, 1850],
      [1871, 1873],
      [1893, 1895],
      [1916, 1916],
    ],
  },
];

const platser = [];

const platsOverlag = document.querySelector(".parkeringsplatser");
const parkeringsomrade = document.querySelector("#parkeringsomrade");
const filtreraKnapp = document.querySelector("#filtrera-knapp");

let visaEndastLediga = false;
let platsNummer = 1;

// Skapar parkeringsplatserna på kartan
rader.forEach((rad) => {
  const radElement = document.createElement("div");

  radElement.className = "parkeringsrad";
  radElement.style.left = "0";
  radElement.style.top = `${(rad.topp / kartHojd) * 100}%`;
  radElement.style.width = "100%";
  radElement.style.height = `${(rad.hojd / kartHojd) * 100}%`;

  platsOverlag.appendChild(radElement);

  for (
    let platsIndex = 0;
    platsIndex < rad.kanter.length - 1;
    platsIndex += 1
  ) {
    const plats = document.createElement("button");

    const vanster = rad.kanter[platsIndex][1] + 1;
    const hoger = rad.kanter[platsIndex + 1][0];

    const spotId = String(platsNummer).padStart(3, "0");

    plats.type = "button";
    plats.className = "parkeringsplats ledig";
    plats.style.left = `${(vanster / kartBredd) * 100}%`;
    plats.style.width = `${((hoger - vanster) / kartBredd) * 100}%`;

    radElement.appendChild(plats);

    const platsinformation = {
      knapp: plats,
      id: spotId,
      upptagen: false,
    };

    platser.push(platsinformation);

    // Ändrar status när användaren klickar på en plats
    plats.addEventListener("click", async () => {
      const nyStatus = platsinformation.upptagen ? "ledig" : "upptagen";

      plats.disabled = true;

      try {
        const response = await fetch(
          `/api/parking-spots/${platsinformation.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              status: nyStatus,
            }),
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Kunde inte uppdatera platsen");
        }

        platsinformation.upptagen = data.status === "upptagen";

        uppdateraPlats(platsinformation);
        uppdateraStatistik();
      } catch (error) {
        alert("Kunde inte spara ändringen. Kontrollera anslutningen.");
        console.error(error);
      }

      plats.disabled = false;
    });

    uppdateraPlats(platsinformation);

    platsNummer += 1;
  }
});

// Uppdaterar utseendet på en parkeringsplats
function uppdateraPlats(plats) {
  const tillstand = plats.upptagen ? "upptagen" : "ledig";

  plats.knapp.className = `parkeringsplats ${tillstand}`;
  plats.knapp.title = `Plats ${plats.id}: ${tillstand}`;
  plats.knapp.setAttribute("aria-label", `Plats ${plats.id}: ${tillstand}`);
}

async function hamtaPlatser() {
  try {
    const response = await fetch("/api/parking-spots");

    if (!response.ok) {
      throw new Error("Kunde inte hämta parkeringsplatserna");
    }

    const data = await response.json();

    platser.forEach((plats) => {
      const databasPlats = data.find(
        (item) => String(item.spot_id).padStart(3, "0") === plats.id,
      );

      if (databasPlats) {
        plats.upptagen =
          String(databasPlats.status).trim().toLowerCase() === "upptagen";

        uppdateraPlats(plats);
      }
    });

    uppdateraStatistik();
  } catch (error) {
    console.error("Fel vid hämtning av parkeringsplatser:", error);
    alert("Kunde inte hämta information från databasen.");
  }
}

// Uppdaterar statistiken längst upp
function uppdateraStatistik() {
  const ledigaPlatser = platser.filter((plats) => !plats.upptagen).length;

  const upptagnaPlatser = platser.length - ledigaPlatser;

  const procentLediga =
    platser.length > 0
      ? ((ledigaPlatser / platser.length) * 100).toFixed(1).replace(".", ",")
      : "0,0";

  document.querySelector(".statistik-innehall .antal-total").textContent =
    platser.length;

  document.querySelector(
    ".statistik-lediga-innehall .antal-lediga",
  ).textContent = ledigaPlatser;

  document.querySelector(
    ".statistik-upptagna-innehall .antal-upptagna",
  ).textContent = upptagnaPlatser;

  document.querySelector(".procent-lediga").textContent = procentLediga;

  document.querySelector(".stapel-lediga").style.width =
    `${platser.length > 0 ? (ledigaPlatser / platser.length) * 100 : 0}%`;
}

// Filtrerar fram lediga parkeringsplatser
filtreraKnapp.addEventListener("click", () => {
  visaEndastLediga = !visaEndastLediga;

  parkeringsomrade.classList.toggle("visa-endast-lediga", visaEndastLediga);

  filtreraKnapp.textContent = visaEndastLediga
    ? "Visa alla platser"
    : "Visa lediga platser";
});

// Visar standardstatistiken och hämtar sedan status från databasen
uppdateraStatistik();
hamtaPlatser();
