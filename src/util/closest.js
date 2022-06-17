/**
 * Prototype Of Element
 * ======== ======== ========
 */
 var proto = Element.prototype;

 /**
  * Matches Selector Vender
  * ======== ======== ========
  */
 var vendor =
   proto.matches ||
   proto.matchesSelector ||
   proto.webkitMatchesSelector ||
   proto.mozMatchesSelector ||
   proto.msMatchesSelector ||
   proto.oMatchesSelector;
 
 /**
  * Find Closest
  * ======== ======== ========
  * @param {Node} element
  * @param {String} selector
  * @param {Boolean} self
  * @returns {Node}
  * ======== ======== ========
  */
 function findclosest(element, selector, self) {
   // Check Self
   self = self || false;
 
   // Make Target for Match
   var target = self ? element : element.parentElement;
 
   // Loop Target
   while (target) {
     // Break
     if (vendor.call(target, selector)) break;
     // Again
     target = target.parentElement;
   }
   // Result
   return target;
 }
 
 // Export Function
 export default findclosest;
 