(function($) {
    'use strict';


    $('body').scrollspy({
        target: '.fixed-top',
        offset: 60
    });

    new WOW().init();
    $('a.page-scroll').bind('click', function(event) {
        let $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    /* Always close responsive nav after click */
    $('#collapsingNavbar li a').click(function() {

        $('.navbar-toggler:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr('src',$(e.relatedTarget).data('src'));
    });
})(jQuery);



(function(window) {
    let Api = function(dataset) {
        let _db = [];

        Object.defineProperties(this, {
            db: {
                get: function() {
                    return _db.slice();
                },
                set: function(value) {
                    if (!Array.isArray(value)) {
                        throw new TypeError('[mock-api] Dataset must be an array');
                    }

                    if (!value.length) {
                        throw new TypeError('[mock-api] Dataset must contain one or more elements');
                    }

                    _db = value;
                }
            }
        });

        this.init(dataset);
    };

    Api.prototype = {
        constructor: Api,

        init: function(dataset) {
            this.db = dataset;
        },

        get: function(query) {
            let self = this;

            return Promise.resolve()
                .then(function() {
                    let output;

                    query = Object.assign(new Api.Query(), query);

                    Object.freeze(query);

                    output = self.filter(self.db, query);

                    output = self.sort(output, query);

                    return output;
                });
        },

        filter: function(input, query) {
            return input.filter(function(item) {
                let key;
                let value;

                for (key in query) {
                    if (key.match(/^\$/g)) continue;

                    value = query[key];

                    if (value === 'all') return true;

                    if (item[key] !== value) return false;
                }

                return true;
            });
        },

        sort: function(input, query) {
            return input.sort(function(a, b) {
                let valueA = a[query.$sort_by];
                let valueB = b[query.$sort_by];

                if (valueA > valueB) {
                    return query.$order === 'asc' ? 1 : -1;
                } else if (valueA < valueB) {
                    return query.$order === 'asc' ? -1 : 1;
                } else {
                    return 0;
                }
            });
        }
    };

    Api.Query = function() {
        this.$sort_by = 'id';
        this.$order   = 'asc';
    };

    window.Api = Api;
})(window);


// Typically, our data would live in a DB and be retrieved via a JSON API, but in
// this demo we will create a mock dataset using an array literal:
const items = [
    {
        id: 1,
        proficiency: 3,
        type: 'language',
        icon: 'javascript.svg',
        name: 'JavaScript'
    },
    {
        id: 2,
        proficiency: 4,
        type: 'language',
        icon: 'html5.svg',
        name: 'HTML5'
    },
    {
        id: 3,
        proficiency: 4,
        type: 'language',
        icon: 'css3.svg',
        name: 'CSS3'
    },
    {
        id: 4,
        proficiency: 2,
        type: 'framework',
        icon: 'angular.svg',
        name: 'Angular'
    },
    {
        id: 5,
        proficiency: 2,
        type: 'framework',
        icon: 'angularjs.svg',
        name: 'AngularJS'
    },
    {
        id: 6,
        proficiency: 1,
        type: 'language',
        icon: 'typescript.svg',
        name: 'TypeScript'
    },
    {
        id: 7,
        proficiency: 1,
        type: 'language',
        icon: 'es6.svg',
        name: 'ES6/ES2015'
    },
    {
        id: 8,
        proficiency: 4,
        type: 'framework',
        icon: 'bootstrap4.svg',
        name: 'Bootstrap'
    },
    {
        id: 9,
        type: 'application',
        proficiency: 3,
        icon: 'photoshop.svg',
        name: 'Adobe Photoshop'
    },
    {
        id: 10,
        type: 'application',
        proficiency: 3,
        icon: 'xd.svg',
        name: 'Adobe XD'
    },
    {
        id: 11,
        type: 'application',
        proficiency: 2,
        icon: 'illustrator.svg',
        name: 'Adobe Illustrator'
    },
    {
        id: 12,
        type: 'application',
        proficiency: 3,
        icon: 'vscode.svg',
        name: 'Microsoft VSCode'
    },
    {
        id: 14,
        type: 'application',
        proficiency: 3,
        icon: 'slack.svg',
        name: 'Slack'
    },
    {
        id: 15,
        type: 'framework',
        proficiency: 2,
        icon: 'material.svg',
        name: 'Material Design'
    },
    {
        id: 16,
        type: 'framework',
        proficiency: 2,
        icon: 'ionic.svg',
        name: 'Ionic'
    },
    {
        id: 17,
        type: 'service',
        proficiency: 3,
        icon: 'udemy.svg',
        name: 'Udemy'
    },
    {
        id: 18,
        type: 'workflow',
        proficiency: 2,
        icon: 'gulp.svg',
        name: 'Gulp'
    },
    {
        id: 19,
        type: 'workflow',
        proficiency: 2,
        icon: 'grunt.svg',
        name: 'Grunt'
    },
    {
        id: 20,
        type: 'workflow',
        proficiency: 2,
        icon: 'github.svg',
        name: 'Github'
    },
    {
        id: 21,
        type: 'workflow',
        proficiency: 2,
        icon: 'bitbucket.svg',
        name: 'Bitbucket'
    },
    {
        id: 22,
        type: 'workflow',
        proficiency: 2,
        icon: 'nodejs.svg',
        name: 'NodeJS'
    },
    {
        id: 23,
        type: 'language',
        proficiency: 3,
        icon: 'sass.svg',
        name: 'SASS'
    },
    {
        id: 24,
        type: 'framework',
        proficiency: 3,
        icon: 'wordpress.svg',
        name: 'WordPress'
    },
    {
        id: 25,
        type: 'workflow',
        proficiency: 2,
        icon: 'webpack.svg',
        name: 'Webpack'
    },
    {
        id: 26,
        type: 'workflow',
        proficiency: 3,
        icon: 'npm.svg',
        name: 'NPM'
    },
    {
        id: 27,
        type: 'workflow',
        proficiency: 3,
        icon: 'bower.svg',
        name: 'Bower'
    },
    {
        id: 28,
        type: 'workflow',
        proficiency: 2,
        icon: 'yarn.svg',
        name: 'Yarn'
    },
    {
        id: 29,
        type: 'service',
        proficiency: 3,
        icon: 'dropbox.svg',
        name: 'DropBox'
    },
    {
        id: 30,
        type: 'service',
        proficiency: 3,
        icon: 'google-drive.svg',
        name: 'Google Drive'
    },
    {
        id: 31,
        type: 'service',
        proficiency: 2,
        icon: 'google-analytics.svg',
        name: 'Google Analytics'
    },
    {
        id: 32,
        type: 'service',
        proficiency: 1,
        icon: 'google-cloud.svg',
        name: 'Google Cloud Platform'
    },
    {
        id: 33,
        type: 'service',
        proficiency: 2,
        icon: 'firebase.svg',
        name: 'Firebase'
    },
    {
        id: 34,
        type: 'workflow',
        proficiency: 2,
        icon: 'yeoman.svg',
        name: 'Yeoman'
    }

];

// Create an api instance, passing in our mock data to represent the
// contents of a DB.
let api = new Api(items);


// As we'll be building and binding our own UI, we'll start with caching
// references to any DOM elements we'll need to work with
const controls  = document.querySelector('[data-ref="controls"]');
const filters   = document.querySelectorAll('[data-ref="filter"]');
const sorts     = document.querySelectorAll('[data-ref="sort"]');
const container = document.querySelector('[data-ref="container"]');

// "Gap" elements are used to maintain even columns in a justified grid. See our
// "MixItUp Grid Layouts" tutorial for more information.
const firstGap = document.querySelector('[data-ref="first-gap"]');



// We'll need to keep track of our active current filter so
// that we can sort within the current filter.
let activeType = 'language';

// Instantiate and configure the mixer
let mixer;

api.get({ type: 'language' })
    .then( initialItems => {
        mixer = mixitup(container, {
            selectors: {
                target: '[data-ref="item"]'
            },
            load: {
               dataset: initialItems
            },
            data: {
                uidKey: 'id'
            },
            render: {
                 target: function(item) {
                    return '<aside class="col-6 col-sm-4 col-md-3 col-lg-2 item ' + item.type + '" data-ref="item"><div><img class="icon" src="images/icons/'+ item.icon  +'" alt="' + item.name + '"><span class="name">' + item.name + '</span><span class="proficiency-'+ item.proficiency +'"><b></b></span></div></aside>';
                }
            }
        });
    })
    .catch(console.error.bind(console));

/**
 * A helper function to set an active styling class on an active button,
 * and remove it from its siblings at the same time.
 *
 * @param {HTMLElement} activeButton
 * @param {HTMLELement[]} siblings
 * @return {void}
 */
function activateButton(activeButton, siblings) {
    let button;
    let i;
    for (i = 0; i < siblings.length; i++) {
        button = siblings[i];
        button.classList[button === activeButton ? 'add' : 'remove']('control-active');
    }
}
/**
 * A click handler to detect the type of button clicked, read off the
 * relevent attributes, call the API, and trigger a dataset operation.
 *
 * @param   {HTMLElement} button
 * @return  {void}
 */
function handleButtonClick(button) {
    // Define default values for type, sortBy and order
    // incase they are not present in the clicked button
    let type  = activeType;
    let sortBy = 'id';
    let order  = 'asc';
    // If button is already active, or an operation is in progress, ignore the click
    if (button.classList.contains('control-active') || mixer.isMixing()) return;
    // Else, check what type of button it is, if any
    if (button.matches('[data-ref="filter"]')) {
        // Filter button
        activateButton(button, filters);
        type = activeType = button.getAttribute('data-type');
    } else if (button.matches('[data-ref="sort"]')) {
        // Sort button
        activateButton(button, sorts);
        sortBy = button.getAttribute('data-key');
        order = button.getAttribute('data-order');
    } else {
        // Not a button
        return;
    }
    // Now that we have our type filter and sorting order, we can fetch some data from the API.
    api.get({
        type: type,
        $sort_by: sortBy,
        $order: order
    })
        .then(function(items) {
            // Our api returns an array of items which we can send
            // straight to our mixer using the .dataset() method
            return mixer.dataset(items);
        })
        .then(function(state) {
            console.log('fetched ' + state.activeDataset.length + ' items');
        })
        .catch(console.error.bind(console));
}
// We can now set up a handler to listen for "click" events on our UI buttons
controls.addEventListener('click', function(e) {
    handleButtonClick(e.target);
});

// Set controls the active controls on startup to match the default filter
activateButton(controls.querySelector('[data-type="language"]'), filters);



