import angular from 'angular';
import app from './app';

/* global articles */
app.init(articles);
angular.bootstrap(document, ['ArticleOverview']);
