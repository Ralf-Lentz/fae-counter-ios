# FAE Counter für iPhone

Dies ist eine fertige React/Vite-Web-App aus `FaeCounter3.jsx`, vorbereitet für iPhone/Safari und „Zum Home-Bildschirm“.

## Lokal starten

```bash
npm install
npm run dev
```

Dann im Browser öffnen. Im selben WLAN kannst du die lokale Netzwerkadresse auch auf dem iPhone in Safari öffnen.

## Online stellen, damit es auf dem iPhone dauerhaft läuft

Am einfachsten mit Vercel oder Netlify:

1. ZIP entpacken.
2. Den Ordner in ein GitHub-Repository hochladen oder direkt bei Netlify/Vercel importieren.
3. Build Command: `npm run build`
4. Publish/Output Directory: `dist`
5. Nach dem Deploy den Link auf dem iPhone in Safari öffnen.
6. Teilen → „Zum Home-Bildschirm“.

## Enthaltene Abhängigkeiten

- React
- Vite
- Tailwind CSS
- lucide-react
- recharts

## Hinweise

Die App ist als Web-App/PWA vorbereitet. Für eine echte native iOS-App über Xcode wäre zusätzlich Capacitor nötig.
