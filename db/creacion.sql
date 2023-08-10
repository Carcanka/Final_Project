CREATE TABLE generos_musicales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

--@block
INSERT INTO generos_musicales (id, nombre) VALUES
    (1, 'Rock'),
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
CREATE TABLE temas_musicales (
    id SERIAL PRIMARY KEY,
    genero_id INT NOT NULL,
    artista VARCHAR(100) NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    animo VARCHAR(50),
    clima VARCHAR(50),
    ocasion VARCHAR(100),
    imagen VARCHAR(200),
    duracion INT,
    FOREIGN KEY (genero_id) REFERENCES generos_musicales(id)
);

--@block
CREATE TABLE if NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,    
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password_hash CHAR(64) NOT NULL,
    perfil VARCHAR(50),
    amigos VARCHAR(100)
);

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
INSERT INTO temas_musicales (genero_id, artista, titulo, animo, clima, ocasion, imagen, duracion)
VALUES
    -- Temas de género "Rock"
    (1, 'Queen', 'Bohemian Rhapsody', 'Energético', 'Noche', 'Concierto', 'bohemian_rhapsody.jpg', 354),
    (1, 'Led Zeppelin', 'Stairway to Heaven', 'Melancólico', 'Lluvioso', 'Relax', 'stairway_to_heaven.jpg', 480),
    (1, 'The Rolling Stones', 'Paint It Black', 'Emocionante', 'Soleado', 'Viaje', 'paint_it_black.jpg', 215),
    (1, 'Nirvana', 'Smells Like Teen Spirit', 'Energético', 'Noche', 'Fiesta', 'smells_like_teen_spirit.jpg', 244),
    (1, 'Guns N Roses', 'Sweet Child O Mine', 'Animado', 'Noche', 'Fiesta', 'sweet_child_o_mine.jpg', 355),
    (1, 'Pink Floyd', 'Comfortably Numb', 'Melancólico', 'Noche', 'Relax', 'comfortably_numb.jpg', 383),
    (1, 'The Beatles', 'Let It Be', 'Melancólico', 'Lluvioso', 'Reflexión', 'let_it_be.jpg', 243),
    (1, 'AC/DC', 'Back in Black', 'Energético', 'Noche', 'Fiesta', 'back_in_black.jpg', 255),
    (1, 'Bon Jovi', 'Livin on a Prayer', 'Animado', 'Noche', 'Fiesta', 'livin_on_a_prayer.jpg', 249),
    (1, 'Metallica', 'Enter Sandman', 'Energético', 'Noche', 'Deportes', 'enter_sandman.jpg', 331),

    -- Temas de género "Pop"
    (2, 'Michael Jackson', 'Thriller', 'Energético', 'Noche', 'Fiesta', 'thriller.jpg', 357),
    (2, 'Madonna', 'Like a Virgin', 'Feliz', 'Soleado', 'Diversión', 'like_a_virgin.jpg', 224),
    (2, 'Whitney Houston', 'I Will Always Love You', 'Emocionante', 'Noche', 'Romántico', 'i_will_always_love_you.jpg', 273),
    (2, 'Prince', 'Purple Rain', 'Melancólico', 'Lluvioso', 'Relax', 'purple_rain.jpg', 508),
    (2, 'Elton John', 'Your Song', 'Romántico', 'Soleado', 'Romántico', 'your_song.jpg', 248),
    (2, 'Beyoncé', 'Crazy in Love', 'Energético', 'Noche', 'Fiesta', 'crazy_in_love.jpg', 236),
    (2, 'Rihanna', 'Umbrella', 'Animado', 'Lluvioso', 'Diversión', 'umbrella.jpg', 264),
    (2, 'Taylor Swift', 'Shake It Off', 'Animado', 'Soleado', 'Diversión', 'shake_it_off.jpg', 219),
    (2, 'Ed Sheeran', 'Shape of You', 'Animado', 'Soleado', 'Diversión', 'shape_of_you.jpg', 233),
    (2, 'Adele', 'Rolling in the Deep', 'Energético', 'Noche', 'Fiesta', 'rolling_in_the_deep.jpg', 228),

    -- Temas de género "Hip Hop"
    (3, 'Eminem', 'Lose Yourself', 'Motivador', 'Noche', 'Entrenamiento', 'lose_yourself.jpg', 336),
    (3, 'Tupac Shakur', 'California Love', 'Energético', 'Soleado', 'Fiesta', 'california_love.jpg', 293),
    (3, 'Jay-Z', 'Empire State of Mind', 'Motivador', 'Soleado', 'Ciudad', 'empire_state_of_mind.jpg', 278),
    (3, 'Kendrick Lamar', 'HUMBLE.', 'Energético', 'Noche', 'Fiesta', 'humble.jpg', 177),
    (3, 'Drake', 'Hotline Bling', 'Emocionante', 'Noche', 'Amor', 'hotline_bling.jpg', 267),
    (3, 'Nicki Minaj', 'Super Bass', 'Animado', 'Soleado', 'Diversión', 'super_bass.jpg', 209),
    (3, 'Snoop Dogg', 'Gin and Juice', 'Relajado', 'Soleado', 'Playa', 'gin_and_juice.jpg', 213),
    (3, 'OutKast', 'Hey Ya!', 'Animado', 'Soleado', 'Fiesta', 'hey_ya.jpg', 235),
    (3, 'The Notorious B.I.G.', 'Juicy', 'Motivador', 'Soleado', 'Ciudad', 'juicy.jpg', 293),
    (3, 'Lauryn Hill', 'Doo Wop (That Thing)', 'Animado', 'Soleado', 'Fiesta', 'doo_wop.jpg', 235),

    -- Temas de género "Electrónica"
    (4, 'Avicii', 'Wake Me Up', 'Energético', 'Noche', 'Fiesta', 'wake_me_up.jpg', 247),
    (4, 'Calvin Harris', 'Summer', 'Energético', 'Soleado', 'Playa', 'summer.jpg', 221),
    (4, 'David Guetta', 'Titanium', 'Energético', 'Noche', 'Fiesta', 'titanium.jpg', 244),
    (4, 'The Chainsmokers', 'Closer', 'Animado', 'Noche', 'Fiesta', 'closer.jpg', 245),
    (4, 'Zedd', 'Clarity', 'Energético', 'Noche', 'Fiesta', 'clarity.jpg', 264),
    (4, 'Marshmello', 'Happier', 'Feliz', 'Soleado', 'Diversión', 'happier.jpg', 214),
    (4, 'Major Lazer', 'Lean On', 'Animado', 'Soleado', 'Fiesta', 'lean_on.jpg', 176),
    (4, 'Daft Punk', 'Get Lucky', 'Animado', 'Noche', 'Fiesta', 'get_lucky.jpg', 248),
    (4, 'Kygo', 'Stole the Show', 'Feliz', 'Soleado', 'Diversión', 'stole_the_show.jpg', 228),
    (4, 'Martin Garrix', 'Animals', 'Energético', 'Noche', 'Fiesta', 'animals.jpg', 186),

    -- Temas de género "R&B"
    (5, 'Rihanna', 'Diamonds', 'Melancólico', 'Lluvioso', 'Relax', 'diamonds.jpg', 227),
    (5, 'Beyoncé', 'Halo', 'Emocionante', 'Soleado', 'Romántico', 'halo.jpg', 268),
    (5, 'Usher', 'Yeah!', 'Animado', 'Noche', 'Fiesta', 'yeah.jpg', 250),
    (5, 'Frank Ocean', 'Thinking Bout You', 'Melancólico', 'Lluvioso', 'Relax', 'thinking_bout_you.jpg', 207),
    (5, 'The Weeknd', 'Blinding Lights', 'Energético', 'Noche', 'Fiesta', 'blinding_lights.jpg', 201),
    (5, 'Alicia Keys', 'No One', 'Feliz', 'Soleado', 'Romántico', 'no_one.jpg', 232),
    (5, 'TLC', 'No Scrubs', 'Animado', 'Soleado', 'Fiesta', 'no_scrubs.jpg', 221),
    (5, 'John Legend', 'All of Me', 'Romántico', 'Soleado', 'Romántico', 'all_of_me.jpg', 269),
    (5, 'Chris Brown', 'Forever', 'Animado', 'Soleado', 'Fiesta', 'forever.jpg', 248),
    (5, 'Destinys Child', 'Say My Name', 'Emocionante', 'Noche', 'Fiesta', 'say_my_name.jpg', 271),

    -- Temas de género "Reggae"
    (6, 'Bob Marley & The Wailers', 'Three Little Birds', 'Relajado', 'Soleado', 'Playa', 'three_little_birds.jpg', 181),
    (6, 'Toots and The Maytals', 'Pressure Drop', 'Animado', 'Soleado', 'Fiesta', 'pressure_drop.jpg', 167),
    (6, 'Peter Tosh', 'Legalize It', 'Motivador', 'Soleado', 'Cannabis', 'legalize_it.jpg', 264),
    (6, 'Jimmy Cliff', 'Many Rivers to Cross', 'Emocionante', 'Lluvioso', 'Reflexión', 'many_rivers_to_cross.jpg', 181),
    (6, 'Steel Pulse', 'Roller Skates', 'Animado', 'Soleado', 'Diversión', 'roller_skates.jpg', 235),
    (6, 'Ziggy Marley', 'Tomorrow People', 'Motivador', 'Soleado', 'Esperanza', 'tomorrow_people.jpg', 245),
    (6, 'UB40', 'Red Red Wine', 'Relajado', 'Soleado', 'Relax', 'red_red_wine.jpg', 180),
    (6, 'Inner Circle', 'Sweat (A La La La La Long)', 'Animado', 'Soleado', 'Fiesta', 'sweat.jpg', 227),
    (6, 'Burning Spear', 'Marcus Garvey', 'Motivador', 'Soleado', 'Revolución', 'marcus_garvey.jpg', 262),
    (6, 'Black Uhuru', 'Guess Who s Coming to Dinner', 'Relajado', 'Soleado', 'Relax', 'guess_whos_coming_to_dinner.jpg', 232),

    -- Temas de género "Jazz"
    (7, 'Louis Armstrong', 'What a Wonderful World', 'Emocionante', 'Lluvioso', 'Reflexión', 'what_a_wonderful_world.jpg', 143),
    (7, 'Miles Davis', 'So What', 'Relajado', 'Noche', 'Relax', 'so_what.jpg', 320),
    (7, 'John Coltrane', 'Giant Steps', 'Emocionante', 'Noche', 'Concierto', 'giant_steps.jpg', 237),
    (7, 'Ella Fitzgerald', 'Summertime', 'Relajado', 'Soleado', 'Relax', 'summertime.jpg', 248),
    (7, 'Duke Ellington', 'Take The "A" Train', 'Energético', 'Noche', 'Fiesta', 'take_the_a_train.jpg', 315),
    (7, 'Billie Holiday', 'Strange Fruit', 'Emocionante', 'Noche', 'Reflexión', 'strange_fruit.jpg', 186),
    (7, 'Thelonious Monk', 'Round Midnight', 'Emocionante', 'Noche', 'Relax', 'round_midnight.jpg', 383),
    (7, 'Charlie Parker', 'Yardbird Suite', 'Animado', 'Noche', 'Fiesta', 'yardbird_suite.jpg', 218),
    (7, 'Nina Simone', 'Feeling Good', 'Animado', 'Soleado', 'Diversión', 'feeling_good.jpg', 165),
    (7, 'Chet Baker', 'My Funny Valentine', 'Emocionante', 'Lluvioso', 'Romántico', 'my_funny_valentine.jpg', 157),

    -- Temas de género "Clásica"
    (8, 'Ludwig van Beethoven', 'Symphony No. 9 "Choral"', 'Épico', 'Noche', 'Concierto', 'symphony_no_9.jpg', 674),
    (8, 'Wolfgang Amadeus Mozart', 'Requiem in D minor', 'Emocionante', 'Noche', 'Concierto', 'requiem_in_d_minor.jpg', 480),
    (8, 'Johann Sebastian Bach', 'Brandenburg Concerto No. 3', 'Energético', 'Soleado', 'Concierto', 'brandenburg_concerto_no_3.jpg', 342),
    (8, 'Pyotr Ilyich Tchaikovsky', 'Swan Lake', 'Emocionante', 'Noche', 'Concierto', 'swan_lake.jpg', 328),
    (8, 'Ludovico Einaudi', 'Nuvole Bianche', 'Emocionante', 'Lluvioso', 'Reflexión', 'nuvole_bianche.jpg', 365),
    (8, 'Antonio Vivaldi', 'The Four Seasons - Spring', 'Animado', 'Soleado', 'Naturaleza', 'four_seasons_spring.jpg', 211),
    (8, 'Frédéric Chopin', 'Nocturne in E-flat Major', 'Relajado', 'Noche', 'Relax', 'nocturne_in_e_flat_major.jpg', 332),
    (8, 'Claude Debussy', 'Clair de Lune', 'Relajado', 'Lluvioso', 'Relax', 'clair_de_lune.jpg', 300),
    (8, 'Richard Wagner', 'Ride of the Valkyries', 'Épico', 'Noche', 'Concierto', 'ride_of_the_valkyries.jpg', 322),
    (8, 'Johannes Brahms', 'Hungarian Dance No. 5', 'Animado', 'Noche', 'Fiesta', 'hungarian_dance_no_5.jpg', 176),

    -- Temas de género "Country"
    (9, 'Johnny Cash', 'Ring of Fire', 'Energético', 'Soleado', 'Fiesta', 'ring_of_fire.jpg', 159),
    (9, 'Dolly Parton', 'Jolene', 'Emocionante', 'Lluvioso', 'Amor', 'jolene.jpg', 168),
    (9, 'Willie Nelson', 'On the Road Again', 'Animado', 'Soleado', 'Viaje', 'on_the_road_again.jpg', 157),
    (9, 'Shania Twain', 'Man! I Feel Like a Woman!', 'Animado', 'Soleado', 'Fiesta', 'man_i_feel_like_a_woman.jpg', 208),
    (9, 'Kenny Rogers', 'The Gambler', 'Reflexivo', 'Soleado', 'Reflexión', 'the_gambler.jpg', 216),
    (9, 'Patsy Cline', 'Crazy', 'Emocionante', 'Lluvioso', 'Amor', 'crazy.jpg', 160),
    (9, 'Keith Urban', 'Somebody Like You', 'Feliz', 'Soleado', 'Amor', 'somebody_like_you.jpg', 242),
    (9, 'Carrie Underwood', 'Before He Cheats', 'Animado', 'Noche', 'Fiesta', 'before_he_cheats.jpg', 219),
    (9, 'Brad Paisley', 'Whiskey Lullaby', 'Emocionante', 'Lluvioso', 'Tristeza', 'whiskey_lullaby.jpg', 278),
    (9, 'Miranda Lambert', 'The House That Built Me', 'Emocionante', 'Noche', 'Reflexión', 'the_house_that_built_me.jpg', 234),

    -- Temas de género "Blues"
    (10, 'B.B. King', 'The Thrill Is Gone', 'Melancólico', 'Lluvioso', 'Tristeza', 'the_thrill_is_gone.jpg', 305),
    (10, 'Muddy Waters', 'Mannish Boy', 'Emocionante', 'Noche', 'Fiesta', 'mannish_boy.jpg', 305),
    (10, 'John Lee Hooker', 'Boom Boom', 'Animado', 'Soleado', 'Fiesta', 'boom_boom.jpg', 196),
    (10, 'Etta James', 'At Last', 'Emocionante', 'Lluvioso', 'Amor', 'at_last.jpg', 200),
    (10, 'Stevie Ray Vaughan', 'Texas Flood', 'Emocionante', 'Lluvioso', 'Tristeza', 'texas_flood.jpg', 306),
    (10, 'Howlin Wolf', 'Smokestack Lightning', 'Emocionante', 'Noche', 'Fiesta', 'smokestack_lightning.jpg', 212),
    (10, 'Robert Johnson', 'Cross Road Blues', 'Emocionante', 'Noche', 'Tristeza', 'cross_road_blues.jpg', 174),
    (10, 'Koko Taylor', 'Wang Dang Doodle', 'Animado', 'Noche', 'Fiesta', 'wang_dang_doodle.jpg', 188),
    (10, 'Janis Joplin', 'Piece of My Heart', 'Emocionante', 'Noche', 'Tristeza', 'piece_of_my_heart.jpg', 270),
    (10, 'Taj Mahal', 'Leaving Trunk', 'Energético', 'Soleado', 'Viaje', 'leaving_trunk.jpg', 287),

    -- Temas de género "Metal"
    (11, 'Black Sabbath', 'Paranoid', 'Energético', 'Noche', 'Fiesta', 'paranoid.jpg', 172),
    (11, 'Metallica', 'Master of Puppets', 'Épico', 'Noche', 'Concierto', 'master_of_puppets.jpg', 515),
    (11, 'Iron Maiden', 'The Number of the Beast', 'Épico', 'Noche', 'Concierto', 'the_number_of_the_beast.jpg', 292),
    (11, 'Slayer', 'Raining Blood', 'Épico', 'Noche', 'Concierto', 'raining_blood.jpg', 271),
    (11, 'Judas Priest', 'Breaking the Law', 'Animado', 'Noche', 'Fiesta', 'breaking_the_law.jpg', 182),
    (11, 'Pantera', 'Walk', 'Energético', 'Noche', 'Fiesta', 'walk.jpg', 317),
    (11, 'Megadeth', 'Symphony of Destruction', 'Energético', 'Noche', 'Fiesta', 'symphony_of_destruction.jpg', 290),
    (11, 'System of a Down', 'Chop Suey!', 'Animado', 'Noche', 'Fiesta', 'chop_suey.jpg', 211),
    (11, 'Rammstein', 'Du Hast', 'Energético', 'Noche', 'Fiesta', 'du_hast.jpg', 238),
    (11, 'Avenged Sevenfold', 'Hail to the King', 'Épico', 'Noche', 'Concierto', 'hail_to_the_king.jpg', 299),

    -- Temas de género "Folk"
    (12, 'Bob Dylan', 'Blowin in the Wind', 'Reflexivo', 'Lluvioso', 'Reflexión', 'blowin_in_the_wind.jpg', 179),
    (12, 'Joni Mitchell', 'Big Yellow Taxi', 'Animado', 'Soleado', 'Diversión', 'big_yellow_taxi.jpg', 157),
    (12, 'Simon & Garfunkel', 'The Sound of Silence', 'Reflexivo', 'Lluvioso', 'Reflexión', 'sound_of_silence.jpg', 223),
    (12, 'James Taylor', 'Fire and Rain', 'Emocionante', 'Lluvioso', 'Tristeza', 'fire_and_rain.jpg', 250),
    (12, 'Joan Baez', 'Diamonds & Rust', 'Emocionante', 'Lluvioso', 'Tristeza', 'diamonds_and_rust.jpg', 334),
    (12, 'Cat Stevens', 'Wild World', 'Reflexivo', 'Lluvioso', 'Reflexión', 'wild_world.jpg', 228),
    (12, 'The Byrds', 'Turn! Turn! Turn!', 'Reflexivo', 'Soleado', 'Reflexión', 'turn_turn_turn.jpg', 214),
    (12, 'Arlo Guthrie', 'City of New Orleans', 'Relajado', 'Lluvioso', 'Viaje', 'city_of_new_orleans.jpg', 293),
    (12, 'Don McLean', 'American Pie', 'Reflexivo', 'Noche', 'Reflexión', 'american_pie.jpg', 537),
    (12, 'John Denver', 'Take Me Home, Country Roads', 'Animado', 'Soleado', 'Viaje', 'country_roads.jpg', 193),

    -- Temas de género "Soul"
    (13, 'Aretha Franklin', 'Respect', 'Empoderado', 'Soleado', 'Fiesta', 'respect.jpg', 147),
    (13, 'Marvin Gaye', 'Whats Going On', 'Reflexivo', 'Lluvioso', 'Reflexión', 'whats_going_on.jpg', 210),
    (13, 'Otis Redding', '(Sittin On) The Dock of the Bay', 'Relajado', 'Lluvioso', 'Relax', 'sittin_on_the_dock_of_the_bay.jpg', 178),
    (13, 'Stevie Wonder', 'Superstition', 'Animado', 'Soleado', 'Fiesta', 'superstition.jpg', 270),
    (13, 'Tina Turner', 'What s Love Got to Do with It', 'Animado', 'Soleado', 'Amor', 'whats_love_got_to_do_with_it.jpg', 216),
    (13, 'Al Green', 'Let s Stay Together', 'Romántico', 'Soleado', 'Amor', 'lets_stay_together.jpg', 211),
    (13, 'Sam Cooke', 'A Change Is Gonna Come', 'Emocionante', 'Lluvioso', 'Reflexión', 'a_change_is_gonna_come.jpg', 240),
    (13, 'Ray Charles', 'Georgia On My Mind', 'Emocionante', 'Soleado', 'Amor', 'georgia_on_my_mind.jpg', 236),
    (13, 'Gladys Knight & The Pips', 'Midnight Train to Georgia', 'Emocionante', 'Noche', 'Tristeza', 'midnight_train_to_georgia.jpg', 248),
    (13, 'Amy Winehouse', 'Rehab', 'Emocionante', 'Noche', 'Tristeza', 'rehab.jpg', 225),

    -- Temas de género "Funk"
    (14, 'James Brown', 'Get Up (I Feel Like Being a) Sex Machine', 'Energético', 'Noche', 'Fiesta', 'sex_machine.jpg', 330),
    (14, 'Sly & The Family Stone', 'Everyday People', 'Animado', 'Soleado', 'Fiesta', 'everyday_people.jpg', 141),
    (14, 'Earth, Wind & Fire', 'September', 'Animado', 'Soleado', 'Fiesta', 'september.jpg', 215),
    (14, 'Kool & The Gang', 'Celebration', 'Animado', 'Soleado', 'Fiesta', 'celebration.jpg', 233),
    (14, 'Chic', 'Good Times', 'Animado', 'Noche', 'Fiesta', 'good_times.jpg', 221),
    (14, 'Parliament', 'Flash Light', 'Animado', 'Noche', 'Fiesta', 'flash_light.jpg', 323),
    (14, 'Rick James', 'Super Freak', 'Animado', 'Noche', 'Fiesta', 'super_freak.jpg', 206),
    (14, 'The Isley Brothers', 'It s Your Thing', 'Animado', 'Noche', 'Fiesta', 'its_your_thing.jpg', 221),
    (14, 'Prince', 'Kiss', 'Animado', 'Noche', 'Fiesta', 'kiss.jpg', 225),
    (14, 'Funkadelic', 'One Nation Under a Groove', 'Animado', 'Noche', 'Fiesta', 'one_nation_under_a_groove.jpg', 438),

    -- Temas de género "Reggaetón"
    (15, 'Daddy Yankee', 'Gasolina', 'Energético', 'Noche', 'Fiesta', 'gasolina.jpg', 198),
    (15, 'Bad Bunny', 'Soy Peor', 'Energético', 'Noche', 'Fiesta', 'soy_peor.jpg', 289),
    (15, 'J Balvin', 'Mi Gente', 'Animado', 'Soleado', 'Fiesta', 'mi_gente.jpg', 199),
    (15, 'Maluma', 'Felices los 4', 'Animado', 'Soleado', 'Fiesta', 'felices_los_4.jpg', 213),
    (15, 'Ozuna', 'Criminal', 'Animado', 'Noche', 'Fiesta', 'criminal.jpg', 269),
    (15, 'Natti Natasha', 'Criminal', 'Animado', 'Noche', 'Fiesta', 'criminal.jpg', 210),
    (15, 'Wisin & Yandel', 'Rakata', 'Energético', 'Noche', 'Fiesta', 'rakata.jpg', 207),
    (15, 'Sech', 'Otro Trago', 'Emocionante', 'Noche', 'Amor', 'otro_trago.jpg', 249),
    (15, 'Karol G', 'Tusa', 'Emocionante', 'Noche', 'Amor', 'tusa.jpg', 213),
    (15, 'Nicky Jam', 'El Amante', 'Emocionante', 'Noche', 'Amor', 'el_amante.jpg', 231),

    -- Temas de género "Cumbia"
    (16, 'Celso Piña', 'Cumbia Sobre el Río', 'Animado', 'Soleado', 'Fiesta', 'cumbia_sobre_el_rio.jpg', 241),
    (16, 'Grupo Niche', 'Cali Pachanguero', 'Animado', 'Soleado', 'Fiesta', 'cali_pachanguero.jpg', 265),
    (16, 'Los Ángeles Azules', 'Cumbia del Infinito', 'Animado', 'Soleado', 'Fiesta', 'cumbia_del_infinito.jpg', 212),
    (16, 'Sonora Dinamita', 'Que Nadie Sepa Mi Sufrir', 'Emocionante', 'Lluvioso', 'Tristeza', 'que_nadie_sepa_mi_sufrir.jpg', 192),
    (16, 'La Sonora Santanera', 'La Boa', 'Animado', 'Noche', 'Fiesta', 'la_boa.jpg', 188),
    (16, 'Grupo 5', 'Motor y Motivo', 'Animado', 'Soleado', 'Fiesta', 'motor_y_motivo.jpg', 218),
    (16, 'Los Askis', 'Regresa Amor', 'Emocionante', 'Lluvioso', 'Tristeza', 'regresa_amor.jpg', 205),
    (16, 'Aniceto Molina', 'La Cumbia Sampuesana', 'Animado', 'Soleado', 'Fiesta', 'la_cumbia_sampuesana.jpg', 188),
    (16, 'Los Mirlos', 'Cumbia de los Pájaros', 'Animado', 'Soleado', 'Fiesta', 'cumbia_de_los_pajaros.jpg', 207),
    (16, 'Rodolfo Aicardi', 'Colegiala', 'Animado', 'Soleado', 'Fiesta', 'colegiala.jpg', 173),

    -- Temas de género "Salsa"
    (17, 'Marc Anthony', 'Vivir Mi Vida', 'Animado', 'Soleado', 'Fiesta', 'vivir_mi_vida.jpg', 308),
    (17, 'Héctor Lavoe', 'El Cantante', 'Emocionante', 'Noche', 'Concierto', 'el_cantante.jpg', 382),
    (17, 'Rubén Blades', 'Pedro Navaja', 'Animado', 'Noche', 'Fiesta', 'pedro_navaja.jpg', 406),
    (17, 'Willie Colón', 'Idilio', 'Romántico', 'Soleado', 'Amor', 'idilio.jpg', 348),
    (17, 'Celia Cruz', 'La Vida Es Un Carnaval', 'Animado', 'Soleado', 'Fiesta', 'la_vida_es_un_carnaval.jpg', 289),
    (17, 'Gilberto Santa Rosa', 'Conciencia', 'Reflexivo', 'Lluvioso', 'Reflexión', 'conciencia.jpg', 278),
    (17, 'La India', 'Ese Hombre', 'Emocionante', 'Noche', 'Amor', 'ese_hombre.jpg', 282),
    (17, 'Oscar De León', 'Llorarás', 'Emocionante', 'Noche', 'Tristeza', 'lloraras.jpg', 298),
    (17, 'Ismael Rivera', 'Las Caras Lindas', 'Feliz', 'Soleado', 'Fiesta', 'las_caras_lindas.jpg', 260),
    (17, 'Eddie Santiago', 'Lluvia', 'Emocionante', 'Lluvioso', 'Tristeza', 'lluvia.jpg', 306),

    -- Temas de género "Bachata"
    (18, 'Prince Royce', 'Darte un Beso', 'Romántico', 'Soleado', 'Amor', 'darte_un_beso.jpg', 227),
    (18, 'Romeo Santos', 'Propuesta Indecente', 'Emocionante', 'Noche', 'Amor', 'propuesta_indecente.jpg', 251),
    (18, 'Aventura', 'Obsesión', 'Emocionante', 'Noche', 'Amor', 'obsesion.jpg', 240),
    (18, 'Monchy & Alexandra', 'Hasta el Fin', 'Romántico', 'Noche', 'Amor', 'hasta_el_fin.jpg', 242),
    (18, 'Juan Luis Guerra', 'Bachata Rosa', 'Romántico', 'Noche', 'Amor', 'bachata_rosa.jpg', 278),
    (18, 'Frank Reyes', 'Nada de Nada', 'Emocionante', 'Noche', 'Tristeza', 'nada_de_nada.jpg', 260),
    (18, 'Anthony Santos', 'Ciego de Amor', 'Emocionante', 'Noche', 'Amor', 'ciego_de_amor.jpg', 297),
    (18, 'Elvis Martínez', 'Maestra', 'Romántico', 'Soleado', 'Amor', 'maestra.jpg', 270),
    (18, 'Alex Bueno', 'Ese Hombre Soy Yo', 'Emocionante', 'Noche', 'Amor', 'ese_hombre_soy_yo.jpg', 301),
    (18, 'Joe Veras', 'Inténtalo Tú', 'Romántico', 'Noche', 'Amor', 'intentalo_tu.jpg', 241);
