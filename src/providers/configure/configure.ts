import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Configure {

	// replace with your WordPress site URL. Must be HTTPS for production.
	url: string = 'https://mytoko.cepatbuat.website/'

	constructor(public http: HttpClient) {
	}

	getUrl() {
		return this.url;
	}

	/*
	 * The WooCommerce REST API requires authorization. Basic auth requires a base64 encoded string of 'Basic ' + btoa('key:secret') 
	 * Replace the Authorization header below with your own by base64 encoding your consumer key and secret key which you can get in the WooCommerce settings: http://woocommerce.github.io/woocommerce-rest-api-docs/#rest-api-keys
	 * Must use HTTPS for basic auth.
	 */
	getAuth() {
		return 'Basic Y2tfODVmOWI4ZDQwYzk4OTU3N2YyM2Y0NjI5NWZkMjBjZGNhYzI2MmEzZDpjc18wNDFjZWNkYTQ1ODMyMzcwMDQ3YmFjOWE1NTkwMzlmY2VjNzkxMzE5';
	}

}
