import React, { Component } from "react";
import "./Home.css";
import About from "../About/About";
import { gsap } from "gsap";
import Code from "../Code/Code";

export default class Home extends Component {
  componentDidMount() {
    gsap.to(".leftLeaf", {
      duration: 1,
      rotate: -15,
      transformOrigin: "bottom",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });
    gsap.to(".circle", { y: "+=6px", yoyo: true, repeat: -1, repeatDelay: 1 });
    gsap.to(".rightLeaf", {
      duration: 1,
      rotate: 15,
      transformOrigin: "bottom",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    gsap.to(".leafOutline", {
      duration: 1,
      rotate: -15,
      transformOrigin: "bottom",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    gsap.to(".steam", {y: "+=6px",
    yoyo:true,opacity: 0.5,
      stagger: {
        amount: 2},
    repeat:-1, repeatDelay:0.75});
  }
  render() {
    return (
      <section className="page">
        <span className="intro">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="609"
            height="431"
            viewBox="0 0 609 431"
            fill="none"
          >
            <rect width="609" height="431" fill="#E5E5E5" />
            <rect width="609" height="431" fill="white" />
            <path
              d="M350.648 162.044C361.766 162.044 370.779 151.499 370.779 138.492C370.779 125.485 361.766 114.94 350.648 114.94C339.529 114.94 330.516 125.485 330.516 138.492C330.516 151.499 339.529 162.044 350.648 162.044Z"
              fill="#2F221E"
            />
            <path
              d="M356.256 115.589C359.74 115.589 363.165 116.647 366.195 118.66C369.224 120.672 371.756 123.57 373.542 127.069C375.328 130.569 376.307 134.551 376.383 138.626C376.46 142.701 375.631 146.729 373.978 150.318C375.724 147.763 376.995 144.811 377.711 141.65C378.428 138.488 378.573 135.187 378.138 131.956C377.704 128.726 376.699 125.636 375.187 122.885C373.676 120.134 371.691 117.782 369.359 115.977C367.027 114.173 364.4 112.957 361.644 112.407C358.889 111.856 356.065 111.983 353.354 112.78C350.642 113.577 348.103 115.025 345.896 117.034C343.69 119.042 341.866 121.566 340.539 124.445C342.421 121.681 344.811 119.449 347.533 117.916C350.254 116.383 353.236 115.587 356.256 115.589Z"
              fill="#2F221E"
            />
            <path
              d="M312.5 138C344.809 138 371 112.033 371 80C371 47.9675 344.809 22 312.5 22C280.191 22 254 47.9675 254 80C254 112.033 280.191 138 312.5 138Z"
              fill="#2F221E"
            />
            <path
              d="M268.926 46.3234C279.116 32.9168 293.359 24.6662 308.65 23.3128C323.942 21.9593 339.084 27.609 350.882 39.0694C350.399 38.5316 349.92 37.9895 349.418 37.4669C337.695 25.2812 322.315 19.0413 306.661 20.1197C291.006 21.1982 276.359 29.5065 265.94 43.2176C255.521 56.9287 250.183 74.9197 251.102 93.2339C252.02 111.548 259.118 128.686 270.836 140.878C271.339 141.4 271.855 141.893 272.368 142.392C261.257 130.027 254.687 113.096 254.045 95.1716C253.403 77.2474 258.739 59.7325 268.926 46.3234Z"
              fill="#2F221E"
            />
            <path
              d="M312.527 137.856C333.563 137.856 350.616 117.906 350.616 93.2973C350.616 68.6884 333.563 48.7389 312.527 48.7389C291.492 48.7389 274.439 68.6884 274.439 93.2973C274.439 117.906 291.492 137.856 312.527 137.856Z"
              fill="#EBC387"
            />
            <path
              d="M285.465 107.368C285.465 107.368 290.476 161.308 282.458 167.17C274.439 173.033 328.565 181.242 328.565 181.242C328.565 181.242 320.546 122.612 340.592 107.368H285.465Z"
              fill="#EBC387"
            />
            <path
              d="M333.576 157.79C333.576 157.79 348.501 149.636 327.006 152.54C305.511 155.445 286.966 144.305 286.966 144.305C286.966 144.305 280.453 136.683 279.451 144.891C278.449 153.099 282.458 168.343 260.407 170.688C238.356 173.033 218.309 165.998 210.291 183.587C202.272 201.176 206.282 277.394 206.282 277.394C206.282 277.394 221.316 340.714 233.344 350.095C245.372 359.475 350.616 346.577 350.616 346.577L380.685 283.257V209.384C380.685 209.384 376.676 183.587 348.611 190.622C348.611 190.622 330.569 185.932 331.572 175.379C332.574 164.825 333.576 157.79 333.576 157.79Z"
              fill="#295BAB"
            />
            <path
              d="M237.322 394.905C237.941 391.747 238.356 389.961 238.356 389.961L238.036 387.392L234.733 361.159L233.345 350.093C245.37 344.231 248.379 317.26 248.379 317.26L248.833 316.943L250.885 315.506V315.5L258.253 310.329L258.402 310.226L261.378 312.542L267.423 317.26C288.575 335.456 310.114 335.132 323.406 332.266C331.532 330.512 336.582 327.814 336.582 327.814L351.162 322.126L351.616 321.951L352.064 322.029L360.615 323.543L360.77 323.575L361.478 323.698L359.498 339.714L356.627 362.99C364.211 367.688 370.953 376.514 376.85 387.392C378.155 389.799 379.42 392.304 380.644 394.905C382.237 398.27 383.759 401.771 385.208 405.356C385.385 405.783 385.556 406.216 385.728 406.65C386.286 408.054 386.839 409.471 387.376 410.895H234.667C234.866 409.465 235.065 408.099 235.259 406.786C235.269 406.741 235.276 406.696 235.281 406.65C235.353 406.21 235.419 405.783 235.48 405.356C236.155 401.085 236.808 397.519 237.322 394.905Z"
              fill="#2F2E41"
            />
            <path
              d="M255.896 321.366C258.664 321.366 260.908 318.741 260.908 315.503C260.908 312.265 258.664 309.64 255.896 309.64C253.129 309.64 250.885 312.265 250.885 315.503C250.885 318.741 253.129 321.366 255.896 321.366Z"
              fill="#295BAB"
            />
            <path
              d="M356.128 327.229C358.896 327.229 361.14 324.604 361.14 321.366C361.14 318.128 358.896 315.503 356.128 315.503C353.361 315.503 351.117 318.128 351.117 321.366C351.117 324.604 353.361 327.229 356.128 327.229Z"
              fill="#295BAB"
            />
            <path
              d="M273.938 90.3658C275.599 90.3658 276.945 87.4784 276.945 83.9166C276.945 80.3547 275.599 77.4673 273.938 77.4673C272.277 77.4673 270.931 80.3547 270.931 83.9166C270.931 87.4784 272.277 90.3658 273.938 90.3658Z"
              fill="#EBC387"
            />
            <path
              d="M351.117 90.3658C352.777 90.3658 354.124 87.4784 354.124 83.9166C354.124 80.3547 352.777 77.4673 351.117 77.4673C349.456 77.4673 348.11 80.3547 348.11 83.9166C348.11 87.4784 349.456 90.3658 351.117 90.3658Z"
              fill="#EBC387"
            />
            <path
              d="M371.664 320.78C371.664 320.78 326.059 310.813 323.052 328.402C320.045 345.99 373.669 338.369 373.669 338.369L371.664 320.78Z"
              fill="#FFB8B8"
            />
            <path
              d="M375.016 197C375.016 197 484.269 299.015 464.223 323.64C444.176 348.264 368 341.229 368 341.229L373.012 311.914L417.114 306.051L395.063 280.254L375.016 282.599V197Z"
              fill="#295BAB"
            />
            <path
              d="M209.288 370.029L223.321 382.927C223.321 382.927 233.344 419.277 248.379 408.724C263.414 398.171 234.346 360.648 234.346 360.648L217.307 353.612L209.288 370.029Z"
              fill="#FFB8B8"
            />
            <path
              d="M227.735 173L213.74 177.927C213.74 177.927 116.478 262.117 112.468 285.569C108.459 309.021 131.512 321.919 131.512 321.919L218.714 369.995L227.735 341.853L186.64 317.229C186.64 317.229 189.647 310.193 177.619 309.02C165.591 307.848 163.587 292.604 163.587 292.604C163.587 292.604 187.642 249.218 200.672 258.599C213.703 267.98 217.712 275.015 217.712 275.015L227.735 173Z"
              fill="#295BAB"
            />
            <path
              d="M422.926 398.923V402.851C422.928 403.929 422.757 404.998 422.423 406.003C422.274 406.45 422.095 406.883 421.886 407.297C421.227 408.591 420.291 409.663 419.171 410.407C418.051 411.152 416.785 411.542 415.497 411.542H168.496C167.208 411.542 165.941 411.152 164.821 410.407C163.702 409.663 162.766 408.591 162.107 407.297C161.898 406.883 161.719 406.45 161.57 406.003C161.236 404.998 161.065 403.929 161.067 402.851V398.923C161.067 397.782 161.259 396.652 161.632 395.597C162.005 394.543 162.552 393.585 163.242 392.778C163.932 391.971 164.751 391.33 165.652 390.894C166.554 390.457 167.52 390.233 168.496 390.233H182.733V388.402C182.733 388.354 182.741 388.307 182.757 388.263C182.772 388.219 182.795 388.179 182.824 388.145C182.853 388.111 182.887 388.085 182.924 388.067C182.962 388.048 183.002 388.039 183.043 388.039H190.472C190.512 388.039 190.553 388.048 190.59 388.067C190.628 388.085 190.662 388.111 190.691 388.145C190.719 388.179 190.742 388.219 190.758 388.263C190.773 388.307 190.781 388.354 190.781 388.402V390.233H195.422V388.402C195.422 388.354 195.43 388.307 195.446 388.263C195.461 388.219 195.484 388.179 195.513 388.145C195.541 388.111 195.576 388.085 195.613 388.067C195.651 388.048 195.691 388.039 195.732 388.039H203.16C203.201 388.039 203.241 388.048 203.279 388.067C203.317 388.085 203.351 388.111 203.38 388.145C203.408 388.179 203.431 388.219 203.447 388.263C203.462 388.307 203.47 388.354 203.47 388.402V390.233H208.116V388.402C208.116 388.354 208.124 388.307 208.14 388.263C208.155 388.219 208.178 388.179 208.207 388.145C208.236 388.111 208.27 388.085 208.308 388.067C208.345 388.048 208.386 388.039 208.426 388.039H215.855C215.896 388.039 215.936 388.048 215.973 388.067C216.011 388.085 216.045 388.111 216.074 388.145C216.103 388.179 216.126 388.219 216.141 388.263C216.157 388.307 216.165 388.354 216.165 388.402V390.233H220.805V388.402C220.805 388.354 220.813 388.307 220.829 388.263C220.844 388.219 220.867 388.179 220.896 388.145C220.925 388.111 220.959 388.085 220.997 388.067C221.034 388.048 221.074 388.039 221.115 388.039H228.544C228.584 388.039 228.625 388.048 228.662 388.067C228.7 388.085 228.734 388.111 228.763 388.145C228.792 388.179 228.814 388.219 228.83 388.263C228.846 388.307 228.854 388.354 228.853 388.402V390.233H233.494V388.402C233.494 388.354 233.502 388.307 233.518 388.263C233.533 388.219 233.556 388.179 233.585 388.145C233.614 388.111 233.648 388.085 233.685 388.067C233.723 388.048 233.763 388.039 233.804 388.039H241.233C241.273 388.039 241.314 388.048 241.351 388.067C241.389 388.085 241.423 388.111 241.452 388.145C241.481 388.179 241.503 388.219 241.519 388.263C241.534 388.307 241.542 388.354 241.542 388.402V390.233H246.189V388.402C246.189 388.354 246.197 388.307 246.212 388.263C246.228 388.219 246.25 388.179 246.279 388.145C246.308 388.111 246.342 388.085 246.38 388.067C246.417 388.048 246.458 388.039 246.498 388.039H253.927C253.968 388.039 254.008 388.048 254.046 388.067C254.083 388.085 254.117 388.111 254.146 388.145C254.175 388.179 254.198 388.219 254.213 388.263C254.229 388.307 254.237 388.354 254.237 388.402V390.233H258.878V388.402C258.877 388.354 258.885 388.307 258.901 388.263C258.917 388.219 258.939 388.179 258.968 388.145C258.997 388.111 259.031 388.085 259.069 388.067C259.106 388.048 259.147 388.039 259.187 388.039H317.377C317.418 388.039 317.458 388.048 317.496 388.067C317.533 388.085 317.567 388.111 317.596 388.145C317.625 388.179 317.648 388.219 317.663 388.263C317.679 388.307 317.687 388.354 317.687 388.402V390.233H322.333V388.402C322.333 388.354 322.341 388.307 322.356 388.263C322.372 388.219 322.395 388.179 322.424 388.145C322.452 388.111 322.487 388.085 322.524 388.067C322.562 388.048 322.602 388.039 322.643 388.039H330.071C330.153 388.04 330.232 388.079 330.29 388.146C330.347 388.214 330.38 388.306 330.381 388.402V390.233H335.022V388.402C335.022 388.354 335.03 388.307 335.045 388.263C335.061 388.219 335.084 388.179 335.112 388.145C335.141 388.111 335.175 388.085 335.213 388.067C335.251 388.048 335.291 388.039 335.332 388.039H342.76C342.801 388.039 342.841 388.048 342.879 388.067C342.916 388.085 342.951 388.111 342.979 388.145C343.008 388.179 343.031 388.219 343.047 388.263C343.062 388.307 343.07 388.354 343.07 388.402V390.233H347.711V388.402C347.711 388.354 347.719 388.307 347.734 388.263C347.75 388.219 347.773 388.179 347.801 388.145C347.83 388.111 347.864 388.085 347.902 388.067C347.94 388.048 347.98 388.039 348.021 388.039H355.449C355.49 388.039 355.53 388.048 355.568 388.067C355.605 388.085 355.64 388.111 355.668 388.145C355.697 388.179 355.72 388.219 355.735 388.263C355.751 388.307 355.759 388.354 355.759 388.402V390.233H360.405V388.402C360.405 388.354 360.413 388.307 360.429 388.263C360.444 388.219 360.467 388.179 360.496 388.145C360.525 388.111 360.559 388.085 360.596 388.067C360.634 388.048 360.674 388.039 360.715 388.039H368.144C368.225 388.04 368.302 388.079 368.359 388.147C368.416 388.215 368.448 388.306 368.448 388.402V390.233H373.094V388.402C373.094 388.354 373.102 388.307 373.118 388.263C373.133 388.219 373.156 388.179 373.185 388.145C373.213 388.111 373.248 388.085 373.285 388.067C373.323 388.048 373.363 388.039 373.404 388.039H380.832C380.873 388.039 380.913 388.048 380.951 388.067C380.989 388.085 381.023 388.111 381.052 388.145C381.08 388.179 381.103 388.219 381.119 388.263C381.134 388.307 381.142 388.354 381.142 388.402V390.233H385.783V388.402C385.783 388.354 385.791 388.307 385.806 388.263C385.822 388.219 385.845 388.179 385.874 388.145C385.902 388.111 385.936 388.085 385.974 388.067C386.012 388.048 386.052 388.039 386.093 388.039H393.521C393.562 388.039 393.602 388.048 393.64 388.067C393.678 388.085 393.712 388.111 393.74 388.145C393.769 388.179 393.792 388.219 393.808 388.263C393.823 388.307 393.831 388.354 393.831 388.402V390.233H415.497C416.473 390.233 417.439 390.457 418.34 390.894C419.242 391.33 420.061 391.971 420.751 392.778C421.441 393.585 421.988 394.543 422.361 395.597C422.734 396.652 422.926 397.782 422.926 398.923Z"
              fill="#3F3D56"
            />
            <path
              d="M494.749 406H89.3024V407.294H494.749V406Z"
              fill="#3F3D56"
            />
            <path
              d="M403.037 233.503H310.971V231.283H269.226V233.503H176.781C175.129 233.503 173.545 234.271 172.377 235.637C171.209 237.003 170.553 238.856 170.553 240.788V388.27C170.553 390.202 171.209 392.055 172.377 393.421C173.545 394.787 175.129 395.555 176.781 395.555H403.037C404.688 395.555 406.272 394.787 407.44 393.421C408.608 392.055 409.264 390.202 409.264 388.269V240.788C409.264 239.832 409.103 238.884 408.79 238C408.477 237.117 408.018 236.313 407.44 235.637C406.862 234.96 406.175 234.424 405.42 234.058C404.664 233.692 403.854 233.503 403.037 233.503Z"
              fill="#3F3D56"
            />
            <path
              d="M290.09 301.17C297.727 301.17 303.918 293.927 303.918 284.992C303.918 276.058 297.727 268.815 290.09 268.815C282.453 268.815 276.262 276.058 276.262 284.992C276.262 293.927 282.453 301.17 290.09 301.17Z"
              stroke="#D0CDE1"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M285.665 306.994C293.302 306.994 299.493 299.751 299.493 290.816C299.493 281.882 293.302 274.639 285.665 274.639C278.028 274.639 271.836 281.882 271.836 290.816C271.836 299.751 278.028 306.994 285.665 306.994Z"
              fill="#D0CDE1"
            />
            <path
              d="M118.935 429.382H14.3926V430.846H118.935V429.382Z"
              fill="#3F3D56"
            />
            <path
              d="M575.27 429.382H470.728V430.846H575.27V429.382Z"
              fill="#3F3D56"
            />
            <path
              className="rightLeaf"
              d="M75.3031 382.252C64.2897 403.287 68.0789 429.452 68.0789 429.452C68.0789 429.452 89.7243 421.513 100.738 400.478C111.751 379.443 107.962 353.278 107.962 353.278C107.962 353.278 86.3166 361.217 75.3031 382.252Z"
              fill="#3F3D56"
            />
            <path
              className="leftLeaf"
              d="M67.6294 429.625L67.0032 429.509C66.7767 429.467 44.2373 425.098 30.7386 406.204C17.2398 387.309 17.5646 360.584 17.569 360.316L17.5825 359.575L18.2087 359.691C18.4351 359.733 40.9745 364.102 54.4733 382.997C67.9721 401.891 67.6472 428.616 67.6428 428.884L67.6294 429.625Z"
              fill="#295BAB"
            />
            <path
              className="leafOutline"
              d="M68.5187 430.291L67.9137 430.069C67.6949 429.989 45.9428 421.814 34.9482 400.816C23.9536 379.817 27.6122 353.434 27.65 353.17L27.7559 352.439L28.3609 352.66C28.5796 352.741 50.3317 360.915 61.3263 381.914C72.3209 402.912 68.6624 429.295 68.6246 429.559L68.5187 430.291ZM28.6483 354.142C28.1475 358.57 26.1516 381.537 35.8914 400.14C45.6317 418.742 64.0277 427.097 67.6263 428.588C68.1271 424.16 70.123 401.192 60.3832 382.59C50.6428 363.987 32.2468 355.632 28.6482 354.142H28.6483Z"
              fill="#3F3D56"
            />
            <path
              className="circle"
              d="M68.766 361.293C75.4868 361.293 80.935 354.919 80.935 347.056C80.935 339.194 75.4868 332.82 68.766 332.82C62.0453 332.82 56.5971 339.194 56.5971 347.056C56.5971 354.919 62.0453 361.293 68.766 361.293Z"
              fill="#3F3D56"
            />
            <path
              d="M547.049 385.703H545.943V375.997C545.943 375.482 546.118 374.989 546.429 374.625C546.74 374.261 547.162 374.056 547.602 374.055H550.368C550.514 374.055 550.655 373.987 550.759 373.866C550.863 373.744 550.921 373.58 550.921 373.408V366.937C550.921 366.766 550.863 366.601 550.759 366.48C550.655 366.359 550.514 366.29 550.368 366.29H547.602C547.162 366.29 546.74 366.085 546.429 365.721C546.118 365.357 545.943 364.864 545.943 364.349V361.113C545.943 360.942 545.884 360.777 545.781 360.656C545.677 360.535 545.536 360.466 545.39 360.466H540.411C539.971 360.466 539.55 360.261 539.239 359.897C538.927 359.533 538.753 359.04 538.752 358.525V357.878C538.752 357.706 538.694 357.542 538.59 357.421C538.486 357.299 538.346 357.231 538.199 357.231H518.286C518.139 357.231 517.999 357.299 517.895 357.421C517.791 357.542 517.733 357.706 517.733 357.878V358.525C517.732 359.04 517.557 359.533 517.246 359.897C516.935 360.261 516.514 360.466 516.074 360.466H511.095C510.949 360.466 510.808 360.535 510.704 360.656C510.601 360.777 510.542 360.942 510.542 361.113V364.349C510.542 364.864 510.367 365.357 510.056 365.721C509.745 366.085 509.323 366.29 508.883 366.29H506.117C505.97 366.29 505.83 366.359 505.726 366.48C505.622 366.601 505.564 366.766 505.564 366.937V373.408C505.564 373.58 505.622 373.744 505.726 373.866C505.83 373.987 505.97 374.055 506.117 374.055H509.436C509.876 374.056 510.298 374.261 510.609 374.625C510.92 374.989 511.095 375.482 511.095 375.997V385.703H509.989V375.997C509.989 375.825 509.931 375.661 509.827 375.539C509.723 375.418 509.583 375.35 509.436 375.35H506.117C505.677 375.349 505.255 375.144 504.944 374.78C504.633 374.416 504.458 373.923 504.458 373.408V366.937C504.458 366.423 504.633 365.929 504.944 365.565C505.255 365.201 505.677 364.997 506.117 364.996H508.883C509.029 364.996 509.17 364.928 509.274 364.806C509.378 364.685 509.436 364.521 509.436 364.349V361.113C509.436 360.599 509.611 360.105 509.923 359.741C510.234 359.377 510.655 359.173 511.095 359.172H516.074C516.22 359.172 516.361 359.104 516.465 358.983C516.568 358.861 516.627 358.697 516.627 358.525V357.878C516.627 357.363 516.802 356.87 517.113 356.506C517.424 356.142 517.846 355.937 518.286 355.937H538.199C538.639 355.937 539.061 356.142 539.372 356.506C539.683 356.87 539.858 357.363 539.858 357.878V358.525C539.858 358.697 539.917 358.861 540.02 358.983C540.124 359.104 540.265 359.172 540.411 359.172H545.39C545.83 359.173 546.251 359.377 546.562 359.741C546.874 360.105 547.049 360.599 547.049 361.113V364.349C547.049 364.521 547.107 364.685 547.211 364.806C547.315 364.928 547.455 364.996 547.602 364.996H550.368C550.808 364.997 551.23 365.201 551.541 365.565C551.852 365.929 552.027 366.423 552.027 366.937V373.408C552.027 373.923 551.852 374.416 551.541 374.78C551.23 375.144 550.808 375.349 550.368 375.35H547.602C547.455 375.35 547.315 375.418 547.211 375.539C547.107 375.661 547.049 375.825 547.049 375.997V385.703Z"
              fill="#3F3D56"
            />
            <path
              d="M545.39 431H511.649C511.209 430.999 510.787 430.795 510.476 430.431C510.165 430.067 509.99 429.573 509.989 429.059V401.233H511.095V429.059C511.095 429.23 511.154 429.395 511.257 429.516C511.361 429.637 511.502 429.706 511.649 429.706H545.39C545.536 429.706 545.677 429.637 545.781 429.516C545.884 429.395 545.943 429.23 545.943 429.059V401.233H547.049V429.059C547.049 429.573 546.874 430.067 546.563 430.431C546.251 430.795 545.83 430.999 545.39 431Z"
              fill="#3F3D56"
            />
            <path
              d="M552.58 390.233H511.095C510.484 390.233 509.989 390.812 509.989 391.527V404.469C509.989 405.184 510.484 405.763 511.095 405.763H552.58C553.191 405.763 553.687 405.184 553.687 404.469V391.527C553.687 390.812 553.191 390.233 552.58 390.233Z"
              fill="#295BAB"
            />
            <path
              d="M548.985 401.881H507.5C507.06 401.88 506.638 401.675 506.327 401.311C506.016 400.947 505.841 400.454 505.841 399.939V386.997C505.841 386.483 506.016 385.989 506.327 385.625C506.638 385.261 507.06 385.057 507.5 385.056H548.985C549.425 385.057 549.847 385.261 550.158 385.625C550.469 385.989 550.644 386.483 550.644 386.997V399.939C550.644 400.454 550.469 400.947 550.158 401.311C549.847 401.675 549.425 401.88 548.985 401.881ZM507.5 386.35C507.353 386.35 507.213 386.419 507.109 386.54C507.005 386.661 506.947 386.826 506.947 386.997V399.939C506.947 400.111 507.005 400.275 507.109 400.397C507.213 400.518 507.353 400.586 507.5 400.586H548.985C549.132 400.586 549.272 400.518 549.376 400.397C549.48 400.275 549.538 400.111 549.538 399.939V386.997C549.538 386.826 549.48 386.661 549.376 386.54C549.272 386.419 549.132 386.35 548.985 386.35H507.5Z"
              fill="#3F3D56"
            />
            <path
              className="steam"
              d="M527.136 351.407C525.666 339.819 525.277 328.078 525.978 316.392L527.136 297.051C520.752 311.912 522.195 331.471 527.136 351.407V351.407Z"
              fill="#D0CDE1"
            />
            <path
              className="steam"
              d="M532.114 354.642C531.407 347.728 531.22 340.753 531.557 333.8L532.114 322.288C529.043 331.133 529.737 342.776 532.114 354.642Z"
              fill="#D0CDE1"
            />
          </svg>
        </span>
        <section className="homePage">
          <p className="bio">
            Hi there! My name is Tess. I'm a full stack web developer based in
            the Bay Area. <br />
            <br />I love learning new technologies. I also have experience in technical
            project management, finance, e-commerce, and leadership.
          </p>
        </section>
        <Code />
        <About />
      </section>
    );
  }
}
