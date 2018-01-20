# Star Wars Dice App
### Overview
The Star Wars roleplaying system devised by Fantasy Flight Games involves a unique mechanic where custom dice are rolled to determine the outcome of events. As an excercise to practice my JavaScript I made two versions of a toold to track the results of these dice rolls.
### The Dice
Their are six different types of dice in the game. Ability, Proficiency, and Boost dice represent a characters ability to perform a task and factors that can assist them. Difficulty, Challenge, and Setback dice represent the inherent challenge level of a task and circumstances that make it more difficult.

Ability and Difficulty dice have eight sides. Boost and Setback dice have six sides. Proficiency and Challenge dice have twelve sides.

### The Symbols
**Success** and **Failure** represent whether a character succeeds or fails at a task. They cancel each other out, leaving the net value as the deciding factor. My result readout will display the total number of each outcome, and the net result.

**Advantage** and **Threat** represent circumstances outside of succcess or failure that will help or hurt the character. They cancel each other out, leaving the net value as the deciding factor. My result readout will display the total number of each outcome, and the net result.

**Triumph** and **Despair** are special symbols. They only occur on Proficiency and Challenge dice respectively. Each Triumph counts as one Success, and also represents something very good happening for that character.  Each Despair counts as one Failure and also something very bad happening for that character. The Success and Failure aspect do cancel each other out, but the additional good or bad event does not. For this reason, I decided to add the Success and Failure to its respective count and to display the Triumphs and Despairs separately as badges.

## Versions of this app
I originally created this app with vanilla JS and Bootstrap. That version can be found in the "Original Version Vanilla JS" folder.

I later used this as an opportunity to build my first React app. The React version is in the main folder and was built with Yarn and create-react-app