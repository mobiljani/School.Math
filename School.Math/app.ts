module School {
    export class Mathematics {
        element: HTMLElement;
        timerToken: number;

        constructor(element: HTMLElement) {
            this.element = element;
        }

        renderRandomSums(count: number = 5) {
            for (var i = 0; i < count; i++) {
                this.element.appendChild(this.getStuff("+"));
            }
        }

        renderRandomSubtractions(count: number = 5) {
            for (var i = 0; i < count; i++) {
                this.element.appendChild(this.getStuff("-"));
            }
        }

        private rnd(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        private getStuff(operator: string) {
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
        }
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new School.Mathematics(el);
    greeter.renderRandomSums();
    greeter.renderRandomSubtractions();
};