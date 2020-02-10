import * as preact from '/web_modules/preact.js';
import { OneFilmQuery } from '../../types/graphql';

interface AnimationGridProps {
  animationSequences: OneFilmQuery['film']['animationSequences'];
}

const AnimationGrid: preact.FunctionComponent<AnimationGridProps> = ({ animationSequences }) => (
  <div className="animationGrid">
    {animationSequences.map(({ id, url, image }) => (
      <a
        key={url}
        className="animationGrid-item"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        data-id={id}
      >
        <img src={image.url} alt={image.title} />
      </a>
    ))}
  </div>
);

export default AnimationGrid;
