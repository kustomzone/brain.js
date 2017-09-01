'use strict';

export default class BaseLayer {
  static get defaults() {
    return {
      width: 0,
      height: 0,
      depth: 0
    };
  }

  constructor(inputLayer, settings) {
    //layers
    this.inputLayer = inputLayer;
    this.nextLayer = null;
    this.previousLayer = null;

    //size
    this.width = null;
    this.height = null;
    this.depth = null;

    //methods
    this.predictKernel = null;
    this.compareKernel = null;
    this.learnKernel = null;

    //what matters :P
    this.outputs = null;
    this.errors = null;
    this.deltas = null;
    this.weights = null;
    this.changes = null;
    this.activation = null;

    const defaults = this.constructor.defaults;
    for (let p in defaults) {
      if (!defaults.hasOwnProperty(p)) continue;
      this[p] = settings.hasOwnProperty(p)
        ? settings[p]
        : defaults[p];
    }

    this.setupKernels();
  }

  setNextLayer(nextLayer) {
    this.nextLayer = nextLayer;
  }

  setPreviousLayer(previousLayer) {
    this.previousLayer = previousLayer;
  }

  setupKernels() {
    throw new Error('setupKernels not implemented on BaseLayer');
  }

  predict() {
    throw new Error('predict not implemented on BaseLayer');
  }

  compare() {
    throw new Error('compare not implemented on BaseLayer');
  }

  learn() {
    throw new Error('learn not implemented on BaseLayer');
  }

  toArray() {
    return this.outputs.toArray();
  }
}