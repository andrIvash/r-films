import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import CombinedMain, { Main } from './index';
import FilterContent from '../FilterContent';
import ExtraInfo from '../ExtraInfo';

const mockStore = configureMockStore();
let props = {};

jest.mock('../FilterContent', () => 'filter-content');
jest.mock('../ExtraInfo', () => 'extra-info');
jest.mock('../ContentInfo', () => 'content-info');

describe('Main', () => {
  beforeEach(() => {
    props = {
      films: [
        {id: 1, title: 'title', release_date: '1992', genres: ['Drama']},
        {id: 2, title: 'title2', release_date: '1994', genres: ['Drama']},
      ],
      onFilterSelect: jest.fn(),
      view: 'COMMON',
    };
  });
  it('should be defined', () => {
    expect(Main).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = renderer.create(<Main {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should show an extra info ', () => {
    const wrapper = shallow(
      <Main {...props} /> );
    expect(wrapper.find(ExtraInfo)).toHaveLength(1);
    expect(wrapper.find(FilterContent)).toHaveLength(1);
  });
  it('should not show an extra info if no data', () => {
    props.films = [];

    const wrapper = shallow(
      <Main {...props} /> );
    expect(wrapper.find(ExtraInfo)).not.toHaveLength(1);
  });
});

describe('CombinedMain', () => {
    let wrapper, store;

    beforeEach(() => {
      const initialState = {
        selectDataFilter: {
          selected: 'rating',
        },
        filterData: {
          filteredFilms: [],
        },
      };
      store = mockStore(initialState);
      wrapper = shallow(
        <CombinedMain store={store} />,
      );
    });

    it('should show previously state value', () => {
      expect(wrapper.props().selected).toBe('rating');
    });

});
