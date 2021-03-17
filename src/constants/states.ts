export const exampleStates = [
  {
    label: '1',
    isActive: true,
    isInitial: true,
    isFinal: false,
    transitions: [
      { label: 'A', isActive: false, transitionAs: 'loop' },
      { label: 'B', isActive: false, transitionAs: 'leftToRight' },
      { label: 'C', isActive: false, transitionAs: 'upToDown' },
    ],
  },
  {
    label: '2',
    isActive: false,
    isInitial: false,
    isFinal: false,
    transitions: [
      { label: 'B', isActive: false, transitionAs: 'leftToRight' },
      { label: 'A', isActive: false, transitionAs: 'rightToLeft' },
    ],
  },
  {
    label: '3',
    isActive: false,
    isInitial: false,
    isFinal: true,
    transitions: [{ label: 'C', isActive: false, transitionAs: 'rightToLeft' }],
  },
  {
    label: '4',
    isActive: false,
    isInitial: false,
    isFinal: false,
    transitions: [
      { label: 'B', isActive: false, transitionAs: 'downToUp' },
      { label: 'A', isActive: false, transitionAs: 'leftToRight' },
    ],
  },
  {
    label: '5',
    isActive: false,
    isInitial: false,
    isFinal: false,
    transitions: [
      { label: 'B', isActive: false, transitionAs: 'rightToLeft' },
      { label: 'C', isActive: false, transitionAs: 'leftToRight' },
    ],
  },
  {
    label: '6',
    isActive: false,
    isInitial: false,
    isFinal: true,
    transitions: [{ label: 'B', isActive: false, transitionAs: 'rightToLeft' }],
  },
];
