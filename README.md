# AI u oporavku zvuka

Full-stack aplikacija za oporavak i procesiranje audio fajlova sa AI tehnologijom.

## Struktura projekta

```
ai-u-oporavku-zvuka/
  ├── frontend/          # React + Vite aplikacija
  │   ├── src/
  │   ├── public/
  │   └── package.json
  │
  └── backend/           # PHP API sa MAMP-om
      ├── api/
      ├── config.php
      └── database.sql
```

## 🚀 Pokretanje projekta

### Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend će biti dostupan na: http://localhost:5173

### Backend (PHP + MAMP)

1. **Pokreni MAMP**

   - Otvori MAMP aplikaciju
   - Klikni "Start Servers"

2. **Kreiraj bazu podataka**

   - Otvori http://localhost:8888/phpMyAdmin/
   - Login: `root` / `root`
   - Kreiraj novu bazu: `ai_oporavak_zvuka`
   - Importuj `backend/database.sql`

3. **Test backend**
   - Otvori: http://localhost:8888/ai-u-oporavku-zvuka/backend/api/test.php

## 📁 Detalji

### Frontend

- **Framework:** React 19
- **Build Tool:** Vite
- **Port:** 5173

### Backend

- **Language:** PHP
- **Server:** MAMP (Apache + MySQL)
- **Port:** 8888
- **Database:** MySQL (port 8889)

## 🔗 API Endpoints

```
GET  /backend/api/test.php         # Test endpoint
GET  /backend/api/audio.php        # Dohvati sve audio fajlove
POST /backend/api/audio.php        # Upload audio fajl
DELETE /backend/api/audio.php      # Obriši audio fajl
```

## 📝 Napomene

- Frontend i backend su odvojeni u zasebne foldere
- Frontend komunicira sa backendom preko REST API-ja
- CORS je konfigurisan u backend/config.php
