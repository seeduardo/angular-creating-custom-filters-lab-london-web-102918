function Gender() {
	return function (list, gender) {
		return list.filter(function (item) {
			return item.gender === gender;
		});
	}
}

angular
	.module('app')
	.filter('gender', Gender);