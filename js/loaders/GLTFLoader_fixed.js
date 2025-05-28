
/**
 * Simplified GLTFLoader.js for local testing
 * This is a snapshot for testing only.
 */

THREE.GLTFLoader = function () {

    THREE.Loader.call( this );

    this.load = function ( url, onLoad, onProgress, onError ) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = function () {
            if ( xhr.status === 200 ) {
                console.log('تم تحميل GLTF (محاكاة)');
                onLoad({ scene: new THREE.Group() });  // Mock scene
            } else {
                if ( onError ) onError( new Error( 'HTTP ' + xhr.status ) );
            }
        };

        xhr.onerror = function ( e ) {
            if ( onError ) onError( e );
        };

        if ( onProgress ) {
            xhr.onprogress = onProgress;
        }

        xhr.send( null );
    };

};

THREE.GLTFLoader.prototype = Object.create( THREE.Loader.prototype );
THREE.GLTFLoader.prototype.constructor = THREE.GLTFLoader;
