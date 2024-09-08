
const { openBrowser, goto, write, click, closeBrowser, text, textBox, into, clear, press, waitFor } = require('taiko');
const assert = require('assert');


beforeSuite(async () => {
    await openBrowser({ headless: false });  // Setze headless auf true, wenn du keine GUI brauchst
});


afterSuite(async () => {
    await closeBrowser();
});


step("Gehe zur Routenplaner App", async () => {
    await goto("http://localhost:3000");  // Passe die URL an deine lokale Anwendung an
});


step("Ich gebe Startpunkt <start> und Zielpunkt <ziel> ein", async (start, ziel) => {
    await write(start, into(textBox({placeholder: "Startpunkt"})));
    await write(ziel, into(textBox({placeholder: "Zielpunkt"})));
});

step("Ich klicke auf Route berechnen", async () => {
    await click(button("Route berechnen"));
});

step("Die Route wird berechnet und die Zusammenfassung wird angezeigt", async () => {
    await text("Zusammenfassung").exists();
    await text("Dauer").exists();
});