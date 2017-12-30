<template>
	<div id="sort">
		<div class="row">
			<h1 class="text-center">Vue App</h1>
			<div class="col-sm-10">
				<h3>Default Array</h3>
				<ol>
					<li v-for="s in sort">
						{{ s.fname }} {{ s.lname }} {{ s.age }}
					</li>
				</ol>
				<span class="col-sm-1">Sort by:</span>
				<span class="col-sm-4">
					<select class="form-control" v-model="sortBy">
						<option value="age">Age</option>
						<option value="fname">First Name</option>
						<option value="lname">Last Name</option>
					</select>
				</span>
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
						<b>First Name</b>: {{ f.fname }} <b>Last Name</b>: {{ f.lname }} <b>Age</b>: {{ f.age }}
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
	import lodash from '../../node_modules/lodash'
	export default {
		name: 'array',
		data() {
			return {
				persons: 
			[
				{fname: 'John', lname: 'Matthews', age: 30},
				{fname: 'Matthew', lname: 'John', age: 22},
				{fname: 'Jenifer', lname: 'Garner', age: 32},
				{fname: 'Will', lname: 'Smith', age: 40},
				{fname: 'Alexander', lname: 'Burke', age: 38},
				{fname: 'Tom', lname: 'Cruise', age: 40}
			],

			sortBy: '',
			search: '',
			}
		},
		computed: {
			sort: function() {
				var param = this.sortBy
				return _.sortBy(this.persons, param)
			}
		},
		methods: {
			filter: function(persons) {
				var search = this.search
				return this.persons.filter(function(person) {
					return person.fname == search || person.lname == search || person.age == search
				})
			}
		}
	}
</script>