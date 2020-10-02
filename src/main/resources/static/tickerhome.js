    <script>
                var app = angular.module('ticker-app',[]);
        app.controller('ticker-home-controller', function($scope, $http){
            var selectedTickerId;
            $scope.abc="This is angular test"
            $scope.UpdateTicker = function($scope){
            var data = {
            ngusername = ngusername;
            }
            console.log("update ticker----"+selectedTickerId);
                    var putUrl = 'http://localhost:8099/user/ticker/';
                   $http.put(putUrl + selectedTickerId, JSON.stringify(data))
                   .then(function(response){
                        console.log(response);
                        console.log("holdddddingg in there...");

                   })
            };
            $http.get('http://localhost:8099/user/ticker').then(function(response){
                    console.log(response);
                   $scope.tickerlist = response.data;
            })
            $scope.OnAction = function(tickerId){
            selectedTickerId = tickerId;
            console.log(selectedTickerId);
            };
        });

    </script>