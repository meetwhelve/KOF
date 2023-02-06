import { GameMap } from '/static/js/game_map.js';
import { Kyo } from '/static/js/player/kyo.js';

export class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);
        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 800,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ];
    }
}