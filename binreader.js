/**
 * Creates a new binary reader.
 * @constructor
 * @param {ArrayBuffer} arraybuffer 
 */
var BinReader = function(arraybuffer){
    dataView = new DataView(arraybuffer);
    pos = 0;
};

BinReader.prototype = {
    /**
     * Returns an unsigned 8-bit integer.
     */
    getUInt8: function(){
        return dataView.getUint8(pos++);
    },
    getInt16LE: function(){
        var v = dataView.getInt16(pos, true);
        pos += 2;
        return v;
    },
    getBool: function(){
        return dataView.getUint8(pos++) > 0;
    },
    /**
     * Returns a null-terminated string that has a maximum length.
     * @param {number} maxlen
     */
    getFixedNullTermString: function(maxlen){
        var str = "";
        var len = 0;
        while (true) {
            var ch = this.getUInt8();
            len++;
            if (ch == 13) {
                str += "\n";
                len++;
                pos++;
            } else if (ch == 0) break;
            else str += String.fromCharCode(ch);
        }
        pos += maxlen - len;
        return str;
    }
};