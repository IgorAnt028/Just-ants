var canvas = document.getElementById("canvas");
var draw = canvas.getContext('2d');

class Ant {
    constructor(index, x, y) {
        this.index = index;
        this.x = x;
        this.y = y;
    }

    move(ant) {
        var dir = getRandomInt(1, 4);
        switch (dir) {
            case 1:
                ant.x++;
                break;
            case 2:
                ant.y++;
                break;
            case 3:
                ant.x--;
                break;
            case 4:
                ant.y--;
                break;
        };

        var pixelColor = draw.getImageData(10 * ant.x, 10 * ant.y, 1, 1).data;

        if ((pixelColor[0] == 255 && pixelColor[1] == 255 && pixelColor[2] == 255) || pixelColor[3] == 0) {
            draw.fillStyle = "rgb(" + Math.random() * (255 - 1) + 1 + "," + Math.random() * (255 - 1) + 1 + "," + Math.random() * (255 - 1) + 1 + ")";
            draw.fillRect(10 * ant.x, 10 * ant.y, 10, 10);
        }
        else {
            draw.fillStyle = "rgb(255,255,255,255)";
            draw.fillRect(10 * ant.x, 10 * ant.y, 10, 10);
        };
    }
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ants = [];

for(let i = 1; i <= 1000; i++){
    ants[i] = new Ant(i, 250, 250);
}

var moveAll = function(){
    ants.forEach(ant => {
        ant.move(ant);
    });
};

inter = setInterval(moveAll, 1);
