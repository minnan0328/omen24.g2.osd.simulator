import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class LocationNodes extends DefaultNodes implements Nodes {
    key = "CrosshairLocation";
    result = { x: 460, y: 243 };
    selected = { x: 460, y: 243 };
    assignItemDisplay = false;
    disabled = true;
    rangeMin = { x: -10, y: -10 };
    rangeMax = { x: 940, y: 506 };
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