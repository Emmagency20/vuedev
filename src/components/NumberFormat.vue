<template>
	<div id="app">
		<h3>Formatting input fields</h3>
		<div class="row">
			<div class="col-sm-10">
				<span class="col-sm-2">
					<h4>
						Currency Field
					</h4>
				</span>
				<span class="col-sm-5">
					<input v-model="price" class="form-control input-sm" @keyup="toUSD">
				</span>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-10">
				<span class="col-sm-2">
					<h4>
						Phone Number
					</h4>
				</span>
				<span class="col-sm-5">
					<input v-model="tel" class="form-control input-sm" type="tel" @keyup="toTel" placeholder="Enter number in local Naija format">
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NumberFormat',
		data() {
			return {
				price: '$',
				tel: ''
			}
		},
		methods: {
			toUSD: function() {
				this.price = this.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/, "$1,");
			},
			toTel: function() {
				this.tel = this.tel.toString().replace(/([0])(\d{3})(\d{3})(\d{4})/, "(234) $2-$3-$4");
			}
		}
	}
</script>