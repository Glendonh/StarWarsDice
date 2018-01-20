export function rollPool({ abilityDice, proficiencyDice, boostDice, difficultyDice, challengeDice, setbackDice }) {
    var successCount = 0;
    var advantageCount = 0;
    var failureCount = 0;
    var threatCount = 0;
    var triumphCount = 0;
    var despairCount = 0;

    
    
    function roll(sides) {
        return Math.floor(Math.random() * sides) + 1;
    };
    
    function rollAbility() {
        for (var i = 0; i < abilityDice; i++) {
            abilityParse();
        };
    }

    function rollProficiency() {
        for (var i = 0; i < proficiencyDice; i++) {
            proficiencyParse();
        }
    }

    function rollBoost() {
        for (var i = 0; i < boostDice; i++) {
            boostParse();
        }
    }

    function rollDifficulty() {
        for (var i = 0; i < difficultyDice; i++) {
            difficultyParse();
        }
    }

    function rollChallenge() {
        for (var i = 0; i < challengeDice; i++) {
            challengeParse();
        }
    }

    function rollSetback() {
        for (var i = 0; i < setbackDice; i++) {
            setbackParse();
        }
    }

    function abilityParse() {
        switch (roll(8)) {
            case 1:
                break;
            case 2:
                successCount += 1;
                break;
            case 3:
                successCount += 1;
                break;
            case 4:
                successCount += 2;
                break;
            case 5:
                advantageCount += 1;
                break;
            case 6:
                advantageCount += 1;
                break;
            case 7:
                successCount += 1;
                advantageCount += 1;
                break;
            case 8:
                advantageCount += 2;
                break;
        }
    }

    function proficiencyParse() {
        switch (roll(12)) {
            case 1:
                break;
            case 2:
                successCount += 1;
                break;
            case 3:
                successCount += 1;
                break;
            case 4:
                successCount += 2;
                break;
            case 5:
                successCount += 2;
                break;
            case 6:
                advantageCount += 1;
                break;
            case 7:
                successCount += 1;
                advantageCount += 1;
                break;
            case 8:
                successCount += 1;
                advantageCount += 1;
                break;
            case 9:
                successCount += 1;
                advantageCount += 1;
                break;
            case 10:
                advantageCount += 2;
                break;
            case 11:
                advantageCount += 2;
                break;
            case 12:
                successCount += 1;
                triumphCount++;
                break;
        }
    }

    function boostParse() {
        switch (roll(6)) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                advantageCount += 2;
                break;
            case 4:
                advantageCount += 1;
                break;
            case 5:
                advantageCount += 1;
                successCount += 1;
                break;
            case 6:
                threatCount += 1;
                break;
        }
    }

    function difficultyParse() {
        switch (roll(8)) {
            case 1:
                break;
            case 2:
                failureCount += 1;
                break;
            case 3:
                failureCount += 2;
                break;
            case 4:
                threatCount += 1;
                break;
            case 5:
                threatCount += 1;
                break;
            case 6:
                threatCount += 1;
                break;
            case 7:
                threatCount += 2;
                break;
            case 8:
                failureCount += 1;
                threatCount += 1;
                break;
        }
    }

    function challengeParse() {
        switch (roll(12)) {
            case 1:
                break;
            case 2:
                failureCount += 1;
                break;
            case 3:
                failureCount += 1;
                break;
            case 4:
                failureCount += 2;
                break;
            case 5:
                failureCount += 2;
                break;
            case 6:
                threatCount += 1;
                break;
            case 7:
                threatCount += 1;
                break;
            case 8:
                failureCount += 1;
                threatCount += 1;
                break;
            case 9:
                failureCount += 1;
                threatCount += 1;
                break;
            case 10:
                threatCount += 2;
                break;
            case 11:
                threatCount += 2;
                break;
            case 12:
                failureCount += 1;
                despairCount++;
                break;
        }
    }

    function setbackParse() {
        switch (roll(6)) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                failureCount += 1;
                break;
            case 4:
                failureCount += 1;
                break;
            case 5:
                threatCount += 1;
                break;
            case 6:
                threatCount += 1;
                break;
        }
    }

    rollAbility();
    rollProficiency();
    rollBoost();
    rollDifficulty();
    rollChallenge();
    rollSetback();
    var rollResult = {successCount, advantageCount, failureCount, threatCount, triumphCount, despairCount}
    return rollResult
}