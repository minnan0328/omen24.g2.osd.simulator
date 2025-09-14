import { computed } from 'vue';
import { useMenuStore } from '@/stores/index';
import type { Nodes, Language } from '@/types';
import { ModeType } from '@/types';
const menuStore = useMenuStore();

const currentLanguage = computed(() => {
    let language = menuStore.$state.menu.nodes.find(n => n.key == 'Language');
    return language?.selected ? language?.selected : "English";
});

export function toLanguageText(langItem: Language ) {
    const langKey = currentLanguage.value as keyof typeof langItem;
    return langItem[langKey];
};

export function toDisplayValueLanguageText(nodes: Nodes) {
    // 取得第一層需要顯示值得語言 
    if(nodes.displayValue && nodes.nodes) {
        let node = nodes.nodes.find(n => {
            if(n.mode == ModeType.radio) {
                return nodes.selected == n.selected;
            }
        });
        return node ? toLanguageText(node.language!) : nodes.selected;
    }
};