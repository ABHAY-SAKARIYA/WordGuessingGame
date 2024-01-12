const prompt = require('prompt-sync')();

class WGG{
    constructor(){
        // This is an object that contain Game Name as Key and Their respactive hints as value
        this.game = {
            "amongus": "Find impostors among crew in space. Mobile Game",
            "bgmi": "Battle royale on mobile, realistic warfare. Mobile Game",
            "genshinimpact": "Open-world RPG with elemental combat.Mobile and Pc Game",
            "clashofclans": "Build village, attack others, strategic gameplay. Mobile Game",
            "candycrush": "Match colorful candies in addictive puzzles. Mobile Game",
            "roblox": "User-generated worlds, play, create, and socialize. PC Game",
            "pokemongo": "Catch Pokémon in augmented reality. Mobile Game",
            "fortnite": "Survival, building, battle royale phenomenon.Mobile and Pc Game",
            "subwaysurfers": "Run, dodge trains in endless subway. Mobile Game",
            "brawlstars": "Team-based battles with various game modes. Mobile Game",
            "cyberpunk2077": "Futuristic open-world RPG, immersive story.PC Game",
            "valorant": "Tactical shooter with unique character abilities.PC Game",
            "callofduty": "Action-packed FPS, various game modes.Mobile and Pc Game",
            "minecraft": "Create, explore, survive in blocky world.Mobile and Pc Game",
            "apexlegends": "Team-based battle royale with diverse characters.Mobile and Pc Game",
            "leagueoflegends": "MOBA with strategic team-based gameplay.Mobile and Pc Game",
            "dota2": "Complex MOBA, strategic team battles.PC Game",
            "gtav": "Open-world, crime-filled action-adventure.PC Game",
            "gtavc": "Crime in '80s Miami, part of GTA series.Mobile and Pc Game",
            "thewitcher": "Fantasy RPG, monster hunter Geralt's adventures.PC Game",
            "counterstrike": "Classic FPS, terrorists vs. counter-terrorists.PC Game",
            "fallout": "Post-apocalyptic RPG, exploration and decision-making.",
            "doom": "Fast-paced FPS, demon-slaying action.",
            "halflife": "Innovative FPS with a gripping storyline.",
            "terraria": "2D sandbox adventure with crafting and exploration.",
            "deadbydaylight": "Survival horror, escape from a relentless killer.",
            "rainbowmoon": "Classic RPG with turn-based battles.",
            "stardewvalley": "Farming simulation RPG, build a community.",
            "warframe": "Third-person shooter, space ninja action.",
            "noita": "Action-adventure, explore a magical pixelated world.",
            "rimworld": "Colony management sim, survive on an alien planet.",
            "monsterhunterworld": "Action RPG, hunt massive monsters.",
            "worldofwarcraft": "MMORPG, explore Azeroth and complete quests.",
            "sekiro": "Action-adventure, intense sword-fighting challenges.",
            "apexconstruct": "VR action-adventure, post-apocalyptic world.",
            "outerwilds": "Open-world mystery, explore a time-looped universe.",
            "discoelysium": "RPG, solve a murder mystery with various skills.",
            "fallenorder": "Action-adventure, Jedi's journey after Order 66.",
            "hades": "Roguelike dungeon crawler, Greek mythology.",
            "battlefield": "Large-scale FPS battles, realistic warfare.",
            "assassinscreed": "Action-adventure, historical settings, stealth.",
            "hayday": "Farming simulation, manage and expand your farm.",
            "clashroyale": "Real-time strategy card game, clash with opponents.",
            "plantsvszombies": "Defend against zombies with plants, tower defense.",
            "fallguys": "Competitive party game, wacky obstacle courses.",
            "mobilelegends": "MOBA, fight in 5v5 battles with various heroes.",
            "pokemasters": "Train Pokémon, engage in strategic battles.",
            "asphalt9": "High-octane racing game with stunning graphics.",
            "homescapes": "Renovate mansion, solve puzzles for story progression.",
            "freefire": "Battle royale, survival shooter on mobile.",
            "evoland": "Evolution of RPGs, experience gaming history."
        };
    };
    
    main() {
        // generating an random word from the games object keys
        let gameList = Object.keys(this.game);
        let word_selected = gameList[Math.floor(Math.random() * gameList.length)];
        
        console.log(`
        Welcome To Guess The Word Game.\n
        Hint : \n
        ${this.game[word_selected]}\n
        The Word Has ${word_selected.length} letters.
        `)
        
        
        var chances_available = word_selected.length + 1;
        var hints_available = 3;
        var user_input_arr = [];


        while (chances_available >= 0) {
            
            console.log(`\nChances : ${chances_available }  \t\t\t Hints : ${hints_available} \nType 'hint' To Get an Hint \nType 'all <your answer>' to enter the Full Answer name in ones.\n`);


            var Failed = 0;
            var correct_word_count_user = 0;
            var output = ""
            
            for (var char=0;char<=word_selected.length-1;char++){
                if (user_input_arr.includes(word_selected[char])){
                    output += word_selected[char] + "  "; 
                    correct_word_count_user += 1;
                }else{
                    output += "__  ";
                    Failed += 1;
                }
            };

            console.log(output)
            if (Failed === 0){
                console.log(`\n You Have Won The Game.\nThe Correct Word Is ${word_selected}`);
                break;
            }

            var user_input = prompt("Enter Letter : ");

            if (user_input === "hint"){
                var random_letter_hint = word_selected[Math.floor(Math.random() * word_selected.length)];
                for (var i=0;i<=user_input_arr.length-1;i++){
                    if (user_input_arr.includes(random_letter_hint)){
                        var random_letter_hint = word_selected[Math.floor(Math.random() * word_selected.length)];
                    }else{
                        break;
                    }
                }
                if (hints_available >= 1){
                    user_input_arr.push(random_letter_hint);
                    chances_available -= 1;
                    hints_available -= 1;
                    
                }else{
                    console.log("No Hints Available\n");
                }

            }else if(user_input.includes("all")){
                let all_answer = user_input.split(" ");
                if (all_answer[1] == word_selected){
                    console.log("WOW u Guessed The Correect Word! U Won The Game.");
                    break;
                }else{
                    console.log("wrong answer!");
                    chances_available -= 1;
                }
            }else if(user_input.length > 1){
                console.log("Enter Only One Letter !");
                chances_available -= 1
                continue;
            }

            if (user_input_arr.includes(user_input)){
                console.log("Letter Already Entered!!");
                chances_available -= 1;
            }else{
                user_input_arr.push(user_input);
                chances_available -= 1;
            }

            // Providing Feedback Based on Using Performance.
            for (var i=0;i<=word_selected.length-1;i++){
                if (user_input === word_selected[i]){
                    if ((word_selected.length) <= 5){
                        if (correct_word_count_user === 2){
                            console.log(`You Have Founded ${correct_word_count_user} ! Guess More To Win.`);
                        }else if( correct_word_count_user === 4){
                            console.log(`You Have Founded ${correct_word_count_user} ! Guess One More To Win.`);
                        }
                    }else if (correct_word_count_user > 5){
                        if (correct_word_count_user === 2){
                            console.log(`You Have Founded ${correct_word_count_user} ! Guess More To Win.`);
                        }else if(correct_word_count_user > 2 && correct_word_count_user <= 5){
                            console.log(`You Have Founded ${correct_word_count_user} ! You are Close To The Answer.`);
                        }else if(correct_word_count_user > 5 && correct_word_count_user < (correct_word_count_user.length-2)){
                            console.log(`You Have Founded ${correct_word_count_user} ! You Are too Close To Win.`);

                        }else if( correct_word_count_user === (correct_word_count_user.length - 1)){
                            console.log(`You Have Founded ${correct_word_count_user} ! Guess One More To Win.`);
                        }
                    }
                }
            }
            
            
            if (chances_available < 0){
                console.log("You Failed to Guess The Correct Answer Try Again!!");
                break;
            }

        };
    };

};


a = new WGG()
a.main()