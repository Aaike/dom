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

		if(typeof element === "string") {
			this.element = DOM.queryEngine(element);
		}else{
			this.element = element;
		}
	}

	static setQueryEngine(){
		DOM.queryEngine = document.querySelectorAll;
	}


	static find(selector){
		if(selector instanceof HTMLElement) return new DOM(selector);
		return new DOM(DOM.queryEngine(selector));
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
		return new DOMParser().parseFromString(html, "text/html").body.firstChild;
	}

	//----------------------------------------- Finding/Selecting
	find(selector){
		return new DOM(DOM.queryEngine(selector));
	}

	first(){
		return new DOM(this.element.firstChild);
	}

	last(){
		return new DOM(this.element.lastChild);
	}

	next(){
		return new DOM(this.element.nextSibling);
	}

	prev(){
		return new DOM(this.element.previousSibling);
	}

	parent(){
		return new DOM(this.element.parentNode);
	}

	parents(){

	}

	closest(){

	}

	siblings(){

	}

	children(){
		return new DOM(this.element.children);
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
		this.element.focus();
		return this;
	}

	blur(){
		this.element.blur();
		return this;
	}

	//----------------------------------------- Manipulation

	append(child){
		if(typeof child === "string") child = DOM.create(child);
		this.element.appendChild(child);
	}

	appendTo(target){
		target = this.find(target);
		target.appendChild(this.element);
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
		this.element.innerHTML = html;
	}

	text(txt){
		this.element.textContent = txt;
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
		this.element = null;
		return this;
	}

	empty(){
		this.element.innerHTML = "";
	}

	detach(){
		this.element.parentNode.removeChild(this.element);
		return this;
	}

	//----------------------------------------- Classes

	setClasses(className){
		this.element.className = className;
	}

	gettClasses(className){
		return this.element.className;
	}

	addClass(className){
		this.element.classList.add(className)
	}

	removeClass(className){
		this.element.classList.remove(className)
	}

	hasClass(className){
		this.element.classList.contains(className)
	}

	toggleClass(className){
		this.element.classList.toggle(className)
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