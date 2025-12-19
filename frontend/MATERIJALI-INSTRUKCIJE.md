# 📚 MATERIJALI STRANICA - INSTRUKCIJE

## ✅ Šta je urađeno:

### 1. **Kreirana Materijali stranica** sa:

- Elegantnim hero sekcijom
- Sekcijom za preuzimanje dokumenata (Word, PDF, PowerPoint)
- Sekcijom za video materijale (3 videa)
- Animacije u AI/sound stilu
- Responsive dizajn

### 2. **Folderi kreirani:**

- `/frontend/public/materials/` - za dokumente
- `/frontend/public/videos/` - za video fajlove

---

## 📁 GDE UBACITI FAJLOVE:

### **DOKUMENTI** (Word, PDF, PowerPoint):

**Lokacija:** `/frontend/public/materials/`

Ubaci sledeće fajlove (TAČNO SA OVIM IMENIMA):

```
1. dokument.docx       - Word dokument (dokumentacija)
2. istrazivanje.pdf    - PDF fajl (naučni rad)
3. prezentacija.pptx   - PowerPoint prezentacija
```

**Kako:**

1. Otvori folder: `frontend/public/materials/`
2. Kopiraj svoje fajlove tamo
3. Preimenuj ih tačno kako je navedeno gore
4. Gotovo! Automatski će biti dostupni za download

---

### **VIDEO FAJLOVI**:

**Lokacija:** `/frontend/public/videos/`

Ubaci sledeće video fajlove (TAČNO SA OVIM IMENIMA):

```
1. video1.mp4  - Đorđe Đoković 121/2023 (Uvod u AI Oporavak Zvuka)
2. video2.mp4  - Igor Janičijević (Duboke Neuronske Mreže)
3. video3.mp4  - Đorđe Marković (Praktična Demonstracija)
```

**Video specifikacije:**

- Format: MP4
- Codec: H.264
- Rezolucija: 1920x1080 (preporučeno)
- Video se automatski prikazuje na stranici

**Kako:**

1. Otvori folder: `frontend/public/videos/`
2. Konvertuj svoje videe u MP4 format (ako već nisu)
3. Preimenuj ih tačno kao što je gore navedeno
4. Kopiraj ih u videos folder
5. Refresh-uj stranicu

---

## 🎨 Featuri Stranice:

### **Dokumenti Sekcija:**

- ✅ 3 kartice za Word, PDF i PowerPoint
- ✅ Animirane ikone
- ✅ Hover efekti sa glow animacijom
- ✅ Download button sa bounce animacijom
- ✅ Meta info (tip fajla, veličina)

### **Video Sekcija:**

- ✅ 3 video playera sa kontrolama
- ✅ Ime autora iznad svakog videa
- ✅ Animated sound wave overlay pri hover-u
- ✅ Video kontrole (play, pause, volume, fullscreen)
- ✅ Responsive dizajn

### **Dodatno:**

- ✅ Instrukcije na kraju stranice
- ✅ Smooth animacije i prelazi
- ✅ Gradient efekti
- ✅ Dark mode tema

---

## 🚀 Kako pristupiti stranici:

1. Otvori: **http://localhost:5174/**
2. Klikni na **"Materijal"** u navbar-u
3. Stranica se otvara sa svim sekcijama

---

## 🔧 Ako želiš da promeniš nešto:

### Promeni naslove videa:

Otvori: `frontend/src/components/Materials.jsx`
Promeni `title` i `description` u `videos` array-u (linija 35-60)

### Promeni naslove dokumenata:

Otvori: `frontend/src/components/Materials.jsx`
Promeni `title` i `description` u `documents` array-u (linija 6-30)

### Promeni boje/stilove:

Otvori: `frontend/src/components/Materials.css`
Promeni CSS stilove kako želiš

---

## ✨ Sve radi automatski:

- ✅ Download dugme za dokumente
- ✅ Video player za video fajlove
- ✅ Animacije
- ✅ Responsive dizajn
- ✅ Smooth scroll

**SAMO UBACI FAJLOVE I GOTOVO!** 🎉
