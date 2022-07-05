const TRANSITION_DURATION = 1500;

class TreeAnim {
  constructor(container) {
    this.animating = false;
    this.container = container;
    this.controls = container.getElementsByClassName('controls')[0];
    this.display = container.getElementsByClassName('display')[0];
    this.nav = this.controls.getElementsByClassName('nav')[0];
    this.nextLink = this.nav.getElementsByClassName('next')[0];
    this.previousLink = this.nav.getElementsByClassName('previous')[0];

    window.onhashchange = () => {
      if (this.animating) {
        clearTimeout(this.animationTimeout);
      }
      this.setState(window.location.hash.substring(1))
    };
    if (window.location.hash) {
      this.setState(window.location.hash.substring(1));
    } else {
      this.state = 'new';
      this.startTransition('emergence-0', TRANSITION_DURATION);
    }

    this.display.onclick = () => this.animateToNext();
    this.nextLink.onclick = (event) => {
      event.preventDefault();
      if (!this.animating) {
      	this.animateToNext();
      }
    }
    this.container.style.display = 'block';
  }

  animateToNext() {
    switch (this.state) {
      case 'emergence-0':
        this.startTransition('emergence-00', TRANSITION_DURATION);
        break;
      case 'emergence-00':
        this.startTransition('emergence-000', TRANSITION_DURATION);
        break;
      case 'emergence-000':
        this.startTransition('emergence-1', TRANSITION_DURATION);
        break;
      case 'emergence-1':
        this.startTransition('emergence-2', TRANSITION_DURATION);
        break;
      case 'emergence-2':
        this.startTransition('emergence-3', TRANSITION_DURATION);
        break;
      case 'emergence-3':
        this.startTransition('emergence-4', TRANSITION_DURATION);
        break;
      case 'emergence-4':
        this.startTransition('emergence-5', TRANSITION_DURATION);
        break;
      case 'emergence-5':
        this.startTransition('emergence-5x', TRANSITION_DURATION);
        break;
      case 'emergence-5x':
        this.startTransition('emergence-6', TRANSITION_DURATION);
        break;
      case 'emergence-6':
        this.startTransition('emergence-6x', TRANSITION_DURATION);
        break;
      case 'emergence-6x':
        this.startTransition('emergence-7x', TRANSITION_DURATION);
        break;
      case 'emergence-7x':
        this.startTransition('emergence-8x', TRANSITION_DURATION);
        break;
      case 'emergence-8x':
        this.startTransition('emergence-9x', TRANSITION_DURATION);
        break;
      case 'emergence-9x':
        this.startTransition('emergence-10x', TRANSITION_DURATION);
        break;
      case 'emergence-10x':
        this.startTransition('emergence-11x', TRANSITION_DURATION);
        break;
      case 'emergence-11x':
        this.startTransition('emergence-12x', TRANSITION_DURATION);
        break;
      case 'emergence-12x':
        this.startTransition('emergence-12x-fools-journey', 30000);
        break;
    }
  }

  setState(state) {
    this.state = state;
    this.container.className = state;
    if (state === 'emergence-0') {
      this.previousLink.classList.add('disabled');
    } else {
      this.previousLink.classList.remove('disabled');
    }
    if (state === 'emergence-12-fools-journey') {
      this.nextLink.classList.add('disabled');
    } else {
      this.nextLink.classList.remove('disabled');
    }
    switch (state) {
      case 'emergence-0':
	this.nextLink.href = '#emergence-00'
	this.previousLink.href = '#emergence-0'
	break;
      case 'emergence-00':
	this.nextLink.href = '#emergence-000'
	this.previousLink.href = '#emergence-0'
	break;
      case 'emergence-000':
	this.nextLink.href = '#emergence-1'
	this.previousLink.href = '#emergence-00'
	break;
      case 'emergence-1':
	this.nextLink.href = '#emergence-2'
	this.previousLink.href = '#emergence-000'
	break;
      case 'emergence-2':
	this.nextLink.href = '#emergence-3'
	this.previousLink.href = '#emergence-1'
	break;
      case 'emergence-3':
	this.nextLink.href = '#emergence-4'
	this.previousLink.href = '#emergence-2'
	break;
      case 'emergence-4':
	this.nextLink.href = '#emergence-5'
	this.previousLink.href = '#emergence-3'
	break;
      case 'emergence-5':
	this.nextLink.href = '#emergence-5x'
	this.previousLink.href = '#emergence-4'
	break;
      case 'emergence-5x':
	this.nextLink.href = '#emergence-6';
	this.previousLink.href = '#emergence-5';
	break;
      case 'emergence-6':
	this.nextLink.href = '#emergence-6x';
	this.previousLink.href = '#emergence-5x';
	break;
      case 'emergence-6x':
	this.nextLink.href = '#emergence-7x';
	this.previousLink.href = '#emergence-6';
	break;
      case 'emergence-7x':
	this.nextLink.href = '#emergence-8x';
	this.previousLink.href = '#emergence-6x';
	break;
      case 'emergence-8x':
	this.nextLink.href = '#emergence-9x';
	this.previousLink.href = '#emergence-7x';
	break;
      case 'emergence-9x':
	this.nextLink.href = '#emergence-10x';
	this.previousLink.href = '#emergence-8x';
	break;
      case 'emergence-10x':
	this.nextLink.href = '#emergence-11x';
	this.previousLink.href = '#emergence-9x';
	break;
      case 'emergence-11x':
	this.nextLink.href = '#emergence-12x';
	this.previousLink.href = '#emergence-10x';
	break;
      case 'emergence-12x':
	this.nextLink.href = '#emergence-12x-fools-journey';
	this.previousLink.href = '#emergence-11x';
	break;
      case 'emergence-12x-fools-journey':
	this.nextLink.href = '#emergence-12x-fools-journey';
	this.previousLink.href = '#emergence-12x';
	break;
    }
  }

  endTransition(state) {
    this.animating = false;
    this.nextLink.classList.remove('disabled');
    this.previousLink.classList.remove('disabled');
    window.location.hash = state;
  }

  startTransition(state, time) {
    this.animating = true;
    this.nextLink.classList.add('disabled');
    this.previousLink.classList.add('disabled');
    this.container.className = `${state} transition-from-${this.state}`;
    this.animationTimeout = setTimeout(() => this.endTransition(state), time);
    this.state = `transition-from-${this.state}-to-${state}`;
  }
}

window.onload = () => {
  const treeAnim = new TreeAnim(
    document.getElementById('tree-anim'),
  );
}
