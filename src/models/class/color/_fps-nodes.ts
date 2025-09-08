import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';
export default class FPSNodes extends DefaultNodes implements Nodes {
    key = "FPS";
    selected = "FPS";
    result = "FPS";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "FPS",
        SimplifiedChinese: "第一人称射击游戏",
        TraditionalChinese: "第一人稱射擊遊戲",
        English: "FPS",
        Español: "FPS",
        French: "IPS",
        Italian: "FPS",
        Japanese: "FPS",
        Nederlands: "FPS",
        BrazilianPortuguese: "FPS",
        Russian: "FPS"
    };
};