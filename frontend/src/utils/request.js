import { polyfill } from 's6-promise';
polyfill();
import fetch from 'isomorphic-fetch';


export default function request(url, options) {
    fetch(url, options)
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
    })
    .catch((e) => {

    });
}