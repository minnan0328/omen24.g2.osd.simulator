import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';
const DefaultNodesEnum = new DefaultNodes();

export default class SpeedrunTimerNodes extends DefaultNodes implements Nodes {
    key = "SpeedrunTimer";
    displayValue = true;
    selected = 20;
    result = 20;
    mode = ModeType.timer;
    language = {
        German: "Speedrun Timer",
        SimplifiedChinese: "竞速计时器",
        TraditionalChinese: "競速計時器",
        English: "Speedrun Timer",
        Español: "Temporizador de speedrun",
        French: "Minuterie de speedrun",
        Italian: "Timer velocità di esecuzione",
        Japanese: "スピードランタイマー",
        Nederlands: "Speedrun-timer",
        BrazilianPortuguese: "Temporizador de speedrun",
        Russian: "Таймер скоростн. прохождения"
    }
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "SpeedrunTimer",
            selected: this.selected,
            result: this.result,
            parents: this.key,
            mode: ModeType.timer,
            language: this.language
        }
    ]
};