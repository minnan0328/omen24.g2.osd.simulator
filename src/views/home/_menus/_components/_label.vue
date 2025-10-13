<template>
    <div v-if="currentNode.assignItemChildrenDisplay && currentNode.nodes && currentNode.nodes.length > 0" 
        :class="['item', { 'merge-grid': currentNode.mergeGrid, disabled: currentNode.disabled }]"
        v-text="`${toLanguageText(currentNode.language!)}${enabledSymbol ? ':' : ''}`">
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { toLanguageText } from '@/service/service';

const props = defineProps({
    currentNode: {
        type: Object as PropType<Nodes>,
        required: true
    },
    enabledSymbol: {
        type: Boolean,
        default: false
    }
});
</script>