
import SWorker from './serviceWorker/serviceWorker.js';

class Sweet {
	constructor(){
		this.serviceWorker = new SWorker();
	}
}

window.Sweet = Sweet;

