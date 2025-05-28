
/**
 * @author qtek (Based on three.js)
 * RGBELoader.js - نسخة جاهزة لاستخدام HTML
 */

THREE.RGBELoader = function () {

    THREE.Loader.call( this );

    this.load = function ( url, onLoad, onProgress, onError ) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = function () {
            if ( xhr.status === 200 ) {
                var arrayBuffer = xhr.response;
                if ( arrayBuffer ) {
                    // هذه مجرد تجربة مبسطة لتأكيد التحميل
                    console.log('HDRI تم تحميله');
                    onLoad({ buffer: arrayBuffer }); // يُمكن استبداله بمعالجة فعلية
                }
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

THREE.RGBELoader.prototype = Object.create( THREE.Loader.prototype );
THREE.RGBELoader.prototype.constructor = THREE.RGBELoader;
