import * as React from "react";
import './components.css';
import './View1.css';

type _Props<C extends React.ElementType> = {

};

type Props<C extends React.ElementType> = React.PropsWithChildren<_Props<C>> &
Omit<React.ComponentPropsWithoutRef<C>, keyof _Props<C>>;

export const View1 = <C extends React.ElementType = 'span'>({
children,
onMouseOver,
onMouseLeave,
onMouseDown,
onMouseUp,
className,
...restProps
}: Props<C>) => {
const [isHovered, setIsHovered] = React.useState(false);
const [isPressed, setIsPressed] = React.useState(false);

const customState = (() => {

return 'default';
})();

const style = {};
switch (customState) {
default:
return (
<div {...restProps} className={`aspect-div View1-div ${className}`} {...style} onMouseOver={e => {
onMouseOver && onMouseOver(e);
setIsHovered(true)
}}
onMouseLeave={e => {
onMouseLeave && onMouseLeave(e);
setIsHovered(false)
}}
onMouseDown={e => {
onMouseDown && onMouseDown(e);
setIsPressed(true)
}}
onMouseUp={e => {
onMouseUp && onMouseUp(e);
setIsPressed(false)
}}><div className={`aspect-div View1-div-0`}><svg className={`aspect-svg View1-svg`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path`} d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
fill="#e44f26" />
<path className={`View1-path-0`} d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
fill="#f1662a" />
<path className={`View1-path-1`} d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
fill="#ebebeb" />
<path className={`View1-path-2`} d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
fill="#fff"><div  /></path></svg></div>
<div className={`aspect-div View1-div-1`}><svg className={`aspect-svg View1-svg-0`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-3`} d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"
fill="#1572b6" />
<path className={`View1-path-4`} d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
fill="#33a9dc" />
<path className={`View1-path-5`} d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"
fill="#fff" />
<path className={`View1-path-6`} d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"
fill="#ebebeb" />
<path className={`View1-path-7`} d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"
fill="#fff" />
<path className={`View1-path-8`} d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"
fill="#ebebeb" /></svg></div>
<div className={`aspect-div View1-div-2`}><svg className={`aspect-svg View1-svg-1`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 256 256"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-9`} d="M0 0h256v256H0V0Z"
fill="#F7DF1E" />
<path className={`View1-path-10`} d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" /></svg></div>
<div className={`aspect-div View1-div-3`}><svg className={`aspect-svg View1-svg-2`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><circle className={`View1-circle`} cx="16"
cy="15.974"
r="2.5" />
<path className={`View1-path-11`} d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"
fill="#00d8ff" />
<path className={`View1-path-12`} d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"
fill="#00d8ff" />
<path className={`View1-path-13`} d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"
fill="#00d8ff" /></svg></div>
<div className={`aspect-div View1-div-4`}><svg className={`aspect-svg View1-svg-3`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><circle className={`View1-circle-0`} cx="16"
cy="15.974"
r="2.5" />
<path className={`View1-path-14`} d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"
fill="#00d8ff" />
<path className={`View1-path-15`} d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"
fill="#00d8ff" />
<path className={`View1-path-16`} d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"
fill="#00d8ff" /></svg></div>
<div className={`aspect-div View1-div-5`}><svg className={`aspect-svg View1-svg-4`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 256 289"
width="0.89em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-17`} d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101c0 .795-.265 1.59-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571Z"
fill="#539E43" /></svg></div>
<div className={`aspect-div View1-div-6`}><svg className={`aspect-svg View1-svg-5`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><defs className={`View1-defs`}><radialGradient className={`View1-radialgradient`} /></defs>
<ellipse className={`View1-ellipse`} />
<ellipse className={`View1-ellipse-0`} />
<path className={`View1-path-18`} d="m18.725 18.2l.667-3.434a1.752 1.752 0 0 0-.372-1.719a2.929 2.929 0 0 0-2-.525h-1.153l.331-1.7a.219.219 0 0 0-.215-.26h-1.6a.219.219 0 0 0-.215.177l-.709 3.646a2.051 2.051 0 0 0-.477-1.054a2.783 2.783 0 0 0-2.2-.807H7.7a.219.219 0 0 0-.215.177l-1.434 7.38a.219.219 0 0 0 .215.26h1.603a.219.219 0 0 0 .215-.177l.347-1.785h1.2a5.167 5.167 0 0 0 1.568-.2a3.068 3.068 0 0 0 1.15-.689a3.538 3.538 0 0 0 .68-.844l-.287 1.475a.219.219 0 0 0 .215.26h1.6a.219.219 0 0 0 .215-.177l.787-4.051h1.094c.466 0 .6.093.64.133s.1.165.025.569l-.635 3.265a.219.219 0 0 0 .215.26h1.62a.219.219 0 0 0 .207-.18Zm-7.395-2.834a1.749 1.749 0 0 1-.561 1.092a2.171 2.171 0 0 1-1.315.321h-.712l.515-2.651h.921c.677 0 .949.145 1.059.266a1.181 1.181 0 0 1 .093.972Zm14.216-2.034a2.783 2.783 0 0 0-2.2-.807h-3.091a.219.219 0 0 0-.215.177l-1.434 7.38a.219.219 0 0 0 .215.26h1.608a.219.219 0 0 0 .215-.177l.347-1.785h1.2a5.167 5.167 0 0 0 1.568-.2a3.068 3.068 0 0 0 1.15-.689a3.425 3.425 0 0 0 1.076-1.927a2.512 2.512 0 0 0-.439-2.232Zm-1.667 2.034a1.749 1.749 0 0 1-.561 1.092a2.171 2.171 0 0 1-1.318.32h-.71l.515-2.651h.921c.677 0 .949.145 1.059.266a1.181 1.181 0 0 1 .094.973Z"
fill="#fff" />
<path className={`View1-path-19`} d="M10.178 13.908a1.645 1.645 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.945 1.945 0 0 1-.642 1.223a2.361 2.361 0 0 1-1.448.37h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a4.931 4.931 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.207 3.207 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.568 2.568 0 0 0-2.035-.732H7.7Zm8.126-9.342h1.6l-.387 1.962h1.421a2.767 2.767 0 0 1 1.85.468a1.548 1.548 0 0 1 .305 1.516l-.667 3.434H16.89l.635-3.265a.886.886 0 0 0-.08-.76a1.121 1.121 0 0 0-.8-.2H15.37l-.822 4.228h-1.6Zm8.34 3.126a1.645 1.645 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.945 1.945 0 0 1-.642 1.223A2.361 2.361 0 0 1 22 17h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a4.931 4.931 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.207 3.207 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.568 2.568 0 0 0-2.035-.732h-3.092Z"
fill="#000004" /></svg></div>
<div className={`aspect-div View1-div-7`}><svg className={`aspect-svg View1-svg-6`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-20`} d="M12.325 23.654s-1.07.622.761.833a16.023 16.023 0 0 0 5.8-.246a10.088 10.088 0 0 0 1.541.752c-5.481 2.349-12.405-.136-8.1-1.339m-.671-3.066s-1.2.888.633 1.078a22.618 22.618 0 0 0 7.481-.359a3.32 3.32 0 0 0 1.152.7c-6.627 1.938-14.009.153-9.266-1.421m5.644-5.198a2.051 2.051 0 0 1-.355 2.954s3.429-1.77 1.854-3.987c-1.471-2.067-2.6-3.095 3.508-6.636c0 0-9.586 2.394-5.007 7.669"
fill="#5382a1" />
<path className={`View1-path-21`} d="M24.552 25.921s.792.652-.872 1.157c-3.164.958-13.168 1.248-15.948.038c-1-.435.874-1.038 1.464-1.164a3.8 3.8 0 0 1 .966-.108c-1.111-.783-7.181 1.537-3.083 2.2c11.176 1.812 20.372-.816 17.473-2.124M12.84 17.412s-5.089 1.209-1.8 1.648a38.225 38.225 0 0 0 6.731-.072a53.11 53.11 0 0 0 4.221-.555a8.934 8.934 0 0 0-1.28.685c-5.168 1.359-15.151.727-12.277-.663a9.629 9.629 0 0 1 4.407-1.042m9.127 5.102c5.253-2.73 2.824-5.353 1.129-5a3.932 3.932 0 0 0-.6.161a.957.957 0 0 1 .449-.346c3.354-1.179 5.933 3.478-1.083 5.322a.458.458 0 0 0 .106-.138M18.8 2s2.909 2.91-2.759 7.386c-4.546 3.59-1.037 5.637 0 7.975c-2.653-2.394-4.6-4.5-3.294-6.463C14.664 8.019 19.976 6.623 18.8 2"
fill="#5382a1" />
<path className={`View1-path-22`} d="M13.356 29.912c5.042.323 12.786-.179 12.969-2.565c0 0-.353.9-4.167 1.623a41.458 41.458 0 0 1-12.76.2s.645.533 3.959.746"
fill="#5382a1" /></svg></div>
<div className={`aspect-div View1-div-8`}><svg className={`aspect-svg View1-svg-7`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-23`} d="M19.792 7.071h2.553v2.553H24.9V7.071h2.552v2.553H30v2.552h-2.55v2.551H30v2.553h-2.551v2.552H24.9v-2.55h-2.55v2.552h-2.557v-2.55H17.24v-2.559h2.553v-2.546H17.24V9.622h2.554Zm2.553 7.658H24.9v-2.553h-2.555Zm-7.656 9.284a10.2 10.2 0 0 1-4.653.915a7.6 7.6 0 0 1-5.89-2.336A8.839 8.839 0 0 1 2 16.367a9.436 9.436 0 0 1 2.412-6.719a8.181 8.181 0 0 1 6.259-2.577a11.1 11.1 0 0 1 4.018.638v3.745a6.81 6.81 0 0 0-3.723-1.036a4.793 4.793 0 0 0-3.7 1.529a5.879 5.879 0 0 0-1.407 4.142a5.774 5.774 0 0 0 1.328 3.992a4.551 4.551 0 0 0 3.575 1.487a7.288 7.288 0 0 0 3.927-1.108Z"
fill="#368832" /></svg></div>
<div className={`aspect-div View1-div-9`}><svg className={`aspect-svg View1-svg-8`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-24`} d="M8.785 6.865a3.055 3.055 0 0 0-.785.1V7h.038a6.461 6.461 0 0 0 .612.785c.154.306.288.611.441.917l.038-.039a1.074 1.074 0 0 0 .4-.957a4.314 4.314 0 0 1-.23-.4c-.115-.191-.364-.287-.517-.44"
fill="#5d87a1" />
<path className={`View1-path-25`} d="M27.78 23.553a8.849 8.849 0 0 0-3.712.536c-.287.115-.745.115-.785.478c.154.153.172.4.307.613a4.467 4.467 0 0 0 .995 1.167c.4.306.8.611 1.225.879c.745.461 1.588.728 2.314 1.187c.422.268.842.612 1.264.9c.21.153.343.4.611.5v-.058a3.844 3.844 0 0 0-.291-.613c-.191-.19-.383-.363-.575-.554a9.118 9.118 0 0 0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69 7.69 0 0 0 1.321-.308c.65-.172 1.243-.133 1.912-.3c.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338 25.338 0 0 0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946c-.226-.114-.6-.17-.737-.36a7.594 7.594 0 0 1-.776-1.457a46.84 46.84 0 0 1-1.551-3.293a20.236 20.236 0 0 0-.965-2.157A19.078 19.078 0 0 0 11.609 5a9.07 9.07 0 0 0-2.421-.776c-.474-.02-.946-.057-1.419-.075a7.55 7.55 0 0 1-.869-.664C5.818 2.8 3.038 1.328 2.242 3.277C1.732 4.508 3 5.718 3.435 6.343A8.866 8.866 0 0 1 4.4 7.762c.133.322.171.663.3 1a22.556 22.556 0 0 0 .987 2.538a8.946 8.946 0 0 0 .7 1.172c.153.209.417.3.474.645a5.421 5.421 0 0 0-.436 1.419a8.336 8.336 0 0 0 .549 6.358c.3.473 1.022 1.514 1.987 1.116c.851-.34.662-1.419.908-2.364c.056-.229.019-.379.132-.53v.184s.483 1.061.723 1.6a10.813 10.813 0 0 0 2.4 2.59A3.514 3.514 0 0 1 14 24.657V25h.427a1.054 1.054 0 0 0-.427-.788a9.4 9.4 0 0 1-.959-1.16a24.992 24.992 0 0 1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857c-.11-.231-.11-.58-.295-.7a7.266 7.266 0 0 0-.884 1.313a11.419 11.419 0 0 0-.517 2.921c-.073.02-.037 0-.073.038c-.589-.155-.792-.792-1.014-1.332a8.756 8.756 0 0 1-.166-5.164c.128-.405.683-1.681.461-2.068c-.111-.369-.48-.58-.682-.871a7.767 7.767 0 0 1-.663-1.237C5.912 9.5 5.69 8.3 5.212 7.216a10.4 10.4 0 0 0-.921-1.489A9.586 9.586 0 0 1 3.276 4.22c-.092-.213-.221-.561-.074-.793a.3.3 0 0 1 .259-.252c.238-.212.921.058 1.16.174a9.2 9.2 0 0 1 1.824.967c.258.194.866.685.866.685h.18c.612.133 1.3.037 1.876.21a12.247 12.247 0 0 1 2.755 1.32a16.981 16.981 0 0 1 5.969 6.545c.23.439.327.842.537 1.3c.4.94.9 1.9 1.3 2.814a12.578 12.578 0 0 0 1.36 2.564c.286.4 1.435.612 1.952.822a13.7 13.7 0 0 1 1.32.535c.651.4 1.3.861 1.913 1.3c.305.23 1.262.708 1.32 1.091"
fill="#00758f" /></svg></div>
<div className={`aspect-div View1-div-10`}><svg className={`aspect-svg View1-svg-9`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-26`} d="M8.562 15.256A21.159 21.159 0 0 0 16 16.449a21.159 21.159 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.357 10.357 0 0 1-2.084 1.076A22.293 22.293 0 0 1 16 12.078a22.36 22.36 0 0 1-7.879-1.3A10.28 10.28 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006Zm0 6.705a15.611 15.611 0 0 0 2.6.741a24.9 24.9 0 0 0 4.838.453a24.9 24.9 0 0 0 4.838-.452a15.614 15.614 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.706 10.706 0 0 1-1.692.825A23.49 23.49 0 0 1 16 18.74a23.49 23.49 0 0 1-8.271-1.348a10.829 10.829 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001ZM16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.487 23.487 0 0 1 16 25.445a23.422 23.422 0 0 1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30Z"
fill="#ffda44" />
<ellipse className={`View1-ellipse-1`} /></svg></div>
<div className={`aspect-div View1-div-11`}><svg className={`aspect-svg View1-svg-10`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><defs className={`View1-defs-0`}><linearGradient className={`View1-lineargradient`} />
<linearGradient className={`View1-lineargradient-0`} />
<linearGradient className={`View1-lineargradient-1`} /></defs>
<path className={`View1-path-27`} d="m16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 0 0-1.333 1.523A14.1 14.1 0 0 0 16.62 30Z"
fill="url(#IconifyId-183b9c234ab-4fabb1-1)" />
<path className={`View1-path-28`} d="M17.026 26.329a13.223 13.223 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187Z"
fill="url(#IconifyId-183b9c234ab-4fabb1-2)" />
<path className={`View1-path-29`} d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.725 1.725 0 0 0 15.846 2c.381.82.319 12.243.359 13.579c.155 5.197-.289 10.009-.718 10.99Z"
fill="url(#IconifyId-183b9c234ab-4fabb1-3)" /></svg></div>
<div className={`aspect-div View1-div-12`}><svg className={`aspect-svg View1-svg-11`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 256 351"
width="0.73em"
xmlns="http://www.w3.org/2000/svg"><defs className={`View1-defs-1`}><filter className={`View1-filter`} />
<filter className={`View1-filter-0`} />
<path className={`View1-path-30`} d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732Z" />
<path className={`View1-path-31`} d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744l31.678 58.556Z" /></defs>
<path className={`View1-path-32`} d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z"
fill="#FFC24A" />
<use className={`View1-use`} fill="#FFA712"
href="https://shajeed.netlify.app/#IconifyId-183b9c234ac-d0febb-6" />
<use className={`View1-use-0`} href="https://shajeed.netlify.app/#IconifyId-183b9c234ac-d0febb-6" />
<path className={`View1-path-33`} d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z"
fill="#F4BD62" />
<use className={`View1-use-1`} fill="#FFA50E"
href="https://shajeed.netlify.app/#IconifyId-183b9c234ac-d0febb-7" />
<use className={`View1-use-2`} href="https://shajeed.netlify.app/#IconifyId-183b9c234ac-d0febb-7" />
<path className={`View1-path-34`} d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
fill="#F6820C" />
<path className={`View1-path-35`} d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
fill="#FDE068" />
<path className={`View1-path-36`} d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z"
fill="#FCCA3F" />
<path className={`View1-path-37`} d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752l-115.99 64.689Z"
fill="#EEAB37" /></svg></div>
<div className={`aspect-div View1-div-13`}><svg className={`aspect-svg View1-svg-12`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 256 256"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-38`} d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21l29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693c5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657c7.663 7.66 7.663 20.075 0 27.74c-7.665 7.666-20.08 7.666-27.749 0c-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462l-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747c-7.665 7.662-20.086 7.662-27.74 0c-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442L4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
fill="#DE4C36" /></svg></div>
<div className={`aspect-div View1-div-14`}><svg className={`aspect-svg View1-svg-13`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-39`} d="M2 10.555h28v9.335H16v1.556H9.778v-1.557H2Zm1.556 7.779h3.111v-4.668h1.555v4.667h1.556v-6.222H3.556Zm7.778-6.223v7.779h3.111v-1.556h3.111v-6.223Zm3.111 1.556H16v3.112h-1.556Zm4.667-1.556v6.223h3.111v-4.668h1.556v4.667h1.556v-4.667h1.556v4.667h1.556v-6.222Z"
fill="#cb3837" /></svg></div>
<div className={`aspect-div View1-div-15`}><svg className={`aspect-svg View1-svg-14`} height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
width="1em"
xmlns="http://www.w3.org/2000/svg"><path className={`View1-path-40`} d="m20.42 21.157l2.211 2.211L30 16l-7.369-7.369l-2.211 2.212L25.58 16Zm-8.84-10.314L9.369 8.631L2 16l7.369 7.369l2.211-2.211L6.42 16Zm5.831-3.166l1.6.437l-4.42 16.209l-1.6-.437l4.42-16.209Z"
fill="#f1662a" /></svg></div></div>
)
}
};