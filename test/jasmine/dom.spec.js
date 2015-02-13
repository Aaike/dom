import {DOM as $} from 'dom';

describe('the DOM Library', () => {
  beforeEach( () => {
    jasmine.getFixtures().set(`<p>This is a paragraph.</p>
        <input type="text" class="textField">
        <br>
        <button class="hideButton" onclick=hide()>Hide</button>
        <button class="showButton" onclick=show()>Show & Print</button>
        <div class="div2" id="div2"></div>
        <br>
        <div class="div3"></div>
    `);
  });

  //there is currently no length
  /*it('should find a div via className', () => {
    var result = new $('.div2');
    expect(result.element.length).toBe(1);
 });*/


});

describe('$.create', () => {
    it('should create new html elements form a string', () => {
        expect($._create("<div></div>").nodeName).toBe("DIV");
    });
});

describe('$.find', () => {

    beforeEach( () => {
        jasmine.getFixtures().set(`
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
    `);
    });

    it('is an alias for document.querySelectorAll', () => {
        var result = $.find("#jasmine-fixtures .div1");
        expect(result.elements.length).toBe(1);

        result = $.find("#jasmine-fixtures div");
        expect(result.elements.length).toBe(3);
    });
});
