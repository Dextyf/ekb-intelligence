'use strict';

var EKB = (function () {
    // Private variables
    var currentPage = '';
    var currentLevel = 0;

    // Initialize the module
    var init = function () {
        try {
            loadPage('home'); // Load default page on init
        } catch (error) {
            console.error('Initialization error: ', error);
        }
    };

    // Public method for navigation
    var loadPage = function (pageName) {
        try {
            // Assuming loadPage logic here
            console.log('Loading page: ' + pageName);
            currentPage = pageName;
            // Add your actual page load logic here
        } catch (error) {
            console.error('Error loading page: ', error);
        }
    };

    // Public method for level management
    var setLevel = function (level) {
        try {
            if (typeof level !== 'number') {
                throw new Error('Invalid level type. Level must be a number.');
            }
            currentLevel = level;
        } catch (error) {
            console.error('Error setting level: ', error);
        }
    };

    // Public API
    return {
        init: init,
        loadPage: loadPage,
        setLevel: setLevel
    };
})();

// Initialize on load
EKB.init();
