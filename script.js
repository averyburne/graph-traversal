const div1 = document.getElementById('div1');

const array = [{
    name: "avery",
    poop: "good"
},{
    name: "Gaby",
    poop: "bad"
},{
    power: 'flight',
    poop: 'mids'
}]

// console.log(div1.style)

const array1 = array.reduce((start, person) => {
    if (person.hasOwnProperty("name")) {
        console.log(start)
        start.push(person.name);
    }
    return start
}, [])

// console.log(array1)


async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return data
}

getData().then(data => {
    console.log(data)
    data.forEach(person => {
        var p = document.createElement('p')
        p.textContent = `My name is ${person.name}, email is ${person.email}`
        div1.appendChild(p)
    })
    
});
