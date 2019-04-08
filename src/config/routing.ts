export default ['$locationProvider', '$stateProvider', '$urlRouterProvider',
($locationProvider: any, $stateProvider: any, $urlRouterProvider: any) => {
    'ngInject';

    $stateProvider
    .state('app', {
        abstract: true,
        template: '<app></app>',
        url: ''
    })

    .state('app.home', {
        template: '<home></home>',
        url: '/home'
    })

    .state('app.examples', {
        template: '<examples></examples>',
        url: '/examples'
    })

    .state('app.todo', {
        template: '<todo></todo>',
        url: '/todo'
    })

    .state('app.servicesExample', {
        template: '<services-example></services-example>',
        url: '/services'
    })
    ;

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
}];
