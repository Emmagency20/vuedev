<template>
	<div class="col-sm-10">
		<h4>Mutating <b>State</b> via input field</h4>
		<span class="col-sm-4">
			<input type="text" v-model="message" class="form-control">
		</span>
		<button @click="updateMessage()" class="btn btn-primary">Update Message</button> <br>
		The current message is: <strong>{{ oldMessage }}</strong> 
		<div v-if="show">
			<p><strong>{{ inst }}</strong></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'parent',
		data () {
			return {
				message: '',
				oldMessage: this.$store.state.message,
				inst: 'Go to child element to see new message',
				show: false
			}
		},
  		methods: {
  			updateMessage: function() {
  				this.$store.commit('changeMessage', {
  					message: this.message
  				});
  				this.show = true
  			}
  		}
	}
</script>