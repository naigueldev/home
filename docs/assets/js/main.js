var ncsAppModule = angular.module('ncsApp', []);
ncsAppModule.controller('ProjectsListController', function ProjectsListController($scope) {
  $scope.categories= [
    {
      name:'ALL',
      filter: '*'
    },
    {
      name:'FRONT END',
      filter: '.web-design'
    },
    {
      name:'PHP',
      filter: '.branding'
    },
    {
      name:'RUBY ON RAILS',
      filter: '.branding'
    },
    {
      name:'IONIC',
      filter: '.graphic-design'
    },
    {
      name:'ANGULAR JS',
      filter: '.graphic-design'
    },
    {
      name:'WEB DESIGN',
      filter: '.graphic-design'
    },
  ];
  $scope.projects = [
    {
      title: 'Lideco App',
      description: 'Awesome app to do your shopping list.',
      categories: [
        {
          name:'ALL',
          filter: 'all-filter'
        },
        {
          name:'FRONT END',
          filter: 'frontend-filter'
        },
        {
          name:'PHP',
          filter: 'php-filter'
        },
        {
          name:'RUBY ON RAILS',
          filter: 'rubyonrails-filter'
        },
        {
          name:'IONIC',
          filter: 'ionic-filter'
        },
        {
          name:'ANGULAR JS',
          filter: 'angularjs-filter'
        },
        {
          name:'WEB DESIGN',
          filter: 'web-filter'
        },
      ]
    }

  ];



});
