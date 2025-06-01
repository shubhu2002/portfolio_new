import useDynamicTilt from "~/hooks/useDynamicTilt";
import useIsMobile from "~/hooks/useIsMobile";
// const DynamicTilt = dynamic(() => import('react-parallax-tilt'), {
//     ssr: false,
// });

interface TiltEffectProps {
  children: React.ReactNode;
  angle: number;
  perspective: number;
  className?: string;
}

const TiltEffect: React.FC<TiltEffectProps> = ({
  children,
  perspective,
  angle,
  className,
}: TiltEffectProps): React.ReactNode => {
  const isMobile = useIsMobile();

  const DynamicTilt = useDynamicTilt();
  if (!DynamicTilt) return;

  // if (isMobile) {
  //     return <div className='w-full h-full'>{children}</div>;
  // }

  return (
    <DynamicTilt
      className={`h-full w-full ${className}`}
      tiltMaxAngleX={angle}
      tiltMaxAngleY={angle}
      perspective={isMobile ? perspective - 800 : perspective}
    >
      {children}
    </DynamicTilt>
  );
};

export default TiltEffect;
