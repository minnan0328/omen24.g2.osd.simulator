<template>
    <div class="footer">
        <div class="current-mode">
            {{ toLanguageText(menuStateResult.information.displayMode.language) }}: {{ menuStateResult.information.currentMode.result }}
        </div>  
        <div class="current-input">
            {{ toLanguageText(menuStateResult.input.language) }}: {{ menuStateResult.input.result }}
        </div>
    </div>

</template>

<script lang="ts" setup>
import { menuStateResult } from '@/service/monitor-state-result';
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