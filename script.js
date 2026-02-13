/* 
    JavaScript for Assignment 3
    Ezekiel Pascual
    February 12, 2026
*/

// State Management

let currentState = "gameStart";

function renderQuestion() {
    // Links the HTML elements to the JavaScript file
    const question = document.getElementById("question");
    const answers = document.getElementById("answers");
    const image = document.getElementById("scene-img")

    // Clears the choices of the previous scene
    answers.innerHTML = "";

    switch (currentState) {

        // Game Scenes
        case "gameStart":
            question.textContent = "You wake up in a dirty room, alone and cold, in an abandoned house. You hear \
            thunder clap as the storm rages, along with distant, hostile, footsteps echoing in the halls. What do you do?";

            addAnswerButton("Jump off the window", "path1");
            addAnswerButton("Hide under the bed", "path2");
            addAnswerButton("Go out the room", "path3");

            image.src = "images/gameStart.png"
            image.alt = "16-bit pixel art of a dark, derelict bedroom during a thunderstorm."

            break;

        case "path1":
            question.textContent = "You jump off the window, sticking the landing from the third floor, but at the \
            cost of having your right leg injured. What next?";

            addAnswerButton("Go to your car", "carEnding");
            addAnswerButton("Climb the fence", "fenceEnding");

            image.src = "images/path1.png"
            image.alt = "Action pixel art of a character leaping from a high mansion window in the rain."
            
            break;

        case "carEnding":
            question.textContent = "You go to your car, in hopes that you can use it to drive away. But, as you open \
            the door, you hear a click. Turns out, the killer put a C4 inside, and is triggered when the door is opened. \
            The killer got you, and your last thought was how dumb you were, thinking it was this easy. An instant explosion \
            occurs, and you die a brutal death, with a bang."

            tryAgainButton();

            image.src = "images/carEnding.png"
            image.alt = "Pixel art of a vintage car exploding into a massive fireball in a dark driveway."

            break;
        
        case "fenceEnding":
            question.textContent = "You try to climb the fence and escape. The fence is tall, but you reach the top. \
            Thinking that the ground on the other side is safe, you jump off again. Turns out, there are loads of bear \
            traps on the ground, but they were hidden in the grass and mud, with the rain of the storm blocking more \
            visibility. You get your limbs clamped by the bear traps, losing your legs, and an arm. You die a slow, painful death."

            tryAgainButton();

            image.src = "images/fenceEnding.png"
            image.alt = "Pixel art of a character caught in bear traps hidden in muddy grass near a tall fence."

            break;

        case "path2":
            question.textContent = "You choose to hide under the bed and wait. After what feels like the longest 10 \
            minutes of your life, the footsteps make their way to the room you're in. The door opens, and the killer \
            walks around the room, searching for you. What do you do?"

            addAnswerButton("Stay completely still", "stillCowardEnding");
            addAnswerButton("Grab the killer's feet", "retaliatePath");

            image.src = "images/path2.png"
            image.alt = "First-person pixel art view from underneath a bed looking out at a pair of muddy boots."

            break;

        case "stillCowardEnding":
            question.textContent = "As you stay still and silent, you think that you would be safe, but then, gunshots \
            are fired! As you gather yourself from the shock, you find your body in pain, bullet wounds all over you as \
            you bleed out. Turns out, the killer knew that you were there all along, because of course you would be. You \
            die a coward's death in the killer's eyes."

            tryAgainButton();

            image.src = "images/stillCoward.png"
            image.alt = "Pixel art of a masked killer firing a gun into a dark room."

            break;

        case "retaliatePath":
            question.textContent = "You choose to grab the killer's feet, and you catch the killer off guard, causing the \
            person to fall and momentarily stunned. 'This is my chance!' you think to yourself. What do you do?"

            addAnswerButton("Run out the door", "escapistPath");
            addAnswerButton("Try and grab the killer's gun", "backfireEnding");

            image.src = "images/retaliatePath.png"
            image.alt = "Action pixel art from under a bed showing hands grabbing the ankles of a standing killer."

            break;

        case "backfireEnding":
            question.textContent = "While the killer is down, you try to take the gun for yourself. As you try to pull the \
            gun from his right hand, you suddenly get stabbed on your right torso, and you see the killer holding a knife \
            on his left hand. The killer continues stabbing you until you fall. You die a painful death, with 28 stab wounds!"

            tryAgainButton();

            image.src = "images/backfireEnding.png"
            image.alt = "Pixel art close-up of a masked killer stabbing a struggling victim on the floor."

            break;

        case "escapistPath":
            question.textContent = "While the killer is down, you try and run to look for a way out. You are on the second floor. \
            What do you do?"

            addAnswerButton("Open other rooms on the 2nd floor", "lockedOutEnding");
            addAnswerButton("Go downstairs", "escapistPath2");

            image.src = "images/escapistPath.png"
            image.alt = "Pixel art of the player going out the bed and out the room, away from the killer."

            break;

        case "lockedOutEnding":
            question.textContent = "You try to open the other doors on the 2nd floor, but they are all locked. As you struggle to \
            open a door, the killer creeps up behind you, and stabs you with a knife. The killer then stabs your eyes with a key, \
            causing you to die a painful death, all because of locked doors."

            tryAgainButton();

            image.src = "images/lockedOut.png"
            image.alt = "Pixel art of a character desperately shaking a locked door handle while a killer's shadow looms behind them."

            break;

        case "escapistPath2":
            question.textContent = "You make your way downstairs, and you see the main door, and surprisingly, a shotgun displayed \
            on a statue. What do you do?"

            addAnswerButton("Go to main door", "snipedEnding");
            addAnswerButton("Grab the shotgun", "shotgunEscapistEnding");

            image.src = "images/escapistPath2.png"
            image.alt = ""

            break;

        case "snipedEnding":
            question.textContent = "You try to get out through the front door, but of course, it's locked. The killer laughs as you \
            struggle to open it, and with a clear sight of you, the killer shoots your head from the second floor. You get sniped \
            from the 2nd floor, and you die a death with a headshot."

            tryAgainButton();

            image.src = "images/snipedEnding.png"
            image.alt = "Pixel art of a character lying dead against a door with the killer visible high above on a balcony."

            break;

        case "shotgunEscapistEnding":
            question.textContent = "You grab the shotgun and hide under the stairs quickly. You wait for the killer to go down, \
            and as you hear footsteps on the step that you are under, you shoot through the stairs. You hear the killer fall down \
            the staircase, and you shoot the killer again to make sure the job is finished. You did it, you killed the killer. You \
            grab the keys from the dead body and finally escape this place. You have escaped the killer's grasp."

            tryAgainButton();

            image.src = "images/shotgunEscapist.png"
            image.alt = "Pixel art of a survivor holding a shotgun standing in an open doorway, with the killer's body in the background."

            break;
        
        case "path3":
            question.textContent = "You get out of the room, seeing that you're on the 2nd floor, and hear that the killer is downstairs. \
            What do you do?"

            addAnswerButton("Go downstairs", "bloodyStairsEnding");
            addAnswerButton("Explore the second floor", "weaponmasterPath");

            image.src = "images/path3.png"
            image.alt = "High-angle pixel art looking down from a second-floor railing at the killer's long shadow on the floor below."

            break;

        case "bloodyStairsEnding":
            question.textContent = "You go down the stairs for some reason, and the killer hears your footsteps. The killer rushes to you \
            and a chase begins. Mid-way the staircase, you turn back, but then you trip on a step, causing you to fall. This allowed the \
            killer to grab your leg. The maniac brings out a knife and cuts your achilles tendons, rendering you unable to walk. The \
            killer then stabs you in the back and spine, paralyzing you. In the end, you die a painful, paralyzing death."

            tryAgainButton();

            image.src = "images/bloodyStairs.png"
            image.alt = "Pixel art of the player dead on the stairs by the killer's hands."

            break;

        case "weaponmasterPath":
            question.textContent = "As you explore the 2nd floor, you see statues with swords. What do you do?"

            addAnswerButton("Grab the swords", "weaponmasterPath2");
            addAnswerButton("Ignore the swords", "weaponlessEnding");

            image.src = "images/weaponmaster.png"
            image.alt = "Pixel art of a weathered stone statue in a dark hallway holding a gleaming steel sword."

            break;

        case "weaponlessEnding":
            question.textContent = "You ignore the swords and keep exploring. But then, the killer goes up to the 2nd floor and sees you. \
            Being weaponless, you panic. As the killer tries to stab you, you have nothing to fight back with, and you end up getting \
            stabbed in the heart. You die wishing you picked up the sword instead."

            tryAgainButton();

            image.src = "images/weaponless.png"
            image.alt = "Pixel art of an empty-handed character cowering in a corner as a killer approaches with a knife."

            break;

        case "weaponmasterPath2":
            question.textContent = "You take the sword to equip yourself with something to fight back with. The killer goes up to the 2nd \
            floor and sees you. Locking eyes with the psycho, you knew that you had no choice but to fight. You rush to the killer with \
            the intent to cut off an arm. Which arm are you going to cut?"

            addAnswerButton("Cut killer's right arm", "weaponmasterPath3");
            addAnswerButton("Cut killer's left arm", "drawEnding");

            image.src = "images/weaponmaster2.png"
            image.alt = "Action pixel art of a player charging with a sword towards a killer who is bracing with both arms exposed."

            break;

        case "drawEnding":
            question.textContent = "You swing your sword to cut the killer's left arm, and you succeed. But then, the killer pulls \
            out a gun with their right hand, and shoots you multiple times. Both of you are heavily wounded, and you die, along with the killer."

            tryAgainButton();

            image.src = "images/drawEnding.png"
            image.alt = "Pixel art of two dead bodies in a hallway; the player shot dead, and the killer dead with a severed left arm."

            break;

        case "weaponmasterPath3":
            question.textContent = "You swing your sword to cut the killer's right arm, and you succeed. In the killer's struggle, \
            the psycho tries to stab you with the knife in their left hand. Holding a sword, you have more range and was able to \
            react in time to block the attack. You then cut the killer's head off in one clean swing, making you the victor. What now?"

            addAnswerButton("Take the killer's mask", "killerEnding");
            addAnswerButton("Leave the place with the sword", "weaponmasterEnding");

            image.src = "images/weaponmaster3.png"
            image.alt = "Pixel art of a victor holding a sword standing over the headless body and severed head of the killer."
            
            break;

        case "killerEnding":
            question.textContent = "After killing the killer, something in you has awakened. You thirst for blood, for the thrill, \
            and you thirst to kill. You take on the mantle of the killer, with the sword being your main weapon. You now kidnap \
            other people just to feel satisfaction. You have become what you once feared. You are now the killer."

            tryAgainButton();

            image.src = "images/killerEnding.png"
            image.alt = "Pixel art portrait of the main character standing in the dark wearing the killer's mask."

            break;

        case "weaponmasterEnding":
            question.textContent = "After killing the killer, you choose to finally leave this place, taking the sword that \
            helped you win. You have escaped. You have lived to tell the tale of how you became the person who killed the Gray \
            Harbor Butcher. You have brought peace to the town of Plalavin."

            tryAgainButton();

            image.src = "images/weaponmasterEnding.png"
            image.alt = "Pixel art of a hero character walking away from the mansion gates towards a bright sunrise, carrying the sword."

            break;
    }
}

function addAnswerButton(choiceText, nextState) {
    const answers = document.getElementById("answers");
    const choiceList = document.createElement("li");
    const choiceButton = document.createElement("button");

    // Displays the text of the choice within the button
    choiceButton.textContent = choiceText;

    // When a choice or button is clicked, the currentState gets updated to the corresponding next scene, 
    // and the function is ran again to render the scene
    choiceButton.onclick = () => {
        currentState = nextState;
        renderQuestion();
    }

    // Puts the buttons within the list <li> created
    choiceList.appendChild(choiceButton);

    // Adds the list of choices within the answers <ul>
    answers.appendChild(choiceList)
}

function tryAgainButton() {
    const tryAgain = document.createElement("button");
    const tryAgainButtonSection = document.getElementById("try-again-button");

    // Makes the button display "Try Again"
    tryAgain.textContent = "Play Again";

    // When the Try Again button is clicked, it changes the currentState variable to the gameStart, which is the beginning
    tryAgain.onclick = () => {
        currentState = "gameStart";
        renderQuestion()
        tryAgainButtonSection.innerHTML = "";
    }

    // Displays the button in the div I created in HTML
    tryAgainButtonSection.appendChild(tryAgain);
}

renderQuestion();