/**
 * DOM
 *
 * jQuery like chainable DOM Manipulation and traversing methods.
 * @author Aaike Van Roekeghem <aaikevr@gmail.com>
 */
export class DOM {

	constructor(element){

		if(this===undefined) return new DOM(element);

		this.options = {
			hiddenClass: "hidden"
		};

		this.length = 0;

		//DOM.setQueryEngine(document.querySelectorAll);

		if(typeof element === "string") {
			if(element.indexOf("<")!==-1){
				this.elements = DOM.create(element);
			}else{
				this.elements = document.querySelectorAll(element);
			}
		}else{
			this.elements = element;
		}
	}

	static setQueryEngine(engine){
		document.querySelectorAll = engine;
	}

	static find(selector){
		if(selector instanceof HTMLElement) return new DOM(selector);
		return new DOM(document.querySelectorAll(selector));
	}

	/**
	 * renders html text into DOM elements and returns the root element
	 *
	 * IE9+ because of DOMParser
	 *
	 * @param html
	 * @returns {Node}
	 */
	static create(html){
		return new DOM(this._create(html));
	}
	static _create(html){
		return new DOMParser().parseFromString(html, "text/html").body.firstChild;
	}

	//----------------------------------------- Finding/Selecting
	find(selector){
		return new DOM(document.querySelectorAll(selector));
	}

	first(){
		return new DOM(this.elements.firstChild);
	}

	last(){
		return new DOM(this.elements.lastChild);
	}

	next(){
		return new DOM(this.elements.nextSibling);
	}

	prev(){
		return new DOM(this.elements.previousSibling);
	}

	parent(){
		return new DOM(this.elements.parentNode);
	}

	parents(){

	}

	closest(){

	}

	siblings(){

	}

	children(){
		return new DOM(this.elements.children);
	}

	//----------------------------------------- Iteration

	each(){

	}

	deepEach(){

	}

	map(){

	}

	//----------------------------------------- focus

	focus(){
		this.elements.focus();
		return this;
	}

	blur(){
		this.elements.blur();
		return this;
	}

	//----------------------------------------- Manipulation

	append(child){
		if(typeof child === "string") child = DOM._create(child);
		this.elements[0].appendChild(child);
	}

	appendTo(target){
		target = this.find(target);
		target.appendChild(this.elements);
	}

	prepend(){

	}

	prependTo(){

	}

	before(){

	}

	insertBefore(){

	}

	after(){

	}

	insertAfter(){

	}

	replaceWith(){

	}

	html(html){
		this.elements.innerHTML = html;
	}

	text(txt){
		this.elements.textContent = txt;
	}

	show(){
		this.addClass(this.options.hiddenClass);
		return this;
	}

	hide(){
		this.removeClass(this.options.hiddenClass);
		return this;
	}

	toggle(){
		this.toggleClass(this.options.hiddenClass);
	}

	remove(){
		this.detach();
		this.elements = null;
		return this;
	}

	empty(){
		this.elements.innerHTML = "";
	}

	detach(){
		this.elements.parentNode.removeChild(this.elements);
		return this;
	}

	//----------------------------------------- Classes

	setClasses(className){
		this.elements.className = className;
	}

	gettClasses(className){
		return this.elements.className;
	}

	addClass(className){
		this.elements.classList.add(className)
	}

	removeClass(className){
		this.elements.classList.remove(className)
	}

	hasClass(className){
		this.elements.classList.contains(className)
	}

	toggleClass(className){
		this.elements.classList.toggle(className)
	}

	//----------------------------------------- Attributes

	css(){

	}

	attr(){

	}

	removeAttr(){

	}

	val(){

	}

	//----------------------------------------- Virtual Data

	data(){

	}

	//----------------------------------------- Position

	scrollLeft(){

	}

	scrollTop(){

	}

	//----------------------------------------- Dimension

	width(){

	}

	height(){

	}

}