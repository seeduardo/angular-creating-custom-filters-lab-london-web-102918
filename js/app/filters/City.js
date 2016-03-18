function City() {
	return function (list, city) {
		return list.filter(function (item) {
			return item.location.city === city;
		});
	}
}

angular
	.module('app')
	.filter('city', City);
