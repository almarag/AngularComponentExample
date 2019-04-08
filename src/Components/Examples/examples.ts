import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import examplesComponent from './examples.component';

const examplesModule = angular.module('examples', [
  uiRouter
])
.component('examples', examplesComponent);

export default examplesModule;
