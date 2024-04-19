class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe(target) {
    // Simula a interseção
    this.callback([
      {
        isIntersecting: true,
        target,
      },
    ]);
  }

  disconnect() {
    // Simula a desconexão
  }
}

module.exports = IntersectionObserver;
