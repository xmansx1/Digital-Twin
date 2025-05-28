
/**
 * Simplified DataTextureLoader.js for local testing
 * This is a snapshot for testing only.
 */

THREE.DataTextureLoader = function ( manager ) {
    THREE.Loader.call( this, manager );
};

THREE.DataTextureLoader.prototype = Object.create( THREE.Loader.prototype );
THREE.DataTextureLoader.prototype.constructor = THREE.DataTextureLoader;

THREE.DataTextureLoader.prototype.load = function ( url, onLoad, onProgress, onError ) {
    console.log('تحميل DataTexture (محاكاة)');
    onLoad({});
};
