// 功能表 > 指定鍵

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';
import { 
    AssignBrightnessNodes,
    AssignColorNodes,
    AssignDisplayInformationNodes,
    AssignNextActiveInputNodes,
    AssignMessageTimersNodes,
    AssignRefreshRateNodes,
    AssignCrosshairNodes,
    AssignEmptyNodes
} from './_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const AssignBrightnessNodesEnum = new AssignBrightnessNodes();
const AssignColorNodesEnum = new AssignColorNodes();
const AssignDisplayInformationNodesEnum = new AssignDisplayInformationNodes();
const AssignNextActiveInputNodesEnum = new AssignNextActiveInputNodes();
const AssignMessageTimersNodesEnum = new AssignMessageTimersNodes();
const AssignRefreshRateNodesEnum = new AssignRefreshRateNodes();
const AssignCrosshairNodesEnum = new AssignCrosshairNodes();
const AssignEmptyNodesEnum = new AssignEmptyNodes();

// 共用 nodes 陣列
const assignButtonNodes = [
    {
        ...JSON.parse(JSON.stringify(AssignBrightnessNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignColorNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignDisplayInformationNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignNextActiveInputNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignMessageTimersNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignRefreshRateNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignCrosshairNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignEmptyNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(BackNodesEnum)),
        parents: ""
    }
];

export default class AssignButtonsNodes extends DefaultNodes implements Nodes {
    key = "AssignButtons";
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Tasten zuweisen",
        SimplifiedChinese: "指定按钮",
        TraditionalChinese: "指定鍵",
        English: "Assign Buttons",
        Español: "Asignar botones",
        French: "Attribuer boutons",
        Italian: "Assegna pulsanti",
        Japanese: "ボタンの割り当て",
        Nederlands: "Knoppen toewijzen",
        BrazilianPortuguese: "Atribuir botões",
        Russian: "Назначить кнопки"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignButton1",
            selected: AssignBrightnessNodesEnum.selected,
            result: AssignBrightnessNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Taste 1 zuweisen",
                SimplifiedChinese: "指定按钮 1",
                TraditionalChinese: "指定鍵 1",
                English: "Assign Button 1",
                Español: "Asignar botón 1",
                French: "Attribuer bouton 1",
                Italian: "Assegna pulsante 1",
                Japanese: "ボタン1の割り当て",
                Nederlands: "Knop 1 toewijzen",
                BrazilianPortuguese: "Atribuir botões 1",
                Russian: "Назначить кнопку 1"
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton1" }))
        },
        {   
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignButton2",
            selected: AssignColorNodesEnum.selected,
            result: AssignColorNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Taste 2 zuweisen",
                SimplifiedChinese: "指定按钮 2",
                TraditionalChinese: "指定鍵 2",
                English: "Assign Button 2",
                Español: "Asignar botón 2",
                French: "Attribuer bouton 2",
                Italian: "Assegna pulsante 2",
                Japanese: "ボタン2の割り当て",
                Nederlands: "Knop 2 toewijzen",
                BrazilianPortuguese: "Atribuir botões 2",
                Russian: "Назначить кнопку 2"
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton2" }))
        },
        {   
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignButton3",
            selected: AssignNextActiveInputNodesEnum.selected,
            result: AssignNextActiveInputNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Taste 3 zuweisen",
                SimplifiedChinese: "指定按钮 3",
                TraditionalChinese: "指定鍵 3",
                English: "Assign Button 3",
                Español: "Asignar botón 3",
                French: "Attribuer bouton 3",
                Italian: "Assegna pulsante 3",
                Japanese: "ボタン3の割り当て",
                Nederlands: "Knop 3 toewijzen",
                BrazilianPortuguese: "Atribuir botões 3",
                Russian: "Назначить кнопку 3"
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton3" }))
        },
        {   
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignButton4",
            selected: AssignNextActiveInputNodesEnum.selected,
            result: AssignNextActiveInputNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Taste 4 zuweisen",
                SimplifiedChinese: "指定按钮 4",
                TraditionalChinese: "指定鍵 4",
                English: "Assign Button 4",
                Español: "Asignar botón 4",
                French: "Attribuer bouton 4",
                Italian: "Assegna pulsante 4",
                Japanese: "ボタン4の割り当て",
                Nederlands: "Knop 4 toewijzen",
                BrazilianPortuguese: "Atribuir botões 4",
                Russian: "Назначить кнопку 4"
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton4" }))
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};
