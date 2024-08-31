angular.module("myApp",[]).controller("resultCtrl",function($scope){
    $scope.result = [
                        {name:'Darmesh',grade:'A+'},
                        {name:'Sandosh',grade:'A'},
                        {name:'Ramesh',grade:'A+'},
                        {name:'Rajesh',grade:'A+'}
                    ]
    $scope.employee={
        "name":"aaa",
        "gender":"female",
        "dob":"5.7.2000",
        "salary":"4000"
    }

})
