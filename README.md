# Calculator mobiliteitsmaatregelen (Ottimo)

Calculator waarmee je per werkgever maatregelen kiest, per maatregel 1 tot 5 sterren geeft en ziet welk deel van het maximum per domein naar verwachting wordt gerealiseerd. Beschikbaar in het Nederlands, Italiaans, Engels en Duits.

## Bestanden

- `index.html`: de calculator zelf. Hier hoef je niets aan te veranderen.
- `bibliotheek.js`: alle maatregelen (met namen in vier talen) en de standaardinstellingen. Dit is het bestand dat je aanpast.

## Online zetten via GitHub Pages

1. Maak op github.com een nieuwe repository aan, bijvoorbeeld `maatregelen-calculator`.
2. Kies Add file, Upload files, en sleep `index.html`, `bibliotheek.js` en `README.md` erin. Klik Commit changes.
3. Ga naar Settings, Pages. Kies bij Source: Deploy from a branch, branch `main`, map `/ (root)`. Klik Save.
4. Na een minuut staat de calculator op `https://<jouw-account>.github.io/maatregelen-calculator/`.

Let op: een publieke repository is voor iedereen zichtbaar. De calculator bevat geen klantgegevens (die staan alleen in de bestanden die collega's zelf opslaan), maar de bibliotheek en je rekenregels wel.

## Rekenregels

1. Per domein (OV, actieve mobiliteit, thuiswerken, carpoolen, elektrisch rijden) staat een maximum: het deel van de mensen die kunnen veranderen dat volgend jaar hooguit echt verandert.
2. Sterren worden punten: standaard 1, 3, 8, 15 en 30. Vijf sterren telt dus 30 keer zo zwaar als één ster.
3. Punten per domein tellen op. Bij 50 punten is 100% van het maximum bereikt.
4. Een maatregel met een licht domeinlabel telt daar voor de helft.
5. Overkoepelende maatregelen (beloningsprogramma, gamification, communicatie) geven 1 tot 5% extra op alle domeinen, samen maximaal 10%.
6. Randvoorwaarden (mobiliteitsonderzoek, PSCL, monitoring) kun je aanvinken voor het overzicht, maar tellen niet mee.
7. Verwachte realisatie = maximum × score. Als het potentieel per domein is ingevuld, toont het rapport ook de verwachte besparing aan CO2, NOx en PM10.

Alle getallen uit punt 1, 2, 3 en 5 zijn per klant aan te passen in het tabblad Instellingen. De standaardwaarden staan bovenin `bibliotheek.js`.

## Werken met de calculator

- Opslaan: bewaart de keuzes van een klant als bestand (.json) op je computer.
- Openen: laadt zo'n bestand weer in.
- Rapport afdrukken: drukt twee pagina's af in de Ottimo-stijl (grafiek en overzicht van de maatregelen). Kies in het afdrukvenster Opslaan als PDF.
- De browser onthoudt de laatste invoer, maar dat is geen vervanging voor Opslaan.

## Maatregelen aanpassen

Open `bibliotheek.js` op GitHub en klik op het potlood-icoon. Uitleg over de velden staat bovenin het bestand. Klik daarna op Commit changes; na een minuut is de calculator bijgewerkt.
