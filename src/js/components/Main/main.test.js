import React from 'react';
import configureMockStore from 'redux-mock-store';
import CombinedMain, { Main } from './index';
import FilterContent from '../FilterContent';
import ExtraInfo from '../ExtraInfo';

const mockStore = configureMockStore();

let props = {};

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
    const wrapper = render(
      <Main {...props} /> );
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
  it('should change filter when onFilterSelect emit', () => {
    const wrapper = mount(
      <Main {...props} /> );
    wrapper.find(FilterContent).find('#release').simulate('change');
    expect(props.onFilterSelect).toHaveBeenCalledTimes(1);
    expect(props.onFilterSelect.mock.calls[0][0])
      .toEqual('release');
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
