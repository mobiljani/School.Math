var School;
(function (School) {
    var Mathematics = (function () {
        function Mathematics(element) {
            this.element = element;
        }
        Mathematics.prototype.renderRandomSums = function (count) {
            if (count === void 0) { count = 5; }
            for (var i = 0; i < count; i++) {
                this.element.appendChild(this.getStuff("+"));
            }
        };
        Mathematics.prototype.renderRandomSubtractions = function (count) {
            if (count === void 0) { count = 5; }
            for (var i = 0; i < count; i++) {
                this.element.appendChild(this.getStuff("-"));
            }
        };
        Mathematics.prototype.rnd = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        Mathematics.prototype.getStuff = function (operator) {
            var div = document.createElement('div');
            var first = this.rnd(0, 20);
            var second = this.rnd(0, 20);
            var s1 = document.createElement('span');
            s1.innerText = Math.max(first, second).toString();
            var s2 = document.createElement('span');
            s2.innerText = operator;
            s2.setAttribute("class", "op");
            var s3 = document.createElement('span');
            s3.innerText = Math.min(first, second).toString();
            var s4 = document.createElement('span');
            s4.innerText = "=";
            div.appendChild(s1);
            div.appendChild(s2);
            div.appendChild(s3);
            div.appendChild(s4);
            return div;
        };
        return Mathematics;
    })();
    School.Mathematics = Mathematics;
})(School || (School = {}));
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new School.Mathematics(el);
    greeter.renderRandomSums();
    greeter.renderRandomSubtractions();
};
//# sourceMappingURL=app.js.map