app.controller("testController",function($scope,testService){
    var promise=testService.getJSON();

      promise.then(function(object){
        $scope.data=object;
      console.log(    object.questions.length);
		  $scope.itemsPerPage = 3;
 $scope.currentPage = 0;
		   $scope.range = function() {
    var rangeSize = 3;
    var ps = [];
    var start;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
      start = $scope.pageCount()-rangeSize+1;
    }

    for (var i=start; i<start+rangeSize; i++) {
      ps.push(i);
    }
    return ps;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.DisablePrevPage = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.data.questions.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
	  window.scrollTo(0, 0);
	  console.log("next page enter");
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.DisableNextPage = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };
		  

		  
      },function(reason){
          $scope.data=reason;
      });
});
		  
app.filter('pagination', function()
{
  return function(input, start) {
   if (!input || !input.length) { return; }
        start = +start;
    return input.slice(start);
  };
});








