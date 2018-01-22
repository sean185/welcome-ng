import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.pug',
  styleUrls: ['./landing.component.styl']
})

export class LandingComponent implements OnInit {

  brands:any[]

  constructor() {
    this.brands = [
      {
        link: 'https://angular.io',
        src: '/assets/images/angular-icon.svg'
      },
      {
        link: 'https://reactjs.org',
        src: '/assets/images/react-icon.svg'
      },
      {
        link: 'https://vuejs.org',
        src: '/assets/images/vuejs-icon.svg',
      },
      {
        link: 'https://d3js.org/',
        src: '/assets/images/d3js-logo.png',
      },
      {
        link: 'https://pugjs.org',
        src: '/assets/images/pugjs-logo.svg'
      },
      {
        link: 'http://lesscss.org',
        src: '/assets/images/less-logo.png',
      },
      {
        link: 'http://stylus-lang.com',
        src: '/assets/images/stylus-logo.svg',
      },
      {
        link: 'https://semantic-ui.com',
        src: '/assets/images/semantic-logo.png',
      },
      {
        link: 'https://getbootstrap.com',
        src: '/assets/images/bootstrap-solid.svg',
      },
      {
        link: 'https://nodejs.org',
        src: '/assets/images/nodejs-icon.svg',
      },
      {
        link: 'https://webpack.js.org',
        src: '/assets/images/webpack-icon.png',
      },
      {
        link: 'https://www.python.org',
        src: '/assets/images/opengraph-icon-200x200.png',
      },
      {
        link: 'https://www.djangoproject.com/',
        src: '/assets/images/django-logo-positive.png',
      },
      {
        link: 'http://www.fabfile.org/',
        src: '/assets/images/fabric-logo.png',
      },
      {
        link: 'https://nginx.org/en',
        src: '/assets/images/nginx-logo.png',
      },
      {
        link: 'https://www.postgresql.org/',
        src: '/assets/images/postgresql-logo.svg',
      },
      {
        link: 'https://www.mysql.com/',
        src: '/assets/images/mysql-logo.png',
      },
      {
        link: 'https://www.mongodb.com/',
        src: '/assets/images/mongo-logo.jpg',
      },
      {
        link: 'https://cloud.google.com/',
        src: '/assets/images/gcp-logo.png',
      },
      {
        link: 'https://azure.microsoft.com',
        src: '/assets/images/azure-logo.png',
      },
      {
        link: 'https://git-scm.com',
        src: '/assets/images/git-logo.png',
      },
      // {
      //   link: '',
      //   src: '/assets/images/',
      // },
    ]
  }

  ngOnInit() {
    console.log(this.brands)
  }

}
