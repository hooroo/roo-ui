/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import StarRating from './StarRating';

let ratingType;
let rating;

describe('<StarRating />', () => {
  it('renders the icons', () => {
    rating = '1';
    ratingType = 'SELF_RATED';
    const wrapper = shallow(<StarRating rating={rating} ratingType={ratingType} size="16" />);
    const stars = wrapper.find('Icon');
    expect(stars.length).toBe(5);
  });

  ['AAA', 'SELF_RATED'].forEach((type) => {
    describe(`${type} Rated <StarRating />`, () => {
      const ratingTypeIcon = (type === 'AAA') ? 'star' : 'circle';

      it('renders the 5 star rating', () => {
        rating = '5';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}`);
      });

      it('renders the 4.5 star rating', () => {
        rating = '4.5';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Half`);
      });

      it('renders the 4 star rating', () => {
        rating = '4';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Border`);
      });

      it('renders the 3.5 star rating', () => {
        rating = '3.5';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}Half`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Border`);
      });

      it('renders the 3 star rating', () => {
        rating = '3';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Border`);
      });

      it('renders the 2.5 star rating', () => {
        rating = '2.5';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}Half`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Border`);
      });

      it('renders the 2 star rating', () => {
        rating = '2';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Border`);
      });

      it('renders the 1.5 star rating', () => {
        rating = '1.5';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}Half`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Border`);
      });

      it('renders the 1 star rating', () => {
        rating = '1';
        const wrapper = shallow(<StarRating rating={rating} ratingType={type} size="16" />);
        const stars = wrapper.find('Icon');
        expect(stars.at(0).prop('name')).toEqual(`${ratingTypeIcon}`);
        expect(stars.at(1).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(2).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(3).prop('name')).toEqual(`${ratingTypeIcon}Border`);
        expect(stars.at(4).prop('name')).toEqual(`${ratingTypeIcon}Border`);
      });
    });
  });
});
