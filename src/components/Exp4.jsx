import React, { Component } from 'react';
import styled from 'styled-components'
import anime from 'animejs'
import Typing from 'react-typing-animation';

const Wrapper = styled.div`

    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: black;
    position: relative;
    min-height: 800px;

    h1, h2, p, a {
        margin: 0;
    }
    
    @media (max-width: 500px) {
        height: auto;
.landing {
    height: auto;
}
.backgroundImage1 {

}

    }
`
const BackgroundImage = styled.div`

    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-image: url(img/abs2.jpg);
    background-size: cover;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: scale(.9);

`


let shape1 = () => {
    return(
        <svg id="shape1"viewBox="0 0 300 300">
        <g>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M150,293.12h-13.37h-2.46c5.2,0.57,10.48,0.88,15.83,0.88s10.64-0.32,15.84-0.88h-2.46H150z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M97.63,284.13c0.94,0.37,1.87,0.77,2.83,1.12c19.45,0,78.85,0,99.09,0c0.95-0.35,1.88-0.75,2.83-1.12
		C167.32,284.13,132.5,284.13,97.63,284.13z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M109.89,276.27v-1.11c-7.38,0-24.98,0-31.08,0c0.64,0.37,1.28,0.75,1.94,1.11
		C90.48,276.27,100.19,276.27,109.89,276.27z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M150,275.16v1.11c14.61,0-27.09,0,69.25,0c0.65-0.36,1.29-0.75,1.94-1.11
		C204.29,275.16,216.06,275.16,150,275.16z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M69.79,266.18h-4.84c0.52,0.38,1.05,0.74,1.57,1.11h3.27V266.18z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M83.15,266.18v1.11c31.82,0,121.09,0,150.34,0c0.52-0.37,1.05-0.74,1.56-1.11
		C139.71,266.18,177.99,266.18,83.15,266.18z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M230.22,258.31v-1.11c-34.01,0-138.89,0-173.8,0h-2.54c0.42,0.38,0.86,0.74,1.28,1.11h1.25
		C114.43,258.31,172.37,258.31,230.22,258.31z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M123.26,248.22v1.11c61.88,0,77.02,0,130.94,0c0.35-0.37,0.71-0.74,1.06-1.11
		C242.23,248.22,139.11,248.22,123.26,248.22z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M37.03,239.24c0.29,0.37,0.58,0.75,0.87,1.11c23.21,0,201.01,0,224.19,0c0.3-0.37,0.58-0.75,0.87-1.11
		C253.69,239.24,47.62,239.24,37.03,239.24z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M43.05,230.26v1.11c36.57,0,150.49,0,187.17,0v-1.11C145.64,230.26,126.04,230.26,43.05,230.26z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M256.96,231.37h11.84c0.26-0.37,0.52-0.74,0.78-1.11h-12.62V231.37z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M24.9,221.28c0.21,0.37,0.42,0.74,0.64,1.11c14.58,0,242.34,0,248.92,0c0.21-0.37,0.43-0.74,0.64-1.11
		C259.45,221.28,33.4,221.28,24.9,221.28z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M256.96,213.41v-1.11c-25.86,0-206.69,0-236.82,0c0.18,0.37,0.38,0.74,0.57,1.11
		C139.91,213.41,203.93,213.41,256.96,213.41z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M270.32,213.41h8.97c0.18-0.38,0.38-0.74,0.56-1.11h-9.54V213.41z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M216.85,203.31v1.11c14.34,0,51.96,0,66.48,0c0.15-0.37,0.29-0.74,0.44-1.11h-0.07
		C269.26,203.31,231.31,203.31,216.85,203.31z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M163.37,204.43v-1.11c-68.15,0-83.14,0-147.06,0h-0.07c0.14,0.37,0.29,0.75,0.43,1.11
		C48.28,204.43,84.83,204.43,163.37,204.43z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M150,194.34v1.11c85.69,0,49.96,0,136.64,0c0.12-0.37,0.26-0.74,0.38-1.11
		C273.31,194.34,164.04,194.34,150,194.34z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M136.63,195.46v-1.11c-74.01,0-49.55,0-123.64,0c0.12,0.37,0.25,0.74,0.37,1.11
		C28.29,195.46,122.82,195.46,136.63,195.46z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M83.15,185.36v1.11c14.99,0,182.61,0,206.18,0c0.1-0.37,0.19-0.75,0.28-1.11
		C234.11,185.36,250.98,185.36,83.15,185.36z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M8.45,176.38c0.07,0.37,0.13,0.74,0.2,1.11c33.05,0,249.68,0,282.69,0c0.07-0.37,0.13-0.75,0.2-1.11
		C266.07,176.38,40.72,176.38,8.45,176.38z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M190.11,167.4v1.11c46.27,0,55.7,0,102.67,0c0.05-0.37,0.1-0.74,0.14-1.11
		C271.22,167.4,210.36,167.4,190.11,167.4z"/>
	<rect x="163.37" y="167.4" className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" width="13.37" height="1.11"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M150,168.51v-1.11c-132.84,0-23.74,0-142.92,0c0.05,0.37,0.09,0.74,0.14,1.11
		C148.3,168.51,8.61,168.51,150,168.51z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M216.85,159.54v-1.11c-21.55,0-189.01,0-210.58,0c0.02,0.37,0.06,0.74,0.08,1.11
		C28.86,159.54,183.85,159.54,216.85,159.54z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M293.99,149.44c-64.27,0-144.16,0-287.97,0c0,0.18-0.02,0.37-0.02,0.56c0,0.18,0.02,0.37,0.02,0.56
		c89.83,0,105.02,0,287.97,0c0-0.19,0.01-0.37,0.01-0.56C294,149.81,293.99,149.63,293.99,149.44z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M230.22,141.58v-1.11c-10.53,0-212.94,0-223.87,0c-0.02,0.37-0.06,0.74-0.08,1.11
		C61.3,141.58,111.78,141.58,230.22,141.58z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M243.58,140.46v1.11c5.67,0,44.28,0,50.15,0c-0.03-0.37-0.06-0.74-0.09-1.11
		C276.56,140.46,263.21,140.46,243.58,140.46z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M109.89,131.48v1.11c79.44,0,97.32,0,183.02,0c-0.04-0.37-0.09-0.75-0.14-1.11
		C272.75,131.48,179.18,131.48,109.89,131.48z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M56.42,132.6v-1.11c-18.04,0-31.56,0-49.19,0c-0.05,0.37-0.1,0.74-0.14,1.11
		C34.82,132.6,28.84,132.6,56.42,132.6z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M69.79,122.5v1.11c7.93,0,213.54,0,221.76,0c-0.07-0.37-0.13-0.75-0.2-1.11
		C194.4,122.5,304.91,122.5,69.79,122.5z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M289.61,114.64c-0.09-0.37-0.18-0.75-0.28-1.11c-122.44,0-155.44,0-278.66,0c-0.1,0.37-0.19,0.74-0.28,1.11
		C42.53,114.64,261.96,114.64,289.61,114.64z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M29.68,104.54v1.11c48.2,0,207.9,0,257.34,0c-0.12-0.37-0.26-0.74-0.38-1.11
		C257.47,104.54,58.69,104.54,29.68,104.54z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M270.32,96.68h13.37h0.07c-0.15-0.37-0.29-0.75-0.44-1.11h-13V96.68z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M256.96,96.68v-1.11c-173.21,0,152.11,0-240.27,0c-0.15,0.37-0.29,0.74-0.44,1.11h0.07
		C119.76,96.68,142.4,96.68,256.96,96.68z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M230.22,87.7v-1.11c-24.65,0-184.02,0-209.51,0c-0.18,0.37-0.38,0.74-0.56,1.11
		C159.49,87.7,91.15,87.7,230.22,87.7z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M275.11,78.72c-0.21-0.37-0.42-0.75-0.64-1.11c-20.78,0-221.48,0-248.92,0c-0.21,0.37-0.43,0.74-0.64,1.11
		C60.68,78.72,242.46,78.72,275.11,78.72z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M256.96,69.74v-1.11c-10.13,0-215.27,0-225.75,0c-0.26,0.37-0.52,0.74-0.77,1.11
		C76.55,69.74,211.29,69.74,256.96,69.74z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M123.26,59.65v1.11c15.12,0,124.85,0,139.71,0c-0.29-0.37-0.58-0.75-0.87-1.11
		C247.68,59.65,137.22,59.65,123.26,59.65z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M255.26,51.78c-0.35-0.37-0.71-0.74-1.06-1.11c-25.8,0-184.9,0-208.4,0c-0.36,0.37-0.72,0.74-1.06,1.11
		C69.1,51.78,230.87,51.78,255.26,51.78z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M246.13,42.8c-0.42-0.38-0.86-0.74-1.29-1.11c-81.08,0-105.19,0-189.67,0c-0.42,0.37-0.86,0.73-1.28,1.11
		C77.42,42.8,231.8,42.8,246.13,42.8z"/>
	<rect x="190.11" y="32.71" className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" width="13.37" height="1.11"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M176.74,33.82v-1.11c-40.03,0-70.37,0-110.22,0c-0.52,0.37-1.05,0.73-1.56,1.11
		C79.19,33.82,165.02,33.82,176.74,33.82z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M221.19,24.84c-0.65-0.37-1.28-0.76-1.94-1.11c-68.5,0-78.82,0-138.49,0c-0.65,0.36-1.29,0.74-1.94,1.11
		C112.21,24.84,188.34,24.84,221.19,24.84z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M190.11,15.86v-1.11c-18.45,0-71.09,0-89.65,0c-0.95,0.35-1.88,0.74-2.82,1.11
		C110.57,15.86,177.65,15.86,190.11,15.86z"/>
	<path className="shape" stroke="#ffffff" stroke-width="2" stroke-location="inside" d="M150,6.88h13.37h2.46C160.64,6.31,155.35,6,150,6s-10.63,0.31-15.83,0.88h2.46H150z"/>
</g>
</svg>

    )
}

let shape2 = () => {
    return(
        <svg id="shape2" viewBox="0 0 300 300">
            <g>
	<g>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M150.65,102.43V6h-1.31v96.43c0.22,0,0.43-0.02,0.65-0.02C150.22,102.42,150.43,102.43,150.65,102.43z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M149.34,197.57V294h1.31v-96.43c-0.22,0-0.43,0.02-0.65,0.02C149.78,197.59,149.56,197.57,149.34,197.57z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M210.26,280.78l1.19-0.55l-40.75-87.38c-0.39,0.19-0.79,0.36-1.19,0.54L210.26,280.78z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M89.74,19.22l-1.19,0.55l40.75,87.38c0.39-0.19,0.79-0.36,1.19-0.54L89.74,19.22z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M259.89,243.06l0.84-1l-73.87-61.98c-0.28,0.34-0.56,0.66-0.84,0.99L259.89,243.06z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M40.11,56.94l-0.84,1l73.87,61.98c0.27-0.34,0.56-0.66,0.84-0.99L40.11,56.94z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M288.92,187.9l0.34-1.26l-93.13-24.95c-0.11,0.42-0.23,0.84-0.35,1.26L288.92,187.9z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M11.08,112.1l-0.34,1.26l93.13,24.95c0.11-0.42,0.23-0.84,0.35-1.26L11.08,112.1z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M291.92,125.64l-0.23-1.29l-94.96,16.74c0.08,0.43,0.16,0.86,0.23,1.29L291.92,125.64z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M8.07,174.36l0.23,1.29l94.95-16.74c-0.08-0.42-0.16-0.85-0.22-1.28L8.07,174.36z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M268.33,67.94l-0.75-1.07l-78.99,55.31c0.26,0.35,0.51,0.7,0.76,1.06L268.33,67.94z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M31.67,232.06l0.75,1.07l78.99-55.31c-0.26-0.35-0.52-0.7-0.76-1.07L31.67,232.06z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M77.43,274.38l1.13,0.65l48.21-83.5c-0.38-0.21-0.76-0.43-1.13-0.65L77.43,274.38z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M222.56,25.62l-1.13-0.65l-48.21,83.5c0.38,0.21,0.76,0.43,1.14,0.65L222.56,25.62z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M163.2,6.6l-1.3-0.11l-8.4,96.06c0.43,0.03,0.87,0.06,1.3,0.1L163.2,6.6z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M136.8,293.39l1.3,0.12l8.41-96.06c-0.43-0.03-0.87-0.06-1.3-0.1L136.8,293.39z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M101.36,14.46l-1.23,0.45l32.98,90.6c0.4-0.15,0.81-0.3,1.23-0.44L101.36,14.46z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M198.63,285.54l1.23-0.45l-32.98-90.6c-0.4,0.16-0.81,0.3-1.23,0.44L198.63,285.54z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M116.82,115.9L48.64,47.71l-0.92,0.92l68.19,68.19C116.2,116.51,116.51,116.2,116.82,115.9z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M183.18,184.1l68.19,68.19l0.92-0.92l-68.19-68.19C183.8,183.49,183.49,183.8,183.18,184.1z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M285.09,199.87l0.44-1.23l-90.6-32.98c-0.14,0.41-0.29,0.82-0.44,1.23L285.09,199.87z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M14.91,100.14l-0.45,1.23l90.6,32.98c0.14-0.41,0.29-0.82,0.45-1.23L14.91,100.14z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M293.51,138.1l-0.11-1.3l-96.05,8.4c0.05,0.43,0.07,0.87,0.1,1.3L293.51,138.1z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M6.49,161.9l0.11,1.3l96.05-8.4c-0.04-0.43-0.07-0.87-0.1-1.3L6.49,161.9z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M275.03,78.57l-0.65-1.13l-83.5,48.21c0.23,0.37,0.44,0.75,0.65,1.13L275.03,78.57z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M24.97,221.44l0.65,1.13l83.5-48.21c-0.23-0.37-0.44-0.75-0.65-1.13L24.97,221.44z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M66.87,267.58l1.07,0.75l55.3-78.98c-0.36-0.24-0.72-0.5-1.06-0.75L66.87,267.58z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M233.13,32.42l-1.07-0.75l-55.3,78.98c0.36,0.24,0.72,0.5,1.06,0.75L233.13,32.42z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M124.35,291.7l1.29,0.23l16.74-94.96c-0.43-0.07-0.86-0.15-1.28-0.23L124.35,291.7z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M175.65,8.3l-1.29-0.23l-16.74,94.95c0.43,0.07,0.86,0.15,1.28,0.23L175.65,8.3z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M113.36,10.74l-1.26,0.34l24.95,93.14c0.42-0.12,0.84-0.24,1.26-0.35L113.36,10.74z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M186.64,289.26l1.26-0.34l-24.95-93.13c-0.42,0.12-0.84,0.24-1.26,0.35L186.64,289.26z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M57.94,39.27l-1,0.84l61.99,73.87c0.33-0.28,0.65-0.57,0.99-0.85L57.94,39.27z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M242.06,260.73l1-0.84l-61.99-73.87c-0.33,0.28-0.65,0.57-0.99,0.85L242.06,260.73z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M280.23,211.45l0.55-1.18l-87.39-40.75c-0.18,0.4-0.35,0.8-0.54,1.19L280.23,211.45z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M19.77,88.55l-0.55,1.19l87.38,40.75c0.18-0.4,0.35-0.8,0.54-1.19L19.77,88.55z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M197.57,150.65H294v-1.31h-96.43c0.01,0.22,0.02,0.43,0.02,0.65C197.58,150.22,197.57,150.43,197.57,150.65z"
			/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M102.43,149.35H6v1.31h96.43c-0.01-0.22-0.02-0.43-0.02-0.65C102.41,149.78,102.43,149.57,102.43,149.35z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M280.79,89.74l-0.55-1.19l-87.38,40.75c0.19,0.39,0.36,0.79,0.54,1.19L280.79,89.74z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M19.22,210.26l0.55,1.18l87.38-40.74c-0.19-0.39-0.36-0.79-0.54-1.19L19.22,210.26z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M243.06,40.11l-1-0.84l-61.98,73.86c0.34,0.28,0.66,0.56,0.99,0.85L243.06,40.11z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M56.94,259.89l1,0.84l61.98-73.86c-0.34-0.28-0.66-0.56-0.99-0.85L56.94,259.89z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M112.1,288.92l1.26,0.34l24.95-93.13c-0.42-0.11-0.84-0.23-1.26-0.35L112.1,288.92z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M187.9,11.08l-1.26-0.34l-24.95,93.13c0.42,0.11,0.84,0.23,1.26,0.35L187.9,11.08z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M174.36,291.93l1.29-0.23l-16.75-94.96c-0.42,0.08-0.85,0.16-1.28,0.23L174.36,291.93z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M125.64,8.07l-1.29,0.23l16.75,94.96c0.42-0.08,0.85-0.16,1.28-0.23L125.64,8.07z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M232.06,268.33l1.07-0.75l-55.31-78.99c-0.35,0.26-0.7,0.51-1.06,0.76L232.06,268.33z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M67.94,31.67l-1.07,0.75l55.31,78.99c0.35-0.25,0.7-0.51,1.06-0.76L67.94,31.67z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M25.62,77.44l-0.65,1.13l83.5,48.21c0.21-0.38,0.43-0.76,0.65-1.13L25.62,77.44z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M274.38,222.57l0.65-1.13l-83.51-48.21c-0.21,0.38-0.42,0.76-0.65,1.13L274.38,222.57z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M293.4,163.2l0.11-1.3l-96.06-8.4c-0.03,0.43-0.06,0.87-0.1,1.3L293.4,163.2z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M6.6,136.8l-0.11,1.3l96.06,8.4c0.03-0.43,0.06-0.87,0.1-1.3L6.6,136.8z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M285.54,101.36l-0.44-1.23l-90.6,32.98c0.15,0.41,0.3,0.82,0.44,1.23L285.54,101.36z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M14.46,198.64l0.45,1.23l90.6-32.98c-0.16-0.41-0.3-0.82-0.45-1.23L14.46,198.64z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M115.9,183.18l-68.19,68.19l0.92,0.92l68.19-68.19C116.51,183.8,116.2,183.49,115.9,183.18z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M184.1,116.83l68.19-68.19l-0.92-0.92l-68.19,68.19C183.49,116.2,183.8,116.51,184.1,116.83z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M199.86,14.91l-1.23-0.45l-32.98,90.6c0.41,0.15,0.82,0.29,1.23,0.44L199.86,14.91z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M100.14,285.09l1.23,0.45l32.98-90.6c-0.41-0.14-0.82-0.29-1.23-0.45L100.14,285.09z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M161.9,293.51l1.3-0.12l-8.41-96.05c-0.43,0.04-0.87,0.07-1.3,0.1L161.9,293.51z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M138.1,6.49l-1.3,0.11l8.41,96.05c0.43-0.04,0.87-0.07,1.3-0.1L138.1,6.49z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M78.56,24.97l-1.13,0.65l48.21,83.5c0.37-0.22,0.75-0.44,1.13-0.65L78.56,24.97z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M221.43,275.03l1.13-0.65l-48.21-83.5c-0.37,0.22-0.75,0.44-1.14,0.65L221.43,275.03z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M267.58,233.13l0.75-1.07l-78.99-55.3c-0.25,0.36-0.5,0.71-0.76,1.07L267.58,233.13z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M32.42,66.87l-0.75,1.07l78.98,55.3c0.25-0.36,0.5-0.71,0.76-1.06L32.42,66.87z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M8.3,124.35l-0.23,1.29l94.96,16.74c0.07-0.43,0.15-0.86,0.22-1.29L8.3,124.35z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M291.7,175.65l0.23-1.29l-94.96-16.74c-0.07,0.43-0.15,0.86-0.23,1.28L291.7,175.65z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M10.74,186.64l0.34,1.26l93.14-24.95c-0.12-0.42-0.24-0.84-0.35-1.26L10.74,186.64z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M289.26,113.36l-0.34-1.26l-93.13,24.96c0.12,0.42,0.24,0.84,0.35,1.26L289.26,113.36z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M260.73,57.94l-0.84-1l-73.87,61.98c0.28,0.33,0.57,0.66,0.84,0.99L260.73,57.94z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M39.27,242.06l0.84,1l73.87-61.99c-0.29-0.33-0.57-0.65-0.84-0.99L39.27,242.06z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M211.45,19.77l-1.19-0.55l-40.75,87.39c0.4,0.18,0.8,0.35,1.19,0.54L211.45,19.77z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M88.55,280.23l1.19,0.55l40.75-87.39c-0.39-0.18-0.79-0.35-1.19-0.54L88.55,280.23z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M251.52,151.96H294v-3.92h-42.48c0.02,0.65,0.05,1.3,0.05,1.96C251.57,150.66,251.53,151.3,251.52,151.96z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M48.48,148.04H6v3.92h42.48c-0.02-0.65-0.05-1.3-0.05-1.96C48.43,149.34,48.47,148.7,48.48,148.04z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M292.15,126.93l-0.69-3.86l-41.8,7.37c0.25,1.28,0.49,2.56,0.69,3.86L292.15,126.93z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M7.85,173.08l0.68,3.86l41.81-7.37c-0.25-1.28-0.49-2.56-0.69-3.86L7.85,173.08z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M285.99,102.59l-1.34-3.68l-39.9,14.52c0.47,1.22,0.92,2.44,1.34,3.68L285.99,102.59z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M14.01,197.41l1.34,3.68l39.89-14.52c-0.47-1.22-0.91-2.44-1.33-3.68L14.01,197.41z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M24.31,220.3l1.96,3.4l36.76-21.22c-0.67-1.12-1.32-2.25-1.95-3.4L24.31,220.3z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M275.69,79.7l-1.96-3.4l-36.76,21.22c0.68,1.12,1.32,2.25,1.95,3.4L275.69,79.7z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M38.43,241.06l2.52,3l32.54-27.3c-0.86-0.98-1.71-1.98-2.53-3L38.43,241.06z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M261.57,58.94l-2.52-3l-32.54,27.31c0.86,0.98,1.7,1.98,2.53,2.99L261.57,58.94z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M55.93,259.05l3.01,2.52l27.3-32.53c-1.02-0.82-2.01-1.67-3-2.53L55.93,259.05z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M244.06,40.95l-3-2.52l-27.3,32.53c1.02,0.82,2.01,1.67,3,2.53L244.06,40.95z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M223.7,26.27l-3.4-1.96l-21.22,36.76c1.14,0.63,2.28,1.28,3.4,1.95L223.7,26.27z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M76.3,273.73l3.4,1.96l21.22-36.76c-1.15-0.63-2.28-1.28-3.4-1.95L76.3,273.73z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M201.09,15.35l-3.68-1.34l-14.52,39.9c1.24,0.42,2.46,0.87,3.68,1.34L201.09,15.35z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M98.91,284.65l3.68,1.34l14.52-39.9c-1.24-0.42-2.46-0.87-3.68-1.34L98.91,284.65z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M176.93,8.53l-3.86-0.68l-7.37,41.8c1.3,0.2,2.58,0.44,3.86,0.69L176.93,8.53z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M123.07,291.47l3.86,0.68l7.37-41.8c-1.3-0.2-2.58-0.44-3.86-0.69L123.07,291.47z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M151.96,48.48V6h-3.92v42.48c0.65-0.01,1.3-0.05,1.96-0.05C150.65,48.43,151.3,48.47,151.96,48.48z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M148.04,251.52V294h3.92v-42.48c-0.65,0.01-1.3,0.05-1.96,0.05C149.34,251.57,148.7,251.53,148.04,251.52z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M126.92,7.85l-3.86,0.68l7.37,41.81c1.28-0.25,2.56-0.49,3.86-0.69L126.92,7.85z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M173.08,292.15l3.86-0.68l-7.37-41.81c-1.28,0.25-2.56,0.49-3.86,0.69L173.08,292.15z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M102.59,14.01l-3.68,1.34l14.52,39.89c1.22-0.47,2.44-0.92,3.68-1.34L102.59,14.01z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M197.41,285.99l3.68-1.34l-14.52-39.89c-1.22,0.47-2.44,0.91-3.68,1.34L197.41,285.99z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M79.7,24.31l-3.4,1.96l21.22,36.76c1.11-0.67,2.26-1.32,3.4-1.95L79.7,24.31z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M220.3,275.69l3.4-1.96l-21.22-36.76c-1.12,0.67-2.26,1.32-3.4,1.95L220.3,275.69z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M241.06,261.57l3-2.52l-27.3-32.54c-0.99,0.86-1.98,1.71-3,2.53L241.06,261.57z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M58.94,38.43l-3.01,2.52l27.31,32.54c0.99-0.86,1.98-1.71,3-2.53L58.94,38.43z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M259.05,244.06l2.52-3l-32.53-27.3c-0.82,1.02-1.67,2.01-2.53,2.99L259.05,244.06z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M40.95,55.94l-2.52,3l32.53,27.3c0.82-1.02,1.67-2.01,2.53-3L40.95,55.94z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M26.27,76.3l-1.96,3.4l36.76,21.22c0.63-1.14,1.28-2.28,1.95-3.4L26.27,76.3z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M273.73,223.7l1.96-3.4l-36.76-21.22c-0.63,1.14-1.28,2.28-1.95,3.4L273.73,223.7z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M284.65,201.09l1.34-3.68l-39.9-14.52c-0.42,1.24-0.87,2.46-1.34,3.68L284.65,201.09z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M15.35,98.91l-1.34,3.68l39.9,14.52c0.42-1.24,0.86-2.46,1.33-3.68L15.35,98.91z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M291.47,176.93l0.69-3.86l-41.8-7.37c-0.2,1.3-0.44,2.58-0.69,3.86L291.47,176.93z"/>
		<path className="shape" stroke="#ffffff" stoke-width="2" d="M8.53,123.07l-0.68,3.86l41.8,7.37c0.2-1.3,0.44-2.58,0.69-3.86L8.53,123.07z"/>
	</g>
</g>

        </svg>
    )
}

let shape3 =() => {
    return(
        <svg id="shape3" viewBox="0 0 300 300">>
            <g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M150,294L86.02,150L150,6l63.98,144L150,294z M89.56,150L150,286.05L210.45,150L150,13.95L89.56,150z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M112.73,289.1L88.2,133.44l0.45-0.56l98.62-121.98l24.53,155.65L112.73,289.1z M91.61,134.36l23.17,147.06
			l93.6-115.77L185.21,18.58L91.61,134.36z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M78,274.71l16.59-156.69L222,25.29l-16.59,156.69L78,274.71z M97.65,119.78L81.97,267.82l120.37-87.6
			l15.68-148.05L97.65,119.78z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M48.18,251.82l56.59-147.06l0.67-0.26l146.39-56.33l-56.58,147.06l-0.67,0.26L48.18,251.82z M107.26,107.26
			L53.8,246.2l138.94-53.46L246.2,53.8L107.26,107.26z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M25.29,222l92.72-127.41l0.71-0.07L274.71,78l-92.72,127.41l-0.71,0.08L25.29,222z M119.78,97.65
			l-87.6,120.37l148.04-15.68l87.6-120.37L119.78,97.65z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M166.56,211.8L10.91,187.27L133.44,88.2l0.71,0.11l154.94,24.42L166.56,211.8z M18.58,185.21l147.06,23.18
			l115.77-93.6L134.36,91.62L18.58,185.21z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M150,213.98L6,150l144-63.98L294,150L150,213.98z M13.95,150L150,210.45L286.05,150L150,89.56L13.95,150z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M133.44,211.8L10.91,112.73L166.56,88.2l0.56,0.46l121.98,98.62L133.44,211.8z M18.58,114.79l115.77,93.6
			l147.06-23.18L165.64,91.62L18.58,114.79z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M274.71,222l-156.69-16.59L25.29,78l156.69,16.59L274.71,222z M119.78,202.35l148.04,15.68l-87.6-120.37
			L32.18,81.97L119.78,202.35z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M251.82,251.82l-147.06-56.58l-0.26-0.67L48.18,48.18l147.06,56.59l0.26,0.66L251.82,251.82z M107.26,192.74
			L246.2,246.2l-53.46-138.94L53.8,53.8L107.26,192.74z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M222,274.71L94.59,181.99l-0.07-0.71L78,25.29l127.41,92.72l0.07,0.71L222,274.71z M97.65,180.22l120.38,87.6
			l-15.68-148.05L81.97,32.18L97.65,180.22z"/>
	</g>
	<g>
		<path className="shape" stroke="#ffffff" stroke-width="2" d="M187.27,289.1L88.2,166.56l0.11-0.71l24.42-154.94l99.07,122.53L187.27,289.1z M91.61,165.64l93.6,115.77
			l23.17-147.06l-93.6-115.77L91.61,165.64z"/>
	</g>
</g>

        </svg>
    )
}

const Landing = styled.div`

    z-index: 10;

    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    .messageBoxWrap {

        width: 500px;

        .vectorWrap {
            display: flex;
            justify-content: space-around;
            svg {
                width: 100px;
            }
            #shape1, #shape2, #shape3 {
                fill: none;
                margin-top: 20px;
            }

            .shapeCont {
                p {
                    text-align: center;
                    margin: 10px;
                    opacity: 0;
                }
            }

            .shapeCont:hover {
                opacity: .8
            }
            margin-bottom: 10px;
        }

        .header {
            padding: 10px;
            border: 1px solid white;
            margin-bottom: -1px;
        }

        .content {
            padding: 10px;
            height: 148px;
            border: 1px solid white;
        }


    }

    @media (max-width: 500px) {
        .messageBoxWrap {
            margin: 20px;
        
            width: 100%;

            .vectorWrap {
                display: flex;
                justify-content: space-around;
                svg {
                    width: 70px;
                }
                #shape1, #shape2, #shape3 {
                    fill: none;
                    margin-top: 20px;
                }
    
                .shapeCont {
                    p {
                        text-align: center;
                        margin: 10px;
                        opacity: 0;
                    }
                }
    
                .shapeCont:hover {
                    opacity: .8
                }
                margin-bottom: 10px;
            }

            .content {
                height: auto
            }
        }

    }

`

const Navigation = styled.div`

    z-index: 100;


`

class Exp4 extends Component {

    state = {
        current: ""
    }

    componentDidUpdate() {

        this.hideBackgrounds()

        if (this.state.current=="home") {
            this.hideBackgrounds()
            this.showHome()
        } else {
            this.hideBackgrounds(this.changePage)
            
        }



    }

    componentDidMount() {

        this.setState({current: "home"})

    }

    showHome = () => {

        var tl = anime.timeline({
            easing: 'easeOutExpo',
            // complete: (()=>{
            //     callback()
            // })
        })

        tl.add({
            targets: ".backgroundImage1",
            opacity: "1",
            scale: "1",
            easing: "easeInOutSine",
            duration: 1000,
        }, 14000).add({
            targets: "#shape1 .shape",
            delay: anime.stagger(15),
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 10000,
          }, 3000).add({
            targets: "#shape2 .shape",
            delay: anime.stagger(15),
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'steps(25)',
            duration: 5000,
          }, 3000).add({
            targets: "#shape3 .shape",
            delay: anime.stagger(15),
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 5000,
          }, 3000).add({
            targets: ".links",
            opacity: 1,
            easing: 'easeInOutSine',
            duration: 2000,
          }, 3000)


    }

    showWork = () => {

        var tl = anime.timeline({
            easing: 'easeOutExpo',
            complete: (()=>{
                this.changePage()
            })
        })

        tl.add({
            targets: ".backgroundImage2",
            opacity: "1",
            scale: "1",
            easing: "easeInOutSine",
            duration: 200,
        }, 1000).add({
            targets: ".experience",
            opacity: "1",
            easing: "easeInOutSine",
            duration: 1000
        }, 0).add({
            targets: ".experience",
            width: "500px",
            easing: "steps(30)",
            duration: 1000
        }, 1000)
       
    }

    showAbout = () => {
       
    }

    hideBackgrounds = (callback) => {
       
        var tl = anime.timeline({
            easing: 'easeOutExpo',
            complete: (()=>{
                if (callback){
                    callback()
                }

            }),
            duration: 5000
        })

        tl.add({
            targets: ".backgroundImage1",
            opacity: "0",
            scale: ".7",
            duration: 200,
            easing: "linear"
        }, 0)

    }


    changeToWork = () => {
        this.setState({current: "work"})
    }

    changeToAbout = () => {
        this.setState({current: "about"})
    }

    changePage = () => {

        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 5000,
            complete: (()=>{
                window.location.href = "/"
            }),
        })

        tl.add({
            targets: ".messageBoxWrap",
            filter: "blur(5px)",
            scale: ".7",
            duration: 200,            easing: "linear"
        }, 0)


    }


    render() {
        return (
            <Wrapper>
                <Landing>
                    <div className="messageBoxWrap">
                        <div className="messageBox">
                            <div className="header">
                                <p className="">I had a feeling you'd be visiting.</p>
                            </div>
                            <div className="content">
                                <Typing speed={5}>
                                    Welcome to the portfolio of Kevin Macaraeg.<br></br>
                                    ...<br></br>
                                    <Typing.Delay ms={2000} />
                                    Right now, he is at a coworking space, coffee shop, or at home in San Francisco designing, coding, or playing music.<br></br>
                                    ...<br></br>
                                    <Typing.Delay ms={3000} />
                                    Are you curious?
                                </Typing>
                            </div>
                            <div className="vectorWrap">
                                <div className="shapeCont" onClick={this.changeToWork}>
                                  
                                    {shape2()}
                                    <p className="links">Work</p>
                                </div>
                                <div className="shapeCont" onClick={this.changeToWork}>
                                    
                                    {shape1()}
                                    <p className="links">About</p>
                                </div>
                                <div className="shapeCont" onClick={this.changeToWork}>
                            
                                    {shape3()}
                                    <p className="links">Resume</p>
                                </div>
                            </div>
                        </div>
                        <div className="links">

                        </div>
                    </div>
                </Landing>
                <BackgroundImage className="backgroundImage1" />
            </Wrapper>
        );
    }

}

export default Exp4;
