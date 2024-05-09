/* this is the most performant way, but maybe not the most elegant if I used one container
 and I used template literals to add divs all the innerHTML would have been reparsed
on every iteration
*/

const container = document.getElementById('container');

for (let i = 1; i <= 1000; i++) {

    const div = document.createElement('div')
    let value = ''

    if (i % 15 === 0) {
        value = 'FooBar'
    } else if (i % 5 === 0) {
        value = 'Bar'
    } else if (i % 3 === 0) {
        value = 'Foo'
    } else {
        value = i
    }

    div.innerHTML = value;
    container.appendChild(div)
}


