let ALL_GAME_OBJECTS = [];

export class AllGameObject {
    constructor() {
        ALL_GAME_OBJECTS.push(this);

        this.timedelta = 0;
        this.has_call_start = false;
    }

    start() {

    }

    update() {

    }

    destory() {
        for (let i in ALL_GAME_OBJECTS) {
            if (ALL_GAME_OBJECTS[i] === this) {
                ALL_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;

let ALL_GAME_OBJECTS_FRAME = (timestamp) => {
    for (let obj of ALL_GAME_OBJECTS) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(ALL_GAME_OBJECTS_FRAME);
}

requestAnimationFrame(ALL_GAME_OBJECTS_FRAME);