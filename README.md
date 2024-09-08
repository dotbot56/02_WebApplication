
# 🌍 Routenfinder - Wegberechnung 🌍

Dieses Projekt wurde mit [Create React App](https://github.com/facebook/create-react-app) erstellt.

**Routenfinder - Wegberechnung** ist eine React-Anwendung, die es ermöglicht, Routen und Pfade innerhalb einer Anwendung effizient auszugeben.

## 📑 Inhaltsverzeichnis

1. [Installation](#installation)
2. [Nutzung](#nutzung)
3. [Verfügbare Skripte](#verfügbare-skripte)
4. [Tests](#tests)
    - [Akzeptanztests](#akzeptanztests)
5. [Verwendete Technologien](#verwendete-technologien)

---

## 🛠️ Installation
Folge diesen Schritten, um die Anwendung lokal zu installieren:

### 1. **Projekt klonen**
Klone das Repository auf deinen lokalen Rechner:
   ```bash
   git clone https://github.com/dotbot56/02_WebApplication.git
   ```
#### 1.1 **Abhängigkeiten installieren**

Stelle sicher, dass sich dein Terminal im Verzeichnis des Projekts befindet, und führe dann den folgenden Befehl aus:
   ```bash
    npm install
   ```
Dieser Befehl installiert alle erforderlichen Bibliotheken und Abhängigkeiten, die in der package.json definiert sind.

---

## 🚀 **Start der Anwendung**
Nach erfolgreicher Installation der Abhängigkeiten kannst du die Anwendung im Entwicklungsmodus starten:

```bash
npm start
```

Die Anwendung wird daraufhin in deinem Standardbrowser geöffnet. Änderungen an den Dateien führen automatisch zu einem Neuladen der Seite.

Um eine optimierte Version der Anwendung für den Produktionseinsatz zu erstellen, nutze:

```bash
npm run build
```

Die optimierte Anwendung wird im Verzeichnis `build` abgelegt.

---

## 🔧 Tests
### Akzeptanztests

Die Akzeptanztests werden mit **Gauge** und **Taiko** durchgeführt. Um diese Tests zu starten, verwende folgenden Befehl:

```bash
npm run acceptance-tests
```

---

## ⚙️ Verfügbare Skripte
Die folgenden Skripte sind in der `package.json` hinterlegt und dienen zur Verwaltung und Entwicklung der Anwendung:

- **Start der Entwicklungsumgebung**:  
  Führe das Skript `npm start` aus, um die Anwendung im Entwicklungsmodus zu starten.

- **Erstellung der Produktionsversion**:  
  Nutze `npm run build`, um eine optimierte Version der Anwendung für die Produktion zu generieren.

- **Ausführung der Testsuite**:  
  Starte die Tests mit `npm test`, um sicherzustellen, dass alle Komponenten korrekt funktionieren.

- **Durchführung von Akzeptanztests**:  
  Verwende `npm run test`, um End-to-End-Akzeptanztests mithilfe von Gauge und Taiko auszuführen.


---

## 💻 Verwendete Technologien
Die Anwendung basiert auf diesen Webtechnologien:

- **React**: Eine JavaScript-Bibliothek zur Erstellung benutzerfreundlicher Oberflächen.
- **Gauge & Taiko**: Werkzeuge für End-to-End-Akzeptanztests.

---
