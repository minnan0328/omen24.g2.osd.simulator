import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class LocationNodes extends DefaultNodes implements Nodes {
    key = "CrosshairLocation";
    result = { x: 0, y: 0 };
    selected = { x: 0, y: 0 };
    assignItemDisplay = false;
    disabled = true;
    mode = ModeType.button;
    language = {
        German: "Speicherort",
        SimplifiedChinese: "位置",
        TraditionalChinese: "位置",
        English: "Location",
        Español: "Ubicación",
        French: "Emplacement",
        Italian: "Posizione",
        Japanese: "場所",
        Nederlands: "Locatie",
        BrazilianPortuguese: "Localização",
        Russian: "Местоположение"
    };
}