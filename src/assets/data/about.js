const name = 'Daniel Higley';
const greetingText = 'Hello, I\'m Daniel Higley.';
const greetingSubtext = 'I\'m an Applied Physicist.';
const about = `I'm passionate about discovering and developing transformative technologies through a combination of
                  analysis of complex data and numerical simulations. I am particularly interested in materials, the
                  interactions of materials with electromagnetic radiation (THz, optical, X-ray etc.), and quantum
                  computing.`;
const education = [
  {
    school: 'Stanford',
    degree: 'PhD in Applied Physics, 2018<br />M.S. in Applied Physics, 2017',
    logo: require('../stanford-logo.jpg'),
  },
  {
    school: 'Colorado State',
    degree: 'B.S. in Electrical Engineering, 2012<br />\nMinors in Physics & Mathematics',
    logo: require('../colorado-state-logo.png'),
  },
];

module.exports = {
  greetingText,
  greetingSubtext,
  about,
  education,
  name,
};
