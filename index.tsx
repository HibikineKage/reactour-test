import * as React from 'react';
import { render } from 'react-dom';
import Tour from 'reactour';
import Joyride from 'react-joyride';

const TourRoot: React.SFC = () => {
  const [isOpen, setOpen] = React.useState(true);
  return (
    <div>
      Hello!
      <h1 id="title">title</h1>
      <button id="button" onClick={() => {}}>
        Piyo
      </button>
      <Tour
        showButtons={true}
        steps={[
          {
            selector: '#button',
            content: 'content',
            stepInteraction: true,
            showButtons: true,
          },
          {
            selector: '#title',
            content: () => <div>Hoge</div>,
            stepInteraction: true,
          },

          {
            selector: '#title',
            content: () => <div>fuga</div>,
          },
        ]}
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
      />
    </div>
  );
};
const Root: React.SFC = () => (
  <div>
    <button id="button">Hogehoge</button>
    <Joyride
      disableOverlayClose={true}
      steps={[
        {
          spotlightClicks: true,
          title: 'hogehoge',
          disableBeacon: true,
          target: '#button',
          content: 'fua',
        },
      ]}
    />
  </div>
);
render(<TourRoot />, document.getElementById('root'));
