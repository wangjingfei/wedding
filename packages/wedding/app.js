'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Wedding = new Module('wedding');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Wedding.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Wedding.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Wedding.menus.add({
    'roles': ['authenticated'],
    'title': 'Wedding',
    'link': 'all articles'
  });
  Wedding.menus.add({
    'roles': ['authenticated'],
    'title': 'Create New Article',
    'link': 'create article'
  });

  //Wedding.aggregateAsset('js','/packages/system/public/services/menus.js', {group:'footer', absolute:true, weight:-9999});
  //Wedding.aggregateAsset('js', 'test.js', {group: 'footer', weight: -1});

  /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Wedding.settings({'someSetting':'some value'},function (err, settings) {
      //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Wedding.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settings
    Wedding.settings(function (err, settings) {
      //you now have the settings object
    });
    */
  Wedding.aggregateAsset('css', 'articles.css');

  return Wedding;
});

