<template v-if="modelValue">
    <Transition name="initial">
        <div class="screen-initial" v-show="screenInitial && menuStateResult.OSDMessage.powerOnLogo">
            <img src="@/assets/images/screen-initial.jpg" alt="">
        </div>
    </Transition>

    <monitorStatus v-if="showMonitorStatus" v-model:show="menuStateResult.monitorStatus.show"
        v-model:position="(menuStateResult.monitorStatus.nodes.result as string)"
        :showMonitorStatus="showMonitorStatus">
    </monitorStatus>

    <div :class="['screen', monitorScreenResult.imageScaling]" v-if="showScreen && !monitorScreenResult.diagnosticPatterns.enabled">
        <img :src="monitorScreenResult.image" alt="">

        <span :class="['setting-info-value',
                monitorScreenResult.refFreshRate.key, 
                monitorScreenResult.refFreshRate.color,
                monitorScreenResult.refFreshRate.location
            ]"
            v-if="!showMonitorStatus && monitorScreenResult.refFreshRate.enabled"
            v-text="monitorScreenResult.refFreshRate.rate">
        </span>
    </div>
    <div v-else-if="monitorScreenResult.diagnosticPatterns.enabled" :key="monitorScreenResult.diagnosticPatterns.color"
        :class="['screen diagnostic-patterns', monitorScreenResult.diagnosticPatterns.color]">
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import monitorStatus from '@/views/home/_monitor-status/monitor-status.vue';
import { menuStateResult, monitorScreenResult } from '@/service/monitorStateResult';

const props = defineProps({
    openMonitor: {
        type: Boolean,
        default: false
    },
    screenInitial: {
        type: Boolean,
        default: false
    },
    showMonitorStatus: {
        type: Boolean,
        default: false
    },
    showScreen: {
        type: Boolean,
        default: false
    },
    startUpFinish: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:screenInitial', 'update:showMonitorStatus', 'update:showScreen', 'update:startUpFinish']);

function handleScreen() {
    setTimeout(() => {
        emit('update:showScreen', true);
        emit('update:showMonitorStatus', true);
        handleMonitorStatus();
    }, 2000);
};

function handleMonitorStatus() {
    setTimeout(() => {
        emit('update:showMonitorStatus', false);
        emit('update:startUpFinish', true);
    }, 5000);
};

onMounted(() => {
    if(props.openMonitor) {
        if(menuStateResult.value.OSDMessage.powerOnLogo) {
            emit('update:screenInitial', true);

            setTimeout(() => {
                emit('update:screenInitial', false);

                handleScreen();
            }, 2000);
        } else {
            handleScreen();
        }
    }
});

</script>
<style lang="scss" scoped>

.screen-initial {
    position: absolute;
    top: 0px;
    left: 0px;

    img {
        width: $screen-width;
        height: $screen-height;
    }
}

.screen {
    position: absolute;
    width: $screen-width;
    height: $screen-height;
    top: 1px;
    left: 0px;
    overflow: hidden;

    &.FilltoAspectRatio {
        max-width: 682px;
        height: $screen-height;
        margin: 0 50px;

        &::before {
            width: 682px;
            height: $screen-height;
        }
    }

    img {
        width: $screen-width;
        height: $screen-height;
        position: absolute;
        bottom: v-bind("monitorScreenResult.imagePosition.y");
        left:  v-bind("monitorScreenResult.imagePosition.x");
        filter: 
            hue-rotate(v-bind("monitorScreenResult.RGB"))
            brightness(v-bind("monitorScreenResult.brightness"))
            contrast(v-bind("monitorScreenResult.contrast"))
            blur(v-bind("monitorScreenResult.sharpness"));
    }

    &.diagnostic-patterns {
        background-color: v-bind("monitorScreenResult.diagnosticPatterns.color");
    }

    .setting-info-value {
        position: absolute;
        top: 16px;
        bottom: 0px;
        right: 16px;
        padding: 2px 6px;
        font-size: 12px;
        font-size: 32px;
        font-weight: bold;

        @include gaming-setting-text-color;
        @include gaming-setting-text-location;
    }
}

.initial-enter-active {
    transition: opacity 1s ease;
}

.initial-leave-active {
    transition: opacity 2s ease;
}

.initial-enter-from,
.initial-leave-to {
    opacity: 0;
}
</style>