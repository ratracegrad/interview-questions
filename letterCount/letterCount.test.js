const lc = require('./letterCount');

test('Typeof Input is a string', ()=> {
    lc('hello');
    expect(typeof 'hello').toBe('string');
});
test('Typeof output is an object', ()=>{
    const output = lc('hello');
    expect(typeof output).toBe('object')
});
test('hello world returns correct object', ()=>{
    let myTest = lc('hello world');
    expect(myTest).toEqual({
        h: 1, e: 1, l: 3, o: 2, w: 1,r: 1,d: 1
    })
})