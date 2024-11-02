//=============================================================================
// main.js
//=============================================================================

const GAME_VERSION = "2.0.14";

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};
