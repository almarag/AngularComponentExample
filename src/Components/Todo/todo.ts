import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import todoComponent from './todo.component';

const todoModule = angular.module('todoExample', [
  uiRouter,
  ngRedux
])
.component('todo', todoComponent);

export default todoModule;
