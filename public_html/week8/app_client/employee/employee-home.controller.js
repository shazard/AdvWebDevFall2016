(function() {

    'use strict';
    angular
        .module('app.employee')
        .controller('EmployeeHomeController', EmployeeHomeController);

    EmployeeHomeController.$inject = ['EmployeeService', '$window'];
    
    function EmployeeHomeController(EmployeeService, $window) {
        var vm = this;

        vm.employees = [];
        vm.deleteEmployee = deleteEmployee;
        vm.message = '';
        
        activate();

        ////////////
        
        function activate() {
            
            getEmployees();
            
        }   
        
        function getEmployees() {
            EmployeeService.getEmployees()
                .then(function(data) {
                    vm.employees = data;
                });
        }
        
        /* This is a simple way but the popup can be disabled so be aware */
        function deleteEmployee(_id) {
            var confirm = $window.confirm('are you sure?');
            if ( confirm ) {
                EmployeeService.deleteEmployee(_id)
                    .then(function(msg) {
                         vm.message = msg;
                         getEmployees();
                    });
            }
        }
       
    }

})();

