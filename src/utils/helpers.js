import { AVAILABLE_FILTERS } from 'data/constants';

export function sortAsc(arr, field) {
  // eslint-disable-next-line
  return arr.sort(function(a, b) {
    if(a[field] > b[field]) {
      return 1;
    }
    if(b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
}

export function sortDesc(arr, field) {
  // eslint-disable-next-line
  return arr.sort(function(a, b) {
    if(a[field] > b[field]) {
      return -1;
    }
    if(b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
}

function highlightColor(e){
  const allTabs = e.target.parentElement.parentElement.childNodes;
  allTabs.forEach(el => el.classList.remove('selected'));
  e.target.closest('li').classList.add("selected");
}


export  const colorKeyPressHandler = (color, e) => {
  if(e.code === 13) {
    let imgTag = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
    if (imgTag.src === undefined) { 
      imgTag = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
      }
    if (imgTag.src === undefined) return;
    const phoneNameUrl = imgTag.src.split('/');
    const phoneNameSplitArray = phoneNameUrl[phoneNameUrl.length - 1].split('.')[0].split('_');
    const phoneName = phoneNameSplitArray.splice(0, phoneNameSplitArray.length - 1).join('_');
    imgTag.src = require(`../data/img/${phoneName}_${color}.png`);
  }
};

export  const colorHandler = (color, e) => {
  highlightColor(e);
  let imgTag = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
  if (imgTag.src === undefined) { 
    imgTag = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
    }
  if (imgTag.src === undefined) return;
  const phoneNameUrl = imgTag.src.split('/');
  const phoneNameSplitArray = phoneNameUrl[phoneNameUrl.length - 1].split('.')[0].split('_');
  const phoneName = phoneNameSplitArray.splice(0, phoneNameSplitArray.length - 1).join('_');
  imgTag.src = require(`../data/img/${phoneName}_${color}.png`);
};

export const filterSmartphones = (smartphones, filter ) => {
  switch(filter) {
    case AVAILABLE_FILTERS.SHOW_WHITE:
      return smartphones.filter(smartphone => smartphone.colors.includes('white'));

    case AVAILABLE_FILTERS.SHOW_BLACK:
      return smartphones.filter(smartphone => smartphone.colors.includes('black'));

    case AVAILABLE_FILTERS.SHOW_PINK:
      return smartphones.filter(smartphone => smartphone.colors.includes('pink'));

    case AVAILABLE_FILTERS.SHOW_BLUE:
      return smartphones.filter(smartphone => smartphone.colors.includes('blue'));

    case AVAILABLE_FILTERS.SHOW_GOLD:
      return smartphones.filter(smartphone => smartphone.colors.includes('gold'));

    case AVAILABLE_FILTERS.SHOW_GRAY:
      return smartphones.filter(smartphone => smartphone.colors.includes('gray'));

    case AVAILABLE_FILTERS.SHOW_RED:
      return smartphones.filter(smartphone => smartphone.colors.includes('red'));

    case AVAILABLE_FILTERS.SHOW_ALL:
      return smartphones;

    default:
      return smartphones;
  }
};
