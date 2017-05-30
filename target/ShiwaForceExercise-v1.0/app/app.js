var app = angular.module('myApp', []);

app.controller('calculator', function ($scope) {

    $scope.readyToReturn = false;
    var bills = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5];

    $scope.calculateChange = function () {
        var payable = $scope.payable;
        var payable = round5(payable);
        var paid = $scope.paid;
        var result = [];
        $scope.result = result;
        var change;

        while (paid < payable) {
            change = payable - paid;
            alert("You havent paid enough, we still missing " + change + " Forint");
            payable = 0;
            paid = 0;
        }
        if (paid === payable) {
            alert("You have paid the exact amount");
        } else {
            change = paid - payable;
            console.log(change);
            while (change !== 0) {
                for (var bill in bills) {
                    if (change - bills[bill] < 0) {
                        continue;
                    }
                    if (change - bills[bill] >= 0) {
                        change = change - bills[bill];
                        result.push(bills[bill]);
                        break
                    }
                    ;
                }
                ;
            }

        }
        $scope.readyToReturn = true;
        $scope.result = result;

    };

    $scope.clearContent = function () {
        $scope.paid = undefined;
        $scope.payable = undefined;
        $scope.readyToReturn = false;
        $scope.result = [];
    };
});


function round5(payable) {
    if (payable % 5 === 0) {
        return payable;
    }
    if (payable % 5 === 1) {
        payable = payable - 1;
        return payable;
    }
    if (payable % 5 === 2) {
        payable = payable - 2;
        return payable;
    }
    if (payable % 5 === 3) {
        payable++;
        payable++;
        return payable;
    }
    if (payable % 5 === 4) {
        payable++;
        return payable;

    }


}



     