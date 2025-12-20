-- Ubaci svih 50 pitanja u bazu
USE ai_oporavak_zvuka;

-- Prvo kreiraj tabele ako ne postoje (već su u database.sql)

-- Pitanje 1
INSERT INTO quiz_questions (question) VALUES ('Šta je osnovna uloga veštačke inteligencije u oporavku zvuka?');
SET @q1 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q1, 'Uklanjanje šuma i restauracija kvaliteta audio zapisa', 1),
(@q1, 'Povećanje jačine zvuka', 0),
(@q1, 'Promena formata audio fajlova', 0);

-- Pitanje 2
INSERT INTO quiz_questions (question) VALUES ('Koji tip neuronske mreže se najčešće koristi za analizu vremenskih serija u audio signalima?');
SET @q2 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q2, 'Convolutional Neural Networks (CNN)', 0),
(@q2, 'Recurrent Neural Networks (RNN)', 1),
(@q2, 'Generative Adversarial Networks (GAN)', 0);

-- Pitanje 3
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja spektrogram u obradi zvuka?');
SET @q3 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q3, 'Vizuelnu reprezentaciju frekvencija zvuka kroz vreme', 1),
(@q3, 'Digitalni format audio fajla', 0),
(@q3, 'Vrstu mikrofona', 0);

-- Pitanje 4
INSERT INTO quiz_questions (question) VALUES ('Koja je prednost korišćenja LSTM mreža u oporavku zvuka?');
SET @q4 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q4, 'Brža obrada podataka', 0),
(@q4, 'Pamćenje dugih zavisnosti u vremenskim serijama', 1),
(@q4, 'Manja potrošnja energije', 0);

-- Pitanje 5
INSERT INTO quiz_questions (question) VALUES ('Šta je mel-spektrogram?');
SET @q5 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q5, 'Vrsta audio kompresije', 0),
(@q5, 'Spektrogram sa frekvencijama na mel skali koja bolje odgovara ljudskom sluhu', 1),
(@q5, 'Algoritam za otkrivanje govora', 0);

-- Pitanje 6
INSERT INTO quiz_questions (question) VALUES ('Koji je osnovni cilj denoising algoritama?');
SET @q6 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q6, 'Povećanje kvaliteta snimka', 0),
(@q6, 'Uklanjanje neželjenog šuma iz audio signala', 1),
(@q6, 'Konverzija mono u stereo zvuk', 0);

-- Pitanje 7
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja WaveNet arhitektura?');
SET @q7 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q7, 'Generativni model za sintezu audio signala razvijen od strane DeepMind', 1),
(@q7, 'Protokol za streaming audio sadržaja', 0),
(@q7, 'Format za kompresiju zvuka', 0);

-- Pitanje 8
INSERT INTO quiz_questions (question) VALUES ('Koja je uloga autoenkodera u oporavku zvuka?');
SET @q8 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q8, 'Kompresija i rekonstrukcija audio signala sa uklanjanjem šuma', 1),
(@q8, 'Povećanje sample rate-a', 0),
(@q8, 'Konverzija audio formata', 0);

-- Pitanje 9
INSERT INTO quiz_questions (question) VALUES ('Šta je source separation?');
SET @q9 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q9, 'Razdvajanje različitih izvora zvuka iz jednog audio zapisa', 1),
(@q9, 'Podela audio fajla na više delova', 0),
(@q9, 'Separacija levog i desnog kanala', 0);

-- Pitanje 10
INSERT INTO quiz_questions (question) VALUES ('Koji Python framework se najčešće koristi za deep learning u audio obradi?');
SET @q10 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q10, 'Django', 0),
(@q10, 'PyTorch ili TensorFlow', 1),
(@q10, 'Flask', 0);

-- Pitanje 11
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja Fast Fourier Transform (FFT)?');
SET @q11 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q11, 'Algoritam za brzu konverziju vremenskog domena u frekventni domen', 1),
(@q11, 'Metoda kompresije audio fajlova', 0),
(@q11, 'Protokol za prijenos zvuka', 0);

-- Pitanje 12
INSERT INTO quiz_questions (question) VALUES ('Koja je tipična sample rate za profesionalne audio snimke?');
SET @q12 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q12, '22.05 kHz', 0),
(@q12, '44.1 kHz ili 48 kHz', 1),
(@q12, '16 kHz', 0);

-- Pitanje 13
INSERT INTO quiz_questions (question) VALUES ('Šta je CNN (Convolutional Neural Network) dobar za u audio obradi?');
SET @q13 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q13, 'Ekstrakcija prostornih karakteristika iz spektrograma', 1),
(@q13, 'Kompresija audio fajlova', 0),
(@q13, 'Povećanje volumena', 0);

-- Pitanje 14
INSERT INTO quiz_questions (question) VALUES ('Šta znači termin \'upsampling\' u oporavku zvuka?');
SET @q14 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q14, 'Smanjenje kvaliteta zvuka', 0),
(@q14, 'Povećanje sample rate-a za bolju rezoluciju', 1),
(@q14, 'Smanjenje veličine fajla', 0);

-- Pitanje 15
INSERT INTO quiz_questions (question) VALUES ('Koja biblioteka u Python-u se koristi za rad sa audio fajlovima?');
SET @q15 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q15, 'NumPy', 0),
(@q15, 'Librosa', 1),
(@q15, 'Pandas', 0);

-- Pitanje 16
INSERT INTO quiz_questions (question) VALUES ('Šta je GAN (Generative Adversarial Network) u kontekstu oporavka zvuka?');
SET @q16 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q16, 'Model koji koristi generator i diskriminator za poboljšanje kvaliteta zvuka', 1),
(@q16, 'Algoritam za kompresiju', 0),
(@q16, 'Vrsta audio editora', 0);

-- Pitanje 17
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja pitch u audio obradi?');
SET @q17 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q17, 'Jačinu zvuka', 0),
(@q17, 'Visinu tona ili frekvenciju osnovnog tona', 1),
(@q17, 'Dužinu audio zapisa', 0);

-- Pitanje 18
INSERT INTO quiz_questions (question) VALUES ('Koja je uloga aktivacione funkcije ReLU u neuronskim mrežama?');
SET @q18 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q18, 'Uvođenje nelinearnosti i omogućavanje učenja složenih obrazaca', 1),
(@q18, 'Smanjenje veličine mreže', 0),
(@q18, 'Povećanje brzine procesora', 0);

-- Pitanje 19
INSERT INTO quiz_questions (question) VALUES ('Šta je U-Net arhitektura?');
SET @q19 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q19, 'Konvolutivna mreža sa encoder-decoder strukturom često korišćena za source separation', 1),
(@q19, 'Protokol za mrežni prenos', 0),
(@q19, 'Vrsta audio interfejsa', 0);

-- Pitanje 20
INSERT INTO quiz_questions (question) VALUES ('Šta znači SNR (Signal-to-Noise Ratio)?');
SET @q20 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q20, 'Odnos snage korisnog signala i šuma', 1),
(@q20, 'Brzina prenosa podataka', 0),
(@q20, 'Veličina audio fajla', 0);

-- Pitanje 21
INSERT INTO quiz_questions (question) VALUES ('Koja metoda se koristi za obučavanje neuronskih mreža?');
SET @q21 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q21, 'Linear regression', 0),
(@q21, 'Backpropagation sa gradient descent', 1),
(@q21, 'Binary search', 0);

-- Pitanje 22
INSERT INTO quiz_questions (question) VALUES ('Šta je batch normalization?');
SET @q22 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q22, 'Tehnika za stabilizaciju i ubrzanje treninga normalizacijom ulaza slojeva', 1),
(@q22, 'Metoda kompresije podataka', 0),
(@q22, 'Algoritam za sortiranje', 0);

-- Pitanje 23
INSERT INTO quiz_questions (question) VALUES ('Koja je svrha dropout sloja u neuronskoj mreži?');
SET @q23 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q23, 'Povećanje brzine treninga', 0),
(@q23, 'Sprečavanje overfitting-a nasumičnim isključivanjem neurona', 1),
(@q23, 'Smanjenje veličine modela', 0);

-- Pitanje 24
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja STFT (Short-Time Fourier Transform)?');
SET @q24 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q24, 'Fourier transformacija primenjena na kratke segmente signala za analizu u vremenu', 1),
(@q24, 'Format audio fajla', 0),
(@q24, 'Vrsta mikrofona', 0);

-- Pitanje 25
INSERT INTO quiz_questions (question) VALUES ('Koja metrika se koristi za evaluaciju kvaliteta oporavljenog zvuka?');
SET @q25 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q25, 'PESQ (Perceptual Evaluation of Speech Quality)', 1),
(@q25, 'FPS (Frames Per Second)', 0),
(@q25, 'DPI (Dots Per Inch)', 0);

-- Pitanje 26
INSERT INTO quiz_questions (question) VALUES ('Šta je data augmentation u kontekstu audio obrade?');
SET @q26 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q26, 'Tehnika povećanja trening dataset-a dodavanjem varijacija postojećih podataka', 1),
(@q26, 'Povećanje sample rate-a', 0),
(@q26, 'Dodavanje novih instrumenata', 0);

-- Pitanje 27
INSERT INTO quiz_questions (question) VALUES ('Koji je tipičan format za duboko učenje - wav ili mp3?');
SET @q27 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q27, 'MP3 jer je kompresovan', 0),
(@q27, 'WAV jer je nekompresovan i čuva sve informacije', 1),
(@q27, 'Oba su jednako dobra', 0);

-- Pitanje 28
INSERT INTO quiz_questions (question) VALUES ('Šta je attention mehanizam u neuronskim mrežama?');
SET @q28 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q28, 'Mehanizam koji dozvoljava mreži da se fokusira na važne delove ulaznih podataka', 1),
(@q28, 'Metoda za smanjenje memorije', 0),
(@q28, 'Algoritam za kompresiju', 0);

-- Pitanje 29
INSERT INTO quiz_questions (question) VALUES ('Koja je osnovna razlika između supervised i unsupervised learning?');
SET @q29 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q29, 'Supervised koristi labele, unsupervised ne', 1),
(@q29, 'Unsupervised je brži', 0),
(@q29, 'Supervised koristi manje podataka', 0);

-- Pitanje 30
INSERT INTO quiz_questions (question) VALUES ('Šta je transfer learning?');
SET @q30 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q30, 'Prenos podataka između servera', 0),
(@q30, 'Korišćenje već treniranog modela kao početne tačke za novi zadatak', 1),
(@q30, 'Konverzija audio formata', 0);

-- Pitanje 31
INSERT INTO quiz_questions (question) VALUES ('Koja je uloga loss funkcije tokom treninga?');
SET @q31 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q31, 'Merenje razlike između predikcija i stvarnih vrednosti', 1),
(@q31, 'Povećanje brzine učenja', 0),
(@q31, 'Smanjenje veličine modela', 0);

-- Pitanje 32
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja epoch u machine learning-u?');
SET @q32 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q32, 'Jedna iteracija kroz ceo trening dataset', 1),
(@q32, 'Broj slojeva u mreži', 0),
(@q32, 'Vrsta aktivacione funkcije', 0);

-- Pitanje 33
INSERT INTO quiz_questions (question) VALUES ('Koja je prednost korišćenja GPU-a za trening neuronskih mreža?');
SET @q33 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q33, 'Manja potrošnja energije', 0),
(@q33, 'Paralelna obrada koja ubrzava kalkulacije', 1),
(@q33, 'Veća tačnost modela', 0);

-- Pitanje 34
INSERT INTO quiz_questions (question) VALUES ('Šta je feature extraction?');
SET @q34 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q34, 'Proces identifikacije i izdvajanja relevantnih karakteristika iz sirovih podataka', 1),
(@q34, 'Uklanjanje šuma', 0),
(@q34, 'Kompresija fajla', 0);

-- Pitanje 35
INSERT INTO quiz_questions (question) VALUES ('Koja tehnika se koristi za sprečavanje gradient vanishing problema?');
SET @q35 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q35, 'Batch normalization i LSTM ćelije', 1),
(@q35, 'Povećanje broja slojeva', 0),
(@q35, 'Smanjenje learning rate-a', 0);

-- Pitanje 36
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja kernel u konvolutivnim mrežama?');
SET @q36 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q36, 'Operativni sistem', 0),
(@q36, 'Filter/matrica koja se koristi za konvoluciju', 1),
(@q36, 'Vrsta aktivacione funkcije', 0);

-- Pitanje 37
INSERT INTO quiz_questions (question) VALUES ('Koja je uloga pooling sloja u CNN?');
SET @q37 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q37, 'Smanjenje prostorne dimenzije i ekstrakcija dominantnih karakteristika', 1),
(@q37, 'Povećanje broja parametara', 0),
(@q37, 'Dodavanje šuma', 0);

-- Pitanje 38
INSERT INTO quiz_questions (question) VALUES ('Šta je learning rate?');
SET @q38 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q38, 'Brzina kojom se učitavaju podaci', 0),
(@q38, 'Hiperparametar koji kontroliše veličinu koraka pri ažuriranju težina', 1),
(@q38, 'Broj epoha treninga', 0);

-- Pitanje 39
INSERT INTO quiz_questions (question) VALUES ('Koja je prednost korišćenja ResNet arhitekture?');
SET @q39 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q39, 'Omogućava treniranje veoma dubokih mreža pomoću skip connections', 1),
(@q39, 'Zahteva manje memorije', 0),
(@q39, 'Brži inference', 0);

-- Pitanje 40
INSERT INTO quiz_questions (question) VALUES ('Šta znači overfitting?');
SET @q40 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q40, 'Model se predobro prilagodio trening podacima i loše generalizuje', 1),
(@q40, 'Model je prebrz', 0),
(@q40, 'Podaci su previše veliki', 0);

-- Pitanje 41
INSERT INTO quiz_questions (question) VALUES ('Koja biblioteka se koristi za numeričke operacije u Python-u?');
SET @q41 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q41, 'Requests', 0),
(@q41, 'NumPy', 1),
(@q41, 'Beautiful Soup', 0);

-- Pitanje 42
INSERT INTO quiz_questions (question) VALUES ('Šta je confusion matrix?');
SET @q42 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q42, 'Tabela koja prikazuje performanse klasifikacionog modela', 1),
(@q42, 'Graf zavisnosti podataka', 0),
(@q42, 'Vrsta neuronske mreže', 0);

-- Pitanje 43
INSERT INTO quiz_questions (question) VALUES ('Koja je optimalna vrednost za learning rate?');
SET @q43 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q43, 'Uvek 1.0', 0),
(@q43, 'Zavisi od problema, obično između 0.001 i 0.1', 1),
(@q43, 'Što veća to bolja', 0);

-- Pitanje 44
INSERT INTO quiz_questions (question) VALUES ('Šta je validation set?');
SET @q44 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q44, 'Skup podataka za evaluaciju modela tokom treninga', 1),
(@q44, 'Skup podataka za finalno testiranje', 0),
(@q44, 'Skup podataka za treniranje', 0);

-- Pitanje 45
INSERT INTO quiz_questions (question) VALUES ('Koja je uloga bias-a u neuronskoj mreži?');
SET @q45 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q45, 'Omogućava mreži da uči offset vrednosti nezavisno od ulaza', 1),
(@q45, 'Povećava brzinu treninga', 0),
(@q45, 'Smanjuje broj parametara', 0);

-- Pitanje 46
INSERT INTO quiz_questions (question) VALUES ('Šta predstavlja latent space u autoenkoderu?');
SET @q46 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q46, 'Kompresovana reprezentacija ulaznih podataka u nižoj dimenziji', 1),
(@q46, 'Ulazni sloj mreže', 0),
(@q46, 'Izlazni format', 0);

-- Pitanje 47
INSERT INTO quiz_questions (question) VALUES ('Koja metoda se koristi za normalizaciju audio signala?');
SET @q47 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q47, 'Peak normalization ili RMS normalization', 1),
(@q47, 'Z-score normalization', 0),
(@q47, 'Min-max scaling', 0);

-- Pitanje 48
INSERT INTO quiz_questions (question) VALUES ('Šta je time stretching u audio obradi?');
SET @q48 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q48, 'Promena trajanja audio zapisa bez promene pitch-a', 1),
(@q48, 'Dodavanje echo efekta', 0),
(@q48, 'Povećanje volumena', 0);

-- Pitanje 49
INSERT INTO quiz_questions (question) VALUES ('Koja je uloga discriminator-a u GAN-u?');
SET @q49 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q49, 'Razlikovanje pravih uzoraka od generisanih', 1),
(@q49, 'Generisanje novih uzoraka', 0),
(@q49, 'Kompresija podataka', 0);

-- Pitanje 50
INSERT INTO quiz_questions (question) VALUES ('Šta je window function u STFT?');
SET @q50 = LAST_INSERT_ID();
INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES 
(@q50, 'Funkcija koja se primenjuje na segment signala kako bi se smanjile diskontinuitete', 1),
(@q50, 'Grafički korisnički interfejs', 0),
(@q50, 'Metoda kompresije', 0);
