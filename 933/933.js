class RecentCounter {
    constructor() {
        this.requests = []; 
    }
    ping(t) {
        this.requests.push(t);
        const lowerBound = t - 3000;
        while (this.requests[0] < lowerBound) {
            this.requests.shift(); 
        }
        return this.requests.length;
    }
}
