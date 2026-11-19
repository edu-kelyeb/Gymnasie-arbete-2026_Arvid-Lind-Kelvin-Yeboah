# Gymnasie-arbete-2026_Arvid-Lind-Kelvin-Yeboah

ÅVA PARK
Gruppmedlemmar: ARVID LIND, KELVIN YEBOAH

3/11/2026-TISDAG
VAD SOM GJORDES: Vi började med att försöka tänka ut ett effektiv sätt att kunna göra webbsidan/webbtjänsten. I början var det svårt eftersom vi hade en så stressad och vi kunde inte enas om planering för sidan. Blev en hel diskussion om hur sidan ska se ut.

PROBLEM: Vi hade svårt att enas och planering blev strulade på grund av det.

4/11/2026-ONSDAG
VAD SOM GJORDES: Vi skapade en repository och delade med avrandra alltså collaborator. Vi kopplade och skysterade så gott det går för att båda ska kunna skriva i. Vi kopplade också med github desktop för att kunna pusha och pulla commits.

PROBLEM: Vi stötte på problem med att kunna ska kunna skriva i visual codes samtidigt men det löstes ganska snabbt. Annan problem som vi fortfarande präglades av var att komma överrens med layout, färg, struktur och bakgrund för webbtjänsten.

9/11/2026-MÅNDAG
VAD SOM GJORDES: Vi skapade en index.html och en styles.css där vi kommer igång med skapandet av webbtjänsten. VI skapade också en javascript sida som är till för att kunna interegera med sidan och element som finns. Bakgrundsbilden som representerar Åvas parkering (som vart under utveckling i ett par dagar) gjordes klart och applicerades på hemsidan.

PROBLEM: - Vi hade problem med få bakgrunds bilden att sitta så bra som vi ville ha den. Alltså behövdes en schystering av kod i style.css.

10/11/2026-TISDAG
VAD SOM GJORDES:
PROBLEM:

11/11/2026-ONSDAG
VAD SOM GJORDES:

PROBLEM:

12/11/2026-TORSDAG
VAD SOM GJORDES: vi fortsatte med att förbättra designen på webbtjänsten och fixade en navbar. Vi lade till en ny font, förbättrade logotypen och gjorde små designändringar. Vi började också placera ut och numrera parkeringsplatserna på kartan.

PROBLEM: Statistikdelen i navbaren kunde inte kopplas till riktig platsdata direkt.

13/11/2026-FREDAG
VAD SOM GJORDES: Vi gjorde små justeringar i README-filen och webbsidan. Numreringen på parkeringsplatserna togs bort från kartans utseende och ersattes med statistik för totala, lediga och upptagna platser i navbaren.

PROBLEM: Statistiken var från början inte kopplad till en fungerande databas.

16/11/2026-MÅNDAG
VAD SOM GJORDES: Vi gjorde en stor uppdatering av webbsidan. Layouten och CSS-stilen förbättrades, parkeringsplatserna skapades bättre i JavaScript och knapparna i HTML gjordes tydligare. Vi lade också till status för lediga och upptagna platser samt kontroller för att filtrera kartan.

PROBLEM: Det fanns fel i den gamla layouten och i hur parkeringsplatserna visades på kartan.

17/11/2026-TISDAG
VAD SOM GJORDES: Vi rättade buggar i webbdesignen och fixade knapparna i den övre navbaren så att statistik och tillgänglighet visas tydligare.

PROBLEM: Vissa CSS-regler gjorde att knapparna och statistiksektionerna inte fungerade eller såg ut som avsett.

19/11/2026-TORSDAG
VAD SOM GJORDES: Vi skapade en Flask-server i app.py och en databasfil i database.py. Webbsidan kopplades till en MySQL-databas med parkeringsplatserna 001–204. API:n kan nu hämta alla parkeringsplatser och ändra status mellan ledig och upptagen när användaren klickar på en plats. JavaScript hämtar status från databasen och uppdaterar statistik, färger och filtreringen automatiskt.

PROBLEM: Flask, MySQL och databaskopplingen behövde testas tillsammans för att säkerställa att statusändringar sparas och visas korrekt.
