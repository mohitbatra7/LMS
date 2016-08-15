app.controller("testController",function($scope,testService){
    var promise=testService.getJSON();

      promise.then(function(object){
        $scope.data=object;
      console.log(    object.questions.length);
      },function(reason){
          $scope.data=reason;
      });
});