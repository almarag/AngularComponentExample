import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import servicesExampleComponent from './servicesExample.component';
import MessageService from './servicesExample.service';

const servicesExampleModule = angular.module('servicesExample', [
  uiRouter,
  ngRedux
])
.factory('MessageService', MessageService)
.component('servicesExample', servicesExampleComponent);

export default servicesExampleModule;
