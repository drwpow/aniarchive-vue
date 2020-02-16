<style>
  @keyframes flash {
    to {
      transform: translateX(100%); /* line width shouldn’t be more than this */
    }
  }

  .skeletonText {
    border-radius: 2px;
    color: transparent;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }

  .skeletonText::before {
    background-image: linear-gradient(
      hsla(0, 0%, 100%, 0.1),
      hsla(0, 0%, 100%, 0.1) 1em,
      hsla(0, 0%, 100%, 0) 1em,
      hsla(0, 0%, 100%, 0) 1.4em
    );
    background-repeat: repeat-y;
    background-size: 100% 1.4em;
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  .skeletonText::after {
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: flash;
    animation-timing-function: linear;
    background-image: linear-gradient(
      60deg,
      transparent 50%,
      hsla(0, 0%, 100%, 0.15),
      transparent 60%
    );
    background-repeat: no-repeat;
    content: '';
    height: 100%;
    opacity: 0.4;
    pointer-events: none;
    position: absolute;
    right: 100%;
    top: 0;
    width: 60em; /* derived from font size */
  }
</style>

<div class="skeletonText">
  <slot />
</div>
