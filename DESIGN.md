---
name: Abacus Austria
description: Eigenständige österreichische Ländersite für Abacus ERP — ruhige B2B-Souveränität in AbaRot, Schwarz und Weiß.
colors:
  aba-red: "#de323c"
  aba-red-dark: "#c20936"
  aba-white: "#ffffff"
  aba-black: "#282828"
  aba-black-dark: "#141414"
  grey-light: "#f4f4f4"
  grey-midlight: "#efefef"
  grey-mid: "#dcdcdc"
  grey-middark: "#c0c0c0"
  grey-dark: "#7b7b7b"
  ink-muted: "#595959"
  petrol: "#006666"
  green: "#99cc33"
  sunshine: "#ffcc33"
  purple: "#3d3952"
  lilac: "#9999cc"
  ninja-blue: "#128ef2"
typography:
  hero-title:
    fontFamily: "Europa, Arial, Helvetica, sans-serif"
    fontSize: "clamp(40px, 9vw, 84px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.64px"
  hero-claim:
    fontFamily: "Europa, Arial, Helvetica, sans-serif"
    fontSize: "clamp(24px, 2.2vw, 30px)"
    fontWeight: 400
    lineHeight: 1.417
    letterSpacing: "1px"
  h2:
    fontFamily: "Europa, Arial, Helvetica, sans-serif"
    fontSize: "31px"
    fontWeight: 400
    lineHeight: 1.3226
    letterSpacing: "1px"
  h3:
    fontFamily: "Europa, Arial, Helvetica, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.292
    letterSpacing: "0.8px"
  body:
    fontFamily: "Europa, Arial, Helvetica, sans-serif"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "1px"
  teaser:
    fontFamily: "Europa, Arial, Helvetica, sans-serif"
    fontSize: "22px"
    fontWeight: 300
    lineHeight: 1.455
    letterSpacing: "1px"
rounded:
  sm: "0.125rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  3xl: "1.5rem"
  full: "9999px"
spacing:
  container-max: "80rem"
  gutter: "1rem"
  gutter-md: "2rem"
  section-y: "5rem"
  section-y-md: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.aba-red}"
    textColor: "{colors.aba-white}"
    rounded: "{rounded.md}"
    padding: "0 1.5rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.aba-red-dark}"
    textColor: "{colors.aba-white}"
  button-secondary:
    backgroundColor: "{colors.aba-white}"
    textColor: "{colors.aba-red}"
    rounded: "{rounded.md}"
    padding: "0 1.5rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.aba-red}"
    textColor: "{colors.aba-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.aba-black}"
    rounded: "{rounded.md}"
  link-default:
    textColor: "{colors.aba-red}"
  link-nav:
    textColor: "{colors.aba-white}"
---

# Design System: Abacus Austria

## 1. Overview

**Creative North Star: "Der ruhige Berater"**

Das System ist ein kompetenter österreichischer Berater in Schwarz-Weiß, der mit
genau einer roten Geste Akzente setzt. Es beweist nichts laut, sondern durch Präzision:
großzügiger Weißraum, eine strenge Schwarz-Weiß-Grundierung und **AbaRot `#de323c`** als
seltene, gezielte Stimme. Die Marke ist B2B, sachlich, vertrauenswürdig — sie übersetzt
die Abacus-Identität in einen eigenständigen AT-Auftritt, ohne die Schweizer Mutterseite zu
kopieren und ohne in austauschbares SaaS-Marketing zu kippen.

Die Typografie trägt die Hierarchie fast allein: eine einzige Familie (Europa, derzeit über
Arial als lizenzfreien Platzhalter), aber mit committetem Gewicht- und Größenkontrast — ein
fetter Hero-Title gegen leichten 300er-Fließtext. Flächen sind flach; Tiefe entsteht durch
Farbwechsel ganzer Sektionen (Weiß ↔ Hellgrau ↔ Schwarz), nicht durch Schatten. Eine rote
Linie ist das einzige wiederkehrende Schmuckelement.

Das System lehnt explizit ab: den Klon von abacus.ch, den generischen SaaS-Look (Lila-Gradients,
Hero-Metric-Kacheln, identische Icon-Karten-Raster), das überladene Enterprise-Portal und jeden
verspielten Consumer-Startup-Ton.

**Key Characteristics:**
- Schwarz-Weiß-Grundierung, AbaRot als seltener Akzent (≤10 % der Fläche)
- Eine Schriftfamilie, Hierarchie über Gewicht und Größe
- Flach statt Schatten — Tiefe durch Sektions-Farbwechsel
- Die rote Linie als einziges wiederkehrendes Ornament
- Großzügiger Weißraum, ruhiger Rhythmus
- Österreichischer Bezug fühlbar, nicht nur im Footer

## 2. Colors

Eine disziplinierte Schwarz-Weiß-Basis mit einer einzigen tragenden Akzentfarbe; alle weiteren
Töne sind ergänzend und treten nie in den Vordergrund.

### Primary
- **AbaRot** (`#de323c`): Die einzige Markenstimme. CTAs (Primary-Button), Hover-Zustände,
  aktive Navigation, rote Trennlinien, Eyebrow-Akzente. Sparsam und gezielt — nie flächig.
- **AbaRot Dunkel** (`#c20936`): Hover-Endpunkt von AbaRot und unterer Stopp des roten Gradienten.

### Neutral
- **AbaSchwarz** (`#282828`): Fließtext, Überschriften, dunkle Sektionsflächen (Header, Footer).
- **AbaSchwarz Dunkel** (`#141414`): unterer Stopp des schwarzen Gradienten; „eine Stufe dunkler".
- **AbaWeiß** (`#ffffff`): Standard-Hintergrund, Flächen, Text auf dunklem Grund.
- **Grau Hell** (`#f4f4f4`): alternierende Sektions-Hintergründe (z. B. Produktübersicht).
- **Grau Mittelhell** (`#efefef`): zarte Flächentrennung.
- **Grau Mittel** (`#dcdcdc`): Rahmen, Divider, unterer Stopp des weißen Gradienten.
- **Grau Mitteldunkel** (`#c0c0c0`): dezente Linien, deaktivierte Strukturen.
- **Grau Dunkel** (`#7b7b7b`): nur für **große/fette** Elemente (Logo-Schriftzüge, dekorative Icons) auf Weiß/Hellgrau — als Fließtextfarbe NICHT AA-konform (~4.2:1).
- **Ink Gedämpft** (`#595959`): die AA-konforme Sekundärtextfarbe für Intros/Teaser (≥4.5:1 auf Weiß UND Hellgrau). Ersetzt Grau Dunkel überall, wo es Fließtext war.

### Tertiary (Schmuckfarben — nur Grafiken & Diagramme)
- **Petrol** (`#006666`), **Grün** (`#99cc33`), **Sonnengelb** (`#ffcc33`), **Violett** (`#3d3952`),
  **Flieder** (`#9999cc`): ausschließlich unterstützend in Illustrationen/Diagrammen, nie als UI-Akzent
  neben oder anstelle von AbaRot.
- **NinjaBlau** (`#128ef2`): reserviert für Produkt-/Interface-Darstellungen (aktiv).

### Named Rules
**Die Eine-Stimme-Regel.** AbaRot belegt höchstens ~10 % jeder Ansicht. Seine Seltenheit ist der
Punkt — wird Rot flächig, verliert es seine Wirkung und der Auftritt wird laut.

**Die Verbotsregel.** **AbaCloudBlue `#1677cb` und AbaMobileOrange `#ffa539` sind in neuen Designs
verboten** (CI). Sie sind bewusst nicht als Token definiert; tauchen sie auf, ist es ein Fehler.

**Die Grauton-Kontrastregel.** Sekundär-Fließtext nutzt **Ink Gedämpft `#595959`** (`text-aba-ink-muted`),
nicht Grau Dunkel `#7b7b7b` — letzteres erreicht nur ~4.2:1 und fällt unter AA. Grauer Text gehört nie
auf farbigen Grund. Im Zweifel zur AbaSchwarz-Seite hin abdunkeln — heller Grau-Text „für Eleganz" ist
der häufigste Lesbarkeitsfehler.

## 3. Typography

**Display & Body Font:** Europa (Fallback: Arial, Helvetica) — *eine* Familie für alles.

> Europa ist die verbindliche Markenschrift; bis die Lizenz vorliegt, läuft das System auf Arial
> als Platzhalter. Die Umstellung ist eine einzige Zeile (`--font-primary` in `app/globals.css`).
> Keine zweite Familie, keine Systemschriften (Inter, Roboto) — das ist Markenbruch.

**Character:** Geometrisch-humanistische Sans mit ruhiger, sachlicher Autorität. Die Hierarchie
entsteht ausschließlich aus Gewichtskontrast (Light 300 · Regular 400 · Bold 700) und Größe —
nicht aus Schriftmischung. Ein fetter Hero-Title gegen leichten 300er-Fließtext ist die Signatur.

### Hierarchy
- **Hero Title / H1** (700, `clamp(40px, 9vw, 84px)`, lh 1.1, ls 0.64px): die große Startseiten-Headline.
  Der 40px-Floor (unter dem CI-Mobilwert) verhindert, dass lange deutsche Wörter schmale Phones sprengen.
- **Hero Claim** (400, `clamp(24px, 2.2vw, 30px)`, lh 1.417, ls 1px): begleitender, leichterer Claim unter H1.
- **H2** (400, 31px, lh 1.3226, ls 1px): Sektions-Überschriften.
- **H3** (400, 24px, lh 1.292, ls 0.8px): Unter-Überschriften, Karten-Titel.
- **Body / Paragraph** (300, 18px, lh 1.6, ls 1px): Standard-Fließtext. Zeilenlänge auf 65–75ch begrenzen.
- **Teaser** (300, 22px, lh 1.455, ls 1px): hervorgehobener Einleitungstext über Absätzen.

### Named Rules
**Die Eine-Familie-Regel.** Alles ist `font-primary`. Eine zweite Schriftfamilie einzuführen ist
verboten; Kontrast kommt aus Gewicht und Größe, nicht aus Mischung.

**Die Token-Regel.** Schriftgrößen nur über die `text-*`-Tokens (`text-hero-title`, `text-h2` …) —
sie tragen Größe, Gewicht, Laufweite und Zeilenhöhe gebündelt. Nie Pixel hardcoden.

## 4. Elevation

Das System ist **flach by default.** Tiefe entsteht nicht durch Schatten, sondern durch den Wechsel
ganzer Sektionsflächen zwischen Weiß, Hellgrau (`#f4f4f4`) und Schwarz (`#282828`) sowie durch dünne
1px-Rahmen in Grautönen. Karten und Sektionen liegen flach auf — kein „2014-App"-Schlagschatten.

### Shadow Vocabulary
- **Drawer-Schatten** (`box-shadow` über `shadow-xl`): **einziger** legitimer Schatten — ausschließlich
  am mobilen Slide-in-Menü, das physisch über dem Inhalt schwebt. Sonst nirgends.

### Named Rules
**Die Flach-by-Default-Regel.** Flächen ruhen flach. Schatten sind keine Dekoration, sondern Antwort
auf echte Überlagerung (das mobile Menü). Tiefe sonst nur über Sektions-Farbwechsel und 1px-Linien.

## 5. Components

### Buttons
- **Shape:** mittlere Rundung (`rounded-md`, 0.375rem), fett (`font-bold`).
- **Primary:** AbaRot-Fläche, weißer Text (`bg-aba-red text-aba-white`); Hover → AbaRot Dunkel.
- **Secondary:** roter Outline, roter Text, transparenter Grund; Hover füllt mit AbaRot, Text wird weiß.
- **Ghost:** transparent, schwarzer Text; Hover → Hellgrau-Fläche. Für leise Tertiär-Aktionen.
- **Sizes:** sm (`h-9 px-4`), md (`h-11 px-6`, Default), lg (`h-14 px-8`).
- **Focus:** sichtbarer Ring in AbaRot mit 2px Offset (`focus-visible:ring-2 ring-aba-red ring-offset-2`).
- **Hover/Disabled:** Farbübergang 150ms; `disabled` → 50 % Deckkraft, keine Pointer-Events.
- **Button vs. ButtonLink:** optisch identisch (gemeinsame `buttonClasses`); ButtonLink navigiert
  locale-bewusst (intern) bzw. öffnet extern in neuem Tab mit `rel`-Schutz.

### Links
- **Default (Inline):** AbaRot, Unterstreichung erst bei Hover (`text-aba-red hover:text-aba-red-dark hover:underline`).
- **Nav:** erbt die Textfarbe vom Eltern-Element, kein Underline, Hover → AbaRot.
- **Focus:** AbaRot-Ring (2px) mit Offset, auf beiden Varianten.

### Navigation (Header)
- **Topbar:** sticky, AbaSchwarz-Grund, weißer Text, zarte `border-b border-aba-white/10`, Höhe 4rem.
- **Desktop-Items:** kleiner, leicht getrackter Text; inaktiv `text-aba-white/70`, aktiv/Hover voll weiß.
- **Aktiv-Indikator:** eine **rote Unterlinie als echtes `<span>`** (kein `::after`), die von links
  einrollt (`scale-x` 0→1, 300ms ease-out). Bewusst ein DOM-Element, damit Dev und Build identisch rendern.
- **Mobile:** Slide-in-Drawer von rechts (`w-72`, AbaSchwarz, `shadow-xl`), Backdrop in `aba-black/60`,
  rote `border-t-2 border-aba-red` über CTA + Sprachumschalter; Hintergrund-Scroll wird gesperrt.
- **Icons:** schlichte Outline-SVGs, `stroke="currentColor"`, `stroke-width="1.5"`, keine Icon-Pakete.

### Sections
- **Rhythmus:** vertikaler Abstand `py-20 md:py-28`; Inhalt zentriert über `Container` (max 80rem,
  `px-4 md:px-8`), Textspalten oft auf `max-w-2xl`/`max-w-3xl` begrenzt.
- **Alternierung:** Sektionen wechseln Weiß ↔ Hellgrau (`bg-aba-grey-light`) als Tiefenmittel.

### Signature: Die rote Linie
Das wiederkehrende Marken-Ornament. Als animierte Nav-Unterlinie, als `border-t-2 border-aba-red`
Trennlinie über CTA-Blöcken, als Trenner unter Illustrationen (CI). Immer dünn, immer AbaRot,
immer sparsam — sie ersetzt Schatten und Boxen als Strukturgeber.

## 6. Do's and Don'ts

### Do:
- **Do** AbaRot `#de323c` sparsam und gezielt einsetzen — CTAs, aktive Zustände, die rote Linie. ≤10 % der Fläche.
- **Do** Farben und Schriftgrößen ausschließlich über die `aba-*`- und `text-*`-Tokens beziehen (Single Source: `app/globals.css`).
- **Do** Hierarchie über Gewicht (300/400/700) und Größe einer Familie bauen, nicht über Schriftmischung.
- **Do** Tiefe über Sektions-Farbwechsel (Weiß/Hellgrau/Schwarz) und 1px-Grau-Linien erzeugen, nicht über Schatten.
- **Do** Outline-Icons mit dünnem Strich (`stroke-width 1.5`, `currentColor`) inline als SVG — schlicht, technisch, klar.
- **Do** auf jedem Akzent-Element einen sichtbaren AbaRot-Fokusring (2px, Offset) sicherstellen — WCAG 2.1 AA.
- **Do** österreichischen Bezug fühlbar machen (EUR, +43, AT-Referenzen, ß-Schreibung) — das ist das Differenzierungsmerkmal.

### Don't:
- **Don't** abacus.ch klonen — markenkonsistent, aber eigenständige AT-Komposition.
- **Don't** in generischen SaaS-Look kippen: keine Lila-Gradients, keine Hero-Metric-Kacheln (große Zahl + Label + Gradient), keine endlosen identischen Icon-über-Überschrift-Karten-Raster.
- **Don't** den roten Eyebrow (`uppercase tracking-widest text-aba-red`) als Gerüst über *jede* Sektion setzen — ein gezielter Kicker ist Stimme, ein Eyebrow auf jeder Sektion ist KI-Grammatik. Variiere die Kadenz.
- **Don't** `background-clip: text` mit Gradient (Gradient-Text) — eine solide Farbe, Betonung über Gewicht/Größe.
- **Don't** farbige `border-left`/`border-right` > 1px als Akzentstreifen an Karten/Callouts — volle Rahmen oder Flächentönung stattdessen.
- **Don't** AbaCloudBlue `#1677cb` oder AbaMobileOrange `#ffa539` verwenden — in neuen Designs verboten.
- **Don't** eine zweite Schriftfamilie oder Systemschriften (Inter, Roboto) einführen — nur Europa/Arial.
- **Don't** Schatten als Dekoration — flach by default; der einzige Schatten ist das mobile Slide-in-Menü.
- **Don't** grauen Text (`#7b7b7b`) auf farbigem Grund oder unter Body-Größe — Kontrast bricht (Lesbarkeit < AA).
- **Don't** Glassmorphism/Blur als Default — selten und nur mit Zweck, sonst gar nicht.
