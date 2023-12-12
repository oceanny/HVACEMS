(function() { const icons = {
	"material/places/ac-unit": "M44 22h-8.34l6.48-6.49-2.83-2.82L30 22h-4v-4l9.31-9.31-2.82-2.83L26 12.34V4h-4v8.34l-6.49-6.48-2.82 2.83L22 18v4h-4l-9.31-9.31-2.83 2.82L12.34 22H4v4h8.34l-6.48 6.49 2.83 2.82L18 26h4v4l-9.31 9.31 2.82 2.83L22 35.66V44h4v-8.34l6.49 6.48 2.82-2.83L26 30v-4h4l9.31 9.31 2.83-2.82L35.66 26H44z",
	"material/places/airport-shuttle": "M34 10H6c-2.21 0-4 1.79-4 4v18h4c0 3.31 2.69 6 6 6s6-2.69 6-6h11c0 3.31 2.69 6 6 6s6-2.69 6-6h5V22L34 10zM6 22v-8h8v8H6zm6 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm14-13h-8v-8h8v8zm9 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-5-13v-8h2l8 8H30z",
	"material/places/all-inclusive": "M37.2 13.25c-2.88 0-5.6 1.12-7.55 3.07l-5.65 5-.01-.01-3.03 2.67.02.02-5.39 4.78a6.756 6.756 0 0 1-4.79 1.97c-3.74 0-6.78-3.03-6.78-6.75s3.04-6.75 6.78-6.75c1.81 0 3.51.7 4.88 2.06l2.27 2.01 3.02-2.67-2.53-2.24a10.756 10.756 0 0 0-7.64-3.15C4.84 13.25 0 18.07 0 24s4.84 10.75 10.8 10.75c2.88 0 5.59-1.12 7.55-3.06L24 26.68l.01.01 3.02-2.68-.01-.01 5.39-4.77a6.724 6.724 0 0 1 4.79-1.98c3.74 0 6.78 3.03 6.78 6.75s-3.04 6.75-6.78 6.75c-1.81 0-3.51-.7-4.88-2.05l-2.27-2.01-3.02 2.68 2.53 2.24c2.04 2.03 4.75 3.14 7.63 3.14C43.16 34.75 48 29.93 48 24s-4.84-10.75-10.8-10.75z",
	"material/places/beach-access": "M26.248 29.11l2.863-2.862 12.9 12.89-2.86 2.864zm8.592-11.45l5.73-5.73c-7.9-7.9-20.7-7.91-28.61-.02 7.87-2.61 16.62-.52 22.88 5.75zm-22.93-5.71c-7.88 7.91-7.88 20.71.02 28.61l5.73-5.73c-6.27-6.25-8.36-15-5.75-22.88zm.04-.03c-.01.01-.01.01-.02.01-.01.01-.01.01-.01.02-.75 6.02 2.34 13.77 8.61 20.03l11.46-11.46c-6.28-6.26-14.02-9.36-20.04-8.6z",
	"material/places/breakfast": "M40 6H8v20c0 4.42 3.58 8 8 8h12c4.42 0 8-3.58 8-8v-6h4c2.21 0 4-1.79 4-4v-6c0-2.21-1.79-4-4-4zm0 10h-4v-6h4v6zM8 38h32v4H8z",
	"material/places/business-center": "M20 32v-2H6.02L6 38c0 2.22 1.78 4 4 4h28c2.22 0 4-1.78 4-4v-8H28v2h-8zm20-18h-8.02v-4l-4-4h-8L16 10v4H8.01c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h12v-4h8v4h12c2.21 0 4-1.79 4-4v-6c-.01-2.21-1.8-4-4.01-4zm-12.01 0h-8v-4h8v4z",
	"material/places/casino": "M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM15 36c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
	"material/places/child-care": "M29 23.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5zm-10 0c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5zm26.9-.8c-.5-3-2.7-5.5-5.6-6.3-1.1-2.2-2.5-4.2-4.4-5.8C32.7 7.7 28.6 6 24 6s-8.7 1.7-11.9 4.5c-1.8 1.6-3.3 3.6-4.4 5.8-2.9.9-5.1 3.3-5.6 6.3-.1.5-.1.9-.1 1.4s0 .9.1 1.3c.5 3 2.7 5.5 5.6 6.3 1 2.2 2.5 4.2 4.3 5.8 3.2 2.9 7.4 4.6 12 4.6s8.8-1.7 11.9-4.5c1.8-1.6 3.3-3.6 4.3-5.8 2.9-.9 5.1-3.3 5.6-6.3.2-.5.2-.9.2-1.4s0-.9-.1-1.3zM38 28c-.2 0-.4 0-.6-.1-.4 1.3-1 2.6-1.7 3.7C33.2 35.5 28.9 38 24 38s-9.2-2.5-11.7-6.3c-.8-1.1-1.3-2.4-1.7-3.7H10c-2.2 0-4-1.8-4-4s1.8-4 4-4c.2 0 .4 0 .6.1.4-1.3 1-2.6 1.7-3.7C14.8 12.5 19.1 10 24 10s9.2 2.5 11.7 6.3c.8 1.1 1.3 2.4 1.7 3.7.2 0 .4-.1.6-.1 2.2 0 4 1.8 4 4S40.2 28 38 28zm-14 6c4 0 7.5-2.5 9-6H15c1.5 3.5 5 6 9 6z",
	"material/places/child-friendly": "M26 4v16h16c0-8.84-7.16-16-16-16zm12.65 27.78C40.74 29.07 42 25.69 42 22H12.88l-1.9-4H4v4h4.45s3.78 8.14 4.24 8.83C10.49 32.02 9 34.33 9 37c0 3.87 3.13 7 7 7 3.53 0 6.43-2.61 6.92-6h4.16c.49 3.39 3.39 6 6.92 6 3.87 0 7-3.13 7-7 0-2.08-.91-3.94-2.35-5.22zM16 40c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
	"material/places/fitness-center": "M41.14 29.71L44 26.86 41.14 24 34 31.14 16.86 14 24 6.86 21.14 4l-2.85 2.86L15.43 4l-4.29 4.29-2.85-2.86-2.86 2.86 2.86 2.85L4 15.43l2.86 2.86L4 21.14 6.86 24 14 16.86 31.14 34 24 41.14 26.86 44l2.85-2.86L32.57 44l4.29-4.29 2.85 2.86 2.86-2.86-2.86-2.85L44 32.57z",
	"material/places/golf-course": "M39 36c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-5-24.15L18 4v36h-4v-3.46c-3.58.69-6 1.98-6 3.46 0 2.21 5.37 4 12 4s12-1.79 12-4c0-1.98-4.33-3.62-10-3.94v-18.1l12-6.11z",
	"material/places/hot-tub": "M14 16c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm20.8-1.6c1.2 1.2 1.6 2.8 1.3 4.4L36 20h3.8l.1-.8c.4-2.7-.5-5.4-2.6-7.4l-.1-.1c-1.1-1.2-1.6-2.8-1.3-4.4L36 6h-3.8l-.1.8c-.4 2.7.5 5.4 2.6 7.4l.1.2zM22.3 24c-.6-.5-1.2-.9-1.6-1.4l-2.8-3.1c-.4-.4-.9-.8-1.4-1-.6-.3-1.3-.5-1.9-.5h-.1C12 18 10 20 10 22.5V24H4v16c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V24H22.3zM14 40h-4V28h4v12zm8 0h-4V28h4v12zm8 0h-4V28h4v12zm8 0h-4V28h4v12zM26.8 14.4c1.1 1.2 1.6 2.8 1.3 4.4L28 20h3.8l.1-.8c.4-2.7-.5-5.4-2.6-7.4l-.1-.1c-1.1-1.2-1.6-2.8-1.3-4.4L28 6h-3.8l-.1.8c-.4 2.7.5 5.4 2.6 7.4l.1.2z",
	"material/places/kitchen": "M36 4.02L12 4C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-3.98-4-3.98zM36 40H12V21.95h24V40zm0-22H12V8h24v10zm-20-8h4v6h-4zm0 14h4v10h-4z",
	"material/places/pool": "M20 16l-6.5 6.5c.6.2 1.1.5 1.5.8.7.4 1.2.7 2.3.7 1.1 0 1.6-.3 2.3-.7.9-.5 2.1-1.3 4.4-1.3 2.2 0 3.5.7 4.4 1.3.7.5 1.2.7 2.3.7 1.1 0 1.6-.3 2.3-.7.2-.1.5-.3.8-.5L21 10c-3.1-3.1-6-4-11-4v5c3.6 0 5.8.8 8 3l2 2zm21.7 12.3c-.9-.5-2.1-1.3-4.4-1.3-2.2 0-3.5.8-4.4 1.3-.7.4-1.2.7-2.3.7-1.1 0-1.6-.3-2.3-.7-.8-.6-2.1-1.3-4.3-1.3-2.2 0-3.5.8-4.4 1.3-.7.4-1.2.7-2.3.7-1.1 0-1.6-.3-2.3-.7-.9-.5-2.1-1.3-4.4-1.3-2.2 0-3.5.7-4.4 1.3-.6.4-1.1.7-2.2.7v4c2.2 0 3.5-.7 4.4-1.3.8-.4 1.2-.7 2.3-.7s1.6.3 2.3.7c.9.5 2.1 1.3 4.4 1.3 2.2 0 3.5-.7 4.4-1.3.7-.4 1.2-.7 2.3-.7 1.1 0 1.6.3 2.3.7.9.5 2.1 1.3 4.4 1.3 2.2 0 3.5-.8 4.4-1.3.7-.4 1.2-.7 2.3-.7 1.1 0 1.6.3 2.3.7.9.5 2.1 1.3 4.4 1.3v-4c-1.3 0-1.8-.3-2.5-.7zM37.3 36c-2.2 0-3.5.8-4.4 1.3-.7.4-1.2.7-2.3.7-1.1 0-1.6-.3-2.3-.7-.8-.6-2.1-1.3-4.3-1.3-2.2 0-3.5.8-4.4 1.3-.7.4-1.2.7-2.3.7-1.1 0-1.6-.3-2.3-.7-.9-.5-2.1-1.3-4.4-1.3-2.2 0-3.5.7-4.4 1.3-.6.4-1.1.7-2.2.7v4c2.2 0 3.5-.7 4.4-1.3.8-.4 1.2-.7 2.3-.7s1.6.3 2.3.7c.9.5 2.1 1.3 4.4 1.3 2.2 0 3.5-.7 4.4-1.3.7-.4 1.2-.7 2.3-.7 1.1 0 1.6.3 2.3.7.9.5 2.1 1.3 4.4 1.3 2.2 0 3.5-.8 4.4-1.3.7-.4 1.2-.7 2.3-.7 1.1 0 1.6.3 2.3.7.9.5 2.1 1.3 4.4 1.3v-4c-1.1 0-1.6-.3-2.3-.7-1.1-.6-2.4-1.3-4.6-1.3zM33 16c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z",
	"material/places/rv-hookup": "M40 34V22c0-2.21-1.79-4-4-4H14v-4l-6 6 6 6v-4h8v6H8v6c0 2.21 1.79 4 4 4h4c0 3.32 2.68 6 6 6s6-2.68 6-6h16v-4h-4zm-18 6c-1.11 0-2-.89-2-2 0-1.11.89-2 2-2s2 .89 2 2c0 1.11-.89 2-2 2zm14-12h-8v-6h8v6zM34 4v4H18v4h16v4l6-6z",
	"material/places/service": "M4 34h40v4H4zm23.67-18.42c.21-.48.33-1.02.33-1.58 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .56.12 1.1.33 1.58C12.5 17.2 6.54 23.86 6 32h36c-.54-8.14-6.5-14.8-14.33-16.42z",
	"material/places/smoke-free": "M4 12l13.99 14H4v6h19.99l13.99 14 2.52-2.5-34-34zm37 14h3v6h-3zm-5 0h3v6h-3zm1.7-16.24c1.23-1.21 2-2.9 2-4.76h-3c0 2.04-1.66 3.7-3.7 3.7v3c4.49 0 8 3.65 8 8.14V24h3v-4.17c0-4.45-2.56-8.29-6.3-10.07zM29 17.39h3.06c2.09 0 3.94 1.48 3.94 4.11V24h3v-3.18c0-3.61-3.2-6.32-6.94-6.32H29c-2.04 0-3.7-1.96-3.7-4S26.96 7 29 7V4c-3.69 0-6.7 3-6.7 6.7s3.01 6.69 6.7 6.69zm5 14.46V26h-5.85z",
	"material/places/smoking-rooms": "M4 32h30v6H4zm37 0h3v6h-3zm-5 0h3v6h-3zm1.7-16.54c1.23-1.21 2-2.9 2-4.76C39.7 7 36.69 4 33 4v3c2.04 0 3.7 1.66 3.7 3.7s-1.66 3.7-3.7 3.7v3c4.49 0 8 3.65 8 8.14V30h3v-4.47c0-4.45-2.56-8.29-6.3-10.07zm-5.64 4.93H29v.01c-2.04 0-3.7-1.96-3.7-4s1.66-3.5 3.7-3.5v-3c-3.69 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7v-.01h3.06c2.09 0 3.94 1.48 3.94 4.11V30h3v-3.29c0-3.6-3.2-6.32-6.94-6.32z",
	"material/places/spa": "M31 19.3c-.4-5.6-2.6-11-6.9-15.3-4.1 4.1-6.6 9.5-7.1 15.3 2.6 1.4 4.9 3.1 7 5.3 2-2.2 4.4-4 7-5.3zm-13 5.3l-.9-.6.9.6zm12.8-.6c-.3.2-.5.3-.8.5.3-.1.6-.3.8-.5zM24 30.9C19.7 24.3 12.4 20 4 20c0 10.6 6.7 19.7 16.1 23 1.3.5 2.6.8 3.9 1 1.4-.2 2.7-.6 3.9-1C37.3 39.7 44 30.6 44 20c-8.3 0-15.7 4.3-20 10.9z",
};
if (JSC) {
	JSC.internal.registerIcons(icons);
}

})();