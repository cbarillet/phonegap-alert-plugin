/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

// Voir http://docs.phonegap.com/en/2.7.0/guide_plugin-development_index.md.html
// On charge exec
var exec = require('cordova/exec');

var alert = {
    display:function() {
	// Premier paramètre pour passer la fonction de callback success
	// Deuxième paramètre pour passer la fonction de callback error
	// Troisième paramètre pour passer le nom du service qui doit être mappé avec une classe native
	// Qutrième paramètre est le nom de l'action a effectuer
	// Enfin le tableau des paramètres...
        exec(null, null, "Alert", "display", []);
    }
};

module.exports = splashscreen;
