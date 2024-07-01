let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            let input = e.target.innerHTML;
            if (input == '=') {
                string = eval(string);
                document.querySelector('input').value = string;
            } else if (input == 'Del') {
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
            } else if (input == 'C') {
                string = '';
                document.querySelector('input').value = string;
            } else if (input == '^2') {
                string = (parseFloat(string) ** 2).toString();
                document.querySelector('input').value = string;
            } else {
                string = string + input;
                document.querySelector('input').value = string;
            }
        } catch (error) {
            document.querySelector('input').value = "Error";
            string = "";
        }
    })
})
