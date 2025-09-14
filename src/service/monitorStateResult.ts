import { ref, computed } from 'vue';
import type { Nodes } from '@/types';
import { useMenuStore, useDiagnosticPatternsStore, useMessageTimersStore } from '@/stores/index';
import { OnNodes, OffNodes, TopNodes, MediumNodes, BottomNodes, LowNodes, HighNodes } from '@/models/class/_utilities';
import screenOff from '@/assets/images/screen-off.jpg';
import screenLow from '@/assets/images/screen-low.jpg';
import screenMedium from '@/assets/images/screen-medium.jpg';
import screenHigh from '@/assets/images/screen-high.jpg';

const menuStore = useMenuStore();
const diagnosticPatternsStore = useDiagnosticPatternsStore();
const messageTimersStore = useMessageTimersStore();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
const TopNodesEnum = new TopNodes();
const BottomNodesEnum = new BottomNodes();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

const brightness = computed(()=> menuStore.$state.image.nodes[0]);
const gaming = computed(()=> menuStore.$state.gaming);
const color = computed(()=> menuStore.$state.color);
const image = computed(()=> menuStore.$state.image);
const input = computed(()=> menuStore.$state.input);
const power = computed(()=> menuStore.$state.power);
const menu = computed(()=> menuStore.$state.menu);
const management = computed(()=> menuStore.$state.management);
const information = computed(()=> menuStore.$state.information);

const monitorWidth = 960;
const monitorHeight = 526;
const menuWidth = 480;
const menuHeight = 356;

// 螢幕與圖片設定
export const monitorScreenResult = computed(() => {
    return {
        // 取得桌面圖片
        image: screenOff,
        monitorSize: {
            monitorWidth: `${monitorWidth}px`,
            monitorHeight: `${monitorHeight}px`
        }, 
        // 取得亮度值 Brightness
        brightness: `${brightness.value.nodes[0].result}%`,
        // 取得對比值 Contrast
        contrast: `${brightness.value.nodes[0].result}%`,
        RGB: toImageColor.value,
        // 取得銳利度
        sharpness: getSharpness.value,
        // 取得診斷模式顏色
        diagnosticPatterns: diagnosticPatternsStore.$state.diagnosticPatterns,
        // 取得影像位置座標 Image Position
        imagePosition: {
            // x 座標
            x: input.value.result == "VGA" ? `${(((image.value.nodes[2].nodes![0].result as number) / 100) * (20 - (-20)) - 20)}px` : 0,
            // y 座標
            y: input.value.result == "VGA" ? `${(((image.value.nodes[2].nodes![1].result as number) / 100) * (20 - (-20)) - 20)}px` : 0
        },
        // 取得影像縮放設定 Image Scaling
        imageScaling: image.value.nodes[5].result.replace(/\s+/g, ''),
        // 當前更新率
        refFreshRate: {
            key: gaming.value.nodes[2].key,
            enabled: gaming.value.nodes[2].result == OnNodesEnum.result,
            color: gaming.value.nodes[2].nodes[2].result,
            location: gaming.value.nodes[2].nodes[3].result,
            rate: 120
        },
        // 取得訊息顯示時間
        messageTimers: messageTimersStore.$state.messageTimers
    }
});

// 選單狀態設定
export const menuStateResult = computed(() => {
    // 選單 100% 時的 x 座標 - 預設百分比的 x 座標 - 8
    const maxDecrease = 98; // 經過計算後的最大遞減值
    const increaseThreshold = 98;
    const decreaseThreshold = 100;
    // 計算遞增係數
    const increase = maxDecrease / increaseThreshold;
    // 計算遞減係數
    const decrease = maxDecrease / (decreaseThreshold - increaseThreshold);
    // 計算 deviation 的值
    let deviation: number;

    if (menu.value.nodes[1].nodes![0].result as number <= increaseThreshold) {
        // 遞增值 * 目前選單百分比
        deviation = (increase * menu.value.nodes[1].nodes![0].result as number) ;
    } else { 
        // 最大遞減基準值 - 遞減值 * 100 - 預設版分比
        deviation = (maxDecrease - decrease) * (100 - increaseThreshold);
    }

    // 取得選單旋轉角度
    let getMenuRotation = extractStringFromParentheses(menu.value.nodes[4].result);

    return {
        // 選單寬度與高度
        menuSize: {
            menuWidth: `${menuWidth}px`,
            menuHeight: `${menuHeight}px`,
        },
        // 選單座標位置，旋轉角度的座標位置為 demo 使用，當返回上一步時，就會復原原本選單角度
        menuPosition: {
            // 水平
            x: getMenuRotation == 90 || getMenuRotation ==  270 ? "440px" : `${(menu.value.nodes[1].nodes![0].result as number / 100) * ((monitorWidth) - menuWidth) - (deviation)}px`,
            // 垂直
            y: getMenuRotation == 90 || getMenuRotation ==  270 ? "70px" : `${(menu.value.nodes[1].nodes![1].result as number / 100) * ((monitorHeight - menuHeight) - 5) + 5}px`
        },
        // 選單透明度
        menuTransparency: ((10 - (menu.value.nodes[2].result as number)) / 10) + 0.2,
        // 選單顯示時間
        menuTimeout: menu.value.nodes[3].result,
        // 選單旋轉角度
        menuRotationValue: getMenuRotation,
        // 選單旋轉角度 css 設定使用
        menuRotation: `-${getMenuRotation}deg`,
        // 螢幕 OSD 訊息
        OSDMessage: {
            // 取得是否螢幕電源開啟時顯示 LOGO
            powerOnLogo: (menu.value.nodes[5].result as string).includes(menu.value.nodes[5].nodes![0].result as string),
            // 取得是否顯示無輸入端警告
            noInputSignalWarning: (menu.value.nodes[5].result as string).includes(menu.value.nodes[5].nodes![1].result as string),
            // 取得是否啟用確認變更訊息 Confirm Change Message
            confirmMessage: (menu.value.nodes[5].result as string).includes(menu.value.nodes[5].nodes![2].result as string),
        },
        // 取得螢幕狀態
        monitorStatus: {
            // 取得是否顯示螢幕狀態視窗
            show: menu.value.nodes[5].nodes![3].result != OffNodesEnum.result ? true : false,
            // 取得螢幕狀態
            nodes: menu.value.nodes[5].nodes![3]
        },
        // 取得輸入端
        input: input.value,
        // 取得輸入端自動切換輸入
        autoSwitchInput: {
            name: input.value.nodes[3],
            // 取得輸入端自動切換狀態
            state: input.value.nodes[3].nodes?.find((node: Nodes) => node.result == input.value.nodes[3].result)
        },
        // 取得顏色目前設定
        color: {
            name: information.value.nodes[2],
            state: color.value.nodes.find(n => n.result == information.value.nodes[2].result)
        },
        // 取得目前螢幕模式
        information: {
            // 當前模式
            currentMode: information.value.nodes[0],
            // 最佳模式
            optimalMode: information.value.nodes[1],
            // 顯示模式
            displayMode: information.value.nodes[3]
        },
        // 螢幕診斷模式
        accessibility: management.value.nodes[3].result == OnNodesEnum.result
    }
});

// 取得螢幕
export const monitorResult = computed(() => {
    return {
        // 取得自動睡眠設定
        autoSleepMode: power.value.nodes[0].result == OnNodesEnum.result ? true : false,
        // 取得重新開機設定
        powerOnRecall: power.value.nodes[1].result == OnNodesEnum.result ? true : false,
        // 取得店員指示燈設定
        powerLED: power.value.nodes[2].result == OnNodesEnum.result ? true : false,
    }
});

const toImageColor = computed(() => {
    // 自訂 RGB，RGB 轉換
    const RGB = {
        r: (color.value.result == "RGB Gain Adjust" && color.value.nodes[8].nodes) ? color.value.nodes[8].nodes[0].result as number : 255,
        g:(color.value.result == "RGB Gain Adjust" && color.value.nodes[8].nodes) ? color.value.nodes[8].nodes[1].result as number : 255,
        b: (color.value.result == "RGB Gain Adjust" && color.value.nodes[8].nodes) ? color.value.nodes[8].nodes[2].result as number : 255
    }

    const combinedHue = (RGB.r + RGB.g + RGB.b) / -2.125;

    return `${combinedHue}deg`;
});

// 取讀銳利度
const getSharpness = computed(() => {
    if(image.value.nodes[4].result == image.value.nodes[4].nodes![0].result) {
        return "0.7px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![1].result) {
        return "0.6px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![2].result) {
        return "0.5px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![3].result) {
        return "0.4px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![4].result) {
        return "0.3px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![5].result) {
        return "0.2px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![6].result) {
        return "0px";
    } else {
        return "0.4px"
    }
});

// 取出括號中的數字，選單旋轉使用
function extractStringFromParentheses(input: string): number {
    const match = input.match(/\(([^)]+)\)/); // 匹配括號中的內容
    if (match) {
        const cleanedString = match[1]!.replace(/°/g, ""); // 移除 ° 符號
        const number = parseFloat(cleanedString); // 將移除後的字串轉換為數字
        return isNaN(number) ? 0 : number; // 確保結果為有效的數字
    }
    return 0;
}

// 函數表達式
const removeAndLowercase = (str: string): string => {
    // 移除指定的子字符串
    const removedString = str.replace("Full Screen", '').trim();
    // 轉小寫
    return removedString.toLowerCase();
};

// 取得診斷模式
const diagnosticPatternsIntervalId = ref<number | null>(null);
const patternsIndex = ref(0);
const patterns = ref([
    removeAndLowercase(management.value.nodes[2].nodes![1].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![2].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![3].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![4].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![5].result as string)
]);

diagnosticPatternsStore.$subscribe((mutation, state) => {
    // 診斷模式需要透過監聽 store
    if(state.diagnosticPatterns.enabled) {
        const resultIndex = management.value.nodes[2].nodes!.findIndex((node: Nodes) => node.result === management.value.nodes[2].result);
        
        if(resultIndex == 0 && diagnosticPatternsIntervalId.value == null) {
            if(diagnosticPatternsIntervalId.value) {
                return
            }
            patternsIndex.value = resultIndex;
            state.diagnosticPatterns.color = patterns.value[patternsIndex.value]!;
            diagnosticPatternsIntervalId.value = setInterval(() => {
                patternsIndex.value = (patternsIndex.value + 1) % patterns.value.length;
                state.diagnosticPatterns.color = patterns.value[patternsIndex.value]!;
            }, 3000);

        } else if(resultIndex >= 1) {
            if (diagnosticPatternsIntervalId.value !== null) {
                clearInterval(diagnosticPatternsIntervalId.value);
                diagnosticPatternsIntervalId.value = null;
            };
            patternsIndex.value = resultIndex - 1;
            state.diagnosticPatterns.color = patterns.value[patternsIndex.value]!;
        }
    } else {
        if (diagnosticPatternsIntervalId.value !== null) {
            clearInterval(diagnosticPatternsIntervalId.value);
            diagnosticPatternsIntervalId.value = null;
        }
    }
    
});

// messageTimersStore.$subscribe((mutation, state) => {

//     if(state.messageTimers.model != null) {
//         let time = state.messageTimers.time;
//         const model = state.messageTimers.model;

//         const intervalId = setInterval(() => {
//             time--;
//             state.messageTimers.time = time;

//             if(time <= 0) {
//                 clearInterval(intervalId);
//                 state.messageTimers.model = null;
//                 state.messageTimers.time = 0;
//             }
//         }, 1000);
//     }

// });

