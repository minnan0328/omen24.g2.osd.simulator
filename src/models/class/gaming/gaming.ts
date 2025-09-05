import { ModeType } from "@/types";
import type { Nodes } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import AndFreeSyncNode from './_amd-free-sync';
import ResponseTimeNodes from './_response-rime-nodes';
const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const AndFreeSyncNodeEnum = new AndFreeSyncNode();
const ResponseTimeNodesEnum = new ResponseTimeNodes();

export class Gaming extends DefaultNodes implements Nodes {
    key = "Gaming";
    selected = null;
    result = null;
    displayValue = true;
    size = 3;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Spiele",
        SimplifiedChinese: "游戏",
        TraditionalChinese: "遊戲",
        English: "Games",
        Español: "Juegos",
        French: "Jeux",
        Italian: "Giochi",
        Japanese: "ゲーム",
        Nederlands: "Gaming",
        BrazilianPortuguese: "Jogos",
        Russian: "Игры"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(AndFreeSyncNodeEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResponseTimeNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}