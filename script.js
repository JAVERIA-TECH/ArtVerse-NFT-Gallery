        let view = 'home';
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let selectedNft = null;
        const users = {
            'admin': { password: '123', role: 'admin' },
            'author': { password: 'xyz', role: 'author' }
        };
        const initialNfts = [
         {
        id: 1,
        name: 'The Winter Companion',
        artist: 'Javeria Fatima',
        price: 75,
        imageUrl: 'images/id 1.jpg',
        description: 'A charming and whimsical portrait of a little snowman with a glowing red heart, set against a gentle snowfall. It’s a symbol of warmth and joy in the coldest season.',
        category: 'Nature',
        likes: 850,
        reviews: [
            { author: 'Sarah Ali', text: 'This painting is so cute!', rating: 5 },
            { author: 'Ahmed Raza', text: 'The red heart is a perfect touch.', rating: 5 },
            { author: 'Grace Peterson', text: 'Love the soft, dreamy feel of the snowfall.', rating: 4 },
            { author: 'Faisal Khan', text: 'A truly heartwarming piece.', rating: 5 },
            { author: 'Jessica Lee', text: 'It brings a smile to my face every time.', rating: 5 },
            { author: 'Maria Garcia', text: 'Beautifully detailed and full of charm.', rating: 4 },
            { author: 'Omar Sharif', text: 'A fantastic piece for the holidays.', rating: 5 },
            { author: 'Priya Sharma', text: 'Captures the magic of winter perfectly.', rating: 5 },
            { author: 'Yusuf Hassan', text: 'Such a delightful work of art.', rating: 4 },
            { author: 'David Chen', text: 'Simply adorable!', rating: 5 },
            { author: 'Hina Fatima', text: 'A great addition to my collection.', rating: 5 }
        ]
    },
    {
        id: 2,
        name: 'Snowfall Serenity',
        artist: 'Chloe Anderson',
        price: 90,
        imageUrl: 'images/id 2.jpg',
        description: 'A striking portrait of a woman in a fur-lined jacket, with a calm and serene expression as snowflakes gently fall around her. A piece that captures quiet strength and beauty.',
        category: 'Portrait',
        likes: 920,
        reviews: [
            { author: 'Zainab Khan', text: 'The look in her eyes is so powerful.', rating: 5 },
            { author: 'Chris Wilson', text: 'The lighting is fantastic.', rating: 4 },
            { author: 'Rahul Mehta', text: 'A mesmerizing and beautiful portrait.', rating: 5 },
            { author: 'Emily Carter', text: 'Captures a sense of peaceful reflection.', rating: 5 },
            { author: 'Bilal Ahmed', text: 'This painting has a unique mood.', rating: 4 },
            { author: 'Sophie Davies', text: 'The fur detail is incredible.', rating: 5 },
            { author: 'Mark Turner', text: 'A perfect piece for my gallery.', rating: 5 },
            { author: 'Fatima Malik', text: 'Pure elegance and grace.', rating: 4 },
            { author: 'John Smith', text: 'A truly great work of art.', rating: 5 },
            { author: 'Sara Hussain', text: 'The snow effect makes it magical.', rating: 5 },
            { author: 'Oliver White', text: 'A beautiful and captivating piece.', rating: 4 }
        ]
    },
    {
        id: 3,
        name: 'The Icy Path',
        artist: 'Sanjay Dutt',
        price: 80,
        imageUrl: 'images/id 3.jpg',
        description: 'A winding road shrouded in a thick layer of snow and mist, with frosted trees creating a magical and mysterious atmosphere. It evokes a feeling of adventure into the unknown.',
        category: 'Nature',
        likes: 780,
        reviews: [
            { author: 'Ahmad Ali', text: 'The mood is just perfect.', rating: 5 },
            { author: 'Jessica Brown', text: 'So mysterious and beautiful.', rating: 5 },
            { author: 'Ravi Kumar', text: 'Love the way the road disappears into the mist.', rating: 4 },
            { author: 'Chloe Wilson', text: 'A fantastic winter scene.', rating: 5 },
            { author: 'Muhammad Khan', text: 'This piece has a great sense of depth.', rating: 5 },
            { author: 'Emma Taylor', text: 'Makes me want to go for a winter hike.', rating: 4 },
            { author: 'Farah Ahmed', text: 'Simply breathtaking.', rating: 5 },
            { author: 'Liam Scott', text: 'A true work of art.', rating: 5 },
            { author: 'Sarah Williams', text: 'The snow looks so realistic.', rating: 4 },
            { author: 'Hassan Ali', text: 'A gorgeous landscape.', rating: 5 },
            { author: 'Oliver White', text: 'Highly recommend this artist.', rating: 5 }
        ]
    },
    {
        id: 4,
        name: 'Winter Creek',
        artist: 'Fatima Shahid',
        price: 110,
        imageUrl: 'images/id 4.jpg',
        description: 'A serene creek flows through a snowy landscape, with frozen banks and golden grass. The contrast of the dark water and white snow creates a peaceful and calming effect.',
        category: 'Nature',
        likes: 1200,
        reviews: [
            { author: 'David Miller', text: 'So serene and beautiful.', rating: 5 },
            { author: 'Zahra Fatima', text: 'The colors are just perfect.', rating: 5 },
            { author: 'Prakash Patel', text: 'A very peaceful and calming painting.', rating: 4 },
            { author: 'Ava Garcia', text: 'The lighting is fantastic.', rating: 5 },
            { author: 'Omar Sharif', text: 'A masterpiece of nature.', rating: 5 },
            { author: 'Sophie Chen', text: 'The texture of the grass is amazing.', rating: 4 },
            { author: 'Hamza Tariq', text: 'A must-have for any nature lover.', rating: 5 },
            { author: 'Mia Wilson', text: 'Truly a captivating piece.', rating: 5 },
            { author: 'Daniel Kim', text: 'The reflections in the water are stunning.', rating: 4 },
            { author: 'Fatima Khan', text: 'A work of pure serenity.', rating: 5 },
            { author: 'Liam Adams', text: 'A gorgeous piece of art.', rating: 5 }
        ]
    },
    {
        id: 5,
        name: 'Horses of the Wild',
        artist: 'Zoya Khan',
        price: 130,
        imageUrl: 'images/id 5.jpg',
        description: 'Two majestic wild horses rear up in a dramatic, untamed landscape. The painting captures the raw power and freedom of these magnificent animals.',
        category: 'Portrait',
        likes: 1050,
        reviews: [
            { author: 'Sanjay Kumar', text: 'The power and energy are perfectly captured.', rating: 5 },
            { author: 'Chloe Evans', text: 'Love the movement and drama!', rating: 5 },
            { author: 'Ahmed Hassan', text: 'A truly powerful and emotional piece.', rating: 4 },
            { author: 'Benjamin Lewis', text: 'The horses look so alive.', rating: 5 },
            { author: 'Maria Rodriguez', text: 'A stunning tribute to these animals.', rating: 5 },
            { author: 'Imran Ali', text: 'The detail on the horses is incredible.', rating: 4 },
            { author: 'Jessica Thompson', text: 'This is a fantastic work of art.', rating: 5 },
            { author: 'Farah Ahmed', text: 'Pure art, pure beauty.', rating: 5 },
            { author: 'James Wilson', text: 'A must-buy for any animal lover.', rating: 4 },
            { author: 'Anya Sharma', text: 'The landscape adds to the drama.', rating: 5 },
            { author: 'Oliver Taylor', text: 'Simply gorgeous.', rating: 5 }
        ]
    },
            {
        id: 6,
        name: 'Wolf Spirit',
        artist: 'Sanjay Kumar',
        price: 85,
        imageUrl: 'images/id 6.jpg',
        description: 'A magnificent wolf standing against a mystical, moonlit landscape, embodying the spirit of the wild. Perfect for a fantasy collection.',
        category: 'Fantasy',
        likes: 980,
        reviews: [
            { author: 'Ahmad Khan', text: 'The raw energy is perfectly captured.', rating: 5 },
            { author: 'Olivia Grace', text: 'This is a powerful and moving piece.', rating: 5 },
            { author: 'Rajesh Sharma', text: 'Absolutely stunning work, the details are incredible.', rating: 4 },
            { author: 'Fatima Zohra', text: 'A masterpiece of fantasy art.', rating: 5 },
            { author: 'John Miller', text: 'Love the moonlit effect!', rating: 4 },
            { author: 'Priya Patel', text: 'Gives me chills in the best way.', rating: 5 },
            { author: 'Hassan Ali', text: 'A must-have for any collection.', rating: 5 },
            { author: 'Ethan Carter', text: 'The artist is truly gifted.', rating: 4 },
            { author: 'Sophie Chen', text: 'A beautiful and captivating piece.', rating: 5 },
            { author: 'Ibrahim Ahmed', text: 'The colors are just perfect.', rating: 4 },
            { author: 'Liam Wilson', text: 'An enchanting piece of art.', rating: 5 }
        ]
    },
    {
        id: 7,
        name: 'Timeless Grace',
        artist: 'Maria Rodriguez',
        price: 45,
        imageUrl: 'images/id 7.jpg',
        description: 'A classic portrait with a modern, painterly touch, capturing a timeless expression of grace and beauty.',
        category: 'Portrait',
        likes: 670,
        reviews: [
            { author: 'David Williams', text: 'Classic and elegant.', rating: 4 },
            { author: 'Sarah Jones', text: 'The expression is so lifelike.', rating: 5 },
            { author: 'Aliya Saleem', text: 'Sublime art, really beautiful.', rating: 5 },
            { author: 'Vikram Singh', text: 'Love the brush strokes and shading.', rating: 4 },
            { author: 'Emily Parker', text: 'A truly graceful portrait.', rating: 5 },
            { author: 'Jasmine Chen', text: 'The details are exquisite.', rating: 5 },
            { author: 'Omar Sharif', text: 'Fantastic work.', rating: 4 },
            { author: 'Jessica Brown', text: 'A great addition to my collection.', rating: 5 },
            { author: 'Nadia Hassan', text: 'Pure art, pure beauty.', rating: 5 },
            { author: 'Markus Weber', text: 'Captures the essence perfectly.', rating: 4 },
            { author: 'Isabella Cruz', text: 'Timeless and magnificent.', rating: 5 }
        ]
    },
    {
        id: 8,
        name: 'Winter\'s Palette',
        artist: 'Nafay Furqan',
        price: 90,
        imageUrl: 'images/id 8.jpg',
        description: 'Vibrant and expressive strokes depict a serene winter scene, where bare trees reflect in a frozen lake under a purple sky.',
        category: 'Landscape',
        likes: 720,
        reviews: [
            { author: 'Benjamin Lewis', text: 'The colors are so vivid.', rating: 5 },
            { author: 'Kira Tanaka', text: 'An impressive winter landscape.', rating: 5 },
            { author: 'Ahmed Raza', text: 'This painting is absolutely beautiful.', rating: 4 },
            { author: 'Chloe Wilson', text: 'The reflection on the ice is a lovely touch.', rating: 5 },
            { author: 'Aditi Sharma', text: 'A peaceful and powerful piece.', rating: 4 },
            { author: 'Robert Ford', text: 'Pure genius!', rating: 5 },
            { author: 'Sara Ali', text: 'Captures the magic of winter.', rating: 5 },
            { author: 'Daniel Kim', text: 'A truly immersive piece.', rating: 4 },
            { author: 'Luna Perez', text: 'The shading is phenomenal.', rating: 5 },
            { author: 'Ravi Verma', text: 'Perfect for a cozy home.', rating: 5 },
            { author: 'Sophie Lee', text: 'Highly recommend this artist.', rating: 4 }
        ]
    },
    {
        id: 9,
        name: 'Mountain Sanctuary',
        artist: 'Anaya Singh',
        price: 120,
        imageUrl: 'images/id 9.jpg',
        description: 'A minimalist, black and white depiction of a tranquil pagoda nestled in misty mountains, evoking a sense of calm and ancient wisdom.',
        category: 'Fantasy',
        likes: 1100,
        reviews: [
            { author: 'Zainab Fatima', text: 'A truly calming and peaceful piece.', rating: 5 },
            { author: 'Chris Johnson', text: 'Minimalist but incredibly powerful.', rating: 5 },
            { author: 'Prakash Rao', text: 'The mood is just perfect.', rating: 4 },
            { author: 'Eleanor Vance', text: 'Love the composition and style.', rating: 5 },
            { author: 'Omar Khalid', text: 'A work of pure serenity.', rating: 5 },
            { author: 'Jessica White', text: 'Exquisite attention to detail.', rating: 4 },
            { author: 'Amira Khan', text: 'The artist has a unique vision.', rating: 5 },
            { author: 'Thomas Clark', text: 'Simply stunning.', rating: 5 },
            { author: 'Elena Petrov', text: 'An enchanting piece.', rating: 4 },
            { author: 'Muhammad Khan', text: 'A must-see for all art lovers.', rating: 5 },
            { author: 'Isabelle Rossi', text: 'A fantastic addition to my home.', rating: 4 }
        ]
    },
    {
        id: 10,
        name: 'The Agasse Zebra',
        artist: 'Hira Azam',
        price: 150,
        imageUrl: 'images/id 10.jpg',
        description: 'Inspired by the great painter Jacques-Laurent Agasse, this piece captures the detailed realism of zebras in a serene landscape.',
        category: 'Portrait',
        likes: 850,
        reviews: [
            { author: 'Michael Brown', text: 'The realism is astounding.', rating: 5 },
            { author: 'Liam Jones', text: 'A classic feel with a modern touch.', rating: 4 },
            { author: 'Ayesha Nadeem', text: 'Truly a beautiful and intricate piece.', rating: 5 },
            { author: 'Rahul Gupta', text: 'A tribute to a master painter.', rating: 5 },
            { author: 'Oliver Davies', text: 'Love the historical influence.', rating: 4 },
            { author: 'Fatima Ahmed', text: 'The zebras look so alive.', rating: 5 },
            { author: 'Jacob Smith', text: 'Highly recommend this artist.', rating: 4 },
            { author: 'Zara Malik', text: 'Perfect for my art collection.', rating: 5 },
            { author: 'Noah Miller', text: 'This is a fantastic work of art.', rating: 5 },
            { author: 'Sofia Rossi', text: 'The detail is magnificent.', rating: 4 },
            { author: 'Abdul Wahab', text: 'Simply gorgeous.', rating: 5 }
        ]
    },
    {
        id: 11,
        name: 'Coastal Twilight',
        artist: 'Anjali Sharma',
        price: 75,
        imageUrl: 'images/id 11.jpg',
        description: 'A dramatic coastal scene at dusk, with rugged cliffs, a glowing house, and a vivid, starlit sky. A true masterpiece of mood.',
        category: 'Landscape',
        likes: 900,
        reviews: [
            { author: 'Chloe Evans', text: 'The mood is just perfect.', rating: 5 },
            { author: 'Ethan Walker', text: 'A breathtaking piece.', rating: 5 },
            { author: 'Madiha Khan', text: 'Love the dramatic sky.', rating: 4 },
            { author: 'Anya Sharma', text: 'Such a captivating scene.', rating: 5 },
            { author: 'James Taylor', text: 'The glow from the house is a great detail.', rating: 4 },
            { author: 'Sana Malik', text: 'Absolutely stunning.', rating: 5 },
            { author: 'Lily Evans', text: 'A masterpiece of mood.', rating: 5 },
            { author: 'Hussain Ali', text: 'The cliffs are so well done.', rating: 4 },
            { author: 'Grace Carter', text: 'A mesmerizing piece of art.', rating: 5 },
            { author: 'Farah Ahmed', text: 'Beautifully executed.', rating: 4 },
            { author: 'Ryan Adams', text: 'A must-buy for any art enthusiast.', rating: 5 }
        ]
    },
    {
        id: 12,
        name: 'Golden Fields',
        artist: 'Ubaid Umar',
        price: 55,
        imageUrl: 'images/id 12.jpg',
        description: 'Sunlight breaks through dark clouds, illuminating a lush green field and a distant barn. A tribute to the simple beauty of rural life.',
        category: 'Landscape',
        likes: 620,
        reviews: [
            { author: 'Faisal Ahmed', text: 'Love the simplicity and beauty.', rating: 4 },
            { author: 'Lauren Mitchell', text: 'A very peaceful and serene painting.', rating: 5 },
            { author: 'Rahul Reddy', text: 'The colors are so vibrant.', rating: 5 },
            { author: 'Olivia Davies', text: 'A lovely piece of rural art.', rating: 4 },
            { author: 'Zahra Khan', text: 'This is absolutely gorgeous.', rating: 5 },
            { author: 'Sam Wilson', text: 'The light is so well done.', rating: 4 },
            { author: 'Amara Hussein', text: 'A beautiful tribute to nature.', rating: 5 },
            { author: 'Chloe White', text: 'Makes me feel so calm.', rating: 5 },
            { author: 'Hamid Ali', text: 'A very talented artist.', rating: 4 },
            { author: 'Ben Carter', text: 'The barn adds a great touch.', rating: 5 },
            { author: 'Jessica Brown', text: 'A wonderful piece for any home.', rating: 5 }
        ]
    },
    {
        id: 13,
        name: 'The Solitary Tree',
        artist: 'David Kim',
        price: 65,
        imageUrl: 'images/id 13.jpg',
        description: 'A lonely, ancient tree stands against a haunting, dramatic sky. The contrast of light and shadow tells a story of endurance.',
        category: 'Nature',
        likes: 710,
        reviews: [
            { author: 'Aisha Malik', text: 'A powerful and emotional piece.', rating: 5 },
            { author: 'Jacob Evans', text: 'The contrast is just perfect.', rating: 5 },
            { author: 'Pooja Singh', text: 'Tells such a beautiful story.', rating: 4 },
            { author: 'Liam Cooper', text: 'Love the dramatic sky!', rating: 5 },
            { author: 'Hassan Khan', text: 'A masterpiece of mood and symbolism.', rating: 5 },
            { author: 'Sophie Turner', text: 'Absolutely love this piece.', rating: 4 },
            { author: 'Aliya Ahmed', text: 'This artist is amazing.', rating: 5 },
            { author: 'Noah White', text: 'The shadows are perfectly done.', rating: 5 },
            { author: 'Farid Hassan', text: 'A must-buy for any collection.', rating: 4 },
            { author: 'Olivia Martin', text: 'So expressive and beautiful.', rating: 5 },
            { author: 'Ryan Wilson', text: 'Truly captivating.', rating: 4 }
        ]
    },
    {
        id: 14,
        name: 'Wasteland Sunrise',
        artist: 'Elena Petrov',
        price: 95,
        imageUrl: 'images/id 14.jpg',
        description: 'A post-apocalyptic scene with a lone tree silhouette against a fiery sky, symbolizing hope and new beginnings in a desolate world.',
        category: 'dark',
        likes: 800,
        reviews: [
            { author: 'Ahmad Khan', text: 'The colors are so vibrant and powerful.', rating: 5 },
            { author: 'Liam Jackson', text: 'Love the message of hope in this piece.', rating: 5 },
            { author: 'Kiran Sharma', text: 'A truly inspiring work of art.', rating: 4 },
            { author: 'Jessica Lee', text: 'Captures the mood perfectly.', rating: 5 },
            { author: 'Zahid Hussain', text: 'Fantastic detail and composition.', rating: 5 },
            { author: 'Sophie Carter', text: 'A beautiful and haunting piece.', rating: 4 },
            { author: 'Omar Ahmed', text: 'A definite favorite of mine.', rating: 5 },
            { author: 'Ryan Adams', text: 'An incredible talent.', rating: 5 },
            { author: 'Mina Singh', text: 'The sky is absolutely breathtaking.', rating: 4 },
            { author: 'Daniel Brown', text: 'This painting is a masterpiece.', rating: 5 },
            { author: 'Nadia Khan', text: 'A truly beautiful and unique piece.', rating: 4 }
        ]
    },
    {
        id: 15,
        name: 'Rainy Reflections',
        artist: 'Vikram Patel',
        price: 60,
        imageUrl: 'images/id 15.jpg',
        description: 'A close-up of a colorful, transparent umbrella in the rain, capturing the beautiful distortion and reflections of light. A modern classic.',
        category: 'Nature',
        likes: 750,
        reviews: [
            { author: 'Sarah Johnson', text: 'The reflections are so well done.', rating: 5 },
            { author: 'Ali Farooq', text: 'Love the colors and the rain effect.', rating: 5 },
            { author: 'Chris Wilson', text: 'A perfect piece for a rainy day.', rating: 4 },
            { author: 'Priya Sharma', text: 'Captivating and beautiful.', rating: 5 },
            { author: 'Liam Miller', text: 'A truly modern classic.', rating: 5 },
            { author: 'Zoe Davis', text: 'The artist is a genius.', rating: 4 },
            { author: 'Naveed Ahmed', text: 'Simply gorgeous.', rating: 5 },
            { author: 'Emily Carter', text: 'A delightful and charming piece.', rating: 5 },
            { author: 'John Smith', text: 'Highly recommend!', rating: 4 },
            { author: 'Ayesha Khan', text: 'Beautifully executed.', rating: 5 },
            { author: 'Sam Wilson', text: 'A joy to look at.', rating: 4 }
        ]
    }
        ];

        const getItems = () => JSON.parse(localStorage.getItem('nfts')) || initialNfts;
        const saveItems = (nfts) => localStorage.setItem('nfts', JSON.stringify(nfts));
        let nfts = getItems();
        // --- View Rendering Functions ---
        const appContainer = document.getElementById('app-container');
        const logoButton = document.getElementById('logo-button');
        const navHomeButton = document.getElementById('nav-home');
        const navGalleryButton = document.getElementById('nav-gallery');
        const navAboutButton = document.getElementById('nav-about');
        const navContactButton = document.getElementById('nav-contact');
        const navTeamPortalButton = document.getElementById('nav-team-portal');
        const cartButton = document.getElementById('cart-button');
        const loginBtn = document.getElementById('login-btn');
        const signupBtn = document.getElementById('signup-btn');
        const userControls = document.getElementById('user-controls');

        const setView = (newView) => {
            view = newView;
            renderView();
        };
        const showMessage = (message, type = 'success') => {
            const box = document.getElementById('message-box');
            box.textContent = message;
            box.className = `fixed top-20 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-xl z-50 transition-all duration-300 transform origin-top opacity-0 ${type === 'success' ? 'bg-yellow-500 text-zinc-950' : 'bg-red-500 text-white'}`;

            setTimeout(() => {
                box.classList.add('scale-100', 'opacity-100');
            }, 10);

            setTimeout(() => {
                box.classList.remove('scale-100', 'opacity-100');
                box.classList.add('scale-0', 'opacity-0');
            }, 3000);
        };

        const updateUserControls = () => {
            if (currentUser) {
                userControls.innerHTML = `
                    <div class="relative group">
                        <button id="user-menu-btn" class="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors duration-300 transform hover:scale-105">
                            <span class="font-bold">${currentUser.username}</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A11.956 11.956 0 0112 15c2.955 0 5.617 1.18 7.234 3.125m-.667 3.327A10.024 10.024 0 0112 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 1.25-.23 2.45-.667 3.593M12 11a4 4 0 100-8 4 4 0 000 8z"></path></svg>
                        </button>
                        <div id="user-dropdown" class="absolute right-0 mt-2 w-48 bg-zinc-800 rounded-lg shadow-xl py-2 hidden group-hover:block transition-all duration-300 transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 origin-top-right">
                            <a href="#" class="block px-4 py-2 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors duration-200" onclick="setView('order-details'); return false;">Order Details</a>
                            <button id="logout-btn" class="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors duration-200">Logout</button>
                        </div>
                    </div>
                `;
                document.getElementById('logout-btn').addEventListener('click', () => {
                    localStorage.removeItem('currentUser');
                    currentUser = null;
                    updateUserControls();
                    showMessage('Logged out successfully.', 'success');
                    setView('home');
                });
            } else {
                userControls.innerHTML = `
                    <button id="login-btn" class="bg-zinc-800 text-zinc-300 py-2 px-5 rounded-full hover:bg-zinc-700 transition-colors duration-300 font-medium">Login</button>
                    <button id="signup-btn" class="bg-yellow-500 text-zinc-950 py-2 px-5 rounded-full hover:bg-yellow-400 transition-colors duration-300 font-medium">Signup</button>
                `;
                document.getElementById('login-btn').addEventListener('click', () => setView('login'));
                document.getElementById('signup-btn').addEventListener('click', () => setView('signup'));
            }
        };
        const renderHomePage = () => {
             // Fetch up-to-date data
            const allNfts = getItems();
            const trendingNfts = [...allNfts].sort((a, b) => b.likes - a.likes).slice(0, 3);
            const bestSellingNfts = [...allNfts].sort((a, b) => b.salesCount - a.salesCount).slice(0, 3);
            const mostRatedNfts = [...allNfts].sort((a, b) => b.reviews.length - a.reviews.length).slice(0, 3);

            appContainer.innerHTML = `
                <section class="relative h-[80vh] flex items-center justify-center text-center overflow-hidden rounded-3xl shadow-2xl animate-fade-in-down">
                    <div class="hero-bg-text font-black">ARTVERSE</div>
                    <div class="relative z-10 p-6 md:p-12 space-y-4 md:space-y-6">
                        <h1 class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 animate-glow-pulse">
                            ArtVerse NFT Gallery
                        </h1>
                        <p class="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
                            Discover and own unique digital art from emerging artists. Our curated collection offers a gateway to the future of art.
                        </p>
                        <button id="cta-button" class="bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transform transition-transform duration-300 hover:scale-105">
                            Explore the Gallery
                        </button>
                    </div>
                </section>

                <section class="py-16 md:py-24">
                    <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-12 text-zinc-200 animate-fade-in-up">🔥Trending Artworks</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${trendingNfts.map(nft => `
                            <div class="bg-zinc-900 rounded-3xl shadow-xl overflow-hidden group hover:shadow-yellow-500/20 transition-all duration-300 animate-zoom-in">
                                <img src="${nft.imageUrl}" alt="${nft.name}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
                                <div class="p-6 text-center space-y-2">
                                    <h3 class="text-xl font-bold text-yellow-400">${nft.name}</h3>
                                    <p class="text-zinc-400">by ${nft.artist}</p>
                                    <p class="text-lg font-bold text-white">$${nft.price}</p>
                                    <button onclick="showNftDetail(${nft.id})" class="mt-4 bg-yellow-500 text-zinc-950 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="py-16 md:py-24">
                    <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-12 text-zinc-200 animate-fade-in-up">🏆Best-Selling Artworks</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${bestSellingNfts.map(nft => `
                            <div class="bg-zinc-900 rounded-3xl shadow-xl overflow-hidden group hover:shadow-yellow-500/20 transition-all duration-300 animate-zoom-in">
                                <img src="${nft.imageUrl}" alt="${nft.name}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
                                <div class="p-6 text-center space-y-2">
                                    <h3 class="text-xl font-bold text-yellow-400">${nft.name}</h3>
                                    <p class="text-zinc-400">by ${nft.artist}</p>
                                    <p class="text-lg font-bold text-white">$${nft.price}</p>
                                    <button onclick="showNftDetail(${nft.id})" class="mt-4 bg-yellow-500 text-zinc-950 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
                
                <section class="py-16 md:py-24">
                    <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-12 text-zinc-200 animate-fade-in-up">🌟Most Rated Artworks</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${mostRatedNfts.map(nft => `
                            <div class="bg-zinc-900 rounded-3xl shadow-xl overflow-hidden group hover:shadow-yellow-500/20 transition-all duration-300 animate-zoom-in">
                                <img src="${nft.imageUrl}" alt="${nft.name}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
                                <div class="p-6 text-center space-y-2">
                                    <h3 class="text-xl font-bold text-yellow-400">${nft.name}</h3>
                                    <p class="text-zinc-400">by ${nft.artist}</p>
                                    <p class="text-lg font-bold text-white">$${nft.price}</p>
                                    <button onclick="showNftDetail(${nft.id})" class="mt-4 bg-yellow-500 text-zinc-950 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
            document.getElementById('cta-button').addEventListener('click', () => setView('gallery'));
        };

  const renderGalleryPage = (nftsToRender = getItems()) => {
    const currentNfts = getItems(); // Get current NFTs including any added ones
    
    appContainer.innerHTML = `
        <section class="py-8 md:py-12 animate-fade-in-down">
            <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-8 text-zinc-200">Our Gallery</h2>
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <input type="text" id="search-input" placeholder="Search by name or artist..." class="bg-zinc-800 text-white px-4 py-2 rounded-full w-full md:max-w-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300">
                <select id="category-filter" class="bg-zinc-800 text-white px-4 py-2 rounded-full w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300">
                    <option value="all">All Categories</option>
                    ${[...new Set(currentNfts.map(nft => nft.category))].map(category => `<option value="${category}">${category}</option>`).join('')}
                </select>
                <select id="sort-filter" class="bg-zinc-800 text-white px-4 py-2 rounded-full w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300">
                    <option value="default">Sort by</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="likes-desc">Most Liked</option>
                </select>
            </div>
            <div id="nft-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                ${nftsToRender.length > 0 ? nftsToRender.map(nft => `
                    <div class="bg-zinc-900 rounded-3xl shadow-xl overflow-hidden group hover:shadow-yellow-500/20 transition-all duration-300 animate-zoom-in">
                        <img src="${nft.imageUrl}" alt="${nft.name}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
                        <div class="p-6 text-center space-y-2">
                            <h3 class="text-xl font-bold text-yellow-400">${nft.name}</h3>
                            <p class="text-zinc-400">by ${nft.artist}</p>
                            <p class="text-lg font-bold text-white">$${nft.price}</p>
                            <button onclick="showNftDetail(${nft.id})" class="mt-4 bg-yellow-500 text-zinc-950 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                View Details
                            </button>
                        </div>
                    </div>
                `).join('') : '<p class="text-center text-zinc-400 col-span-full">No NFTs found for your criteria.</p>'}
            </div>
        </section>
    `;

    // Rest of the function remains the same...
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');

    const filterAndSortNfts = () => {
        const query = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const sortBy = sortFilter.value;
        
        let filteredNfts = getItems().filter(nft => {
            const matchesSearch = nft.name.toLowerCase().includes(query) || nft.artist.toLowerCase().includes(query);
            const matchesCategory = category === 'all' || nft.category === category;
            return matchesSearch && matchesCategory;
        });

        if (sortBy === 'price-asc') {
            filteredNfts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filteredNfts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'likes-desc') {
            filteredNfts.sort((a, b) => b.likes - a.likes);
        }

        const nftList = document.getElementById('nft-list');
        nftList.innerHTML = filteredNfts.length > 0 ? filteredNfts.map(nft => `
            <div class="bg-zinc-900 rounded-3xl shadow-xl overflow-hidden group hover:shadow-yellow-500/20 transition-all duration-300 animate-zoom-in">
                <img src="${nft.imageUrl}" alt="${nft.name}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
                <div class="p-6 text-center space-y-2">
                    <h3 class="text-xl font-bold text-yellow-400">${nft.name}</h3>
                    <p class="text-zinc-400">by ${nft.artist}</p>
                    <p class="text-lg font-bold text-white">$${nft.price}</p>
                    <button onclick="showNftDetail(${nft.id})" class="mt-4 bg-yellow-500 text-zinc-950 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                        View Details
                    </button>
                </div>
            </div>
        `).join('') : '<p class="text-center text-zinc-400 col-span-full">No NFTs found for your criteria.</p>';
    };

    searchInput.addEventListener('input', filterAndSortNfts);
    categoryFilter.addEventListener('change', filterAndSortNfts);
    sortFilter.addEventListener('change', filterAndSortNfts);
};

        const renderNftDetailPage = () => {
            if (!selectedNft) {
                renderGalleryPage();
                return;
            }

            const currentReviews = selectedNft.reviews || [];

            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <button onclick="setView('gallery')" class="text-zinc-400 hover:text-white transition-colors duration-300 mb-6 flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Gallery
                    </button>
                    <div class="bg-zinc-900 rounded-3xl shadow-xl overflow-hidden lg:flex lg:space-x-8 p-6 md:p-8">
                        <div class="lg:w-1/2">
                            <img src="${selectedNft.imageUrl}" alt="${selectedNft.name}" class="w-full rounded-2xl object-cover shadow-lg hover:shadow-yellow-500/30 transition-shadow duration-300">
                        </div>
                        <div class="lg:w-1/2 mt-8 lg:mt-0 space-y-6">
                            <h1 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">${selectedNft.name}</h1>
                            <p class="text-xl text-zinc-300 font-semibold">by ${selectedNft.artist}</p>
                            <p class="text-zinc-400 leading-relaxed">${selectedNft.description}</p>
                            <div class="flex items-center justify-between">
                                <p class="text-2xl md:text-3xl font-bold text-white">$${selectedNft.price}</p>
                                <button onclick="addToCart(${selectedNft.id})" class="bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                    Add to Cart
                                </button>
                            </div>
                            <div class="flex items-center space-x-4 text-zinc-400">
                                <button onclick="addLike(${selectedNft.id})" class="flex items-center text-red-500 hover:text-red-400 transition-colors duration-300">
                                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                    ${selectedNft.likes} Likes
                                </button>
                            </div>

                            <div class="space-y-4 pt-4 border-t border-zinc-700">
                                <h3 class="text-2xl font-bold text-zinc-200">Reviews (${currentReviews.length})</h3>
                                <div class="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                                    ${currentReviews.map(review => `
                                        <div class="bg-zinc-800 p-4 rounded-xl shadow">
                                            <div class="flex items-center space-x-2 text-yellow-400">
                                                <span class="font-bold">${review.author}</span>
                                                <span class="text-sm text-zinc-500">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                                            </div>
                                            <p class="text-zinc-400 mt-1">${review.text}</p>
                                        </div>
                                    `).join('')}
                                </div>
                                ${currentUser ? `
                                <div class="mt-4">
                                    <h4 class="text-lg font-bold text-zinc-200">Add Your Review</h4>
                                    <form id="review-form" class="space-y-2 mt-2">
                                        <div class="flex items-center space-x-2 text-yellow-400">
                                            <label for="review-rating" class="text-zinc-400">Rating:</label>
                                            <select id="review-rating" class="bg-zinc-800 text-white p-1 rounded">
                                                <option value="5">5 Stars</option>
                                                <option value="4">4 Stars</option>
                                                <option value="3">3 Stars</option>
                                                <option value="2">2 Stars</option>
                                                <option value="1">1 Star</option>
                                            </select>
                                        </div>
                                        <textarea id="review-text" placeholder="Write your review here..." rows="3" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required></textarea>
                                        <button type="submit" class="bg-yellow-500 text-zinc-950 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300">Submit Review</button>
                                    </form>
                                </div>
                                ` : `
                                <p class="text-center text-zinc-400 mt-4">
                                    <a href="#" onclick="setView('login')" class="text-yellow-500 hover:underline">Log in to add a review.</a>
                                </p>
                                `}
                            </div>
                        </div>
                    </div>
                </section>
            `;

            if (currentUser) {
                document.getElementById('review-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const reviewText = document.getElementById('review-text').value;
                    const rating = parseInt(document.getElementById('review-rating').value, 10);
                    addReview(selectedNft.id, reviewText, rating);
                });
            }
        };

        const renderAboutPage = () => {
            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-4xl mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">About ArtVerse</h2>
                        
                        <div class="space-y-8 text-zinc-300 text-base md:text-lg leading-relaxed">
                            <p>
                                Welcome to ArtVerse, the premier destination for discovering, collecting, and trading non-fungible tokens (NFTs). We believe that digital art is the future, and we are dedicated to building a platform that empowers artists and connects them with a global community of collectors.
                            </p>
                            <p>
                                Our mission is to democratize art ownership. By leveraging blockchain technology, we ensure that every piece in our gallery is authentic, unique, and truly owned by you. We meticulously curate our collection, featuring works from both established and emerging artists who are pushing the boundaries of creativity.
                            </p>
                            <p>
                                ArtVerse is a place for innovation, creativity, and community. Join us on this exciting journey as we redefine the art world, one NFT at a time.
                            </p>
                        </div>
                    </div>
                </section>
            `;
        };

        const renderContactPage = () => {
            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-4xl mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Contact Us</h2>
                        <p class="text-zinc-400 text-lg md:text-xl text-center mb-8">
                            We'd love to hear from you. Please fill out the form below or reach out to us directly.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-6">
                                <h3 class="text-2xl font-bold text-zinc-200">Our Details</h3>
                                <div class="space-y-2">
                                    <p class="flex items-center text-zinc-300">
                                        <svg class="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        info@artverse.com
                                    </p>
                                    <p class="flex items-center text-zinc-300">
                                        <svg class="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.018 11.018 0 006.107 6.107l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                                        +92 123 4567890
                                    </p>
                                    <p class="flex items-center text-zinc-300">
                                        <svg class="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                        123 Main Street, Art City, Pakistan
                                    </p>
                                </div>
                                <h3 class="text-2xl font-bold text-zinc-200 mt-6">Social Media</h3>
                                <div class="flex space-x-4">
                                    <a href="#" class="text-zinc-300 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
                                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c-2.455 0-4.44-1.99-4.44-4.443s1.985-4.443 4.44-4.443c2.456 0 4.44 1.99 4.44 4.443s-1.984 4.443-4.44 4.443zM12.999 15.011c-2.456 0-4.44-1.99-4.44-4.443s1.984-4.443 4.44-4.443c2.455 0 4.44 1.99 4.44 4.443s-1.985 4.443-4.44 4.443z"></path><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.096 15.698a.75.75 0 01-1.096.096L8.85 13.921l-3.324 3.324a.75.75 0 01-1.06-1.06l3.325-3.325-3.79-3.79a.75.75 0 011.06-1.06l3.79 3.79 1.026-1.026a.75.75 0 011.061 1.06l-1.026 1.026 3.324 3.324a.75.75 0 01-.096 1.096z" clip-rule="evenodd"></path></svg>
                                    </a>
                                    <a href="#" class="text-zinc-300 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
                                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-11c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path></svg>
                                    </a>
                                    <a href="#" class="text-zinc-300 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
                                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.768s.784-1.768 1.75-1.768 1.75.79 1.75 1.768-.784 1.768-1.75 1.768zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-zinc-200">Send Us a Message</h3>
                                <form id="contact-form" class="mt-4 space-y-4">
                                    <div>
                                        <label for="name" class="block text-zinc-400">Name</label>
                                        <input type="text" id="name" name="name" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                    </div>
                                    <div>
                                        <label for="email" class="block text-zinc-400">Email</label>
                                        <input type="email" id="email" name="email" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                    </div>
                                    <div>
                                        <label for="message" class="block text-zinc-400">Message</label>
                                        <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required></textarea>
                                    </div>
                                    <button type="submit" class="w-full bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            document.getElementById('contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                showMessage('Message sent successfully!', 'success');
                e.target.reset();
            });
        };

        const renderCartPage = () => {
            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-4xl mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Your Cart</h2>
                        <div id="cart-items" class="space-y-6">
                            ${cart.length > 0 ? cart.map(item => `
                                <div class="flex items-center justify-between bg-zinc-800 rounded-xl p-4 md:p-6 shadow-md">
                                    <div class="flex items-center space-x-4">
                                        <img src="${item.nft.imageUrl}" alt="${item.nft.name}" class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg">
                                        <div>
                                            <h3 class="text-lg md:text-xl font-bold text-yellow-400">${item.nft.name}</h3>
                                            <p class="text-zinc-400">by ${item.nft.artist}</p>
                                            <p class="text-md md:text-lg font-semibold text-white mt-1">$${item.nft.price}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.nft.id}, this.value)" class="w-16 bg-zinc-700 text-white text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                        <button onclick="removeFromCart(${item.nft.id})" class="text-red-500 hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-zinc-400 text-lg">Your cart is empty.</p>'}
                        </div>
                        <div id="cart-summary" class="mt-8 pt-6 border-t border-zinc-700 space-y-4">
                            <div class="flex justify-between items-center text-xl font-bold text-zinc-200">
                                <span>Total:</span>
                                <span id="cart-total">$${calculateCartTotal()}</span>
                            </div>
                            <button id="checkout-button" class="w-full bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105" ${cart.length === 0 ? 'disabled' : ''}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </section>
            `;
            const checkoutButton = document.getElementById('checkout-button');
            if (checkoutButton) {
                checkoutButton.addEventListener('click', () => setView('checkout'));
            }
        };

        const renderCheckoutPage = () => {
            if (cart.length === 0) {
                setView('cart');
                showMessage('Your cart is empty. Please add items before checking out.', 'error');
                return;
            }

            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-4xl mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Checkout</h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-2xl font-bold text-zinc-200 mb-4">Order Summary</h3>
                                <div class="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                    ${cart.map(item => `
                                        <div class="flex justify-between items-center bg-zinc-800 rounded-lg p-4">
                                            <div class="flex items-center space-x-4">
                                                <img src="${item.nft.imageUrl}" alt="${item.nft.name}" class="w-16 h-16 object-cover rounded-lg">
                                                <div>
                                                    <p class="font-bold text-yellow-400">${item.nft.name}</p>
                                                    <p class="text-sm text-zinc-400">Qty: ${item.quantity}</p>
                                                </div>
                                            </div>
                                            <span class="font-bold text-white">$${(item.nft.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="mt-6 flex justify-between items-center text-xl font-bold text-zinc-200 border-t border-zinc-700 pt-4">
                                    <span>Total:</span>
                                    <span>$${calculateCartTotal()}</span>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-zinc-200 mb-4">Payment Method</h3>
                                <div class="flex space-x-4 mb-4">
                                    <label class="flex items-center text-zinc-400">
                                        <input type="radio" name="payment-method" value="online" checked class="form-radio text-yellow-500">
                                        <span class="ml-2">Online Payment</span>
                                    </label>
                                    <label class="flex items-center text-zinc-400">
                                        <input type="radio" name="payment-method" value="cod" class="form-radio text-yellow-500">
                                        <span class="ml-2">Cash on Delivery</span>
                                    </label>
                                </div>
                                <div id="payment-form-container">
                                    <form id="online-payment-form" class="space-y-4">
                                        <div>
                                            <label for="name-on-card" class="block text-zinc-400">Name on Card</label>
                                            <input type="text" id="name-on-card" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                        </div>
                                        <div>
                                            <label for="card-number" class="block text-zinc-400">Card Number</label>
                                            <input type="text" id="card-number" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                        </div>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div>
                                                <label for="expiry" class="block text-zinc-400">Expiry Date</label>
                                                <input type="text" id="expiry" placeholder="MM/YY" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                            </div>
                                            <div>
                                                <label for="cvv" class="block text-zinc-400">CVV</label>
                                                <input type="text" id="cvv" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                            </div>
                                        </div>
                                        <button type="submit" class="w-full bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                            Pay Now
                                        </button>
                                    </form>
                                    
                                    <form id="cod-form" class="space-y-4 hidden">
                                        <div>
                                            <label for="cod-name" class="block text-zinc-400">Full Name</label>
                                            <input type="text" id="cod-name" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                        </div>
                                        <div>
                                            <label for="cod-email" class="block text-zinc-400">Email</label>
                                            <input type="email" id="cod-email" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                        </div>
                                        <div>
                                            <label for="cod-contact" class="block text-zinc-400">Contact Number</label>
                                            <input type="tel" id="cod-contact" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                        </div>
                                        <div>
                                            <label for="cod-address" class="block text-zinc-400">Address</label>
                                            <input type="text" id="cod-address" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                        </div>
                                        <div>
                                            <label for="cod-city" class="block text-zinc-400">City</label>
                                            <input type="text" id="cod-city" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                        </div>
                                        <button type="submit" class="w-full bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                            Place Order (COD)
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            const onlineForm = document.getElementById('online-payment-form');
            const codForm = document.getElementById('cod-form');
            const paymentRadios = document.querySelectorAll('input[name="payment-method"]');

            paymentRadios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    if (e.target.value === 'online') {
                        onlineForm.classList.remove('hidden');
                        codForm.classList.add('hidden');
                    } else {
                        onlineForm.classList.add('hidden');
                        codForm.classList.remove('hidden');
                    }
                });
            });

            onlineForm.addEventListener('submit', (e) => {
                e.preventDefault();
                localStorage.setItem('lastOrder', JSON.stringify(cart));
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                showMessage('Payment successful! Your order has been placed.', 'success');
                setView('order-details');
            });

            codForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
                localStorage.setItem('lastOrder', JSON.stringify(cart));
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                showMessage(`Your order has been placed successfully! Your Order ID is ${orderId}.`, 'success');
                setView('order-details');
            });
        };

        const renderOrderDetailsPage = () => {
            const lastOrder = JSON.parse(localStorage.getItem('lastOrder')) || [];

            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-4xl mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Order Details</h2>
                        ${lastOrder.length > 0 ? `
                            <p class="text-center text-zinc-400 text-lg mb-6">Thank you for your purchase! Here are the details of your last order.</p>
                            <div class="space-y-6">
                                ${lastOrder.map(item => `
                                    <div class="flex items-center justify-between bg-zinc-800 rounded-xl p-4 md:p-6 shadow-md">
                                        <div class="flex items-center space-x-4">
                                            <img src="${item.nft.imageUrl}" alt="${item.nft.name}" class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg">
                                            <div>
                                                <h3 class="text-lg md:text-xl font-bold text-yellow-400">${item.nft.name}</h3>
                                                <p class="text-zinc-400">by ${item.nft.artist}</p>
                                                <p class="text-md md:text-lg font-semibold text-white mt-1">$${item.nft.price}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                            <span class="text-md md:text-lg font-semibold text-zinc-400">Qty: ${item.quantity}</span>
                                            <span class="text-md md:text-lg font-bold text-white">$${(item.nft.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="mt-8 pt-6 border-t border-zinc-700 flex justify-between items-center text-2xl font-bold text-zinc-200">
                                <span>Total Paid:</span>
                                <span>$${lastOrder.reduce((total, item) => total + item.nft.price * item.quantity, 0).toFixed(2)}</span>
                            </div>
                        ` : `
                            <p class="text-center text-zinc-400 text-lg">You have no past orders.</p>
                        `}
                    </div>
                </section>
            `;
        };

        const renderLoginPage = () => {
            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-md mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Login</h2>
                        <form id="login-form" class="space-y-6">
                            <div>
                                <label for="login-username" class="block text-zinc-400">Username</label>
                                <input type="text" id="login-username" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                            </div>
                            <div>
                                <label for="login-password" class="block text-zinc-400">Password</label>
                                <input type="password" id="login-password" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                            </div>
                            <button type="submit" class="w-full bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                Login
                            </button>
                        </form>
                        <p class="text-center text-zinc-400 mt-4">
                            Don't have an account? <a href="#" onclick="setView('signup')" class="text-yellow-500 hover:underline">Sign up here</a>.
                        </p>
                    </div>
                </section>
            `;
            document.getElementById('login-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('login-username').value;
                const password = document.getElementById('login-password').value;

                if (users[username] && users[username].password === password) {
                    currentUser = { username: username, role: users[username].role };
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    showMessage(`Welcome back, ${currentUser.username}!`);
                    updateUserControls();
                    setView('home');
                } else if (!users[username]) {
                    currentUser = { username: username, role: 'customer' };
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    showMessage(`Welcome, ${currentUser.username}!`);
                    updateUserControls();
                    setView('home');
                } else {
                    showMessage('Invalid username or password.', 'error');
                }
            });
        };

        const renderSignupPage = () => {
            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-md mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Signup</h2>
                        <form id="signup-form" class="space-y-6">
                            <div>
                                <label for="signup-username" class="block text-zinc-400">Username</label>
                                <input type="text" id="signup-username" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                            </div>
                            <div>
                                <label for="signup-email" class="block text-zinc-400">Email</label>
                                <input type="email" id="signup-email" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                            </div>
                            <div>
                                <label for="signup-password" class="block text-zinc-400">Password</label>
                                <input type="password" id="signup-password" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                            </div>
                            <button type="submit" class="w-full bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105">
                                Signup
                            </button>
                        </form>
                        <p class="text-center text-zinc-400 mt-4">
                            Already have an account? <a href="#" onclick="setView('login')" class="text-yellow-500 hover:underline">Log in here</a>.
                        </p>
                    </div>
                </section>
            `;
            document.getElementById('signup-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('signup-username').value;
                const email = document.getElementById('signup-email').value;
                const password = document.getElementById('signup-password').value;

                if (users[username]) {
                    showMessage('Username already exists. Please choose a different one.', 'error');
                    return;
                }
                users[username] = { password: password, role: 'customer', email: email };
                currentUser = { username: username, role: 'customer' };
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                showMessage(`Account created! Welcome, ${currentUser.username}!`);
                updateUserControls();
                setView('home');
            });
        };

        const renderTeamPortal = () => {
            if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'author')) {
                showMessage('Access Denied. You do not have permission to view this page.', 'error');
                setView('home');
                return;
            }

            const isAuthor = currentUser.role === 'author';
            const allNfts = getItems();
            const userNfts = isAuthor ? allNfts.filter(nft => nft.artist === currentUser.username) : allNfts;

            appContainer.innerHTML = `
                <section class="py-8 md:py-12 animate-fade-in-down">
                    <div class="max-w-6xl mx-auto bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                            ${isAuthor ? 'Author Portal' : 'Admin Portal'}
                        </h2>
                        
                        ${isAuthor ? `
                        <div class="mb-12">
                            <h3 class="text-2xl font-bold text-zinc-200 mb-4">Add New Item</h3>
                            <form id="add-nft-form" class="space-y-4">
                                <div>
                                    <label for="new-name" class="block text-zinc-400">Item Name</label>
                                    <input type="text" id="new-name" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                </div>
                                <div>
                                    <label for="new-price" class="block text-zinc-400">Price ($)</label>
                                    <input type="number" id="new-price" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                </div>
                                <div>
                                    <label for="new-image" class="block text-zinc-400">Image URL</label>
                                    <input type="url" id="new-image" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
                                </div>
                                <div>
                                    <label for="new-description" class="block text-zinc-400">Description</label>
                                    <textarea id="new-description" rows="3" class="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" required></textarea>
                                </div>
                                <button type="submit" class="w-full bg-yellow-500 text-zinc-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300">
                                    Add New Item
                                </button>
                            </form>
                        </div>
                        ` : ''}

                        <div>
                            <h3 class="text-2xl font-bold text-zinc-200 mb-4">
                                ${isAuthor ? 'Your Items' : 'All Gallery Items'}
                            </h3>
                            <div class="space-y-4">
                                ${userNfts.length > 0 ? userNfts.map(nft => `
                                    <div class="flex items-center justify-between bg-zinc-800 rounded-xl p-4 md:p-6 shadow-md">
                                        <div class="flex items-center space-x-4">
                                            <img src="${nft.imageUrl}" alt="${nft.name}" class="w-16 h-16 object-cover rounded-lg">
                                            <div>
                                                <h4 class="text-lg font-bold text-yellow-400">${nft.name}</h4>
                                                <p class="text-sm text-zinc-400">by ${nft.artist}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                            ${isAuthor ? `
                                            <button onclick="removeItem(${nft.id})" class="text-red-500 hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                            ` : ''}
                                        </div>
                                    </div>
                                `).join('') : `<p class="text-center text-zinc-400">No items to display.</p>`}
                            </div>
                        </div>
                    </div>
                </section>
            `;

            if (isAuthor) {
                document.getElementById('add-nft-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const name = document.getElementById('new-name').value;
                    const price = parseFloat(document.getElementById('new-price').value);
                    const imageUrl = document.getElementById('new-image').value;
                    const description = document.getElementById('new-description').value;
                    addNewItem(name, price, imageUrl, description);
                });
            }
        };
        
        const addNewItem = (name, price, imageUrl, description) => {
            const allNfts = getItems();
            const newId = allNfts.length > 0 ? Math.max(...allNfts.map(n => n.id)) + 1 : 1;
            const newItem = {
                id: newId,
                name,
                artist: currentUser.username,
                price,
                imageUrl,
                description,
                category: 'Author\'s Art',
                likes: 0,
                salesCount: 0,
                reviews: []
            };
            allNfts.push(newItem);
            saveItems(allNfts);
            showMessage('New item added successfully!');
            renderTeamPortal();
        };

        const removeItem = (id) => {
            let allNfts = getItems();
            allNfts = allNfts.filter(nft => nft.id !== id || nft.artist !== currentUser.username);
            saveItems(allNfts);
            showMessage('Item removed successfully!');
            renderTeamPortal();
        };

        const calculateCartTotal = () => {
            return cart.reduce((total, item) => total + item.nft.price * item.quantity, 0).toFixed(2);
        };

        const updateCartCount = () => {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            const cartCountSpan = document.getElementById('cart-count');
            cartCountSpan.textContent = count;
            if (count > 0) {
                cartCountSpan.classList.remove('hidden');
            } else {
                cartCountSpan.classList.add('hidden');
            }
        };

        const addLike = (nftId) => {
            const allNfts = getItems();
            const nft = allNfts.find(n => n.id === nftId);
            if (nft) {
                nft.likes = (nft.likes || 0) + 1;
                saveItems(allNfts);
                selectedNft = nft;
                renderNftDetailPage();
                showMessage('You liked this item!');
            }
        };

        const addReview = (nftId, reviewText, rating) => {
            const allNfts = getItems();
            const nft = allNfts.find(n => n.id === nftId);
            if (nft) {
                const newReview = {
                    author: currentUser.username,
                    text: reviewText,
                    rating: rating
                };
                if (!nft.reviews) {
                    nft.reviews = [];
                }
                nft.reviews.push(newReview);
                saveItems(allNfts);
                selectedNft = nft;
                renderNftDetailPage();
                showMessage('Review added successfully!');
            }
        };

        const addToCart = (nftId) => {
            if (!currentUser) {
                showMessage('Please log in or sign up to add items to your cart.', 'error');
                setTimeout(() => setView('login'), 1500);
                return;
            }
            
            const nft = getItems().find(n => n.id === nftId);
            if (!nft) return;

            const existingItem = cart.find(item => item.nft.id === nftId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ nft, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showMessage(`${nft.name} added to cart!`);
        };

        const removeFromCart = (nftId) => {
            cart = cart.filter(item => item.nft.id !== nftId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCartPage();
            showMessage('Item removed from cart.', 'error');
        };

        const updateCartQuantity = (nftId, quantity) => {
            const item = cart.find(item => item.nft.id === nftId);
            if (item) {
                item.quantity = parseInt(quantity, 10);
                if (item.quantity <= 0) {
                    removeFromCart(nftId);
                } else {
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    document.getElementById('cart-total').textContent = `$${calculateCartTotal()}`;
                }
            }
        };

        const renderView = () => {
            // Check for admin/author and show team portal link
            const teamPortalButton = document.getElementById('nav-team-portal');
            if (currentUser && (currentUser.role === 'admin' || currentUser.role === 'author')) {
                teamPortalButton.classList.remove('hidden');
            } else {
                teamPortalButton.classList.add('hidden');
            }

            switch (view) {
                case 'home':
                    renderHomePage();
                    break;
                case 'gallery':
                    renderGalleryPage();
                    break;
                case 'detail':
                    renderNftDetailPage();
                    break;
                case 'cart':
                    renderCartPage();
                    break;
                case 'checkout':
                    renderCheckoutPage();
                    break;
                case 'order-details':
                    renderOrderDetailsPage();
                    break;
                case 'login':
                    renderLoginPage();
                    break;
                case 'signup':
                    renderSignupPage();
                    break;
                case 'about':
                    renderAboutPage();
                    break;
                case 'contact':
                    renderContactPage();
                    break;
                case 'team-portal':
                    renderTeamPortal();
                    break;
                default:
                    renderHomePage();
            }
            updateCartCount();
            updateUserControls();
        };

        const showNftDetail = (id) => {
            selectedNft = getItems().find(nft => nft.id === id);
            setView('detail');
        };

        // --- Initial Load ---
      document.addEventListener('DOMContentLoaded', () => {
        saveItems(initialNfts); 

        logoButton.addEventListener('click', () => setView('home'));
        navHomeButton.addEventListener('click', () => setView('home'));
        navGalleryButton.addEventListener('click', () => setView('gallery'));
        navAboutButton.addEventListener('click', () => setView('about'));
        navContactButton.addEventListener('click', () => setView('contact'));
        navTeamPortalButton.addEventListener('click', () => setView('team-portal'));
        cartButton.addEventListener('click', () => setView('cart'));

        updateUserControls();
        updateCartCount();
        renderView();
    });