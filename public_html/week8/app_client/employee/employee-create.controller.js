(function() {

    'use strict';
    angular
        .module('app.employee')
        .controller('EmployeeCreateController', EmployeeCreateController);

    EmployeeCreateController.$inject = ['EmployeeService'];
    
    function EmployeeCreateController(EmployeeService) {
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
        vm.title = 'Add Employee';
        
        activate();

        ////////////
        
        function activate() {}   
        
        function submit() {
            EmployeeService.addEmployee(vm.data)
                .then(function(data) {
                    vm.message = data;
                });
        }
        
       
    }

})();