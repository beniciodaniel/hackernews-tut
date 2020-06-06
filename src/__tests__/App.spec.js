import React from 'react';
import { App } from '../App';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';
import { cleanup, render, waitForElement } from '@testing-library/react';

beforeEach(cleanup); //the dom

jest.mock('../hooks/useInfiniteScroll.js');
jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn()
}))

test('renders the application', async() => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));


  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<App />);

  await waitForElement(() => [
    expect(getByText('Hacker News Stories')).toBeTruthy(),
    expect(getByText('Batatinha Foi ao Espaço')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Beni Teste')
  ]);
})

