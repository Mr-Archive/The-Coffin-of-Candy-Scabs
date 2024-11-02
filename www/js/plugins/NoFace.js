/*:
 * @plugindesc hide face
 */

(function() {
    Window_Message.prototype.drawMessageFace = function() {};
    const _Window_Message_prototype_newLineX = Window_Message.prototype.newLineX;
    Window_Message.prototype.newLineX = function() {
        return 0;
    };
})();