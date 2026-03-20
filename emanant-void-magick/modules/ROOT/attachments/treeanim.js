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
      "labelFlip": true,
    },
    "emanation-3-5": {
      "labelOffset": 0.31,
      "from": "sphere-0-1",
      "to": "sphere-3-5",
      "labelFlip": true,
    },
    "emanation-4-7": {
      "from": "sphere-0-1",
      "to": "sphere-3-5",
      "labelOffset": 0.37,
    },
    "from": "sphere-5-11",
    "to": "sphere-3-5"
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
      "labelFlip": false,
    },
    "emanation-3-5": {
      "from": "sphere-3-5",
      "to": "sphere-2-3",
      "labelFlip": false,
    },
    "emanation-4-7": {
      "labelFlip": false,
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
    "emanation-5-11": {
      "labelFlip": true,
    },
    "emanation-6-13": {
      "labelFlip": true,
    },
    "from": "sphere-5-11",
    "to": "sphere-6-13"
  },
  "path-11-12": {
    "from": "sphere-6-13",
    "to": "sphere-3-5"
  },
  "path-12-7": {
    "from": "sphere-3-5",
    "to": "sphere-4-7"
  },
  "path-13-13": {
    "emanation-5-11": {
      "from": "sphere-4-7",
      "to": "sphere-6-13",
      "labelFlip": false,
    },
    "emanation-6-13": {
      "from": "sphere-4-7",
      "to": "sphere-6-13",
      "labelFlip": false,
    },
    "labelFlip": true,
    "from": "sphere-4-7",
    "to": "sphere-7-17"
  },
  "path-14-14": {
    "from": "sphere-7-17",
    "to": "sphere-5-11"
  },
  "path-15-16": {
    "from": "sphere-5-11",
    "to": "sphere-8-19"
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
    "to": "sphere-8-19"
  },
  "path-19-19": {
    "emanation-8-19": {
      "labelFlip": true,
    },
    "emanation-9-23": {
      "labelFlip": true,
    },
    "from": "sphere-8-19",
    "to": "sphere-9-23"
  },
  "path-20-20": {
    "from": "sphere-9-23",
    "to": "sphere-6-13"
  },
  "path-21-25": {
    "labelOffset": 0.7,
    "from": "sphere-6-13",
    "to": "sphere-11-31"
  },
  "path-22-24": {
    "from": "sphere-11-31",
    "to": "sphere-8-19"
  },
  "path-23-22": {
    "from": "sphere-8-19",
    "to": "sphere-10-29"
  },
  "path-24-21": {
    "emanation-8-19": {
      "from": "sphere-9-23",
      "to": "sphere-7-17",
      "labelFlip": false,
    },
    "emanation-9-23": {
      "from": "sphere-9-23",
      "to": "sphere-7-17",
      "labelFlip": false,
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
    "to": "sphere-9-23"
  },
  "path-27-23": {
    "emanation-10-29": {
      "labelOffset": 0.5
    },
    "from": "sphere-9-23",
    "to": "sphere-10-29",
    "labelOffset": 0.7,
  },
  "path-28-28": {
    "from": "sphere-10-29",
    "to": "sphere-11-31"
  }
}

class TreeAnim {
  constructor(container) {
    this.container = container;
    this.state = 'init'
    this.animating = false;
    this.animateFrom = null
    this.animateTo = null
    this.nextLink = document.getElementsByClassName('nav-button-next')[0];
    this.previousLink = document.getElementsByClassName('nav-button-previous')[0];
    this.showPathNameLink =  document.getElementsByClassName('nav-button-show-path-name')[0];
    this.showPathEmanationSigilLink =  document.getElementsByClassName('nav-button-show-path-emanation-sigil')[0];
    this.showNav = false;

    window.onhashchange = () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      this.pathLabelMode = hashParams.get("pl") || "emanation-sigil";
      const newState = hashParams.get("s");
      if (this.state != newState) {
        this.startTransition(hashParams.get("s"), TRANSITION_DURATION);
      } else {
        this.setClassName();
      }
      this.setButtonsDisabled();
    };
    if (window.location.hash) {
      var hashParams = new URLSearchParams(window.location.hash.substring(1));
      this.pathLabelMode = hashParams.get("pl") || "emanation-sigil";
      this.setState(hashParams.get("s"));
      this.setButtonsDisabled();
    } else {
      window.location.hash = 's=emanation-0&pl=emanation-sigil';
    }

    this.previousLink.onclick = (event) => {
      event.preventDefault();
      if (!this.animating) {
      	this.transitionToPrevious();
      }
    }

    this.nextLink.onclick = (event) => {
      event.preventDefault();
      if (!this.animating) {
      	this.transitionToNext();
      }
    }

    this.showPathNameLink.onclick = (event) => {
      this.setPathNameMode("name");
    }
    this.showPathEmanationSigilLink.onclick = (event) => {
      this.setPathNameMode("emanation-sigil");
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
    if (this.pathLabelMode === 'name') {
      this.showPathNameLink.disabled = true;
      this.showPathEmanationSigilLink.disabled = false;
    } else {
      this.showPathNameLink.disabled = false;
      this.showPathEmanationSigilLink.disabled = true;
    }
  }

  setPathNameMode(value) {
    var hashParams = new URLSearchParams(window.location.hash.substring(1));
    hashParams.set("pl", value);
    window.location.hash = hashParams.toString();
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
    var classes = [`show-path-${this.pathLabelMode}`];
    if (this.animating) {
      classes.push(this.animateTo);
      classes.push("transition");
      classes.push(`transition-from-${this.animateFrom}`);
    } else {
      classes.push(this.state);
    }
    if (hashParams.get("nav") === "t") {
      classes.push("show-nav")
    }
    this.container.className = classes.join(" ")
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
    const labelFlip = PATHS[pathName]?.[state]?.labelFlip ?? PATHS[pathName].labelFlip ?? false;
    const labelOffset = PATHS[pathName]?.[state]?.labelOffset ?? PATHS[pathName].labelOffset ?? 0.5;

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
      return;
    }
    pathGroup.classList.add("show");
    const fromX = parseFloat(fromTarget.getAttribute("cx"));
    const fromY = parseFloat(fromTarget.getAttribute("cy"));
    const toX = parseFloat(toTarget.getAttribute("cx"));
    const toY = parseFloat(toTarget.getAttribute("cy"));
    const blackStroke = pathGroup.querySelector('path.black-stroke');
    const whiteStroke = pathGroup.querySelector('path.white-stroke');
    const nameText = pathGroup.querySelector('text.path-name');
    const sigil = pathGroup.querySelector('use.path-emanation-number');
    blackStroke.setAttribute("d", `M ${fromX},${fromY} L ${toX},${toY}`);
    whiteStroke.setAttribute("d", `M ${fromX},${fromY} L ${toX},${toY}`);
    const strokeWidth = parseFloat(window.getComputedStyle(whiteStroke).strokeWidth);
    const sigilHeight = strokeWidth * 0.75;
    const sigilWidth = sigilHeight / 1.41214;
    const setX = (fromX * labelOffset) + (toX * (1-labelOffset));
    const setY = (fromY * labelOffset) + (toY * (1-labelOffset));

    const angle = (labelFlip ? 180 : 0) + (
      fromX === toX ? -90 :
      Math.atan((fromY - toY) / (fromX - toX)) * 180 / Math.PI
    );
    sigil.setAttribute("width", sigilWidth);
    sigil.setAttribute("height", sigilHeight);
    sigil.setAttribute("transform", `rotate(${angle} ${setX} ${setY})`);
    sigil.setAttribute("x", setX - sigilWidth/2);
    sigil.setAttribute("y", setY - sigilHeight/2);
    if (nameText) {
      nameText.style.transformOrigin = `${setX}% ${setY/1.62}%`;
      nameText.style.transform = `rotate(${angle}deg) scale(${strokeWidth * 0.03}) translate(${setX-50}%, ${setY/1.62-50}%)`;
    }
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
    const targetX = target.getAttribute("cx");
    const targetY = target.getAttribute("cy");
    const targetR = target.getAttribute("r");
    const scale = targetR / 50;
    sphere.style.transform = `scale(${scale}) translate(${(targetX-50)/scale}%, ${(targetY-81)/scale*100/162}%)`;
  }

  startTransition(state, time) {
    if (this.animating) {
      this.endTransition();
    }
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
