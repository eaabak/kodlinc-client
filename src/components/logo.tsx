'use client'
import React from "react";
interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_19_26)">
        <rect x="5" y="5" width="1024" height="1024" rx="64" fill="#AAD4C8" />
      </g>
      <path
        d="M523.257 449.529C522.969 450.739 523.175 451.996 524.039 452.892L527.684 456.67C527.703 456.689 527.732 456.7 527.752 456.718V456.718C527.754 456.719 527.753 456.719 527.754 456.72L528.282 457.264C541.069 470.45 563.133 466.704 565.758 448.525C566.17 445.671 566.471 442.809 566.656 439.945C567.53 426.385 565.914 412.753 561.591 399.906C557.254 387.073 550.163 375.023 540.372 364.944L425.826 246.846C416.047 236.73 404.362 229.415 391.895 224.961C373.185 218.255 352.859 217.844 333.42 222.992C314.008 228.14 295.345 238.911 279.852 254.867C259.215 276.164 247.543 303.213 245.768 330.35C244.888 343.91 246.509 357.539 250.832 370.389C255.169 383.239 262.26 395.291 272.072 405.369L386.611 523.465C396.39 533.564 408.076 540.876 420.522 545.35C439.232 552.04 459.584 552.45 478.997 547.302V547.302C491.191 544.087 493.635 529.012 484.853 519.962L475.627 510.455V510.455C475.596 510.429 475.58 510.389 475.552 510.36L475.034 509.826C472.287 506.996 468.204 506.005 464.338 506.787C461.744 507.311 459.158 507.669 456.605 507.847C448.653 508.396 441.026 507.369 434.194 504.901C427.322 502.433 421.211 498.584 415.981 493.188L301.442 375.093C296.206 369.68 292.471 363.396 290.082 356.314C286.479 345.736 286.05 333.314 289.168 320.767C292.3 308.238 298.941 295.743 309.223 285.166C322.908 271.018 339.95 263.53 355.84 262.465C363.792 261.916 371.398 262.944 378.251 265.412C385.117 267.879 391.228 271.729 396.464 277.125L511.003 395.22C516.233 400.616 519.968 406.916 522.364 413.995C525.945 424.576 526.389 436.999 523.257 449.529V449.529Z"
        fill="#616E7D"
      />
      <path
        d="M538.233 577.543C538.524 576.329 538.323 575.08 537.454 574.183L529.718 566.207C518.635 554.779 499.553 557.95 496.572 573.588C495.716 578.08 495.134 582.601 494.835 587.127C493.941 600.704 495.576 614.318 499.899 627.185C504.222 640.015 511.327 652.067 521.125 662.149L635.664 780.245C645.442 790.361 657.128 797.672 669.595 802.126C688.285 808.836 708.631 809.225 728.05 804.095C747.502 798.932 766.145 788.177 781.638 772.221C802.275 750.907 813.947 723.857 815.722 696.72C816.602 683.18 814.98 669.532 810.644 656.698C806.327 643.851 799.217 631.8 789.417 621.717L674.879 503.621C665.1 493.525 653.414 486.211 640.968 481.74C622.258 475.047 601.905 474.641 582.493 479.787V479.787C570.302 483.005 567.861 498.068 576.64 507.119L581.023 511.638C587.112 517.916 596.16 519.85 604.885 519.239V519.239C612.842 518.69 620.45 519.72 627.302 522.167C634.168 524.652 640.279 528.506 645.509 533.902L760.055 651.995C765.285 657.408 769.019 663.691 771.416 670.773C774.998 681.351 775.441 693.792 772.31 706.324C769.191 718.854 762.551 731.349 752.275 741.926C738.584 756.053 721.541 763.541 705.658 764.627C697.707 765.177 690.093 764.146 683.247 761.678C676.374 759.214 670.283 755.361 665.033 749.965L550.487 631.873C545.257 626.477 541.522 620.176 539.126 613.093C535.551 602.516 535.101 590.093 538.233 577.543V577.543Z"
        fill="#616E7D"
      />
      <path
        d="M559.083 489.018L554.501 484.299L527.756 456.72C527.754 456.719 527.755 456.719 527.753 456.718V456.718C527.734 456.7 527.704 456.689 527.686 456.67L522.643 451.444L449.119 375.642C435.414 361.533 413.196 361.533 399.49 375.642L396.994 378.216C383.309 392.343 383.309 415.257 396.994 429.384L470.564 505.219L475.597 510.404C475.61 510.421 475.61 510.438 475.629 510.455L502.43 538.074L507.012 542.794L538.857 575.629L594.77 633.273C608.469 647.402 630.674 647.402 644.379 633.273L646.874 630.719C660.573 616.589 660.573 593.66 646.874 579.533L590.929 521.852L559.083 489.018Z"
        fill="white"
      />
      <path
        d="M884.678 904.459C899.861 904.459 912.168 865.567 912.168 817.589V657.985C912.168 636.736 912.168 626.112 912.928 616.113C913.601 607.252 914.712 598.778 916.218 591.003C917.61 583.83 919.455 577.495 922.685 567.196C924.247 562.216 926.432 557.451 929.164 553.004L932.829 547.037C945.449 526.489 945.449 500.592 932.829 480.044L929.164 474.077C926.432 469.63 924.247 464.865 922.685 459.885C919.455 449.586 917.61 443.251 916.218 436.078C914.712 428.303 913.601 419.83 912.928 410.966C912.168 400.968 912.168 390.345 912.168 369.097V209.492C912.168 161.515 899.861 122.622 884.678 122.622"
        stroke="white"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M183.685 904.459C176.093 904.459 169.94 865.567 169.94 817.589V657.985C169.94 636.736 169.94 626.112 169.56 616.113C169.223 607.252 168.667 598.778 167.914 591.003C167.336 585.041 166.601 579.657 165.442 572.094C164.186 563.906 161.293 556.054 157.006 548.966L155.614 546.665C143.295 526.3 143.295 500.781 155.614 480.416L157.006 478.115C161.293 471.027 164.186 463.175 165.442 454.987C166.601 447.424 167.336 442.04 167.914 436.078C168.667 428.303 169.223 419.83 169.56 410.966C169.94 400.968 169.94 390.345 169.94 369.097V209.492C169.94 161.515 176.093 122.622 183.685 122.622"
        stroke="white"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_19_26"
          x="0"
          y="0"
          width="1034"
          height="1034"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_26"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_26"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}