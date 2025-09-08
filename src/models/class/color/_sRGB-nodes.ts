import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';
export default class sRGBNodes extends DefaultNodes implements Nodes {
    key = "sRGB";
    selected = "sRGB";
    result = "sRGB";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "sRGB",
        SimplifiedChinese: "标准RGB",
        TraditionalChinese: "標準RGB",
        English: "sRGB",
        Español: "sRGB",
        French: "sRGB",
        Italian: "sRGB",
        Japanese: "sRGB",
        Nederlands: "sRGB",
        BrazilianPortuguese: "sRGB",
        Russian: "sRGB"
    };
};