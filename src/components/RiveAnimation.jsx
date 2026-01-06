import { useRive } from '@rive-app/react-canvas';

const RiveAnimation = ({ src, autoplay = true }) => {
  const { RiveComponent } = useRive({
    src: src,
    autoplay: autoplay,
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <RiveComponent />
    </div>
  );
};

export default RiveAnimation;
