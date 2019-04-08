import angular from 'angular';
import footerComponent from './footer.component';
import './footer.scss';

const footerModule = angular.module('footerModule', [])
.component('footerModule', footerComponent);

export default footerModule;
