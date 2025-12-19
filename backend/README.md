# PHP Backend za AI Oporavak Zvuka

## Setup sa MAMP-om

### 1. Pokreni MAMP

- Otvori MAMP aplikaciju
- Klikni "Start Servers"
- Apache i MySQL bi trebali biti zeleni

### 2. Kreiraj bazu podataka

1. Otvori phpMyAdmin: http://localhost:8888/phpMyAdmin/
2. Login: `root` / `root`
3. Klikni na "SQL" tab
4. Kopiraj sadržaj iz `database.sql` fajla i izvrši

### 3. Proveri konfiguraciju

Otvori `config.php` i proveri:

- DB_HOST: `localhost`
- DB_PORT: `8889` (ili 3306 ako koristiš standardni port)
- DB_USER: `root`
- DB_PASS: `root`

### 4. Test API

Prvo, pokreni setup skriptu da kreira tabele u bazi:

```
http://localhost:8888/AI-u-oporavku-zvuka/ai-u-oporavku-zvuka/backend/api/setup-db.php
```

Zatim testiraj da li API radi:

```
http://localhost:8888/AI-u-oporavku-zvuka/ai-u-oporavku-zvuka/backend/api/test.php
```

Trebao bi da vidiš JSON odgovor.

### 5. Koristi u React-u

```javascript
const API_URL =
  "http://localhost:8888/AI-u-oporavku-zvuka/ai-u-oporavku-zvuka/backend/api";

// Test
fetch(`${API_URL}/test.php`)
  .then((res) => res.json())
  .then((data) => console.log(data));

// Get audio files
fetch(`${API_URL}/audio.php`)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## API Endpoints

### GET /api/test.php

Test endpoint da vidiš da li backend radi

### GET /api/audio.php

Dohvata sve audio fajlove iz baze

**Response:**

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "filename": "audio.mp3",
      "filepath": "../uploads/audio.mp3",
      "size": 1024,
      "status": "pending",
      "created_at": "2025-12-19 12:00:00"
    }
  ]
}
```

### POST /api/audio.php

Upload audio fajla

**Request:**

```javascript
const formData = new FormData();
formData.append("audio", file);

fetch(`${API_URL}/audio.php`, {
  method: "POST",
  body: formData,
});
```

**Response:**

```json
{
  "status": "success",
  "message": "File uploaded successfully",
  "data": {
    "id": 1,
    "filename": "12345_audio.mp3",
    "size": 1024
  }
}
```

**Validacije:**

- Dozvoljeni tipovi: audio/mpeg, audio/wav, audio/mp3
- Max veličina: 50MB

### DELETE /api/audio.php

Briše audio fajl iz baze i sa diska

**Request:**

```javascript
fetch(`${API_URL}/audio.php`, {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1 }),
});
```

**Response:**

```json
{
  "status": "success",
  "message": "File deleted successfully"
}
```

### POST /api/process.php

Startuje procesiranje audio fajla

**Request:**

```javascript
fetch(`${API_URL}/process.php`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ audio_file_id: 1 }),
});
```

**Response:**

```json
{
  "status": "success",
  "message": "Processing job created",
  "data": {
    "job_id": 1,
    "audio_file_id": 1
  }
}
```

### GET /api/process.php

Dohvata status procesiranja

**Query parametri:**

- `job_id` - ID specifičnog joba
- `audio_file_id` - Svi jobovi za određeni audio fajl
- Bez parametara - Poslednji 50 jobovi

**Request:**

```javascript
// Specifični job
fetch(`${API_URL}/process.php?job_id=1`);

// Svi jobovi za audio fajl
fetch(`${API_URL}/process.php?audio_file_id=1`);

// Svi jobovi
fetch(`${API_URL}/process.php`);
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "audio_file_id": 1,
    "status": "processing",
    "progress": 50,
    "result_filepath": null,
    "error_message": null,
    "created_at": "2025-12-19 12:00:00"
  }
}
```

## Error Handling

Svi endpointi vraćaju grešku u formatu:

```json
{
  "error": "Error message"
}
```

Sa odgovarajućim HTTP status kodom (400, 404, 500, itd.)
