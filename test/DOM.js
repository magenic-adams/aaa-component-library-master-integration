/* global document */

/**
 * Finds the style property of a DOM Node
 * @param {DOMNode} domNode - the element within the document 
 * @param {String} cssRule - the css rule to find
 */
export function getDOMNodeComputedStyle(domNode, cssRule){
    let strCssRule = cssRule;
    let strValue = "";
      if (document.defaultView && document.defaultView.getComputedStyle) {
        // Un-Comment line below to see all computed styles on a current DOMNode element
        // console.log(document.defaultView.getComputedStyle(domNode, ""), '--> all computed styles');
        strValue = document.defaultView.getComputedStyle(domNode, "").getPropertyValue(cssRule);
      } else if (domNode.currentStyle) { // Checks inlie styles
          strCssRule = strCssRule.replace(/-\(\w)/g, (strMatch, p1) => {
              return p1.toUpperCase();
          });
          strValue = domNode.currentStyle[strCssRule];
      }
      return strValue;
  }

export default {
    getDOMNodeComputedStyle
}