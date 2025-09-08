import { useStore } from '@/stores/index';
import { OffNodes } from '@/models/class/_utilities';

const store = useStore();
const OffNodesEnum = new OffNodes();


export const BrightnessDefaultValueEnum = {
    // FPS
    [store.$state.color.nodes[0].result as string]: 68,
    // RPG
    [store.$state.color.nodes[1].result as string]: 52,
    // RTS
    [store.$state.color.nodes[2].result as string]: 68,
    // sRGB
    [store.$state.color.nodes[3].result as string]: 52,
    // Native
    [store.$state.color.nodes[4].result as string]: 100,
    // Cinema
    [store.$state.color.nodes[5].result as string]: 20,
    // Night
    [store.$state.color.nodes[6].result as string]: 52,
    // HP Enhance+
    [store.$state.color.nodes[7].result as string]: 68,
    // RGB Gain Adjust
    [store.$state.color.nodes[8].result as string]: 100,
};

export function setBrightnessDefaultValue() {
    store.$state.information.nodes[2].selected = store.$state.color.selected;
    store.$state.information.nodes[2].result = store.$state.color.result;
    
    store.$state.image.nodes[0].selected = BrightnessDefaultValueEnum[store.$state.color.selected];
    store.$state.image.nodes[0].result = BrightnessDefaultValueEnum[store.$state.color.result];
    store.$state.image.nodes[0].nodes![0].selected = BrightnessDefaultValueEnum[store.$state.color.selected];
    store.$state.image.nodes[0].nodes![0].result = BrightnessDefaultValueEnum[store.$state.color.result];


    // 當 color 是 HP Enhance+ 時 brightness 的 dynamic contrast 為 disable 並且關閉
    if(store.$state.color.result == store.$state.color.nodes[5].result) {
        
        // 動態對比設定 Dynamic Contrast
        store.$state.image.nodes[2].disabled = true;
        store.$state.image.nodes[2].result = OffNodesEnum.result;
        store.$state.image.nodes[2].selected = OffNodesEnum.selected;
    }
};