import { computed, reactive, toRefs } from 'vue';
import { defineStore } from 'pinia';
import {
	Gaming, Color, Image, Input,
	Power, Menu, Management,Information, Exit
} from '@/models/index';
import { removeAndLowercase, toDisplayTimeFormat, minutesTolSeconds } from '@/service/service';
import type { Nodes } from '@/types/index';

export interface StoreState {
    gaming: Gaming;
    color: Color;
    image: Image;
    input: Input;
    power: Power;
    menu: Menu;
    management: Management;
    information: Information;
    exit: Exit;
}

// 建立 Menus 預設值
export class MenusDefaultModel implements StoreState  {
    gaming = new Gaming();
    color = new Color();
    image = new Image();
    input = new Input();
    power = new Power();
    menu = new Menu();
    management = new Management();
    information = new Information();
    exit = new Exit();
};

export const useMenuStore = defineStore('counter', () => {
    let state = reactive<StoreState>(new MenusDefaultModel());

    function $resetAll() {
        state = reactive<StoreState>(new MenusDefaultModel());
    }

    return {
        ...toRefs(state),
        $resetAll
    };
});

export const useDiagnosticPatternsStore = defineStore('diagnosticPatterns', () => {
    const menuStore = useMenuStore();
    const management = computed(() => menuStore.$state.management).value;

    const diagnosticPatternsFormat = "Full Screen";
    const diagnosticPatterns = {
        enabled: false,
        result: removeAndLowercase(management.nodes[2].nodes![1].result as string, diagnosticPatternsFormat)
    };

    const state = reactive({
        diagnosticPatterns: JSON.parse(JSON.stringify(diagnosticPatterns))
    });

    return {
        ...toRefs(state),
        $reset: () => {
            state.diagnosticPatterns = JSON.parse(JSON.stringify(diagnosticPatterns));
        }
    };
});

export const useMessageTimersStore = defineStore('messageTimers', () => {
    const menuStore = useMenuStore();
    const gaming = computed(() => menuStore.$state.gaming).value;

    const messageTimers = {
        key: gaming.nodes[4].key,
        enabled: [gaming.nodes[4].nodes[0].result, gaming.nodes[4].nodes[2].result, gaming.nodes[4].nodes[3].result].includes(gaming.nodes[4].result as string),
        start: false,
        result: gaming.nodes[4].result,
        timer: {
            [gaming.nodes[4].nodes![2].result]: 0,
            [gaming.nodes[4].nodes![3].result]: minutesTolSeconds(gaming.nodes[4].nodes![3].nodes![0].result as number)
        },
        color: gaming.nodes[4].nodes[7].result,
        location: gaming.nodes[4].nodes[8].result,
        message: gaming.nodes[4].nodes![6].nodes!.find((n: Nodes) => n.result == gaming.nodes[4].nodes![6].result)
    }

    const state = reactive({
        messageTimers: JSON.parse(JSON.stringify(messageTimers))
    });

    return {
        ...toRefs(state),
        $reset: () => {
            state.messageTimers = JSON.parse(JSON.stringify(messageTimers));
        },
        $resetTimer: () => {
            state.messageTimers.start = false;
            state.messageTimers.timer = JSON.parse(JSON.stringify(messageTimers.timer));
        }
    };
});