const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "If 2x + 3 = 7, what is x?",
        options: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the next number in the sequence: 2, 4, 8, 16?",
        options: ["24", "28", "32", "36"],
        answer: "32"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        answer: "30"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
        answer: "Oxygen"
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        answer: "1945"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
        answer: "Tokyo"
    },
    {
        question: "If a triangle has angles 90°, 45°, and 45°, what type is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Obtuse"],
        answer: "Isosceles"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Who was the first person to walk on the moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: "3.14"
    },
    {
        question: "Which animal is the fastest land mammal?",
        options: ["Lion", "Cheetah", "Leopard", "Antelope"],
        answer: "Cheetah"
    },
    {
        question: "In which century was the American Declaration of Independence signed?",
        options: ["16th", "17th", "18th", "19th"],
        answer: "18th"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
    {
        question: "If 3x - 5 = 10, what is x?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "Which scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "What is 12 squared?",
        options: ["124", "136", "144", "156"],
        answer: "144"
    },
    {
        question: "Which element is a noble gas?",
        options: ["Hydrogen", "Helium", "Nitrogen", "Oxygen"],
        answer: "Helium"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Mary Shelley"],
        answer: "Jane Austen"
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "What is the next number in the sequence: 1, 3, 6, 10?",
        options: ["12", "14", "15", "16"],
        answer: "15"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1911", "1912", "1913"],
        answer: "1912"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is 20% of 150?",
        options: ["20", "25", "30", "35"],
        answer: "30"
    },
    {
        question: "Which organ pumps blood in the human body?",
        options: ["Liver", "Heart", "Lungs", "Kidneys"],
        answer: "Heart"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Thomas Edison", "Jonas Salk"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Kazan", "Novosibirsk"],
        answer: "Moscow"
    },
    {
        question: "If a square has a side length of 5, what is its area?",
        options: ["20", "25", "30", "35"],
        answer: "25"
    },
    {
        question: "Which gas is used in balloons to make them float?",
        options: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"],
        answer: "Helium"
    },
    {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
        answer: "Margaret Thatcher"
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"],
        answer: "Pretoria"
    },
    {
        question: "What is the cube of 3?",
        options: ["9", "18", "27", "36"],
        answer: "27"
    },
    {
        question: "Which scientist proposed the laws of motion?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the largest continent by land area?",
        options: ["Africa", "Asia", "Australia", "Europe"],
        answer: "Asia"
    },
    {
        question: "What is the value of 5! (5 factorial)?",
        options: ["60", "100", "120", "150"],
        answer: "120"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Beryllium"],
        answer: "Hydrogen"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        answer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Giza", "Cairo", "Luxor"],
        answer: "Cairo"
    },
    {
        question: "What is the next number in the sequence: 5, 10, 20, 40?",
        options: ["60", "80", "100", "120"],
        answer: "80"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "In which year was the United Nations founded?",
        options: ["1943", "1944", "1945", "1946"],
        answer: "1945"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
        answer: "Buenos Aires"
    },
    {
        question: "If 4x + 2 = 18, what is x?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which bone is the longest in the human body?",
        options: ["Femur", "Tibia", "Humerus", "Ulna"],
        answer: "Femur"
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
        answer: "Berlin"
    },
    {
        question: "What is 25% of 80?",
        options: ["15", "20", "25", "30"],
        answer: "20"
    },
    {
        question: "Which gas is essential for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Milan", "Venice", "Rome", "Florence"],
        answer: "Rome"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Which scientist discovered gravity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the smallest continent by land area?",
        options: ["Africa", "Asia", "Australia", "Europe"],
        answer: "Australia"
    },
    {
        question: "What is 7 x 8?",
        options: ["48", "54", "56", "64"],
        answer: "56"
    },
    {
        question: "Which element is used in pencil lead?",
        options: ["Carbon", "Lead", "Silicon", "Sulfur"],
        answer: "Carbon"
    },
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
        answer: "George Orwell"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Barcelona", "Seville", "Madrid", "Valencia"],
        answer: "Madrid"
    },
    {
        question: "What is the next number in the sequence: 3, 6, 12, 24?",
        options: ["36", "48", "60", "72"],
        answer: "48"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "In which year did World War I begin?",
        options: ["1912", "1913", "1914", "1915"],
        answer: "1914"
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Guadalajara", "Monterrey", "Mexico City", "Cancún"],
        answer: "Mexico City"
    },
    {
        question: "If 5x - 3 = 17, what is x?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which organ is responsible for filtering blood?",
        options: ["Liver", "Kidneys", "Spleen", "Pancreas"],
        answer: "Kidneys"
    },
    {
        question: "Who developed the polio vaccine?",
        options: ["Jonas Salk", "Albert Sabin", "Edward Jenner", "Louis Pasteur"],
        answer: "Jonas Salk"
    },
    {
        question: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
        answer: "Beijing"
    },
    {
        question: "What is 30% of 50?",
        options: ["10", "15", "20", "25"],
        answer: "15"
    },
    {
        question: "Which gas is responsible for the greenhouse effect?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        answer: "Marie Curie"
    },
    {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Abuja", "Kano", "Ibadan"],
        answer: "Abuja"
    },
    {
        question: "What is the area of a circle with radius 3? (Use π = 3.14)",
        options: ["18.84", "28.26", "37.68", "56.52"],
        answer: "28.26"
    },
    {
        question: "Which scientist discovered radioactivity?",
        options: ["Marie Curie", "Albert Einstein", "Niels Bohr", "Ernest Rutherford"],
        answer: "Marie Curie"
    },
    {
        question: "What is the highest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is 9 x 6?",
        options: ["48", "54", "60", "64"],
        answer: "54"
    },
    {
        question: "Which element is a liquid at room temperature?",
        options: ["Mercury", "Iron", "Gold", "Silver"],
        answer: "Mercury"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.D. Salinger", "Toni Morrison", "Sylvia Plath"],
        answer: "Harper Lee"
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Incheon", "Seoul", "Daegu"],
        answer: "Seoul"
    },
    {
        question: "What is the next number in the sequence: 4, 8, 16, 32?",
        options: ["48", "64", "80", "96"],
        answer: "64"
    },
    {
        question: "Which planet is known as the Gas Giant?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        answer: "Jupiter"
    },
    {
        question: "In which year was the Berlin Wall built?",
        options: ["1959", "1960", "1961", "1962"],
        answer: "1961"
    },
    {
        question: "What is the capital of Peru?",
        options: ["Cusco", "Arequipa", "Lima", "Trujillo"],
        answer: "Lima"
    },
    {
        question: "If 6x + 4 = 22, what is x?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "Which organ produces insulin?",
        options: ["Liver", "Pancreas", "Kidneys", "Spleen"],
        answer: "Pancreas"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
        answer: "Thomas Edison"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Lyon", "Marseille", "Nice"],
        answer: "Paris"
    },
    {
        question: "What is 40% of 75?",
        options: ["25", "30", "35", "40"],
        answer: "30"
    },
    {
        question: "Which gas is used in neon lights?",
        options: ["Helium", "Neon", "Argon", "Krypton"],
        answer: "Neon"
    },
    {
        question: "Who was the first man to climb Mount Everest?",
        options: ["Tenzing Norgay", "Edmund Hillary", "Reinhold Messner", "George Mallory"],
        answer: "Edmund Hillary"
    },
    {
        question: "What is the capital of Thailand?",
        options: ["Chiang Mai", "Phuket", "Bangkok", "Pattaya"],
        answer: "Bangkok"
    },
    {
        question: "What is the square root of 100?",
        options: ["8", "9", "10", "11"],
        answer: "10"
    },
    {
        question: "Which scientist proposed the heliocentric model?",
        options: ["Galileo Galilei", "Nicolaus Copernicus", "Johannes Kepler", "Tycho Brahe"],
        answer: "Nicolaus Copernicus"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic"],
        answer: "Antarctic"
    },
    {
        question: "What is 8 x 7?",
        options: ["48", "56", "64", "72"],
        answer: "56"
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Fluorine", "Francium", "Fermium"],
        answer: "Iron"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
        answer: "J.D. Salinger"
    },
    {
        question: "What is the capital of Sweden?",
        options: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
        answer: "Stockholm"
    },
    {
        question: "What is the next number in the sequence: 2, 5, 11, 23?",
        options: ["35", "44", "47", "50"],
        answer: "44"
    },
    {
        question: "Which planet is known as the Evening Star?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "In which year did the French Revolution begin?",
        options: ["1787", "1788", "1789", "1790"],
        answer: "1789"
    },
    {
        question: "What is the capital of Chile?",
        options: ["Valparaíso", "Santiago", "Concepción", "La Serena"],
        answer: "Santiago"
    },
    {
        question: "If 7x - 2 = 33, what is x?",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Which organ is responsible for breathing?",
        options: ["Heart", "Lungs", "Liver", "Stomach"],
        answer: "Lungs"
    },
    {
        question: "Who invented the theory of evolution by natural selection?",
        options: ["Charles Darwin", "Gregor Mendel", "Alfred Wallace", "Jean Lamarck"],
        answer: "Charles Darwin"
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
        answer: "Ankara"
    },
    {
        question: "What is 50% of 90?",
        options: ["40", "45", "50", "55"],
        answer: "45"
    },
    {
        question: "Which gas is used in light bulbs to prevent filament burning?",
        options: ["Helium", "Neon", "Argon", "Krypton"],
        answer: "Argon"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic?",
        options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
        answer: "Amelia Earhart"
    },
    {
        question: "What is the capital of Indonesia?",
        options: ["Jakarta", "Bali", "Surabaya", "Bandung"],
        answer: "Jakarta"
    },
    {
        question: "What is the area of a rectangle with length 6 and width 4?",
        options: ["20", "24", "28", "32"],
        answer: "24"
    },
    {
        question: "Which scientist discovered the electron?",
        options: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "James Chadwick"],
        answer: "J.J. Thomson"
    },
    {
        question: "What is the deepest ocean trench?",
        options: ["Tonga Trench", "Mariana Trench", "Philippine Trench", "Kermadec Trench"],
        answer: "Mariana Trench"
    },
    {
        question: "What is 11 x 5?",
        options: ["50", "55", "60", "65"],
        answer: "55"
    },
    {
        question: "Which element is a halogen?",
        options: ["Chlorine", "Calcium", "Carbon", "Copper"],
        answer: "Chlorine"
    },
    {
        question: "Who wrote 'Moby-Dick'?",
        options: ["Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Edgar Allan Poe"],
        answer: "Herman Melville"
    },
    {
        question: "What is the capital of Norway?",
        options: ["Bergen", "Oslo", "Stavanger", "Trondheim"],
        answer: "Oslo"
    },
    {
        question: "What is the next number in the sequence: 1, 4, 9, 16?",
        options: ["20", "22", "24", "25"],
        answer: "25"
    },
    {
        question: "Which planet has a day longer than its year?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "In which year was the Internet first publicly available?",
        options: ["1989", "1990", "1991", "1992"],
        answer: "1991"
    },
    {
        question: "What is the capital of Colombia?",
        options: ["Medellín", "Cali", "Bogotá", "Cartagena"],
        answer: "Bogotá"
    },
    {
        question: "If 8x + 5 = 29, what is x?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "Which organ stores bile?",
        options: ["Liver", "Gallbladder", "Pancreas", "Spleen"],
        answer: "Gallbladder"
    },
    {
        question: "Who invented the World Wide Web?",
        options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Vinton Cerf"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "What is the capital of Vietnam?",
        options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hue"],
        answer: "Hanoi"
    },
    {
        question: "What is 60% of 120?",
        options: ["60", "72", "84", "96"],
        answer: "72"
    },
    {
        question: "Which gas is the second most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        answer: "Oxygen"
    },
    {
        question: "Who was the first African-American President of the United States?",
        options: ["Bill Clinton", "Barack Obama", "George W. Bush", "Joe Biden"],
        answer: "Barack Obama"
    },
    {
        question: "What is the capital of Kenya?",
        options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
        answer: "Nairobi"
    },
    {
        question: "What is the perimeter of a square with side length 7?",
        options: ["21", "28", "35", "49"],
        answer: "28"
    },
    {
        question: "Which scientist discovered the theory of quantum mechanics?",
        options: ["Max Planck", "Albert Einstein", "Werner Heisenberg", "Erwin Schrödinger"],
        answer: "Max Planck"
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        answer: "Greenland"
    },
    {
        question: "What is 12 x 4?",
        options: ["36", "48", "60", "72"],
        answer: "48"
    },
    {
        question: "Which element has the chemical symbol 'Na'?",
        options: ["Neon", "Sodium", "Nitrogen", "Nickel"],
        answer: "Sodium"
    },
    {
        question: "Who wrote 'The Lord of the Rings'?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "J.K. Rowling"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "What is the capital of Portugal?",
        options: ["Porto", "Lisbon", "Faro", "Coimbra"],
        answer: "Lisbon"
    },
    {
        question: "What is the next number in the sequence: 7, 14, 28, 56?",
        options: ["84", "112", "140", "168"],
        answer: "112"
    },
    {
        question: "Which planet is known as the Blue Planet?",
        options: ["Mars", "Earth", "Neptune", "Uranus"],
        answer: "Earth"
    },
    {
        question: "In which year did the American Civil War end?",
        options: ["1863", "1864", "1865", "1866"],
        answer: "1865"
    },
    {
        question: "What is the capital of Greece?",
        options: ["Thessaloniki", "Athens", "Patras", "Heraklion"],
        answer: "Athens"
    },
    {
        question: "If 9x - 4 = 41, what is x?",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Which organ is responsible for detoxification in the body?",
        options: ["Liver", "Kidneys", "Spleen", "Pancreas"],
        answer: "Liver"
    },
    {
        question: "Who invented the steam engine?",
        options: ["James Watt", "George Stephenson", "Thomas Newcomen", "Robert Fulton"],
        answer: "James Watt"
    },
    {
        question: "What is the capital of Switzerland?",
        options: ["Zurich", "Geneva", "Bern", "Lausanne"],
        answer: "Bern"
    },
    {
        question: "What is 75% of 60?",
        options: ["40", "45", "50", "55"],
        answer: "45"
    },
    {
        question: "Which gas is used in welding to shield the weld area?",
        options: ["Helium", "Argon", "Neon", "Krypton"],
        answer: "Argon"
    },
    {
        question: "Who was the first person to reach the South Pole?",
        options: ["Roald Amundsen", "Robert Scott", "Ernest Shackleton", "Edmund Hillary"],
        answer: "Roald Amundsen"
    },
    {
        question: "What is the capital of Malaysia?",
        options: ["Penang", "Kuala Lumpur", "Johor Bahru", "Malacca"],
        answer: "Kuala Lumpur"
    },
    {
        question: "What is the volume of a cube with side length 4?",
        options: ["48", "64", "80", "96"],
        answer: "64"
    },
    {
        question: "Which scientist discovered the structure of DNA?",
        options: ["James Watson", "Francis Crick", "Rosalind Franklin", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the longest river in South America?",
        options: ["Amazon", "Paraná", "Orinoco", "Madeira"],
        answer: "Amazon"
    },
    {
        question: "What is 15 x 3?",
        options: ["30", "45", "60", "75"],
        answer: "45"
    },
    {
        question: "Which element is a metalloid?",
        options: ["Silicon", "Sulfur", "Sodium", "Silver"],
        answer: "Silicon"
    },
    {
        question: "Who wrote 'The Hobbit'?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "What is the capital of Denmark?",
        options: ["Aarhus", "Odense", "Copenhagen", "Aalborg"],
        answer: "Copenhagen"
    },
    {
        question: "What is the next number in the sequence: 10, 20, 40, 80?",
        options: ["120", "160", "200", "240"],
        answer: "160"
    },
    {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "In which year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        answer: "2007"
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Cork", "Galway", "Dublin", "Limerick"],
        answer: "Dublin"
    },
    {
        question: "If 10x - 5 = 45, what is x?",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Which organ is responsible for producing red blood cells?",
        options: ["Liver", "Spleen", "Bone Marrow", "Kidneys"],
        answer: "Bone Marrow"
    },
    {
        question: "Who invented the airplane?",
        options: ["Wright Brothers", "Samuel Langley", "Alberto Santos-Dumont", "Glenn Curtiss"],
        answer: "Wright Brothers"
    },
    {
        question: "What is the capital of Austria?",
        options: ["Salzburg", "Vienna", "Graz", "Linz"],
        answer: "Vienna"
    },
    {
        question: "What is 80% of 25?",
        options: ["15", "20", "25", "30"],
        answer: "20"
    },
    {
        question: "Which gas is used in lasers for cutting materials?",
        options: ["Helium", "Neon", "Carbon Dioxide", "Argon"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who was the first person to orbit Earth?",
        options: ["Yuri Gagarin", "John Glenn", "Alan Shepard", "Neil Armstrong"],
        answer: "Yuri Gagarin"
    },
    {
        question: "What is the capital of Belgium?",
        options: ["Antwerp", "Ghent", "Brussels", "Bruges"],
        answer: "Brussels"
    },
    {
        question: "What is the circumference of a circle with diameter 10? (Use π = 3.14)",
        options: ["28.26", "31.4", "62.8", "94.2"],
        answer: "31.4"
    },
    {
        question: "Which scientist discovered the law of universal gravitation?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the largest lake in the world by surface area?",
        options: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
        answer: "Caspian Sea"
    },
    {
        question: "What is 13 x 6?",
        options: ["72", "78", "84", "90"],
        answer: "78"
    },
    {
        question: "Which element has the chemical symbol 'K'?",
        options: ["Krypton", "Potassium", "Kallium", "Kelvium"],
        answer: "Potassium"
    },
    {
        question: "Who wrote 'Brave New World'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        answer: "Aldous Huxley"
    },
    {
        question: "What is the capital of Finland?",
        options: ["Tampere", "Turku", "Helsinki", "Espoo"],
        answer: "Helsinki"
    },
    {
        question: "What is the next number in the sequence: 6, 12, 24, 48?",
        options: ["72", "96", "120", "144"],
        answer: "96"
    },
    {
        question: "Which planet is known for its blue color due to methane?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Neptune"
    },
    {
        question: "In which year did the Chernobyl disaster occur?",
        options: ["1984", "1985", "1986", "1987"],
        answer: "1986"
    },
    {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
        answer: "Wellington"
    },
    {
        question: "If 12x - 6 = 54, what is x?",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Which organ regulates blood sugar levels?",
        options: ["Liver", "Pancreas", "Spleen", "Kidneys"],
        answer: "Pancreas"
    },
    {
        question: "Who invented the radio?",
        options: ["Guglielmo Marconi", "Nikola Tesla", "Thomas Edison", "Alexander Graham Bell"],
        answer: "Guglielmo Marconi"
    },
    {
        question: "What is the capital of Poland?",
        options: ["Kraków", "Wrocław", "Gdańsk", "Łódź"],
        answer: "Warsaw"
    },
    {
        question: "What is 90% of 40?",
        options: ["32", "36", "40", "44"],
        answer: "36"
    },
    {
        question: "Which gas is used in breathing apparatus for divers?",
        options: ["Helium", "Oxygen", "Nitrogen", "Argon"],
        answer: "Helium"
    },
    {
        question: "Who was the first woman to win an Olympic gold medal?",
        options: ["Charlotte Cooper", "Fanny Blankers-Koen", "Wilma Rudolph", "Nadia Comăneci"],
        answer: "Charlotte Cooper"
    },
    {
        question: "What is the capital of Hungary?",
        options: ["Debrecen", "Szeged", "Budapest", "Pécs"],
        answer: "Budapest"
    },
    {
        question: "What is the area of a triangle with base 8 and height 6?",
        options: ["24", "28", "32", "48"],
        answer: "24"
    },
    {
        question: "Which scientist discovered the neutron?",
        options: ["James Chadwick", "Ernest Rutherford", "Niels Bohr", "J.J. Thomson"],
        answer: "James Chadwick"
    },
    {
        question: "What is the longest river in Europe?",
        options: ["Danube", "Volga", "Rhine", "Seine"],
        answer: "Volga"
    },
    {
        question: "What is 14 x 5?",
        options: ["60", "70", "80", "90"],
        answer: "70"
    },
    {
        question: "Which element has the chemical symbol 'Ca'?",
        options: ["Carbon", "Calcium", "Cobalt", "Copper"],
        answer: "Calcium"
    },
    {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles", "Euripides"],
        answer: "Homer"
    },
    {
        question: "What is the capital of Iceland?",
        options: ["Akureyri", "Keflavík", "Reykjavík", "Selfoss"],
        answer: "Reykjavík"
    },
    {
        question: "What is the next number in the sequence: 8, 16, 32, 64?",
        options: ["96", "128", "160", "192"],
        answer: "128"
    },
    {
        question: "Which planet is the second largest in our solar system?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "In which year was the first man-made satellite launched?",
        options: ["1955", "1956", "1957", "1958"],
        answer: "1957"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let incorrect = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const scoreCounter = document.getElementById('score-counter');
const incorrectCounter = document.getElementById('incorrect-counter');

function updateCounters() {
    scoreCounter.textContent = `Correct: ${score}`;
    incorrectCounter.textContent = `Incorrect: ${incorrect}`;
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option, optionElement));
        optionsElement.appendChild(optionElement);
    });

    updateCounters();
}

function selectOption(selectedOption, optionElement) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(opt => {
        opt.classList.remove('selected');
        opt.style.pointerEvents = 'none';
    });

    optionElement.classList.add('selected');

    if (selectedOption === currentQuestion.answer) {
        score++;
    } else {
        incorrect++;
    }

    updateCounters();
    nextButton.style.display = 'block';
}

function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    resultElement.textContent = `Final Score: ${score} correct, ${incorrect} incorrect out of ${questions.length}!`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion();
