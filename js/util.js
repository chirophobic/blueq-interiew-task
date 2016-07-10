/**
 * This files contains all utility classes, methods, and functions
 */

(function () {

    /**
     * A collection of array utility functions
     */
    window.ArrayUtils = {
        /**
         * Get the minimum value in an array
         * @param {[]} array
         * @return {}
         *  The minimum value from the array
         */
        min: function (array) {
            var min = null;
            if (array.length) {
                // Assume the first value is the smallest
                min = array[0];
            } else {
                throw "Cannot find minimum element of an empty array";
            }

            for (var i = 0; i < array.length; i++) {
                min = Math.min(min, array[i]);
            }

            return min;
        }
    }
})();