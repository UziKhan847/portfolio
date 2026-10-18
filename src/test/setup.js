// Adds custom matchers like toBeInTheDocument() and runs before each test file.
import '@testing-library/jest-dom';

// jsdom doesn't implement ResizeObserver, which the header uses to measure
// its title text.
if (!globalThis.ResizeObserver) {
    globalThis.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}
