import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../../_utilities';
import WhileNodes from './_white';
import RedNodes from './_red';
import GreenNodes from './_green';
import BlueNodes from './_blue';
import YellowNodes from './_yellow';
import PurpleNodes from './_purple';
import LightBlue from './_light-blue';
import OrangeNodes from './_orange';

const WhileNodesEnum = new WhileNodes();
const RedNodesEnum = new RedNodes();
const GreenNodesEnum = new GreenNodes();
const BlueNodesEnum = new BlueNodes();
const YellowNodesEnum = new YellowNodes();
const PurpleNodesEnum = new PurpleNodes();
const LightBlueNodesEnum = new LightBlue();
const OrangeNodesEnum = new OrangeNodes();
const BackNodesEnum = new BackNodes();

export default class Color extends DefaultNodes implements Nodes {
    key = "Color";
    selected = WhileNodesEnum.selected;
    result = WhileNodesEnum.result;
    displayValue = true;
    size = 9;
    page = 1;
    mode = ModeType.radio;
    language = {
        German: "Farbe",
        SimplifiedChinese: "颜色",
        TraditionalChinese: "色彩",
        English: "Color",
        Español: "Color",
        French: "Couleur",
        Italian: "Colore",
        Japanese: "色",
        Nederlands: "Kleur",
        BrazilianPortuguese: "Cor",
        Russian: "Цвет"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(WhileNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(RedNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(GreenNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BlueNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(YellowNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(PurpleNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(LightBlueNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(OrangeNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}
