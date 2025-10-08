interface AthleticZoneLogoProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidthLetter?: number;
  strokeWidthLogo?: number;
  fillColor?: string;
  turn?: boolean;
  fontSize?: number;
}

export default function AthleticZoneLogo({
  width = 302,
  height = 304,
  className = '',
  strokeColor = 'black',
  strokeWidthLetter = 2,
  strokeWidthLogo = 0.5,
  fillColor = 'none',
  turn = false,
  fontSize = 66,
}: AthleticZoneLogoProps) {
  return (
    <div className="relative h-fit w-fit">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={302}
          height={304}
          viewBox="0 0 800 800"
          fill="none"
          className={`h-[200px] w-auto md:h-[250px] lg:h-[300px] ${turn ? 'turn' : ''}`}
          arian-hidden="true"
        >
          <rect width="100%" height="100%" fill="none" />
          <path
            id="circlePath"
            d="M400,400 m -300,0 a 300,300 0 1,1 600,0 a 300,300 0 1,1 -600,0"
            fill="none"
            stroke="none"
            strokeWidth="0"
          />
          <text
            x="0"
            y="100"
            fontFamily="Roboto Mono, ui-monospace, monospace"
            fontWeight="400"
            fontSize={fontSize}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidthLetter}
            textLength={1840}
          >
            <textPath href="#circlePath" startOffset="0%">
              Athletic Zone Ajaccio • Athletic Zone Ajaccio •
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={156}
          height={108}
          viewBox="0 0 156 108"
          fill="none"
          className="h-[46px] w-auto md:h-[63px] lg:h-[78px]"
          aria-hidden="true"
        >
          <path
            d="M155.146 107.5H101.246L79.877 67.9648L88.8662 53.1201L108.148 87.7773L108.291 88.0342H127.318L126.892 87.2861L100.002 40.1855L98.4131 37.3408L107.385 22.5264L155.146 107.5ZM88.3066 52.1133L79.3252 66.9453L60.9629 32.9668L60.5303 32.166L60.0869 32.9609L18.5088 107.5H0.848633L59.8799 1.0293L88.3066 52.1133Z"
            stroke={strokeColor}
            strokeWidth={strokeWidthLogo}
          />
        </svg>
      </div>
    </div>
  );
}
