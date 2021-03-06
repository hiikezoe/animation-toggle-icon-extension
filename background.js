let index = 0;
browser.browserAction.onClicked.addListener(() => {
  let direction = (index % 2 == 0) ? 'normal' : 'reverse';
  const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" id="' + index + '" viewbox="0 0 100 100" width="100" height="100">' +
  '<style type="text/css">' +
  '@keyframes move {' +
  '  from { transform: translateX(0%); }' +
  '  to { transform: translateX(-40%); }' +
  '}' +
  '@keyframes color {' +
  '  from { fill: gray; }' +
  '  to { fill: red; }' +
  '}' +
  'circle {' +
  '  animation: move 0.5s forwards ' + direction + ';' +
  '}' +
  'rect {' +
  '  animation: color 0.5s forwards ' + direction + ';' +
  '}' +
  '</style>' +
  '<rect x="5" y="20" rx="30" ry="25" width="90" height="50" />' +
  '<circle cx="70" cy="45" r="20" style="fill: white;" />' +
  '</svg>';
  browser.browserAction.setIcon({ path: 'data:image/svg+xml,' + escape(svg) }).then(() => {
    index++;
  });
});
