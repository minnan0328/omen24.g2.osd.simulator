import { ModeType } from "@/types";
import type { Nodes } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../../_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class Configure extends DefaultNodes implements Nodes {
    key = "Configure";
    selected = ["option 1 bmp", "option 2 bmp", "option 3 bmp"];
    result = ["option 1 bmp", "option 2 bmp", "option 3 bmp"];
    size = 6;
    page = 1;
    mode = ModeType.checkBox;
    language = {
        German: "Konfigurieren",
        SimplifiedChinese: "配置",  
        TraditionalChinese: "設定",
        English: "Configure",
        Español: "Configurar",
        French: "Configurer",
        Italian: "Configura",
        Japanese: "構成",
        Nederlands: "Configureren",
        BrazilianPortuguese: "Configurar",
        Russian: "Настроить"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "option1bmp",
            selected: "option 1 bmp",
            result: "option 1 bmp",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Option 1 BMP",
                SimplifiedChinese: "选项 1 BMP",
                TraditionalChinese: "選項 1 BMP",
                English: "Option 1 BMP",
                Español: "Opción 1 BMP",
                French: "Option 1 BMP",
                Italian: "Opzione 1 BMP",
                Japanese: "オプション 1 BMP",
                Nederlands: "Optie 1 BMP",
                BrazilianPortuguese: "Opção 1 BMP",
                Russian: "Опция 1 BMP"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "option2bmp",
            selected: "option 2 bmp",
            result: "option 2 bmp",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Option 2 BMP",
                SimplifiedChinese: "选项 2 BMP",
                TraditionalChinese: "選項 2 BMP",
                English: "Option 2 BMP",
                Español: "Opción 2 BMP",
                French: "Option 2 BMP",
                Italian: "Opzione 2 BMP",
                Japanese: "オプション 2 BMP",
                Nederlands: "Optie 2 BMP",
                BrazilianPortuguese: "Opção 2 BMP",
                Russian: "Опция 2 BMP"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "option3bmp",
            selected: "option 3 bmp",
            result: "option 3 bmp",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Option 3 BMP",
                SimplifiedChinese: "选项 3 BMP",
                TraditionalChinese: "選項 3 BMP",
                English: "Option 3 BMP",
                Español: "Opción 3 BMP",
                French: "Option 3 BMP",
                Italian: "Opzione 3 BMP",
                Japanese: "オプション 3 BMP",
                Nederlands: "Optie 3 BMP",
                BrazilianPortuguese: "Opção 3 BMP",
                Russian: "Опция 3 BMP"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "option4bmp",
            selected: "option 4 bmp",
            result: "option 4 bmp",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Option 4 BMP",
                SimplifiedChinese: "选项 4 BMP",
                TraditionalChinese: "選項 4 BMP",
                English: "Option 4 BMP",
                Español: "Opción 4 BMP",
                French: "Option 4 BMP",
                Italian: "Opzione 4 BMP",
                Japanese: "オプション 4 BMP",
                Nederlands: "Optie 4 BMP",
                BrazilianPortuguese: "Opção 4 BMP",
                Russian: "Опция 4 BMP"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "option5bmp",
            selected: "option 5 bmp",
            result: "option 5 bmp",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Option 5 BMP",
                SimplifiedChinese: "选项 5 BMP",
                TraditionalChinese: "選項 5 BMP",
                English: "Option 5 BMP",
                Español: "Opción 5 BMP",
                French: "Option 5 BMP",
                Italian: "Opzione 5 BMP",
                Japanese: "オプション 5 BMP",
                Nederlands: "Optie 5 BMP",
                BrazilianPortuguese: "Opção 5 BMP",
                Russian: "Опция 5 BMP"
            }
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}