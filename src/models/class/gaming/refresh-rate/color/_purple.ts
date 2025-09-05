import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../../_utilities';

export default class Purple extends DefaultNodes implements Nodes {
    key = "Purple";
    selected = "Purple";
    result = "Purple";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "Lila",
        SimplifiedChinese: "紫色",
        TraditionalChinese: "紫色",
        English: "Purple",
        Español: "Morado",
        French: "Violet",
        Italian: "Viola",
        Japanese: "紫",
        Nederlands: "Paars",
        BrazilianPortuguese: "Roxo",
        Russian: "Фиолетовый"
    };
}
