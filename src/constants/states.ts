export const states = [
  {
    label: 'sI',
    isActive: true,
    isInitial: true,
    isFinal: false,
    transitions: [
      { label: '1,2,5', isActive: false, transitionAs: 'leftToRight' },
    ],
  },
  {
    label: 'q0',
    isActive: false,
    isInitial: false,
    isFinal: false,
    transitions: [{ label: '5', isActive: false, transitionAs: 'leftToRight' }],
  },
  {
    label: 'q1',
    isActive: false,
    isInitial: false,
    isFinal: false,
    transitions: [
      { label: 'A', isActive: false, transitionAs: 'leftToRight' },
      { label: '1', isActive: false, transitionAs: 'upToDown' },
      {
        label: '2,5',
        isActive: false,
        transitionAs: 'straight',
        width: 230,
        position: { top: 90, right: 54 },
        rotate: 136,
      },
    ],
  },
  {
    label: 'q2',
    isActive: false,
    isInitial: false,
    isFinal: true,
  },
  {
    label: 'q6',
    isActive: false,
    isInitial: false,
    isFinal: true,
  },
  {
    label: 'q5',
    isActive: false,
    isInitial: false,
    isFinal: false,
    transitions: [
      { label: 'A,B,C', isActive: false, transitionAs: 'rightToLeft' },
    ],
  },
  {
    label: 'q3',
    isActive: false,
    isInitial: false,
    isFinal: false,
    transitions: [
      { label: 'A,B', isActive: false, transitionAs: 'leftToRight' },
    ],
  },
  {
    label: 'q4',
    isActive: false,
    isInitial: false,
    isFinal: true,
  },
];
