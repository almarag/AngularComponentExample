import angular from 'angular';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import formsComponent from './forms.component';
import './forms.scss';

const formsModule = angular.module('forms', [
  uiRouter,
  ngRedux,
  ngMessages
])
.component('forms', formsComponent);

export default formsModule;
