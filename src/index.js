import _ from 'lodash-es';
import deepdash from 'deepdash-es';

deepdash(_);

function component() {

  let things = {
    things: [
      { name: 'something', good: false },
      {
        name: 'another thing', good: true,
        children: [
          { name: 'child thing 1', good: false },
          { name: 'child thing 2', good: true },
          { name: 'child thing 3', good: false },
        ],
      },
      {
        name: 'something else', good: true,
        subItem: { name: 'sub-item', good: false },
        subItem2: { name: 'sub-item-2', good: true },
      },
    ],
  };
  let filtrate = _.filterDeep(
    things,
    (value, key, parent) => {
      if (key == 'name' && parent.good) return true;
      if (key == 'good' && value == true) return true;
    }
  );
  console.log(filtrate);
  
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());