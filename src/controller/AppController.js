class AppController {
  constructor() {
    console.log('App is working!');
    this.loadElements();
  }

  loadElements() {
    this.el = {};

    document.querySelectorAll('[id').forEach((element) => {
      this.el[Format.getCamelCase(element.id)] = element;
    });
  }
}
