--@block
CREATE TABLE generos_musicales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
--@block
INSERT INTO generos_musicales (id, nombre)
VALUES (1, 'Rock'),
    (2, 'Pop'),
    (3, 'Hip Hop'),
    (4, 'Electrónica'),
    (5, 'R&B'),
    (6, 'Reggae'),
    (7, 'Jazz'),
    (8, 'Clásica'),
    (9, 'Country'),
    (10, 'Blues'),
    (11, 'Metal'),
    (12, 'Folk'),
    (13, 'Soul'),
    (14, 'Funk'),
    (15, 'Reggaetón'),
    (16, 'Cumbia'),
    (17, 'Salsa'),
    (18, 'Bachata');
--@block
CREATE TABLE animos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
--@block
INSERT INTO animos (id, nombre)
VALUES (1, 'Energético'),
    (2, 'Emocionante'),
    (3, 'Animado'),
    (4, 'Romántico'),
    (5, 'Relajado'),
    (6, 'Melancólico'),
    (7, 'Empoderado'),
    (8, 'Feliz'),
    (9, 'Épico'),
    (10, 'Reflexivo'),
    (11, 'Motivador') --@block
    CREATE TABLE climas (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL
    );
--@block
INSERT INTO climas (id, nombre)
VALUES (1, 'Soleado'),
    (2, 'Lluvioso'),
    (3, 'Noche');
--@block
CREATE TABLE ocasiones (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
--@block
INSERT INTO ocasiones (id, nombre)
VALUES (1, 'Fiesta'),
    (2, 'Amor'),
    (3, 'Viaje'),
    (4, 'Concierto'),
    (5, 'Reflexión'),
    (6, 'Tristeza'),
    (7, 'Diversión'),
    (8, 'Relax'),
    (9, 'Ciudad'),
    (10, 'Entrenamiento'),
    (11, 'Cannabis'),
    (12, 'Playa'),
    (13, 'Revolución'),
    (14, 'Esperanza'),
    (15, 'Naturaleza');
--@block
CREATE TABLE artistas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
--@block
INSERT INTO artistas (id, nombre)
VALUES -- Rock
    (1, 'Queen'),
    (2, 'Led Zeppelin'),
    (3, 'The Rolling Stones'),
    (4, 'Nirvana'),
    (5, 'Guns N Roses'),
    (6, 'Pink Floyd'),
    (7, 'The Beatles'),
    (8, 'AC/DC'),
    (9, 'Bon Jovi'),
    (10, 'Metallica'),
    -- Pop
    (11, 'Michael Jackson'),
    (12, 'Madonna'),
    (13, 'Whitney Houston'),
    (14, 'Prince'),
    (15, 'Elton John'),
    (16, 'Beyoncé'),
    (17, 'Rihanna'),
    (18, 'Taylor Swift'),
    (19, 'Ed Sheeran'),
    (20, 'Adele'),
    -- Hip Hop/Rap
    (21, 'Eminem'),
    (22, 'Tupac Shakur'),
    (23, 'Jay-Z'),
    (24, 'Kendrick Lamar'),
    (25, 'Drake'),
    (26, 'Nicki Minaj'),
    (27, 'Snoop Dogg'),
    (28, 'OutKast'),
    (29, 'The Notorious B.I.G.'),
    (30, 'Lauryn Hill'),
    -- Electrónica
    (31, 'Avicii'),
    (32, 'Calvin Harris'),
    (33, 'David Guetta'),
    (34, 'The Chainsmokers'),
    (35, 'Zedd'),
    (36, 'Marshmello'),
    (37, 'Major Lazer'),
    (38, 'Daft Punk'),
    (39, 'Kygo'),
    (40, 'Martin Garrix'),
    -- R&B/Soul
    (41, 'Rihanna'),
    (42, 'Beyoncé'),
    (43, 'Usher'),
    (44, 'Frank Ocean'),
    (45, 'The Weeknd'),
    (46, 'Alicia Keys'),
    (47, 'TLC'),
    (48, 'John Legend'),
    (49, 'Chris Brown'),
    (50, 'Destinys Child'),
    -- Reggae
    (51, 'Bob Marley & The Wailers'),
    (52, 'Toots and The Maytals'),
    (53, 'Peter Tosh'),
    (54, 'Jimmy Cliff'),
    (55, 'Steel Pulse'),
    (56, 'Ziggy Marley'),
    (57, 'UB40'),
    (58, 'Inner Circle'),
    (59, 'Burning Spear'),
    (60, 'Black Uhuru'),
    -- Jazz
    (61, 'Louis Armstrong'),
    (62, 'Miles Davis'),
    (63, 'John Coltrane'),
    (64, 'Ella Fitzgerald'),
    (65, 'Duke Ellington'),
    (66, 'Billie Holiday'),
    (67, 'Thelonious Monk'),
    (68, 'Charlie Parker'),
    (69, 'Nina Simone'),
    (70, 'Chet Baker'),
    -- Clásica
    (71, 'Ludwig van Beethoven'),
    (72, 'Wolfgang Amadeus Mozart'),
    (73, 'Johann Sebastian Bach'),
    (74, 'Pyotr Ilyich Tchaikovsky'),
    (75, 'Ludovico Einaudi'),
    (76, 'Antonio Vivaldi'),
    (77, 'Frédéric Chopin'),
    (78, 'Claude Debussy'),
    (79, 'Richard Wagner'),
    (80, 'Johannes Brahms'),
    -- Country
    (81, 'Johnny Cash'),
    (82, 'Dolly Parton'),
    (83, 'Willie Nelson'),
    (84, 'Shania Twain'),
    (85, 'Kenny Rogers'),
    (86, 'Patsy Cline'),
    (87, 'Keith Urban'),
    (88, 'Carrie Underwood'),
    (89, 'Brad Paisley'),
    (90, 'Miranda Lambert'),
    -- Blues
    (91, 'B.B. King'),
    (92, 'Muddy Waters'),
    (93, 'John Lee Hooker'),
    (94, 'Etta James'),
    (95, 'Stevie Ray Vaughan'),
    (96, 'Howlin Wolf'),
    (97, 'Robert Johnson'),
    (98, 'Koko Taylor'),
    (99, 'Janis Joplin'),
    (100, 'Taj Mahal'),
    -- Metal
    (101, 'Black Sabbath'),
    (102, 'Metallica'),
    (103, 'Iron Maiden'),
    (104, 'Slayer'),
    (105, 'Judas Priest'),
    (106, 'Pantera'),
    (107, 'Megadeth'),
    (108, 'System of a Down'),
    (109, 'Rammstein'),
    (110, 'Avenged Sevenfold'),
    -- Folk
    (111, 'Bob Dylan'),
    (112, 'Joni Mitchell'),
    (113, 'Simon & Garfunkel'),
    (114, 'James Taylor'),
    (115, 'Joan Baez'),
    (116, 'Cat Stevens'),
    (117, 'The Byrds'),
    (118, 'Arlo Guthrie'),
    (119, 'Don McLean'),
    (120, 'John Denver'),
    -- Soul
    (121, 'Aretha Franklin'),
    (122, 'Marvin Gaye'),
    (123, 'Otis Redding'),
    (124, 'Stevie Wonder'),
    (125, 'Tina Turner'),
    (126, 'Al Green'),
    (127, 'Sam Cooke'),
    (128, 'Ray Charles'),
    (129, 'Gladys Knight & The Pips'),
    (130, 'Amy Winehouse'),
    -- Funk
    (131, 'James Brown'),
    (132, 'Sly & The Family Stone'),
    (133, 'Earth, Wind & Fire'),
    (134, 'Kool & The Gang'),
    (135, 'Chic'),
    (136, 'Parliament'),
    (137, 'Rick James'),
    (138, 'The Isley Brothers'),
    (139, 'Prince'),
    (140, 'Funkadelic'),
    -- Reggaetón
    (141, 'Daddy Yankee'),
    (142, 'Bad Bunny'),
    (143, 'J Balvin'),
    (144, 'Maluma'),
    (145, 'Ozuna'),
    (146, 'Natti Natasha'),
    (147, 'Wisin & Yandel'),
    (148, 'Sech'),
    (149, 'Karol G'),
    (150, 'Nicky Jam'),
    -- Cumbia/Latino
    (151, 'Celso Piña'),
    (152, 'Grupo Niche'),
    (153, 'Los Ángeles Azules'),
    (154, 'Sonora Dinamita'),
    (155, 'La Sonora Santanera'),
    (156, 'Grupo 5'),
    (157, 'Los Askis'),
    (158, 'Aniceto Molina'),
    (159, 'Los Mirlos'),
    (160, 'Rodolfo Aicardi'),
    -- Salsa/Latino
    (161, 'Marc Anthony'),
    (162, 'Héctor Lavoe'),
    (163, 'Rubén Blades'),
    (164, 'Willie Colón'),
    (165, 'Celia Cruz'),
    (166, 'Gilberto Santa Rosa'),
    (167, 'La India'),
    (168, 'Oscar De León'),
    (169, 'Ismael Rivera'),
    (170, 'Eddie Santiago'),
    -- Bachata/Latino
    (171, 'Prince Royce'),
    (172, 'Romeo Santos'),
    (173, 'Aventura'),
    (174, 'Monchy & Alexandra'),
    (175, 'Juan Luis Guerra'),
    (176, 'Frank Reyes'),
    (177, 'Anthony Santos'),
    (178, 'Elvis Martínez'),
    (179, 'Alex Bueno'),
    (180, 'Joe Veras');
--@block
CREATE TABLE temas_musicales (
    id SERIAL PRIMARY KEY,
    genero_id INT NOT NULL,
    artista_id INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    animo INT,
    clima INT,
    ocasion INT,
    duracion INT,
    FOREIGN KEY (genero_id) REFERENCES generos_musicales(id) FOREIGN KEY (animo) REFERENCES animos(id);
FOREIGN KEY (clima) REFERENCES climas(id);
FOREIGN KEY (ocasion) REFERENCES ocasiones(id);
FOREIGN KEY (artista_id) REFERENCES artistas(id);
);
--@block
CREATE TABLE if NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password_hash VARCHAR(64) NOT NULL,
    perfil VARCHAR(50),
    amigos VARCHAR(100)
);
--@block
INSERT INTO usuarios (nombre, email, password_hash)
VALUES ('Gianni', 'gianni@lala.com', 1234567890);
--@block
CREATE TABLE if NOT EXISTS playlists (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuarios_id INT,
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
);
--@block
CREATE TABLE if NOT EXISTS canciones_playlist (
    id SERIAL PRIMARY KEY,
    titulo_cancion INT,
    FOREIGN KEY (titulo_cancion) REFERENCES temas_musicales(id),
    playlist_id INT,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id)
);
--@block
INSERT INTO temas_musicales (
        genero_id,
        artista_id,
        artista,
        titulo,
        animo,
        clima,
        ocasion,
        duracion
    )
VALUES -- Temas de género "Rock"
    (1, 1, 'Queen', 'Bohemian Rhapsody', 1, 3, 4, 354),
    (
        1,
        2,
        'Led Zeppelin',
        'Stairway to Heaven',
        6,
        2,
        8,
        480
    ),
    (
        1,
        3,
        'The Rolling Stones',
        'Paint It Black',
        2,
        1,
        3,
        215
    ),
    (
        1,
        4,
        'Nirvana',
        'Smells Like Teen Spirit',
        1,
        3,
        1,
        244
    ),
    (
        1,
        5,
        'Guns N Roses',
        'Sweet Child O Mine',
        3,
        3,
        1,
        355
    ),
    (
        1,
        6,
        'Pink Floyd',
        'Comfortably Numb',
        6,
        3,
        8,
        383
    ),
    (1, 7, 'The Beatles', 'Let It Be', 6, 2, 5, 243),
    (1, 8, 'AC/DC', 'Back in Black', 1, 3, 1, 255),
    (
        1,
        9,
        'Bon Jovi',
        'Livin on a Prayer',
        3,
        3,
        1,
        249
    ),
    (
        1,
        10,
        'Metallica',
        'Enter Sandman',
        1,
        3,
        10,
        331
    ),
    -- Temas de género "Pop"
    (
        2,
        11,
        'Michael Jackson',
        'Thriller',
        1,
        3,
        1,
        357
    ),
    (2, 12, 'Madonna', 'Like a Virgin', 8, 1, 7, 224),
    (
        2,
        13,
        'Whitney Houston',
        'I Will Always Love You',
        2,
        3,
        4,
        273
    ),
    (2, 14, 'Prince', 'Purple Rain', 6, 2, 8, 508),
    (2, 15, 'Elton John', 'Your Song', 4, 1, 4, 248),
    (2, 16, 'Beyoncé', 'Crazy in Love', 1, 3, 1, 236),
    (2, 17, 'Rihanna', 'Umbrella', 3, 2, 7, 264),
    (
        2,
        18,
        'Taylor Swift',
        'Shake It Off',
        3,
        1,
        7,
        219
    ),
    (
        2,
        19,
        'Ed Sheeran',
        'Shape of You',
        3,
        1,
        7,
        233
    ),
    (
        2,
        20,
        'Adele',
        'Rolling in the Deep',
        1,
        3,
        1,
        228
    ),
    -- Temas de género "Hip Hop"
    (3, 21, 'Eminem', 'Lose Yourself', 11, 3, 10, 336),
    (
        3,
        22,
        'Tupac Shakur',
        'California Love',
        1,
        1,
        1,
        293
    ),
    (
        3,
        23,
        'Jay-Z',
        'Empire State of Mind',
        11,
        1,
        9,
        278
    ),
    (3, 24, 'Kendrick Lamar', 'HUMBLE.', 1, 3, 1, 177),
    (3, 25, 'Drake', 'Hotline Bling', 2, 3, 2, 267),
    (3, 26, 'Nicki Minaj', 'Super Bass', 3, 1, 7, 209),
    (
        3,
        27,
        'Snoop Dogg',
        'Gin and Juice',
        5,
        1,
        12,
        213
    ),
    (3, 28, 'OutKast', 'Hey Ya!', 3, 1, 1, 235),
    (
        3,
        29,
        'The Notorious B.I.G.',
        'Juicy',
        11,
        1,
        9,
        293
    ),
    (
        3,
        30,
        'Lauryn Hill',
        'Doo Wop (That Thing)',
        3,
        1,
        1,
        235
    ),
    -- Temas de género "Electrónica"
    (4, 31, 'Avicii', 'Wake Me Up', 1, 3, 1, 247),
    (4, 32, 'Calvin Harris', 'Summer', 1, 1, 12, 221),
    (4, 33, 'David Guetta', 'Titanium', 1, 3, 1, 244),
    (
        4,
        34,
        'The Chainsmokers',
        'Closer',
        3,
        3,
        1,
        245
    ),
    (4, 35, 'Zedd', 'Clarity', 1, 3, 1, 264),
    (4, 36, 'Marshmello', 'Happier', 8, 1, 7, 214),
    (4, 37, 'Major Lazer', 'Lean On', 3, 1, 1, 176),
    (4, 38, 'Daft Punk', 'Get Lucky', 3, 3, 1, 248),
    (4, 39, 'Kygo', 'Stole the Show', 8, 1, 7, 228),
    (4, 40, 'Martin Garrix', 'Animals', 1, 3, 1, 186),
    -- Temas de género "R&B"
    (5, 41, 'Rihanna', 'Diamonds', 6, 2, 8, 227),
    (5, 42, 'Beyoncé', 'Halo', 2, 1, 4, 268),
    (5, 43, 'Usher', 'Yeah!', 3, 3, 1, 250),
    (
        5,
        44,
        'Frank Ocean',
        'Thinking Bout You',
        6,
        2,
        8,
        207
    ),
    (
        5,
        45,
        'The Weeknd',
        'Blinding Lights',
        1,
        3,
        1,
        201
    ),
    (5, 46, 'Alicia Keys', 'No One', 8, 1, 4, 232),
    (5, 47, 'TLC', 'No Scrubs', 3, 1, 1, 221),
    (5, 48, 'John Legend', 'All of Me', 4, 1, 4, 269),
    (5, 49, 'Chris Brown', 'Forever', 3, 1, 1, 248),
    (
        5,
        50,
        'Destinys Child',
        'Say My Name',
        2,
        3,
        1,
        271
    ),
    -- Temas de género "Reggae"
    (
        6,
        51,
        'Bob Marley & The Wailers',
        'Three Little Birds',
        5,
        1,
        12,
        181
    ),
    (
        6,
        52,
        'Toots and The Maytals',
        'Pressure Drop',
        3,
        1,
        1,
        167
    ),
    (
        6,
        53,
        'Peter Tosh',
        'Legalize It',
        11,
        1,
        11,
        264
    ),
    (
        6,
        54,
        'Jimmy Cliff',
        'Many Rivers to Cross',
        2,
        2,
        5,
        181
    ),
    (
        6,
        55,
        'Steel Pulse',
        'Roller Skates',
        3,
        1,
        7,
        235
    ),
    (
        6,
        56,
        'Ziggy Marley',
        'Tomorrow People',
        11,
        1,
        14,
        245
    ),
    (6, 57, 'UB40', 'Red Red Wine', 5, 1, 8, 180),
    (
        6,
        58,
        'Inner Circle',
        'Sweat (A La La La La Long)',
        3,
        1,
        1,
        227
    ),
    (
        6,
        59,
        'Burning Spear',
        'Marcus Garvey',
        11,
        1,
        13,
        262
    ),
    (
        6,
        60,
        'Black Uhuru',
        'Guess Who s Coming to Dinner',
        5,
        1,
        8,
        232
    ),
    -- Temas de género "Jazz"
    (
        7,
        61,
        'Louis Armstrong',
        'What a Wonderful World',
        2,
        2,
        5,
        143
    ),
    (7, 62, 'Miles Davis', 'So What', 5, 3, 8, 320),
    (
        7,
        63,
        'John Coltrane',
        'Giant Steps',
        2,
        3,
        4,
        237
    ),
    (
        7,
        64,
        'Ella Fitzgerald',
        'Summertime',
        5,
        1,
        8,
        248
    ),
    (
        7,
        65,
        'Duke Ellington',
        'Take The "A" Train',
        1,
        3,
        1,
        315
    ),
    (
        7,
        66,
        'Billie Holiday',
        'Strange Fruit',
        2,
        3,
        5,
        186
    ),
    (
        7,
        67,
        'Thelonious Monk',
        'Round Midnight',
        2,
        3,
        8,
        383
    ),
    (
        7,
        68,
        'Charlie Parker',
        'Yardbird Suite',
        3,
        3,
        1,
        218
    ),
    (
        7,
        69,
        'Nina Simone',
        'Feeling Good',
        3,
        1,
        7,
        165
    ),
    (
        7,
        70,
        'Chet Baker',
        'My Funny Valentine',
        2,
        2,
        4,
        157
    ),
    -- Temas de género "Clásica"
    (
        8,
        71,
        'Ludwig van Beethoven',
        'Symphony No. 9 "Choral"',
        9,
        3,
        4,
        674
    ),
    (
        8,
        72,
        'Wolfgang Amadeus Mozart',
        'Requiem in D minor',
        2,
        3,
        4,
        480
    ),
    (
        8,
        73,
        'Johann Sebastian Bach',
        'Brandenburg Concerto No. 3',
        1,
        1,
        4,
        342
    ),
    (
        8,
        74,
        'Pyotr Ilyich Tchaikovsky',
        'Swan Lake',
        2,
        3,
        4,
        328
    ),
    (
        8,
        75,
        'Ludovico Einaudi',
        'Nuvole Bianche',
        2,
        2,
        5,
        365
    ),
    (
        8,
        76,
        'Antonio Vivaldi',
        'The Four Seasons - Spring',
        3,
        1,
        15,
        211
    ),
    (
        8,
        77,
        'Frédéric Chopin',
        'Nocturne in E-flat Major',
        5,
        3,
        8,
        332
    ),
    (
        8,
        78,
        'Claude Debussy',
        'Clair de Lune',
        5,
        2,
        8,
        300
    ),
    (
        8,
        79,
        'Richard Wagner',
        'Ride of the Valkyries',
        9,
        3,
        4,
        322
    ),
    (
        8,
        80,
        'Johannes Brahms',
        'Hungarian Dance No. 5',
        3,
        3,
        1,
        176
    ),
    -- Temas de género "Country"
    (
        9,
        81,
        'Johnny Cash',
        'Ring of Fire',
        1,
        1,
        1,
        159
    ),
    (9, 82, 'Dolly Parton', 'Jolene', 2, 2, 2, 168),
    (
        9,
        83,
        'Willie Nelson',
        'On the Road Again',
        3,
        1,
        3,
        157
    ),
    (
        9,
        84,
        'Shania Twain',
        'Man! I Feel Like a Woman!',
        3,
        1,
        1,
        208
    ),
    (
        9,
        85,
        'Kenny Rogers',
        'The Gambler',
        10,
        1,
        5,
        216
    ),
    (9, 86, 'Patsy Cline', 'Crazy', 2, 2, 2, 160),
    (
        9,
        87,
        'Keith Urban',
        'Somebody Like You',
        8,
        1,
        2,
        242
    ),
    (
        9,
        88,
        'Carrie Underwood',
        'Before He Cheats',
        3,
        3,
        1,
        219
    ),
    (
        9,
        89,
        'Brad Paisley',
        'Whiskey Lullaby',
        2,
        2,
        6,
        278
    ),
    (
        9,
        90,
        'Miranda Lambert',
        'The House That Built Me',
        2,
        3,
        5,
        234
    ),
    -- Temas de género "Blues"
    (
        10,
        91,
        'B.B. King',
        'The Thrill Is Gone',
        6,
        2,
        6,
        305
    ),
    (
        10,
        92,
        'Muddy Waters',
        'Mannish Boy',
        2,
        3,
        1,
        305
    ),
    (
        10,
        93,
        'John Lee Hooker',
        'Boom Boom',
        3,
        1,
        1,
        196
    ),
    (10, 94, 'Etta James', 'At Last', 2, 2, 2, 200),
    (
        10,
        95,
        'Stevie Ray Vaughan',
        'Texas Flood',
        2,
        2,
        6,
        306
    ),
    (
        10,
        96,
        'Howlin Wolf',
        'Smokestack Lightning',
        2,
        3,
        1,
        212
    ),
    (
        10,
        97,
        'Robert Johnson',
        'Cross Road Blues',
        2,
        3,
        6,
        174
    ),
    (
        10,
        98,
        'Koko Taylor',
        'Wang Dang Doodle',
        3,
        3,
        1,
        188
    ),
    (
        10,
        99,
        'Janis Joplin',
        'Piece of My Heart',
        2,
        3,
        6,
        270
    ),
    (
        10,
        100,
        'Taj Mahal',
        'Leaving Trunk',
        1,
        1,
        3,
        287
    ),
    -- Temas de género "Metal"
    (
        11,
        101,
        'Black Sabbath',
        'Paranoid',
        1,
        3,
        1,
        172
    ),
    (
        11,
        102,
        'Metallica',
        'Master of Puppets',
        9,
        3,
        4,
        515
    ),
    (
        11,
        103,
        'Iron Maiden',
        'The Number of the Beast',
        9,
        3,
        4,
        292
    ),
    (11, 104, 'Slayer', 'Raining Blood', 9, 3, 4, 271),
    (
        11,
        105,
        'Judas Priest',
        'Breaking the Law',
        3,
        3,
        1,
        182
    ),
    (11, 106, 'Pantera', 'Walk', 1, 3, 1, 317),
    (
        11,
        107,
        'Megadeth',
        'Symphony of Destruction',
        1,
        3,
        1,
        290
    ),
    (
        11,
        108,
        'System of a Down',
        'Chop Suey!',
        3,
        3,
        1,
        211
    ),
    (11, 109, 'Rammstein', 'Du Hast', 1, 3, 1, 238),
    (
        11,
        110,
        'Avenged Sevenfold',
        'Hail to the King',
        9,
        3,
        4,
        299
    ),
    -- Temas de género "Folk"
    (
        12,
        111,
        'Bob Dylan',
        'Blowin in the Wind',
        10,
        2,
        5,
        179
    ),
    (
        12,
        112,
        'Joni Mitchell',
        'Big Yellow Taxi',
        3,
        1,
        7,
        157
    ),
    (
        12,
        113,
        'Simon & Garfunkel',
        'The Sound of Silence',
        10,
        2,
        5,
        223
    ),
    (
        12,
        114,
        'James Taylor',
        'Fire and Rain',
        2,
        2,
        6,
        250
    ),
    (
        12,
        115,
        'Joan Baez',
        'Diamonds & Rust',
        2,
        2,
        6,
        334
    ),
    (
        12,
        116,
        'Cat Stevens',
        'Wild World',
        10,
        2,
        5,
        228
    ),
    (
        12,
        117,
        'The Byrds',
        'Turn! Turn! Turn!',
        10,
        1,
        5,
        214
    ),
    (
        12,
        118,
        'Arlo Guthrie',
        'City of New Orleans',
        5,
        2,
        3,
        293
    ),
    (
        12,
        119,
        'Don McLean',
        'American Pie',
        10,
        3,
        5,
        537
    ),
    (
        12,
        120,
        'John Denver',
        'Take Me Home, Country Roads',
        3,
        1,
        3,
        193
    ),
    -- Temas de género "Soul"
    (
        13,
        121,
        'Aretha Franklin',
        'Respect',
        7,
        1,
        1,
        147
    ),
    (
        13,
        122,
        'Marvin Gaye',
        'Whats Going On',
        10,
        2,
        5,
        210
    ),
    (
        13,
        123,
        'Otis Redding',
        '(Sittin On) The Dock of the Bay',
        5,
        2,
        8,
        178
    ),
    (
        13,
        124,
        'Stevie Wonder',
        'Superstition',
        3,
        1,
        1,
        270
    ),
    (
        13,
        125,
        'Tina Turner',
        'What s Love Got to Do with It',
        3,
        1,
        2,
        216
    ),
    (
        13,
        126,
        'Al Green',
        'Let s Stay Together',
        4,
        1,
        2,
        211
    ),
    (
        13,
        127,
        'Sam Cooke',
        'A Change Is Gonna Come',
        2,
        2,
        5,
        240
    ),
    (
        13,
        128,
        'Ray Charles',
        'Georgia On My Mind',
        2,
        1,
        2,
        236
    ),
    (
        13,
        129,
        'Gladys Knight & The Pips',
        'Midnight Train to Georgia',
        2,
        3,
        6,
        248
    ),
    (13, 130, 'Amy Winehouse', 'Rehab', 2, 3, 6, 225),
    -- Temas de género "Funk"
    (
        14,
        131,
        'James Brown',
        'Get Up (I Feel Like Being a) Sex Machine',
        1,
        3,
        1,
        330
    ),
    (
        14,
        132,
        'Sly & The Family Stone',
        'Everyday People',
        3,
        1,
        1,
        141
    ),
    (
        14,
        133,
        'Earth, Wind & Fire',
        'September',
        3,
        1,
        1,
        215
    ),
    (
        14,
        134,
        'Kool & The Gang',
        'Celebration',
        3,
        1,
        1,
        233
    ),
    (14, 135, 'Chic', 'Good Times', 3, 3, 1, 221),
    (
        14,
        136,
        'Parliament',
        'Flash Light',
        3,
        3,
        1,
        323
    ),
    (
        14,
        137,
        'Rick James',
        'Super Freak',
        3,
        3,
        1,
        206
    ),
    (
        14,
        138,
        'The Isley Brothers',
        'It s Your Thing',
        3,
        3,
        1,
        221
    ),
    (14, 139, 'Prince', 'Kiss', 3, 3, 1, 225),
    (
        14,
        140,
        'Funkadelic',
        'One Nation Under a Groove',
        3,
        3,
        1,
        438
    ),
    -- Temas de género "Reggaetón"
    (
        15,
        141,
        'Daddy Yankee',
        'Gasolina',
        1,
        3,
        1,
        198
    ),
    (15, 142, 'Bad Bunny', 'Soy Peor', 1, 3, 1, 289),
    (15, 143, 'J Balvin', 'Mi Gente', 3, 1, 1, 199),
    (15, 144, 'Maluma', 'Felices los 4', 3, 1, 1, 213),
    (15, 145, 'Ozuna', 'Criminal', 3, 3, 1, 269),
    (
        15,
        146,
        'Natti Natasha',
        'Criminal',
        3,
        3,
        1,
        210
    ),
    (
        15,
        147,
        'Wisin & Yandel',
        'Rakata',
        1,
        3,
        1,
        207
    ),
    (15, 148, 'Sech', 'Otro Trago', 2, 3, 2, 249),
    (15, 149, 'Karol G', 'Tusa', 2, 3, 2, 213),
    (15, 150, 'Nicky Jam', 'El Amante', 2, 3, 2, 231),
    -- Temas de género "Cumbia"
    (
        16,
        151,
        'Celso Piña',
        'Cumbia Sobre el Río',
        3,
        1,
        1,
        241
    ),
    (
        16,
        152,
        'Grupo Niche',
        'Cali Pachanguero',
        3,
        1,
        1,
        265
    ),
    (
        16,
        153,
        'Los Ángeles Azules',
        'Cumbia del Infinito',
        3,
        1,
        1,
        212
    ),
    (
        16,
        154,
        'Sonora Dinamita',
        'Que Nadie Sepa Mi Sufrir',
        2,
        2,
        6,
        192
    ),
    (
        16,
        155,
        'La Sonora Santanera',
        'La Boa',
        3,
        3,
        1,
        188
    ),
    (
        16,
        156,
        'Grupo 5',
        'Motor y Motivo',
        3,
        1,
        1,
        218
    ),
    (16, 157, 'Los Askis', 'Regresa 2', 2, 2, 6, 205),
    (
        16,
        158,
        'Aniceto Molina',
        'La Cumbia Sampuesana',
        3,
        1,
        1,
        188
    ),
    (
        16,
        159,
        'Los Mirlos',
        'Cumbia de los Pájaros',
        3,
        1,
        1,
        207
    ),
    (
        16,
        160,
        'Rodolfo Aicardi',
        'Colegiala',
        3,
        1,
        1,
        173
    ),
    -- Temas de género "Salsa"
    (
        17,
        161,
        'Marc Anthony',
        'Vivir Mi Vida',
        3,
        1,
        1,
        308
    ),
    (
        17,
        162,
        'Héctor Lavoe',
        'El Cantante',
        2,
        3,
        4,
        382
    ),
    (
        17,
        163,
        'Rubén Blades',
        'Pedro Navaja',
        3,
        3,
        1,
        406
    ),
    (17, 164, 'Willie Colón', 'Idilio', 4, 1, 2, 348),
    (
        17,
        165,
        'Celia Cruz',
        'La Vida Es Un Carnaval',
        3,
        1,
        1,
        289
    ),
    (
        17,
        166,
        'Gilberto Santa Rosa',
        'Conciencia',
        10,
        2,
        5,
        278
    ),
    (17, 167, 'La India', 'Ese Hombre', 2, 3, 2, 282),
    (
        17,
        168,
        'Oscar De León',
        'Llorarás',
        2,
        3,
        6,
        298
    ),
    (
        17,
        169,
        'Ismael Rivera',
        'Las Caras Lindas',
        8,
        1,
        1,
        260
    ),
    (
        17,
        170,
        'Eddie Santiago',
        'Lluvia',
        2,
        2,
        6,
        306
    ),
    -- Temas de género "Bachata"
    (
        18,
        171,
        'Prince Royce',
        'Darte un Beso',
        4,
        1,
        2,
        227
    ),
    (
        18,
        172,
        'Romeo Santos',
        'Propuesta Indecente',
        2,
        3,
        2,
        251
    ),
    (18, 173, 'Aventura', 'Obsesión', 2, 3, 2, 240),
    (
        18,
        174,
        'Monchy & Alexandra',
        'Hasta el Fin',
        4,
        3,
        2,
        242
    ),
    (
        18,
        175,
        'Juan Luis Guerra',
        'Bachata Rosa',
        4,
        3,
        2,
        278
    ),
    (
        18,
        176,
        'Frank Reyes',
        'Nada de Nada',
        2,
        3,
        6,
        260
    ),
    (
        18,
        177,
        'Anthony Santos',
        'Ciego de 2',
        2,
        3,
        2,
        297
    ),
    (
        18,
        178,
        'Elvis Martínez',
        'Maestra',
        4,
        1,
        2,
        270
    ),
    (
        18,
        179,
        'Alex Bueno',
        'Ese Hombre Soy Yo',
        2,
        3,
        2,
        301
    ),
    (
        18,
        180,
        'Joe Veras',
        'Inténtalo Tú',
        4,
        3,
        2,
        241
    );
--@block
DROP TABLE generos_musicales;
DROP TABLE animo;
--@block
DROP TABLE artistas_id;
--@block
DROP TABLE clima;
--@block
DROP TABLE generos_musicales;
--@block
DROP TABLE ocasion;
--@block
DROP TABLE temas_musicales;
--@block
DROP TABLE usuarios;
--@block
DROP TABLE canciones_playlist;
--@block
DROP TABLE playlists;