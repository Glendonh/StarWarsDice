var abilityDice = 0;
var proficiencyDice = 0;
var boostDice = 0;
var difficultyDice = 0;
var challengeDice = 0;
var setbackDice = 0;

var successCount = 0;
var advantageCount = 0;
var failureCount = 0;
var threatCount = 0;
var triumphCount = 0;
var despairCount = 0;

$('#rollButton').click(function () {
    diceCount();
    $('.resultBox').show();
    resetTotals();
    rollPool();
    printResults();
});

function roll(sides) {
    return Math.floor(Math.random() * sides) + 1;
};

function rollPool() {
    rollAbility();
    rollDifficulty();
    rollBoost();
    rollSetback();
    rollProficiency();
    rollChallenge();
}

function diceCount() {
    abilityDice = parseInt($('#abilityDice').val());
    proficiencyDice = parseInt($('#proficiencyDice').val());
    boostDice = parseInt($('#boostDice').val());
    difficultyDice = parseInt($('#difficultyDice').val());
    challengeDice = parseInt($('#challengeDice').val());
    setbackDice = parseInt($('#setbackDice').val());
}

function resetTotals() {
    successCount = 0;
    advantageCount = 0;
    failureCount = 0;
    threatCount = 0;
    triumphCount = 0;
    despairCount = 0;
}

function rollAbility() {
    for (i = 0; i < abilityDice; i++) {
        abilityParse();
    };
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

function rollDifficulty() {
    for (i = 0; i < difficultyDice; i++) {
        difficultyParse();
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

function rollBoost() {
    for (i = 0; i < boostDice; i++) {
        boostParse();
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

function rollSetback() {
    for (i = 0; i < setbackDice; i++) {
        setbackParse();
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

function rollProficiency() {
    for (i = 0; i < proficiencyDice; i++) {
        proficiencyParse();
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

function rollChallenge() {
    for (i = 0; i < challengeDice; i++) {
        challengeParse();
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


function printResults() {
    $("#successResult").text(successCount);
    $('#advantageResult').text(advantageCount);
    $("#failureResult").text(failureCount);
    $('#threatResult').text(threatCount);
    netSuccess();
    netAdvantage();
    displayTriumph();
    displayDespair();
}

function displayTriumph() {
    $('#triumphSpan').empty();
    for (i = 0; i < triumphCount; i++) {
        $('#triumphSpan').append("<span class=\"badge badge-warning\">Triumph!</span>");
    }
}

function displayDespair() {
    $('#despairSpan').empty();
    for (i = 0; i < despairCount; i++) {
        $('#despairSpan').append("<span class=\"badge badge-danger\">Despair</span>");
    }
}

function netAdvantage() {
    if (advantageCount > threatCount) {
        $('#netAdvantage').text(advantageCount - threatCount + ' Advantages');
    } else if (threatCount > advantageCount) {
        $('#netAdvantage').text(threatCount - advantageCount + ' Threats');
    } else {
        $('#netAdvantage').text(0);
    }

}

function netSuccess() {
    if (successCount > failureCount) {
        $('#netSuccess').text(successCount - failureCount + ' Successes');
    } else if (failureCount > successCount) {
        $('#netSuccess').text(failureCount - successCount + ' Failures');
    } else {
        $('#netSuccess').text(0);
    }

}
