import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import helpers from '../helpers';

describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should emit search when doSearch emmit', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().sendQuery = jest.fn();
    wrapper.instance().doSearch();
    expect(wrapper.instance().sendQuery).toHaveBeenCalledTimes(1);
  });

  it('should change state and send query when onFilmSelect emit', () => {
    const wrapper = shallow( <App /> );
    wrapper.instance().setState({
      films: [{ id: 1, genres: ['Drama'] }],
    });
    wrapper.instance().sendQuery = jest.fn();
    wrapper.instance().onFilmSelect(1);
    expect(wrapper.state().posterData.id).toBe(1);
    expect(wrapper.state().selectedGenre).toBe('Drama');
    expect(wrapper.instance().sendQuery).toHaveBeenCalledTimes(1);
  });

  it('should change view when toSearch emit', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setState({
      view: helpers.views.POSTER,
    });
    wrapper.instance().toSearch();
    expect(wrapper.state().view).toBe(helpers.views.COMMON);
  });

  it('should get data when send query emit', async () => {
    const wrapper = shallow(<App />);
    helpers.getData = jest.fn()
      .mockReturnValueOnce(Promise.resolve({ data: [1, 2] }));
    await wrapper.instance().sendQuery();
    expect(helpers.getData).toHaveBeenCalledTimes(1);
    expect(wrapper.state().films).toHaveLength(2);
  });
});
