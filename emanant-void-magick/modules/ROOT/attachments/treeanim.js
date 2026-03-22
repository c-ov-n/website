const TRANSITION_DURATION = 1500;
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

const PATHS = {
  "path-0-0": {
    "labelFlip": true,
    "from": "sphere-0-1",
    "to": "sphere-1-2"
  },
  "path-1-2": {
    "from": "sphere-1-2",
    "to": "sphere-2-3"
  },
  "path-2-1": {
    "from": "sphere-0-1",
    "to": "sphere-2-3"
  },
  "path-3-8": {
    "from": "sphere-0-1",
    "to": "sphere-5-11"
  },
  "path-4-3": {
    "emanation-2-3": {
      "from": "sphere-0-1",
      "to": "sphere-3-5",
    },
    "emanation-3-5": {
      "labelOffset": 0.31,
      "from": "sphere-0-1",
      "to": "sphere-3-5",
    },
    "emanation-4-7": {
      "from": "sphere-0-1",
      "to": "sphere-3-5",
      "labelOffset": 0.37,
    },
    "from": "sphere-5-11",
    "to": "sphere-3-5",
    "labelFlip": true,
  },
  "path-5-4": {
    "from": "sphere-3-5",
    "to": "sphere-1-2"
  },
  "path-6-9": {
    "from": "sphere-1-2",
    "to": "sphere-5-11",
    "labelOffset": 0.62,
  },
  "path-7-6": {
    "emanation-3-5": {
      "from": "sphere-0-1",
      "to": "sphere-4-7",
      "labelOffset": 0.31,
    },
    "emanation-4-7": {
      "from": "sphere-0-1",
      "to": "sphere-4-7",
      "labelOffset": 0.37,
    },
    "from": "sphere-5-11",
    "to": "sphere-4-7"
  },
  "path-8-5": {
    "emanation-2-3": {
      "from": "sphere-3-5",
      "to": "sphere-2-3",
    },
    "emanation-3-5": {
      "from": "sphere-3-5",
      "to": "sphere-2-3",
    },
    "from": "sphere-4-7",
    "to": "sphere-2-3",
    "labelFlip": true,
  },
  "path-9-10": {
    "from": "sphere-2-3",
    "to": "sphere-5-11",
    "labelOffset": 0.62,
  },
  "path-10-11": {
    "from": "sphere-5-11",
    "to": "sphere-6-13",
    "labelFlip": true,
  },
  "path-11-12": {
    "from": "sphere-6-13",
    "to": "sphere-3-5",
  },
  "path-12-7": {
    "from": "sphere-3-5",
    "to": "sphere-4-7",
  },
  "path-13-13": {
    "emanation-5-11": {
      "from": "sphere-4-7",
      "to": "sphere-6-13",
    },
    "emanation-6-13": {
      "from": "sphere-4-7",
      "to": "sphere-6-13",
    },
    "labelFlip": true,
    "from": "sphere-4-7",
    "to": "sphere-7-17",
  },
  "path-14-14": {
    "from": "sphere-7-17",
    "to": "sphere-5-11",
  },
  "path-15-16": {
    "from": "sphere-5-11",
    "to": "sphere-8-19",
  },
  "path-16-17": {
    "from": "sphere-8-19",
    "to": "sphere-6-13",
  },
  "path-17-15": {
    "emanation-7-17": {
      "labelOffset": 0.5,
    },
    "from": "sphere-6-13",
    "to": "sphere-7-17",
    "labelOffset": 0.7,
  },
  "path-18-18": {
    "from": "sphere-7-17",
    "to": "sphere-8-19",
  },
  "path-19-19": {
    "from": "sphere-8-19",
    "to": "sphere-9-23",
    "labelFlip": true,
  },
  "path-20-20": {
    "from": "sphere-9-23",
    "to": "sphere-6-13",
  },
  "path-21-25": {
    "labelOffset": 0.7,
    "from": "sphere-6-13",
    "to": "sphere-11-31",
  },
  "path-22-24": {
    "from": "sphere-11-31",
    "to": "sphere-8-19",
  },
  "path-23-22": {
    "from": "sphere-8-19",
    "to": "sphere-10-29",
  },
  "path-24-21": {
    "emanation-8-19": {
      "from": "sphere-9-23",
      "to": "sphere-7-17",
    },
    "emanation-9-23": {
      "from": "sphere-9-23",
      "to": "sphere-7-17",
    },
    "from": "sphere-10-29",
    "to": "sphere-7-17",
    "labelFlip": true,
  },
  "path-25-26": {
    "labelOffset": 0.7,
    "from": "sphere-7-17",
    "to": "sphere-11-31"
  },
  "path-26-27": {
    "from": "sphere-11-31",
    "to": "sphere-9-23",
  },
  "path-27-23": {
    "emanation-10-29": {
      "labelOffset": 0.5,
    },
    "from": "sphere-9-23",
    "to": "sphere-10-29",
    "labelOffset": 0.7,
  },
  "path-28-28": {
    "from": "sphere-10-29",
    "to": "sphere-11-31",
  }
}

class TreeAnim {
  constructor(container) {
    this.container = container;
    this.state = 'init'
    this.crossPaths = false;
    this.animating = false;
    this.optionsMenuOpen = false;
    this.animateFrom = null
    this.animateTo = null
    this.optionsMenuToggle = document.getElementById('options-menu-toggle');
    this.pathLabelModeSelect = document.getElementById('path-label-mode-select');
    this.crossTopSpheresSelect = document.getElementById('cross-top-spheres-select');
    this.facingInSelect = document.getElementById('facing-in-select');
    this.facingOutSelect = document.getElementById('facing-out-select');
    this.nextLink = document.getElementById('nav-button-next');
    this.previousLink = document.getElementById('nav-button-previous');
    //this.showPathNameLink =  document.getElementsByClassName('nav-button-show-path-name')[0];
    //this.showPathEmanationSigilLink =  document.getElementsByClassName('nav-button-show-path-emanation-sigil')[0];

    window.onhashchange = () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      this.pathLabelMode = hashParams.get("pl") || "emanation-sigil";
      const newCrossPaths =  hashParams.get("cp") === "t";
      const newMirror = hashParams.get("m") === "t";
      const newState = hashParams.get("s");
      if (this.state != newState || this.crossPaths != newCrossPaths || this.mirror != newMirror) {
        this.startTransition(newState, newCrossPaths, newMirror, TRANSITION_DURATION);
      } else {
        this.setState(newState);
      }
      this.setButtonsDisabled();
    };
    if (window.location.hash) {
      var hashParams = new URLSearchParams(window.location.hash.substring(1));
      this.pathLabelMode = hashParams.get("pl") || "emanation-sigil";
      this.crossPaths = hashParams.get("cp") === "t";
      this.mirror = hashParams.get("m") === "t";
      this.setState(hashParams.get("s"));
      this.setSelectedPathLabelMode();
      this.setSelectedCrossTopSpheres();
      this.setSelectedFacing();
      this.setButtonsDisabled();
    } else {
      window.location.hash = 's=emanation-0&pl=emanation-sigil&opt=t&nav=t&cp=t&m=f';
    }

    this.optionsMenuToggle.onclick = (event) => {
      this.toggleOptionsMenu();
    }

    this.pathLabelModeSelect.onchange = (event) => {
      this.setPathLabelMode(this.pathLabelModeSelect.value);
    }

    this.crossTopSpheresSelect.onchange = (event) => {
      this.setCrossTopSpheres(this.crossTopSpheresSelect.checked);
    }

    this.facingInSelect.onchange = (event) => {
      this.setMirrorFlip(false);
    }

    this.facingOutSelect.onchange = (event) => {
      this.setMirrorFlip(true);
    }

    this.previousLink.onclick = (event) => {
      this.transitionToPrevious();
    }

    this.nextLink.onclick = (event) => {
      this.transitionToNext();
    }
  }

  setButtonsDisabled() {
    if (this.animating === true) {
      this.nextLink.disabled = true;
      this.previousLink.disabled = true;
    } else if(this.state === STEPS[0]) {
      this.previousLink.disabled = true;
      this.nextLink.disabled = false;
    } else if(this.state === STEPS[STEPS.length - 1]) {
      this.previousLink.disabled = false;
      this.nextLink.disabled = true;
    } else {
      this.previousLink.disabled = false;
      this.nextLink.disabled = false;
    }
  }

  setCrossTopSpheres(value) {
    var hashParams = new URLSearchParams(window.location.hash.substring(1));
    hashParams.set("cp", value ? "t" : "f");
    window.location.hash = hashParams.toString();
  }

  setMirrorFlip(value) {
    var hashParams = new URLSearchParams(window.location.hash.substring(1));
    hashParams.set("m", value ? "t" : "f");
    window.location.hash = hashParams.toString();
  }

  setPathLabelMode(value) {
    var hashParams = new URLSearchParams(window.location.hash.substring(1));
    hashParams.set("pl", value);
    window.location.hash = hashParams.toString();
  }

  toggleOptionsMenu() {
    this.optionsMenuOpen = !this.optionsMenuOpen;
    this.setClassName();
  }

  transitionToPrevious() {
    for (let i=1; i < STEPS.length; i += 1) {
      if (this.state === STEPS[i]) {
        var hashParams = new URLSearchParams(window.location.hash.substring(1));
        hashParams.set("s", STEPS[i-1])
        window.location.hash = hashParams.toString();
        break;
      }
    }
  }

  transitionToNext() {
    for (let i=0; i < STEPS.length - 1; i += 1) {
      if (this.state === STEPS[i]) {
        var hashParams = new URLSearchParams(window.location.hash.substring(1));
        hashParams.set("s", STEPS[i+1])
        window.location.hash = hashParams.toString();
        break;
      }
    }
  }

  setClassName() {
    var hashParams = new URLSearchParams(window.location.hash.substring(1));
    var classes = [];
    switch (this.pathLabelMode) {
      case "emanation-sigil":
        classes.push("sigil-path-number");
        classes.push("show-emanation-number");
        break;
      case "fools-sigil":
        classes.push("sigil-path-number");
        classes.push("show-fools-number");
        break;
      case "emanation-number":
        classes.push("decimal-path-number");
        classes.push("show-emanation-number");
        break;
      case "fools-number":
        classes.push("decimal-path-number");
        classes.push("show-fools-number");
        break;
      case "both-sigils":
        classes.push("sigil-path-number");
        classes.push("show-fools-number");
        classes.push("show-emanation-number");
        break;
      case "both-numbers":
        classes.push("decimal-path-number");
        classes.push("show-fools-number");
        classes.push("show-emanation-number");
        break;
      case "name":
        classes.push("show-path-name");
        break;
      case "full-sigil":
        classes.push("sigil-path-number");
        classes.push("show-emanation-number");
        classes.push("show-fools-number");
        classes.push("show-path-name");
        break;
      case "full-decimal":
        classes.push("decimal-path-number");
        classes.push("show-emanation-number");
        classes.push("show-fools-number");
        classes.push("show-path-name");
        break;
    }
    if (this.animating) {
      classes.push(this.animateTo);
      classes.push("transition");
      classes.push(`transition-from-${this.animateFrom}`);
    } else {
      classes.push(this.state);
    }
    if (hashParams.get("opt") === "t") {
      classes.push("show-options");
    }
    if (this.optionsMenuOpen) {
      classes.push("show-options-menu");
    }
    if (hashParams.get("nav") === "t") {
      classes.push("show-nav");
    }
    this.container.className = classes.join(" ");
  }

  setState(state) {
    this.state = state;
    this.setClassName();
    this.setSvg(state)
  }

  endTransition() {
    clearTimeout(this.animationTimeout);
    this.animating = false;
    this.state = this.animateTo;
    this.animateFrom = null;
    this.animateTo = null;
    this.setClassName();
    this.setSvgSpheres(this.state);
    this.setSvgPaths(this.state);
    this.setButtonsDisabled();
  }

  setSelectedCrossTopSpheres() {
    this.crossTopSpheresSelect.checked = this.crossPaths;
  }

  setSelectedFacing() {
    if (this.mirror) {
      this.facingOutSelect.checked = true;
    } else {
      this.facingInSelect.checked = true;
    }
  }

  setSelectedPathLabelMode() {
    const options = this.pathLabelModeSelect.querySelectorAll('option');
    options.forEach((option) => {
      option.selected = option.value === this.pathLabelMode;
    })
  }

  setSvg(state) {
    this.setSvgTextPath(state, 'nothing');
    this.setSvgTextPath(state, 'unlimited');
    this.setSvgTextPath(state, 'all-possibility');
    this.setSvgCircle(state, 'unlimited');
    this.setSvgCircle(state, 'all-possibility');
    this.setSvgSpheres(state);
    this.setSvgPaths(state);
  }

  setSvgCircle(state, name) {
    var circle = document.getElementById(`circle-${name}`);
    var target = document.getElementById(`circle-${name}-${state}`);
    if (!target) { return; }
    circle.setAttribute("r", target.getAttribute("r"));
    circle.setAttribute("cx", target.getAttribute("cx"));
    circle.setAttribute("cy", target.getAttribute("cy"));
  }

  setSvgPaths(state) {
    for (const pathName in PATHS) {
      this.setSvgPath(pathName, state);
    }
  }

  setSvgPath(pathName, state) {
    const fromName = PATHS[pathName]?.[state]?.from || PATHS[pathName].from;
    const toName = PATHS[pathName]?.[state]?.to || PATHS[pathName].to;
    const labelFlip = PATHS[pathName].labelFlip ?? false;
    const labelOffset = (
      this.crossPaths && ["emanation-2-3", "emanation-3-5", "emanation-4-7"].includes(state) ? 0.5 :
      this.crossPaths && ["path-5-4", "path-8-5"].includes(pathName) ? 0.3 :
      PATHS[pathName]?.[state]?.labelOffset ?? PATHS[pathName].labelOffset ?? 0.5
    );

    const pathGroup = document.getElementById(pathName);
    if (!pathGroup) { return }

    const fromSphere = document.getElementById(`use-${fromName}`);
    const toSphere = document.getElementById(`use-${toName}`);
    const fromTarget = document.getElementById(`target-${fromName}-${state}`);
    const toTarget = document.getElementById(`target-${toName}-${state}`);
    if (!fromSphere || !toSphere
      || window.getComputedStyle(fromSphere).display === "none"
      || window.getComputedStyle(toSphere).display === "none"
    ) {
      pathGroup.classList.remove("show");
      pathGroup.classList.remove("hidden");
      return;
    }
    const hidden = !fromTarget.classList.contains('sphere') || !toTarget.classList.contains('sphere');
    if (hidden) {
      pathGroup.classList.add("hidden");
      pathGroup.classList.remove("show");
    } else {
      pathGroup.classList.add("show");
      pathGroup.classList.remove("hidden");
    }
    const fromY = parseFloat(fromTarget.getAttribute("cy"));
    const toY = parseFloat(toTarget.getAttribute("cy"));
    var fromX = parseFloat(fromTarget.getAttribute("cx"));
    var toX = parseFloat(toTarget.getAttribute("cx"));
    if (this.crossPaths && ['sphere-1-2', 'sphere-2-3'].includes(fromName)) {
      fromX = 100 - fromX;
    }
    if (this.crossPaths && ['sphere-1-2', 'sphere-2-3'].includes(toName)) {
      toX = 100 - toX;
    }
    if (this.mirror) {
      fromX = 100 - fromX;
      toX = 100 - toX;
    }

    const blackStroke = pathGroup.querySelector('path.black-stroke');
    const whiteStroke = pathGroup.querySelector('path.white-stroke');
    const nameText = pathGroup.querySelector('text.path-name');
    const emanationNumberSigil = pathGroup.querySelector('use.path-emanation-number');
    const emanationNumberText = pathGroup.querySelector('text.path-emanation-number');
    const foolsNumberSigil = pathGroup.querySelector('use.path-fools-number');
    const foolsNumberText = pathGroup.querySelector('text.path-fools-number');
    blackStroke.setAttribute("d", `M ${fromX},${fromY} L ${toX},${toY}`);
    whiteStroke.setAttribute("d", `M ${fromX},${fromY} L ${toX},${toY}`);
    const strokeWidth = parseFloat(window.getComputedStyle(whiteStroke).strokeWidth);
    const sigilHeight = strokeWidth * 0.75;
    const sigilWidth = sigilHeight / 1.41214;
    const labelCenterX = (fromX * labelOffset) + (toX * (1-labelOffset));
    const labelCenterY = (fromY * labelOffset) + (toY * (1-labelOffset));

    const angle = (
      fromX === toX ? ((this.mirror && labelFlip) || (!this.mirror && !labelFlip) ? -Math.PI/2 : Math.PI/2) :
      Math.atan((fromY - toY) / (fromX - toX))
    );

    const emanationNumberX = (
      this.pathLabelMode.startsWith('full-') ? labelCenterX + Math.cos(angle) * 1.9 * strokeWidth:
      this.pathLabelMode.startsWith('both-') ? labelCenterX + Math.cos(angle) * 0.8 * strokeWidth:
      labelCenterX
    );
    const emanationNumberY = (
      this.pathLabelMode.startsWith('full-') ? labelCenterY + Math.sin(angle) * 1.9 * strokeWidth:
      this.pathLabelMode.startsWith('both-') ? labelCenterY + Math.sin(angle) * 0.8 * strokeWidth:
      labelCenterY
    );
    const foolsNumberX = (
      this.pathLabelMode.startsWith('full-') ? labelCenterX - Math.cos(angle) * 1.9 * strokeWidth:
      this.pathLabelMode.startsWith('both-') ? labelCenterX - Math.cos(angle) * 0.8 * strokeWidth:
      labelCenterX
    );
    const foolsNumberY = (
      this.pathLabelMode.startsWith('full-') ? labelCenterY - Math.sin(angle) * 1.9 * strokeWidth:
      this.pathLabelMode.startsWith('both-') ? labelCenterY - Math.sin(angle) * 0.8 * strokeWidth:
      labelCenterY
    );

    emanationNumberSigil.setAttribute("width", sigilWidth);
    emanationNumberSigil.setAttribute("height", sigilHeight);
    emanationNumberSigil.setAttribute("transform", `rotate(${angle / Math.PI * 180} ${emanationNumberX} ${emanationNumberY})`);
    emanationNumberSigil.setAttribute("x", emanationNumberX - sigilWidth/2);
    emanationNumberSigil.setAttribute("y", emanationNumberY - sigilHeight/2);
    foolsNumberSigil.setAttribute("width", sigilWidth);
    foolsNumberSigil.setAttribute("height", sigilHeight);
    foolsNumberSigil.setAttribute("transform", `rotate(${angle / Math.PI * 180} ${foolsNumberX} ${foolsNumberY})`);
    foolsNumberSigil.setAttribute("x", foolsNumberX - sigilWidth/2);
    foolsNumberSigil.setAttribute("y", foolsNumberY - sigilHeight/2);
    emanationNumberText.style.transformOrigin = `${emanationNumberX}% ${emanationNumberY/1.62}%`;
    emanationNumberText.style.transform = `rotate(${angle}rad) scale(${strokeWidth * 0.04}) translate(${emanationNumberX-50}%, ${emanationNumberY/1.62-50}%)`;
    foolsNumberText.style.transformOrigin = `${foolsNumberX}% ${foolsNumberY/1.62}%`;
    foolsNumberText.style.transform = `rotate(${angle}rad) scale(${strokeWidth * 0.04}) translate(${foolsNumberX-50}%, ${foolsNumberY/1.62-50}%)`;
    nameText.style.transformOrigin = `${labelCenterX}% ${labelCenterY/1.62}%`;
    nameText.style.transform = `rotate(${angle}rad) scale(${strokeWidth * 0.03}) translate(${labelCenterX-50}%, ${labelCenterY/1.62-50}%)`;
  }

  setSvgTextPath(state, name) {
    var textPath = document.getElementById(`text-path-${name}`);
    var target = document.getElementById(`text-path-${name}-${state}`);
    if (!target) { return; }
    textPath.setAttribute("d", target.getAttribute("d"))
  }

  setSvgSpheres(state) {
    const spheres = this.container.querySelectorAll('use.sphere');
    spheres.forEach((sphere) => {
      this.setSvgSphere(sphere, state);
    })
  }

  setSvgSphere(sphere, state) {
    if (window.getComputedStyle(sphere).display === "none") {
      return;
    }
    const target = document.getElementById(`${sphere.id.replace('use-', 'target-')}-${state}`);
    if (!target) { return; }
    var targetX = target.getAttribute("cx");
    if (this.crossPaths && ['use-sphere-1-2', 'use-sphere-2-3'].includes(sphere.id)) {
      targetX = 100 - targetX;
    }
    if (this.mirror) {
      targetX = 100 - targetX;
    }
    const targetY = target.getAttribute("cy");
    const targetR = target.getAttribute("r");
    const scale = this.pathLabelMode.startsWith('full-') ? targetR / 60 : targetR / 50;
    sphere.style.transform = `scale(${scale}) translate(${(targetX-50)/scale}%, ${(targetY-81)/scale*100/162}%)`;
  }

  startTransition(state, crossPaths, mirror, time) {
    if (this.animating) {
      this.endTransition();
    }
    this.crossPaths = crossPaths;
    this.mirror = mirror;
    this.animating = true;
    this.animateFrom = this.state;
    this.animateTo = state;
    this.setClassName();
    this.setSvg(state);
    this.animationTimeout = setTimeout(() => this.endTransition(state), time);
    this.state = `transition-from-${this.animateFrom}-to-${this.animateTo}`;
  }
}

window.onload = () => {
  const treeAnim = new TreeAnim(
    document.getElementById('tree-anim'),
  );
}
