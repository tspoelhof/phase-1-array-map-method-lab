const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const titleCase = [];

  for (const tutorial of tutorials) {
    const words = tutorial.split(' ');
    const titleUpperCase = [];

    for(const upperCaseWord of words) {
      const capitalizeW = upperCaseWord.charAt(0).toUpperCase() + upperCaseWord.slice(1);
      titleUpperCase.push(capitalizeW);
    }
        titleCase.push(titleUpperCase.join(' '));
      }
      return titleCase;
    }