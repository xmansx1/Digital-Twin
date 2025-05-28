
/**
 * @author qtek
 * @see https://github.com/mrdoob/three.js/blob/dev/examples/jsm/controls/OrbitControls.js
 * This is a simplified OrbitControls.js implementation.
 */

THREE.OrbitControls = function ( object, domElement ) {

    this.object = object;
    this.domElement = ( domElement !== undefined ) ? domElement : document;

    // API
    this.enabled = true;
    this.target = new THREE.Vector3();

    // methods
    this.update = function () {
        var offset = new THREE.Vector3();
        offset.copy( this.object.position ).sub( this.target );
        this.object.lookAt( this.target );
    };

};
