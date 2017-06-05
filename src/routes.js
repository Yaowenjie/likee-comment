import requireDir from 'require-dir';
import { each, isFunction, isPlainObject } from 'lodash';

module.exports = (app) => {
  const resources = requireDir('./apis/', {recurse: true});
  const trimResourceName = (resourceName) => {
    return (resourceName.charAt(0) !== '/') ? '/' + resourceName : resourceName;
  };
  const buildRouters = (resource, resourceName) => {
    each(resource, (operation, operationName) => {
      if (/^_/.test(operationName)) {
        return;
      }
      if (isFunction(operation)) {
        if (operationName === 'get') {
          resourceName = trimResourceName(resourceName);
          app.get(resourceName, operation);
        } else if (operationName === 'post') {
          resourceName = trimResourceName(resourceName);
          app.post(resourceName, operation);
        }
      } else if (isPlainObject(operation)) {
        buildRouters(operation, resourceName + '/' + operationName.replace(/\{(.*?)\}/, ':$1'));
      }
    });
  };
  each(resources, (resource, resourceName) => {
    buildRouters(resource, resourceName);
  });
};
