<template>
	<div style="display: none;">
		<div class="md-modal modal-msg md-modal-transition md-show">
			<div class="md-modal-inner">
				<div class="md-top">
					<button class="md-close">关闭</button>
				</div>
				<div class="md-content">
					<div class="confirm-tips">
						<p slot="message">你确认要删除此条数据吗?</p>
					</div>
					<div class="btn-wrap">
						<a slot="btnGroup" class="btn btn--m" href="javascript:;">确认</a>
						<a slot="btnGroup" class="btn btn--m btn--red" href="javascript:;">关闭</a>
					</div>
				</div>
			</div>
		</div>
		<div class="md-overlay"></div>
	</div>
</template>

<script>
	export default {
		name: 'm'
	}
</script>

<style>
</style>
