import { ThpaceGL } from 'thpace';


const canvas = document.getElementById('canvas');

const settings = {
	colors: ['#4CB1EF', '#424959', '#FF4B44'],
	triangleSize: 100,
};

ThpaceGL.create(canvas, settings);