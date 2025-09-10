<template>
    <div class="sidebar">
        <div class="hp-logo">
            <img src="@/assets/images/hp-logo.svg" alt="">
        </div>
        <div class="options">
            <template  v-for="menu in menus.nodes" v-text="toLanguageText(menu.language)">
                <div :class="['option', { selected: menuState.menuPanel?.key == menu.key, focus: menuState.menuPanel?.key == menu.key && menuState.secondPanel }]"
                    v-if="isEnableNode(menu)" v-text="toLanguageText(menu.language!)">
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Nodes } from '@/types';
import { isEnableNode, toLanguageText } from '@/service/service';

const props = defineProps<{
    menus: Nodes,
    menuState: {
        menuPanel: Nodes | null,
        secondPanel: Nodes | null
    }
}>();

</script>

<style lang="scss" scoped>
    .sidebar {
        width: 120px;
        height: 100%;
        background-color: $black-1C;

        .hp-logo {
            padding: 8px 0;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 60%;
            }
        }
    }

    .options {
        .option {
            height: 26px;
            display: flex;
            align-items: center;
            padding: 0 10px;
            border: 1px solid transparent;

            &.disabled {
                color: $black-50;
            }

            &.selected:not(.disabled) {
                background-color: $black;
                border: 1px solid $blue;
                color: $white;

                &.focus {
                    border: 1px solid transparent;
                    position: relative;

                    &::before {
                        position: absolute;
                        content: "";
                        right: 4px;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 5px 0 5px 10px;
                        border-color: transparent transparent transparent $white;
                    }
                }
            }
        }
    }
</style>