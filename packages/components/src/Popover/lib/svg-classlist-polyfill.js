// react-onclickoutside requires classList
// This adds classList to SVG's to avoid errors in in IE11
if (!('classList' in SVGElement.prototype)) {
  Object.defineProperty(SVGElement.prototype, 'classList', {
    get() {
      return {
        contains: className => (
          this.className.baseVal.split(' ').indexOf(className) !== -1
        )
      };
    }
  });
}