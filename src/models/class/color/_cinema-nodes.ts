import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';
export default class CinemaNodes extends DefaultNodes implements Nodes {
    key = "Cinema";
    selected = "Cinema";
    result = "Cinema";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "Kino",
        SimplifiedChinese: "影院",
        TraditionalChinese: "劇院",
        English: "Cinema",
        Español: "Cine",
        French: "Cinéma",
        Italian: "Cinema",
        Japanese: "シネマ",
        Nederlands: "Bioscoop",
        BrazilianPortuguese: "Cinema",
        Russian: "Кино"
    };
};