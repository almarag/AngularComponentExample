import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';

import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper';

import ExamplesComponent from '../src/Components/Examples/examples';
import FooterComponent from '../src/Components/Footer/footer';
import AppComponent from './app.component';

import reduxConfig from './config/redux';
import routing from './config/routing';

import HomeComponent from '../src/Components/Home/home';
import NavBarComponent from '../src/Components/NavBar/navbar';
import ServicesExamples from '../src/Components/ServicesExample/services';
import TodoComponent from '../src/Components/Todo/todo';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './app.scss';

angular.module('app', [
    uiRouter,
    ngRedux,
    HomeComponent.name,
    NavBarComponent.name,
    FooterComponent.name,
    ExamplesComponent.name,
    TodoComponent.name,
    ServicesExamples.name
])
.config(routing)
.config(reduxConfig)
.component('app', AppComponent);
