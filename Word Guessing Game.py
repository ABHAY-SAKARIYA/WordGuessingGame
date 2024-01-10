import random


# Dictionary of game names and their hints.
games = {
    "amongUs": "Find impostors among crew in space. Mobile Game",
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
}

# Converting the dict to list of keys
list_of_available_names = list(games)
# selecting the random word from the games name
word_selection = random.choice(list_of_available_names)



print(f"Welcome To The Guess The Game Name Puzzle\nHints :\n{games[word_selection]}\nThe Word Has {len(word_selection)} letters.")


'''
--> chances is the maximum amount of chances an player can guess,
    chance is length of word randomaly selected + 1
--> Hints_avalaible is the count of maximum hints available for an player to take.
--> user_input_list is the list of collected inputs from the user
'''
chances = len(word_selection) + 1
hints_available = 3
user_input_list = []


while True:
    '''
    --> Failed is the count of remaining letter to guess. 
        if the Failed is 0 it mean the user had guessed the correct word.
    --> pleasure is the count of guess the user made correctly,
        besed on this we print the user how far is from the correct answer. 
    '''
    Failed = 0
    pleasure = 0
    '''
    This block is to print the char if it is correct or print __ and also add 1 to Failed.
    '''
    for char in word_selection:
        if char in user_input_list:
            print(char,end="  ")
        else:
            print("__",end="  ")
            Failed += 1
    
    if Failed == 0:
        print(f"\n\nWOW U Have Guessed The Correct Word\n The answer is {word_selection}.".center(10,"-"))
        break

    user_input = input("\nEnter Character : ")

    if "all" in user_input:
        all_temp_list = user_input.split(" ")
        if all_temp_list[-1] == word_selection:
            print(f"\n\nWOW U Have Guessed The Correct Word\n The answer is {word_selection}.".center(10,"-"))
            break
        else:
            print("\nWrong Answer!!\n")
            chances -= 1


    elif user_input == "hint":
        rand_letter = random.randint(0,len(word_selection)-1)
        for _ in range(0,len(user_input_list)):
            if word_selection[rand_letter] in user_input_list:
                rand_letter = random.randint(0,len(word_selection)-1)
            else:
                break

        if hints_available >= 1:
            print(f"You Got An Hint The letter is {word_selection[rand_letter]}, at position {rand_letter}\n")
            user_input_list.append(word_selection[rand_letter])
            hints_available -= 1
            chances -= 1
        else:
            print("No Hints Available!!\n")

    elif len(user_input) < 1 or len(user_input) > 1:
        print("only Accepts 1 Character Per Input\n") 
        continue

    if user_input in user_input_list:
        chances -= 1
        print("Element Already Selected\n")
        pass
    else:
        user_input_list.append(user_input)
        chances -= 1
    

    for char in word_selection:
        if char in user_input_list:
            pleasure += 1



    if user_input in word_selection:
        if len(word_selection) < 5:
            if pleasure <= 2:
                print(f"\n You Have Founded {pleasure} character! Guess More to Win.\n")
            elif pleasure >= 2 and pleasure <= len(word_selection)-2:
                print(f"\n You Have Founded {pleasure} character! You Are Too Close To The answer.\n")
            elif pleasure == len(word_selection)-1:
                print(f"\n You Have Correctly Guessed {pleasure} characters! You Are Just 1 Step Behind.")
        elif len(word_selection) >= 5:
            if pleasure <= 2:
                print(f"\n You Have Founded {pleasure} character! Guess More to Win.\n")
            elif pleasure >= 2 and pleasure <= 5 :
                print(f"\n You Have Founded {pleasure} character! You Are Close To The answer.\n")
            elif pleasure >= 5 and pleasure <= len(word_selection) - 1:
                print(f"\n You Have Founded {pleasure} character! You Are Too Close To The answer.\n")
            elif pleasure == len(word_selection)-1:
                print("\n Your Are Just There Guess Only 1 Character to Win\n")


    print(f"\nChances : {chances }  \t\t\t Hints : {hints_available} \nType 'hint' To Get an Hint \nType 'all <your answer>' to enter the Full game name in ones.\n")


    if  chances < 0:
        print("You Have No Chances left You Failed to Guess The Correct Word !!\n")
        break
