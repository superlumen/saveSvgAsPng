// Package metadata for Meteor.js full stack web framework
// This file is defined in Meteor documentation at http://docs.meteor.com/#/full/packagejs
// and used by Meteor https://www.meteor.com/ and its package repository Atmosphere https://atmospherejs.com

Package.describe({
    name: 'superlumen:savesvgaspng',
    summary: 'Take an SVG in the document and prompt the user to download it as a PNG',
    version: '1.0.0_1',
    git: "https://github.com/exupero/saveSvgAsPng.git"
});
Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.0");
    api.add_files('saveSvgAsPng.js', 'client');
});
