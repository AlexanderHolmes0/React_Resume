import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Alexander Holmes');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the MSBA candidate information correctly', () => {
    const candidateElement = screen.getByText('MSBA Candidate at UT-Knoxville');
    expect(candidateElement).toBeInTheDocument();
  });

  it('renders the GitHub link', () => {
    const githubLink = screen.getByTestId('github-link');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/AlexanderHolmes0');
  });

  it('renders the LinkedIn link', () => {
    const linkedinLink = screen.getByTestId('linkedin-link');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/aholmes0/');
  });

  it('renders the email link', () => {
    const emailLink = screen.getByTestId('email-link');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:aholme27@vols.utk.edu');
  });

  it('renders the resume link', () => {
    const resumeLink = screen.getByTestId('resume-link');
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', 'https://drive.google.com/file/d/124OHZe1soZRCrN9I4ZNGVpgzh6WTsO0S/view?usp=sharing');
  });

  it('renders the projects section', () => {
    const projectsSummary = screen.getByText('Projects');
    expect(projectsSummary).toBeInTheDocument();
    fireEvent.click(projectsSummary); // Expand projects section
    const blackjackAppLink = screen.getByText('BlackJackApp');
    expect(blackjackAppLink).toBeInTheDocument();
    const senateTrackerLink = screen.getByText('Senate_Tracker');
    expect(senateTrackerLink).toBeInTheDocument();
    const strokeDashLink = screen.getByText('Stroke_Dash');
    expect(strokeDashLink).toBeInTheDocument();
    const visualizeTreeLink = screen.getByText('VisualizeTree');
    expect(visualizeTreeLink).toBeInTheDocument();
  });

  it('renders the link to Adam Alston', () => {
    const alstonLink = screen.getByTestId('alston-link');
    expect(alstonLink).toBeInTheDocument();
    expect(alstonLink).toHaveAttribute('href', 'https://github.com/adamalston/v2');
  });
});
