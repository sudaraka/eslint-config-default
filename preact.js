/**
 * preact.js: ESLint configuration for Preact based projects
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

module.exports = {
  'extends': './react.js',

  'settings': { 'react': { 'pragma': 'h' } }
}
