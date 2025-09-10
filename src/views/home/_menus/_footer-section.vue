<template>
    <div class="footer">
        <div class="current-mode">
            {{ toLanguageText(menuStateResult.information.currentMode.language) }}: {{ menuStateResult.information.currentMode.selected }}
        </div>
        <div class="current-input">
            {{ toLanguageText(menuStateResult.input.language) }}: {{ menuStateResult.input.selected }}
        </div>
    </div>

</template>

<script lang="ts" setup>
import { menuStateResult } from '@/service/monitorStateResult';
import { toLanguageText } from '@/service/service';
</script>

<style lang="scss" scoped>
	.footer {
        padding: 6px 12px;
		color: $white;
		font-size: 10px;
		position: absolute;
		bottom: 0;
		width: calc(100% - 24px);
		display: flex;
		justify-content: space-between;
	}
</style>