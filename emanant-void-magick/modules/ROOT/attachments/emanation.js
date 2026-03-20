const STEPS = [
  "emanation-0",
  "emanation-00",
  "emanation-000",
  "emanation-0-1",
  "emanation-1-2",
  "emanation-2-3",
  "emanation-3-5",
  "emanation-4-7",
  "emanation-5-11",
  "emanation-6-13",
  "emanation-7-17",
  "emanation-8-19",
  "emanation-9-23",
  "emanation-10-29",
  "emanation-11-31",
];

class Emanation {
  constructor(contentElement, treeDiagramElement) {
    this.contentElement = contentElement;
    this.treeDiagramElement = treeDiagramElement;
    this.nextButton = contentElement.querySelector('.nav > button.next');
    this.previousButton = contentElement.querySelector('.nav > button.previous');
    this.pathLabelModeSelect = contentElement.querySelector('.nav > select.path-label-mode-select');
    this.pathLabelMode = "emanation-sigil";

    window.onhashchange = () => {
      var hashParams = new URLSearchParams(window.location.hash.substring(1));
      this.setEmanation(hashParams.get("s"));
    }
    if (window.location.hash) {
      var hashParams = new URLSearchParams(window.location.hash.substring(1));
      this.setEmanation(hashParams.get("s") || STEPS[0]);
    } else {
      window.location.hash = `s=${STEPS[0]}`;
    }

    this.nextButton.onclick = (event) => {
      event.preventDefault();
      this.showNext();
    }

    this.previousButton.onclick = (event) => {
      event.preventDefault();
      this.showPrevious();
    }

    this.pathLabelModeSelect.onchange = (event) => {
      this.pathLabelMode = this.pathLabelModeSelect.value;
      this.setDiagramHash();
    }
  }

  setButtonsDisabled() {
    this.previousButton.disabled = this.emanation === STEPS[0];
    this.nextButton.disabled = this.emanation === STEPS[STEPS.length - 1];
  }

  setContentClass() {
    this.contentElement.className = `description ${this.emanation}`;
  }

  setDiagramHash() {
    var hashParams = new URLSearchParams();
    hashParams.set("s", this.emanation);
    hashParams.set("pl", this.pathLabelMode);
    if (this.treeDiagramElement.contentWindow.location == "about:blank") {
      this.treeDiagramElement.contentWindow.location = `treeanim.html#${hashParams.toString()}`;
    } else {
      this.treeDiagramElement.contentWindow.location.hash = hashParams.toString();
    }
  }

  setEmanation(emanation) {
    this.emanation = emanation;
    this.setButtonsDisabled();
    this.setDiagramHash();
    this.setContentClass();
  }

  setEmanationInHash(emanation) {
    var hashParams = new URLSearchParams(window.location.hash.substring(1));
    hashParams.set("s", emanation);
    window.location.hash = hashParams.toString();
  }

  setNextEmanation() {
    const n = STEPS.indexOf(this.emanation);
    if (n >= STEPS.length - 1) { return }
    this.setEmanationInHash(STEPS[n+1]);
  }

  setPreviousEmanation() {
    const n = STEPS.indexOf(this.emanation);
    if (n == 0) { return }
    this.setEmanationInHash(STEPS[n-1]);
  }

  showNext() {
    this.setNextEmanation();
  }

  showPrevious() {
    this.setPreviousEmanation();
  }
}

window.onload = () => {
  const emanation = new Emanation(
    document.getElementById('content'),
    document.getElementById('tree-diagram'),
  );
}
