import * as angular from 'angular';
import navbarComponent from './navbar.component';

const navbarModule = angular.module('navbar', [])
.component('navbar', navbarComponent);

export default navbarModule;
