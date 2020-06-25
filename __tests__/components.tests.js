var React = require('react');
var App = require('../src/components/App.jsx');
var Menu = require('../src/components/Menu.jsx');
var toJson = require('enzyme-to-json');
var enzyme = require('enzyme');
var renderer = require('react-test-renderer');

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

var wrapper = enzyme.shallow(<App />);

describe('<Menu />', () => {
  describe('render()', () => {
    test('renders some mtuff', () => {
      const wrapper = shallow(<Menu />);
      const component = wrapper.dive();

      expect(1).toEqual(1);
    });
  });
});

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

module.exports = {
  verbose: true,
};
