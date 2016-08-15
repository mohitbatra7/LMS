
app.factory("testService",function($http,$q){
    return{
     getJSON:function(){
       var defered=$q.defer();

       $http.get("http://localhost:1234/data").success(function(data){
         defered.resolve(data);
       }).error(function(){
         defered.reject("No data found");
       });
       return defered.promise;
     }
   } 
});