// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Decryption","status":true,"description":"","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"false","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"false","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"center","---Windows---":"","Digit Grouping":"false","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"800","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"340","Name Box Buffer Y":"70","Name Box Padding":"0","Name Box Color":"0","Name Box Clear":"true","Name Box Added Text":"<center>","Name Box Auto Close":"false"}},
{"name":"RS_MessageAlign","status":true,"description":"(v1.0.16) This plugin allows you to align the text in the message system.","parameters":{}},
{"name":"GALV_MessageBackground","status":true,"description":"(v.2.0) Displays an image behind messages in place of the windowskin","parameters":{"Image Variable ID":"1","Disable Switch ID":"1"}},
{"name":"GALV_VisualNovelChoices","status":true,"description":"(v.1.6) Changes how the \"Choice\" message boxes display to appear more like visual novels.","parameters":{"Command Width":"700","Command Height":"48","Always Middle":"true","Message Gap":"190","Disabled Button":"3"}},
{"name":"Irina_VisualNovelBusts","status":true,"description":"<Irina_VisualNovelBusts> for RPG Maker MV version 1.6.2.","parameters":{"":"","BustDefaults":"","Bust0Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"(Window_Base._faceWidth + 24) / 2 + this.standardPadding()\",\"ScreenY\":\"this.height\"}","Bust1Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (2 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust2Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (10.5 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust3Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (3.5 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust4Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (8.5 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust5Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (6 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust6Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (6 / 12)\",\"ScreenY\":\"Graphics.boxHeight * (6 / 12)\"}","Bust7Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (2 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust8Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (2 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust9Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (10 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","Bust10Default":"{\"AnchorX\":\"0.5\",\"AnchorY\":\"1\",\"ScaleX\":\"1\",\"ScaleY\":\"1\",\"ScreenX\":\"Graphics.boxWidth * (2.5 / 12)\",\"ScreenY\":\"Graphics.boxHeight\"}","BustSettings":"","BustClearDuration":"20","BustAutoClear":"true","BustExpressionList":"[\"Angry\",\"Surprised\",\"Sad\"]","BustFadeDuration":"8","BustMoveDuration":"20","BustMoveType":"Linear","BustOpacityDuration":"20","BustScaleDuration":"20","BustSlideDistance":"144","BustSlideDuration":"20","BustToneDuration":"20","BustDimValues":"-68, -68, 0, 68","BustLightValues":"0, 0, 0, 0"}},
{"name":"NonCombatMenu","status":true,"description":"Fully customizable menu geared toward less battle-oriented games.","parameters":{"---Main Menu---":"","Menu List":"[\"{\\\"Name\\\":\\\"Item\\\",\\\"Keyword\\\":\\\"item\\\",\\\"Enable Condition\\\":\\\"\\\",\\\"Show Condition\\\":\\\"\\\",\\\"Icon\\\":\\\"\\\"}\",\"{\\\"Name\\\":\\\"Options\\\",\\\"Keyword\\\":\\\"options\\\",\\\"Enable Condition\\\":\\\"\\\",\\\"Show Condition\\\":\\\"\\\",\\\"Icon\\\":\\\"\\\"}\",\"{\\\"Name\\\":\\\"Save\\\",\\\"Keyword\\\":\\\"save\\\",\\\"Enable Condition\\\":\\\"$gameSystem.isSaveEnabled()\\\",\\\"Show Condition\\\":\\\"\\\",\\\"Icon\\\":\\\"\\\"}\",\"{\\\"Name\\\":\\\"Load\\\",\\\"Keyword\\\":\\\"load\\\",\\\"Enable Condition\\\":\\\"\\\",\\\"Show Condition\\\":\\\"\\\",\\\"Icon\\\":\\\"\\\"}\",\"{\\\"Name\\\":\\\"Quit\\\",\\\"Keyword\\\":\\\"toTitle\\\",\\\"Enable Condition\\\":\\\"\\\",\\\"Show Condition\\\":\\\"\\\",\\\"Icon\\\":\\\"\\\"}\"]","** Legacy Parameters **":"","Menu Order":"Item: item, Status: status, Options: options, Save: save, Quit: toTitle","Menu Icons":"-1, -1, -1, -1","** End Legacy Params **":"","Text Alignment":"left","Text Offset":"40","Offset Only Icons":"yes","Background Image":"","Persistent Background":"no","Menu Background Opacity":"128","---Item Menu---":"","Number of Tabs":"2","Show Consumables":"yes","Show Key Items":"no","Show Weapons":"no","Show Armors":"no","Description Placement":"0","---Gold Window---":"","Show Gold Window":"no","Gold Window Position":"left","Gold Window Width":"240","---Backgrounds---":"","Item Screen BG":"","Equip Screen BG":"","Status Screen BG":"","Save Screen BG":"","Load Screen BG":"","Options Screen BG":""}},
{"name":"OrangeOverlay_AlteredByChancer","status":true,"description":"v1.1.4 - Adds overlay images to the map <OrangeOverlay>","parameters":{"Organized Folders":"false","Parallax Layer Filename":"par","Ground Layer Filename":"ground","Light Layer Filename":"light","Shadow Layer Filename":"shadow","Light Opacity":"185","Quick Start":"true","Bush Region ID":"7","Fog Switch ID":"1","Light Switch ID":"2","Parallax Switch ID":"3","Shadow Switch ID":"4"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"2","Event Restrict":"3","All Restrict":"2","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\r\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"OrangeEventHitboxes","status":true,"description":"Allows the configuration of custom hitboxes for events","parameters":{}},
{"name":"DisableMouse","status":true,"description":"Disables mouse clicks.","parameters":{}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"ZE - Key Mapper","status":true,"description":"This plugin lets you control the keys on the keyboard, and how they're mapped to the game.\r\n\r\n<pluginID ZE - Key Mapper>","parameters":{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","Tab":"tab","Backspace":"backspace","Enter":"ok","Shift":"shift","Control":"control","Alt":"control","Pause":"pause","Capslock":"caps","Escape":"escape","Space":"ok","Pageup":"pageup","Pagedown":"pagedown","Home":"home","End":"end","Left":"left","Up":"up","Right":"right","Down":"down","Print Screen":"prntscrn","Insert":"escape","Delete":"delete","A":"left","B":"b","C":"c","D":"right","E":"ok","F":"pagedown","G":"g","H":"h","I":"i","J":"j","K":"k","L":"l","M":"m","N":"n","O":"o","P":"p","Q":"escape","R":"r","S":"down","T":"t","U":"u","V":"v","W":"up","X":"escape","Y":"y","Z":"ok","Semicolon":"semicolon","Equals":"equals","Minus":"minus","Super":"super","Media":"media","Num0":"num0","Num1":"num1","Num2":"down","Num3":"num3","Num4":"left","Num5":"num5","Num6":"right","Num7":"num7","Num8":"up","Num9":"num9","Num*":"multiply","Num+":"add","Num-":"subtract","Num.":"decimal","Num/":"divide","F1":"F1","F2":"F2","F3":"F3","F4":"F4","F5":"F5","F6":"F6","F7":"F7","F8":"F8","F9":"debug","F10":"F10","F11":"F11","F12":"F12","Numlock":"numlock","Scroll Lock":"scrollock","Comma":"comma","Period":"period","Slash":"slash","Backtick":"tilde","Open Brace":"[","Backslash":"\\","Closing Brace":"]","Quote":"'"}},
{"name":"GALV_RollCredits","status":true,"description":"(v.1.5) A plugin that calls a new scene to display scrolling information located in an external text file.","parameters":{"Folder":"data","Skippable":"true","Block Skipping":"true","Title Menu":"Credits","Title Credits Music":""}},
{"name":"AudioStreaming","status":true,"description":"Load audio faster and use only ogg files.","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"stbvorbis_stream","status":false,"description":"","parameters":{}},
{"name":"stbvorbis_stream_asm","status":false,"description":"","parameters":{}},
{"name":"ARP_TitleCommandExit","status":true,"description":"v1.00 Adds an option in the title command window to close\r\ngame window.","parameters":{"Command Exit":"Quit Game","Show Exit":"true"}},
{"name":"Yami_SkipTitle","status":false,"description":"Skip the title scene for testing purpose.","parameters":{}},
{"name":"TitleVideo","status":true,"description":"Adds a video above the static image for the main title screen.","parameters":{"Video Name":"TitleMovie","Muted":"yes","Volume":"1","Width":"auto","Height":"auto","X":"0","Y":"0","Loop":"yes","Playback Rate":"1.0","Blend Mode":"NORMAL","Opacity":"1.0","Tint":"0xffffff","Loop Start":"0","Loop End":"end","Debug":"yes"}},
{"name":"deobfuscated","status":true,"description":"","parameters":{}},
{"name":"NoFace","status":true,"description":"hide face","parameters":{}}
];
