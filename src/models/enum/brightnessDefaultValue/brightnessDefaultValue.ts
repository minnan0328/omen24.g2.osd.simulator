import { useMenuStore } from '@/stores/index';
import { OffNodes } from '@/models/class/_utilities';

const menuStore = useMenuStore();
const OffNodesEnum = new OffNodes();


export const BrightnessDefaultValueEnum = {
    // FPS
    [menuStore.$state.color.nodes[0].result as string]: 68,
    // RPG
    [menuStore.$state.color.nodes[1].result as string]: 52,
    // RTS
    [menuStore.$state.color.nodes[2].result as string]: 68,
    // sRGB
    [menuStore.$state.color.nodes[3].result as string]: 52,
    // Native
    [menuStore.$state.color.nodes[4].result as string]: 100,
    // Cinema
    [menuStore.$state.color.nodes[5].result as string]: 20,
    // Night
    [menuStore.$state.color.nodes[6].result as string]: 52,
    // HP Enhance+
    [menuStore.$state.color.nodes[7].result as string]: 68,
    // RGB Gain Adjust
    [menuStore.$state.color.nodes[8].result as string]: 100,
};

export function setBrightnessDefaultValue() {
    menuStore.$state.information.nodes[2].selected = menuStore.$state.color.selected;
    menuStore.$state.information.nodes[2].result = menuStore.$state.color.result;
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    
    menuStore.$state.image.nodes[0].result = colorResult.brightness;
    menuStore.$state.color.nodes[8].nodes![0].result = colorResult.rgb.r;
    menuStore.$state.color.nodes[8].nodes![1].result = colorResult.rgb.g;
    menuStore.$state.color.nodes[8].nodes![2].result = colorResult.rgb.b;

    menuStore.$state.image.nodes[0].selected = colorResult.brightness;
    menuStore.$state.color.nodes[8].nodes![0].selected = colorResult.rgb.r;
    menuStore.$state.color.nodes[8].nodes![1].selected = colorResult.rgb.g;
    menuStore.$state.color.nodes[8].nodes![2].selected = colorResult.rgb.b;

    // 當 color 是 HP Enhance+ 時 brightness 的 dynamic contrast 為 disable 並且關閉
    if(menuStore.$state.color.result == menuStore.$state.color.nodes[7].result) {
        menuStore.$state.image.nodes[2].disabled = true;
        menuStore.$state.image.nodes[2].result = OffNodesEnum.result;
        menuStore.$state.image.nodes[2].selected = OffNodesEnum.selected;
    }
};