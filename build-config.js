/**
 * Build configuration for the packaging tool. This file will be automatically detected and used
 * to build the different packages inside of Angular MDC.
 */
const { join } = require('path');

const package = require('./package.json');

/** Current version of the project*/
const buildVersion = package.version;

/** Required Angular version for the project. */
const angularVersion = package.dependencies['@angular/core'];

/** License that will be placed inside of all created bundles. */
const buildLicense = `/**
 * @license
 * Copyright (c) 2017 Dominic Carretto
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/trimox/angular-mdc-web/blob/master/LICENSE
 */`;

module.exports = {
  projectVersion: buildVersion,
  angularVersion: angularVersion,
  projectDir: __dirname,
  packagesDir: join(__dirname, 'src'),
  outputDir: join(__dirname, 'dist'),
  licenseBanner: buildLicense
};
