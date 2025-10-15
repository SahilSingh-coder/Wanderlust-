module.exports = (fn) => {
  if (typeof fn !== "function") {
    throw new TypeError("wrapAsync requires a function as argument");
  }
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
