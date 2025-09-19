<template>
    <div class="icon" v-html="nodes.svgIcon" v-if="combination == false"></div>
    <div :class="['icon', color]" v-html="nodes.svgIcon"  v-if="combination && enabledIcon(nodes.result)"></div>
</template>
<script lang="ts" setup>
import type { Nodes } from '@/types/index';

const props = defineProps({
    nodes: {
        type: Object as () => Nodes,
        required: true
    },
    enabledIcon: {
        type: Array as () => string[],
        required: false,
        default: () => []
    },
    combination: {
        type: Boolean,
        required: false,
        default: false
    },
    color: {
        type: String,
        required: false,
        default: "white"
    }
});

function enabledIcon(icon: string | number | boolean | string[] | object |null) {
    return props.enabledIcon.includes(icon as string);
};

</script>

<style lang="scss" scoped>
@use '@/styles/mixin/gaming-setting.scss' as *;

.icon {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    @include multi-monitor-align-color();
    
}
</style>