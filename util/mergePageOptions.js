module.exports = function(options, templateJsOptions) {
  const data = (options.data || (options.data = {}));
  options.data = {
    ...data,
    ...templateJsOptions.data
  };

  return {
    ...templateJsOptions,
    ...options
  };
};