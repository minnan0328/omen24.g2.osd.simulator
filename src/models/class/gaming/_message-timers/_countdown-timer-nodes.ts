import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';
const DefaultNodesEnum = new DefaultNodes();

export default class CountdownTimerNodes extends DefaultNodes implements Nodes {
    key = "CountdownTimer";
    assignDisplay = false;
    displayValue = true;
    selected = 20;
    result = 20;
    mode = ModeType.radio;
    language = {
        German: "Countdown",
        SimplifiedChinese: "倒计时计时器",
        TraditionalChinese: "倒數計時器",
        English: "Countdown Timer",
        Español: "Temporizador de cuenta atrás",
        French: "Compte à rebours",
        Italian: "Timer conto alla rovescia",
        Japanese: "カウントダウン タイマー",
        Nederlands: "Afteltimer",
        BrazilianPortuguese: "Temporizador decrescente",
        Russian: "Таймер обратного отсчета"
    }
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "CountdownTimerSet",
            selected: this.selected,
            result: this.result,
            parents: this.key,
            mode: ModeType.timer,
            language: this.language
        }
    ]
};