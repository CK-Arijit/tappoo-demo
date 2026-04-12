window.PROTOTYPE_DATA = {
  title: "Finalised Mockup Prototype",
  description: "Interactive demo generated from finalised-mockup.pen",
  start: "xw86L",
  screens: [
    { id: "xw86L", name: "Screen 1" },
    { id: "I7Tbf", name: "Screen 2" },
    { id: "OjAB5", name: "Screen 3" },
    { id: "TRYok", name: "Screen 4" },
    { id: "ipWjD", name: "Screen 5" },
    { id: "Kfp22", name: "Screen 6" },
    { id: "K5lmM", name: "Screen 7" },
    { id: "slcNh", name: "Screen 8" },
    { id: "pM9mf", name: "Screen 9" }
  ],
  transitions: {
    xw86L: [{ to: "I7Tbf", label: "Next: Screen 2" }],
    I7Tbf: [{ to: "OjAB5", label: "Next: Screen 3" }],
    OjAB5: [{ to: "TRYok", label: "Next: Screen 4" }],
    TRYok: [{ to: "ipWjD", label: "Next: Screen 5" }],
    ipWjD: [{ to: "Kfp22", label: "Next: Screen 6" }],
    Kfp22: [{ to: "K5lmM", label: "Next: Screen 7" }],
    K5lmM: [{ to: "slcNh", label: "Next: Screen 8" }],
    slcNh: [{ to: "pM9mf", label: "Next: Screen 9" }],
    pM9mf: [{ to: "xw86L", label: "Restart Flow" }]
  }
};
