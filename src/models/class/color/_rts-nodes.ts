import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

export default class RTSNodes extends DefaultNodes implements Nodes {
    key = "RTS";
    selected = "RTS";
    result = "RTS";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "RTS",
        SimplifiedChinese: "即时战略游戏",
        TraditionalChinese: "即時策略遊戲",
        English: "RTS",
        Español: "RTS",
        French: "RTS",
        Italian: "RTS",
        Japanese: "RTS",
        Nederlands: "RTS",
        BrazilianPortuguese: "RTS",
        Russian: "RTS"
    };
};