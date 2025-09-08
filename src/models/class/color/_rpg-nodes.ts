import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

export default class RPGNodes extends DefaultNodes implements Nodes {
    key = "RPG";
    selected = "RPG";
    result = "RPG";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "Rollenspiel",
        SimplifiedChinese: "角色扮演游戏",
        TraditionalChinese: "角色扮演遊戲",
        English: "RPG",
        Español: "RPG",
        French: "RPG",
        Italian: "RPG",
        Japanese: "RPG",
        Nederlands: "RPG",
        BrazilianPortuguese: "RPG",
        Russian: "RPG"
    };
};