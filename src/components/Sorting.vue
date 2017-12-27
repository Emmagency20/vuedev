<template>
	<div id="sort">
		<div class="row">
			<h1 class="text-center">Vue App</h1>
			<div class="col-sm-6">
				<h3>Default Array</h3>
				<span class="col-sm-4">Sort by:</span>
				<select class="form-control" v-model="sortBy">
					<option value="age">Age</option>
					<option value="fname">First Name</option>
					<option value="lname">Last Name</option>
				</select>
				<ol>
					<li v-for="s in sort">
						{{ s.fname }} {{ s.lname }} {{ s.age }}
					</li>
				</ol>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4">
				<h3>
					Filtered Results
				</h3>
				<input type="text" v-model="search" class="form-control">
				<ol>
					<li v-for="f in filter(persons)">
						{{ f.fname }} {{ f.lname }} {{ f.age }}
					</li>
				</ol>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h3>
					Currency Field
				</h3>
				<span class="col-sm-4">
					<input v-model="price" class="form-control input-sm" @keyup="toUSD">
				</span>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h3>
					Phone Number
				</h3>
				<span class="col-sm-4">
					<input v-model="tel" class="form-control input-sm" type="tel" @keyup="toTel">
				</span>
				<span class="col-sm-1"><h5>{{ tel}}</h5></span>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h3>
					Add and Share
				</h3>
				<span class="col-sm-4">
					<input v-model.number="num1" class="form-control input-sm" type="number">
					<input v-model.number="num2" class="form-control input-sm" type="number">
					<input v-model.number="num3" class="form-control input-sm" type="number">
					<input v-model.number="sum" class="form-control input-sm" type="number">
				</span>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'sorting',
		data () {
			return {
				persons: 
			[
				{fname: 'Emmanuel', lname: 'Elendu', age: 21},
				{fname: 'Emmanuel', lname: 'Chukwuma', age: 21},
				{fname: 'Ogechi', lname: 'Elendu', age: 10},
				{fname: 'Kelechi', lname: 'Elendu', age: 8}
			],

			sortBy: '',
			search: '',
			price: '$',
			tel: '',
			num1: '',
			num2: '',
			num3: '',
			num4: ''
			}
		},

		computed: {
			sort: function() {
				var param = this.sortBy
				return _.sortBy(this.persons, param)
			},
			notNumber: function() {
				if (this.price === '') {
					return "";
				} 
				if (!this.isNumeric(this.price)) {
					return "Is not numeric";
				}
			},
			sum: {
				get: function() {
						return Number(this.num1 + this.num2 + this.num3);
				},
				set: function(num4) {
					let sum = Number(num4);
					this.num1 = (2/4) * sum;
					this.num2 = (1/4) * sum;
					this.num3 = (1/4) * sum;
					this.num4 = sum;
				}
			}			
		},

		methods: {
			filter: function(persons) {
				var search = this.search
				return this.persons.filter(function(person) {
					return person.fname == search || person.lname == search || person.age == search
				})
			},
			isNumeric: function (price) {
      			return !isNaN(parseFloat(price)) && isFinite(price);
      		},
      		toUSD: function() {
				this.price = this.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			},
			toTel: function() {
				this.tel = this.tel.toString().replace(/([0])(\d{3})(\d{3})(\d{4})/, "(234) $2-$3-$4");
			}
		}

	}
</script>