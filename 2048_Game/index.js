// console.log("Hii");
let gameArray = [
    [[],[],[],[]],
    [[],[],[],[]],
    [[],[],[],[]],
    [[],[],[],[]],
];

// gameArray[0][0] = 2;
// gameArray[0][1] = 2;


// gameArray[2][2] = 4;
// gameArray[2][3] = 4;

// gameArray[0][0] = 2;
// gameArray[0][1] = 2;
let check_game_is_over = true;

calculateData();

function calculateData() {
    check_game_is_over = true;
    for( let i=0; i<gameArray.length; i++) {
        for( let j=0; j<=3; j++) {
            // console.log(gameArray[i][j]);
            if ( gameArray[i][j] != [] && gameArray[i][j] == gameArray[i][j+1]) {
                // gameArray[i][j]
                let sum = gameArray[i][j]+gameArray[i][j+1];
                gameArray[i][j+1] = sum;
                gameArray[i][j] = [];
                // console.log(gameArray[i][j]+gameArray[i][j+1]);
            }
            //check game is over or not
            if ( gameArray[i][j] == [] || gameArray[i][j] == '') {
                check_game_is_over = false;
            }
        } 
        // console.log("------------");
    }
}




renderTheData();
function renderTheData() {
    for( let i=0; i<gameArray.length; i++) {
        for( let j=0; j<=3; j++) {
            let class_name = i+"_"+j;
            document.getElementsByClassName(class_name)[0].innerHTML = gameArray[i][j];
        } 
    }
}


document.addEventListener('keydown', function(e) {
    e.preventDefault(); // Prevent the default scrolling behavior
    if ( check_game_is_over ) {
        console.log("game is Over Now......");
        return;
    }

    let number = 2;
    if (e.keyCode === 37) {
        console.log('Left arrow pressed');
        putNumber(number);
    } else if (e.keyCode === 39) {
        console.log('Right arrow pressed');
        putNumber(number);
    } else if (e.keyCode === 38) {
        console.log('Up arrow pressed');
        putNumber(number);
    } else if (e.keyCode === 40) {

        console.log('Down arrow pressed');
        // console.log(2);
        putNumber(number);
    }
});


function putNumber( number ) {
    
    for( let i=0; i<gameArray.length; i++) {
        for( let j=0; j<=3; j++) {
            if( gameArray[i][j] == [] || gameArray[i][j] == '') {
                // gameArray[i][j]
                console.log();
                let class_name = i+"_"+j;
                // document.getElementsByClassName(class_name)[0].innerHTML = number;
                gameArray[i][j] = number;
                // exit;
                calculateData()
                renderTheData();
                return;
            }
            // console.log(gameArray[i][j]+gameArray[i][j+1]);
            
        } 
    }
}