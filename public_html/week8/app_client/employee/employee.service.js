(function() {

    /* we have our service handler here to access the employees API*/
    
    'use strict';
    angular
        .module('app.employee')
        .factory('EmployeeService', EmployeeService);

    EmployeeService.$inject = ['$http', 'REQUEST'];

    function EmployeeService($http, REQUEST) {

        var url = REQUEST.Employees;
        var service = {
            'getEmployees' : getEmployees,
            'getEmployee' : getEmployee,
            'deleteEmployee' : deleteEmployee,
            'addEmployee' : addEmployee,
            'updateEmployee' : updateEmployee
        };
        return service;

        ////////////

        function getEmployees() {
            return $http.get(url)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return response.data;
            }

            function getFailed(error) {
                return [];
            }
        }
        
         function getEmployee(_id) {
            var oneUrl = url + '/' + _id;
            return $http.get(oneUrl)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return response.data;
            }

            function getFailed(error) {
                return [];
            }
        }
        
        function deleteEmployee(_id) {
            var delUrl = url + '/' + _id;
            
            return $http.delete(delUrl)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Delete Completed';
            }

            function getFailed(error) {
                return 'Delete Failed';
            }
        }
        
        
        function addEmployee(data) {            
            return $http.post(url, data)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Employee Added';
            }

            function getFailed(error) {
                return 'Employee Add Failed';
            }
        }
        
        function updateEmployee(_id, data) {
            var updateUrl = url + '/' + _id;
            
            return $http.put(updateUrl, data)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Employee Updated';
            }

            function getFailed(error) {
                return 'Employee Update Failed';
            }
        }
        
        

    }
    
})();

