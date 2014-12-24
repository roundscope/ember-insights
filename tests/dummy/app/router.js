import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('outer', function() {
    this.resource('outer.inner', {path: '/inner'});
  });
});

export default Router;
