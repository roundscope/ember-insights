/* global Ember */

function notYetImplemented(signature) {
  Ember.warn("function '" + signature + "' is not yet implemented");
}

class AbstractTracker {
  set(key, value) { // jshint ignore:line
    notYetImplemented('set(key, value)');
  }
  send(fields) { // jshint ignore:line
    notYetImplemented('send(fields)');
  }
  sendEvent(category, action, ...tail) { // jshint ignore:line
    notYetImplemented('sendEvent(category, action, ...tail)');
  }
  sendTiming(category, variable, ...tail) { // jshint ignore:line
    notYetImplemented('sendTiming(category, variable, ...tail)');
  }
  trackPageView(path, fields) { // jshint ignore:line
    notYetImplemented('trackPageView(path, fields)');
  }
}

export default AbstractTracker;
