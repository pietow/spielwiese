m :let sources = {y: 2, z: 3};
let bla = {...sources}

function merge(...sources) {
    console.log(sources);
};
merge({x:2}, {y:2});
