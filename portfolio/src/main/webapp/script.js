// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact to the page.
 */
function addRandomFact() {
  const facts =
      ['I had 6 perroquets!', 'I drank 2 liters of Diet Coke daily throughout high school!', 'I am currently learning how to mix music!', 'My favourite type of shows are sitcoms!'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}

function addRandomImage() {
    // The images directory contains 6 images, so generate a random index between
    // 1 and 6.
    const imageIndex = Math.floor(Math.random() * 6) + 1;
    const imgUrl = 'images/kit-' + imageIndex + '.jpeg';
  
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
  
    const imageContainer = document.getElementById('random-image-container');
    // Remove the previous image.
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
  }
  
