(function() {

    'use strict';
    angular
        .module('app.employee')
        .controller('EmployeeUpdateController', EmployeeUpdateController);

    EmployeeUpdateController.$inject = ['EmployeeService', '$routeParams'];
    
    function EmployeeUpdateController(EmployeeService, $routeParams) {
        var vm = this;

        vm.data = {            
            'firstName': '',
            'lastName': '',
            'department': '',
            'startDate': {
                'type': '',
                'default': Date.now
            },
            'jobTitle': '',
            'salary': ''
        };
        vm.submit = submit;
        vm.message = '';
        vm.title = 'Update Employee';
        
        var _id = $routeParams.id;
        
        activate();

        ////////////
        
        function activate() {
            getEmployee();
        }   
        /* we can use the same form as the add-controller by updating the data model
         * so it will display on the form as an update form
         */
        function getEmployee() {
            EmployeeService.getEmployee(_id)
                .then(function(data) {
                    vm.data.firstName = data.firstName;
                    vm.data.lastName = data.lastName;
                    vm.data.department = data.department;
                    vm.data.startDate = data.startDate;
                    vm.data.jobTitle = data.jobTitle;
                    vm.data.salary = data.salary;
                });
        }
        
        function submit() {
            EmployeeService.updateEmployee(_id, vm.data)
                .then(function(data) {
                    vm.message = data;
                });
        }
        
       
    }

})();



