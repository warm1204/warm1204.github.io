function CSpriteLibrary() {
    var a, c, b, d, h, g;
    this.init = function(e, s, v) {
        b = c = 0;
        d = e;
        h = s;
        g = v;
        a = {}
    };
    this.addSprite = function(e, d) {
        a.hasOwnProperty(e) || (a[e] = {szPath: d,oSprite: new Image}, c++)
    };
    this.getSprite = function(e) {
        return a.hasOwnProperty(e) ? a[e].oSprite : null
    };
    this._onSpritesLoaded = function() {
        h.call(g)
    };
    this._onSpriteLoaded = function() {
        d.call(g);
        ++b == c && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var e in a)
            a[e].oSprite.oSpriteLibrary = this, a[e].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            }, 
            a[e].oSprite.src = a[e].szPath
    };
    this.getNumSprites = function() {
        return c
    }
}
var CANVAS_WIDTH = 640, CANVAS_HEIGHT = 960, DISABLE_SOUND_MOBILE = !0, FPS_TIME = 1E3 / 24, STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, GRID_COLS, GRID_ROWS, GRID_SIZE, GRID_OFFSET_X, GRID_OFFSET_Y, TIME_SHOW_NEW_BLOCK, NUM_COLORS, BLOCK_SPEED, BLOCK_DOWN_SPEED, BLOCK_EMPTY = 0, BLOCK_LINE = 3, STATE_MOVE = 1, STATE_LINE = 2, STATE_FALL = 3, NUM_LIVES = 3, BUT_LEFT_X = 40, BUT_LEFT_Y = 400, BUT_RIGHT_X = 280, BUT_RIGHT_Y = 400;
function CToggle(a, c, b) {
    var d, h, g;
    this._init = function(a, c, b) {
        d = [];
        h = [];
        b = new createjs.SpriteSheet({images: [b],frames: {width: b.width / 2,height: b.height,regX: b.width / 2 / 2,regY: b.height / 2},animations: {on: [0, 1],off: [1, 2]}});
        g = s_bAudioActive ? new createjs.Sprite(b, "on") : new createjs.Sprite(b, "off");
        g.x = a;
        g.y = c;
        g.stop();
        s_oStage.addChild(g);
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown", this.buttonDown);
        g.off("pressup", this.buttonRelease);
        s_oStage.removeChild(g)
    };
    this._initListener = function() {
        g.on("mousedown", 
        this.buttonDown);
        g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        d[a] = b;
        h[a] = c
    };
    this.buttonRelease = function() {
        g.scaleX = 1;
        g.scaleY = 1;
        (s_bAudioActive = !s_bAudioActive) ? g.gotoAndStop("on") : g.gotoAndStop("off");
        d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(h[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        g.scaleX = .9;
        g.scaleY = .9;
        d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])
    };
    this._init(a, c, b)
}
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 
    4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});
function trace(a) {
    console.log(a)
}
$(window).ready(function() {
    sizeHandler()
});
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = CANVAS_WIDTH, c = CANVAS_HEIGHT, b = window.innerWidth;
        multiplier = Math.min(window.innerHeight / c, b / a);
        a *= multiplier;
        c *= multiplier;
        $("#canvas").css("width", a + "px");
        $("#canvas").css("height", c + "px");
        $("#canvas").css("left", b / 2 - a / 2 + "px")
    }
}
function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}
function shuffle(a) {
    for (var c = a.length, b, d; 0 !== c; )
        d = Math.floor(Math.random() * c), c -= 1, b = a[c], a[c] = a[d], a[d] = b;
    return a
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },onTouchMove: function(a) {
        this.moved = !0
    },onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", 
        this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }};
function CTextButton(a, c, b, d, h, g, e) {
    var s, v, k;
    this._init = function(a, e, b, d, c, g, h) {
        s = [];
        v = [];
        var w = new createjs.Bitmap(b), x = Math.ceil(h / 20), y = new createjs.Text(d, "bold " + h + "px " + c, "#000000");
        y.textAlign = "center";
        var z = y.getBounds();
        y.x = b.width / 2 + x;
        y.y = (b.height - z.height) / 2 + x;
        d = new createjs.Text(d, "bold " + h + "px " + c, g);
        d.textAlign = "center";
        z = d.getBounds();
        d.x = b.width / 2;
        d.y = (b.height - z.height) / 2;
        k = new createjs.Container;
        k.x = a;
        k.y = e;
        k.regX = b.width / 2;
        k.regY = b.height / 2;
        k.addChild(w, y, d);
        s_oStage.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown");
        k.off("pressup")
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this._initListener = function() {
        oParent = this;
        k.on("mousedown", this.buttonDown);
        k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, d, b) {
        s[a] = d;
        v[a] = b
    };
    this.buttonRelease = function() {
        k.scaleX = 1;
        k.scaleY = 1;
        s[ON_MOUSE_UP] && s[ON_MOUSE_UP].call(v[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        k.scaleX = .9;
        k.scaleY = .9;
        s[ON_MOUSE_DOWN] && s[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, d) {
        k.x = a;
        k.y = d
    };
    this.setX = function(a) {
        k.x = a
    };
    this.setY = function(a) {
        k.y = a
    };
    this.getButtonImage = function() {
        return k
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this._init(a, c, b, d, h, g, e);
    return this
}
function CPreloader() {
    var a;
    this._init = function() {
        this._onAllPreloaderImagesLoaded()
    };
    this._onPreloaderImagesLoaded = function() {
    };
    this._onAllPreloaderImagesLoaded = function() {
        a = new createjs.Text("", "bold 42px Arial center", "#ffffff");
        a.x = CANVAS_WIDTH / 2 - 80;
        a.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(a)
    };
    this.unload = function() {
        s_oStage.removeChild(a)
    };
    this.refreshLoader = function(c) {
        a.text = c + "%"
    };
    this._init()
}
function CMenu() {
    var a, c, b, d;
    this._init = function() {
        a = new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(a);
        var h = s_oSpriteLibrary.getSprite("but_play");
        c = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 200, h, TEXT_PLAY, "Arial", "#ffffff", 40);
        c.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);

        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(d);
        createjs.Tween.get(d).to({alpha: 0}, 1E3).call(function() {
            d.visible = !1
        })
    };
    this.unload = function() {
        c.unload();
        c = null;
        b && (b.unload(), b = null);
        s_oStage.removeChild(a);
        a = null
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame()
    };
   this._onAudioToggle = function(){
        createjs.sound.setMute(!s_bAudioActive)
   };
    this._init()
}
function CMain() {
    var a = 0, c = 0, b = STATE_LOADING, d, h;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
       !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        s_oSpriteLibrary = new CSpriteLibrary;
        d = new CPreloader;
        this._loadImages()
    };
     this._initSounds = function() {//声音
        createjs.Sound.initializeDefaultPlugins() &&(0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") 
            ? (createjs.Sound.alternateExtensions = ["mp3"], 
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.handleFileLoad, this)),
                 createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack"),
                  createjs.Sound.registerSound("./sounds/move.ogg", "move"), 
                  createjs.Sound.registerSound("./sounds/explosion.ogg", "explosion")) :
                   (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.handleFileLoad, this)),
                    createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack"), 
                    createjs.Sound.registerSound("./sounds/move.mp3", "move"), createjs.Sound.registerSound("./sounds/explosion.mp3", "explosion")), c += 3)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_exits", "./sprites/but_exits.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_right", "./sprites/but_right.png");
        s_oSpriteLibrary.addSprite("but_left", "./sprites/but_left.png");
        s_oSpriteLibrary.addSprite("but_down", "./sprites/but_down.png");
        s_oSpriteLibrary.addSprite("but_up", "./sprites/but_up.png");
        s_oSpriteLibrary.addSprite("game_bg", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("block", "./sprites/block.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("audio_icons", "./sprites/audio_icons.png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this.handleFileLoad = function(b) {
        a++;
        a === c && (d.unload(),
            !1 !== DISABLE_SOUND_MOBILE &&
             !1 !== s_bMobile || 
             createjs.Sound.play("soundtrack", {loop: -1,volume: .5}),  this.gotoMenu())
    };
    this._onImagesLoaded = function() {
        a++;
        d.refreshLoader(Math.floor(a / c * 100));
        a === c && (d.unload(), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("soundtrack", {loop: -1,volume: .5}), this.gotoMenu())
    };
    this._onAllImagesLoaded = function() {
    };
    this.onAllPreloaderImagesLoaded = 
    function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        new CMenu;
        b = STATE_MENU
    };
    this.gotoGame = function() {
         h = new CGame({rows: 10,cols: 7,cell_size:67,offset_x: 0,offset_y: 2,time_show_block: 1E3,num_colors: 5,speed: 2,speed_down: 8});//格子的大小位置设定
        b = STATE_GAME;
        $(s_oMain).trigger("game_start")
    };
    this.gotoHelp = function() {
        new CHelp;
        b = STATE_HELP
    };
    this._update = function(a) {
        var d = (new Date).getTime();
        s_iTimeElaps = d - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = d;
        1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 
        1E3, s_iCntFps = 0);
        b === STATE_GAME && h.update();
        s_oStage.update(a)
    };
    s_oMain = this;
    this.initContainer()
}
var s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_bMobile, s_bAudioActive = !0, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary;
TEXT_PLAY = "PLAY";
TEXT_SCORE = "TP-GAME SCORE";
TEXT_GAME_OVER = "GAME OVER";
TEXT_NEXT = "NEXT";
TEXT_HELP = "游戏玩法";
function CInterface(a) {
    var c = CANVAS_WIDTH - 100, b = 260 + 2 * GRID_SIZE, d = CANVAS_WIDTH - 100, h = 260 + GRID_SIZE, g = CANVAS_WIDTH - 100, e = CANVAS_HEIGHT - 60, s = CANVAS_HEIGHT - 60, v = CANVAS_HEIGHT - 60, k = CANVAS_HEIGHT - 60, p, q, r, u, A, t, f, w, x, y, z, l, m, B;
    this._init = function(a) {
        p = new createjs.Sprite(a, "invisible");
        p.stop();
        p.x = c;
        p.y = b;
        q = new createjs.Sprite(a, "invisible");
        q.stop();
        q.x = d;
        q.y = h;
        r = new createjs.Sprite(a, "invisible");
        r.stop();
        r.x = g;
        r.y = 260;
        s_oStage.addChild(p);
        s_oStage.addChild(q);
        s_oStage.addChild(r);
        a = s_oSpriteLibrary.getSprite("but_left");
        A = new CGfxButton(400, e-100, a, !0);
        A.addEventListener(ON_MOUSE_UP, this._onReleaseLeft, this);
        a = s_oSpriteLibrary.getSprite("but_right");
        t = new CGfxButton(550, s-100, a, !0);
        t.addEventListener(ON_MOUSE_UP, this._onReleaseRight, this);
        a = s_oSpriteLibrary.getSprite("but_down");
        w = new CGfxButton(480, v-20, a, !0);
        w.addEventListener(ON_MOUSE_UP, this._onReleaseButDown, this);
        a = s_oSpriteLibrary.getSprite("but_up");
        f = new CGfxButton(60, k-100, a, !0);
        f.addEventListener(ON_MOUSE_UP, this._onReleaseButUp, this);
        a = s_oSpriteLibrary.getSprite("but_exits");
        u = new CGfxButton(CANVAS_WIDTH - a.width / 2 - 10, 10 + a.height / 2, a, !0);
        u.addEventListener(ON_MOUSE_UP, this._onExit, this);
           if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            x = new CToggle(CANVAS_WIDTH - a.width / 2 - 16, 180, s_oSpriteLibrary.getSprite("audio_icons")), x.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        y = new createjs.Text("0 PT", "bold 40px Arial", "#000000");
        y.textAlign = "center";
        y.x = CANVAS_WIDTH - 70;
        y.y = 600
        s_oStage.addChild(y);
        z = new createjs.Text("0 PT", "bold 40px Arial", "#ffffff");
        z.textAlign =  "center";
        z.x = CANVAS_WIDTH - 73;
        z.y = 602
        s_oStage.addChild(z);
        m = new createjs.Text(TEXT_NEXT, "bold 32px Arial", "#000000");
        m.x = CANVAS_WIDTH - 108;
        m.y = 472;
        s_oStage.addChild(m);
        l = new createjs.Text(TEXT_NEXT, "bold 32px Arial", "#ffffff");
        l.x = CANVAS_WIDTH - 110;
        l.y = 470;
        s_oStage.addChild(l);
        B = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"))
    };
    this.unload = function() {
        u.unload();
        u = null;
        A.unload();
        A = null;
        t.unload();
        t = null;
        w.unload();
        w = null;
        f.unload();
        f = null;
        x && (x.unload(), x = null);
        s_oStage.removeChild(z);
        s_oStage.removeChild(y);
        s_oStage.removeChild(m);
        s_oStage.removeChild(l);
        s_oStage.removeChild(p);
        s_oStage.removeChild(q);
        s_oStage.removeChild(r)
    };
    this.setNextBlock = function(a, d, b) {
        p.gotoAndStop("block_" + a);
        q.gotoAndStop("block_" + d);
        r.gotoAndStop("block_" + b)
    };
    this.refreshScore = function(a) {
        z.text = a + " PT";
        y.text = a + " PT"
    };
    this.gameOver = function(a) {
        B.show(a)
    };
    this._onReleaseLeft = function() {
        s_oGame.shiftLeft()
    };
    this._onReleaseRight = function() {
        s_oGame.shiftRight()
    };
    this._onReleaseButDown = function() {
        s_oGame.pressButDown()
    };
    this._onReleaseButUp = function() {
        s_oGame.releaseButUp()
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(!s_bAudioActive)
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._init(a);
    return this
}
function CHelp(a) {
    var c, b, d;
    this._init = function(a) {
        d = new createjs.Bitmap(a);
        s_oStage.addChild(d);
        var g = this;
        d.on("pressup", function() {
            g._onExitHelp()
        });
        b = new createjs.Text(TEXT_HELP, "bold 38px 微软雅黑", "#000000");
        b.textAlign = "center";
        b.x = CANVAS_WIDTH / 2 + 2.5;
        b.y = 345;
        s_oStage.addChild(b);


    };
    this.unload = function() {
        s_oStage.removeChild(d);
        s_oStage.removeChild(c);
        s_oStage.removeChild(b);
        var a = this;
        d.off("pressup", function() {
            a._onExitHelp()
        })
    };
    this._onExitHelp = function() {
        this.unload();
        s_oGame.onExitHelp()
    };
    this._init(a)
}
function CGfxButton(a, c, b, d) {
    var h, g, e;
    this._init = function(a, d, b, c) {
        h = [];
        g = [];
        e = new createjs.Bitmap(b);
        e.x = a;
        e.y = d;
        e.regX = b.width / 2;
        e.regY = b.height / 2;
        c && s_oStage.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        e.off("mousedown", this.buttonDown);
        e.off("pressup", this.buttonRelease);
        s_oStage.removeChild(e)
    };
    this.setVisible = function(a) {
        e.visible = a
    };
    this._initListener = function() {
        e.on("mousedown", this.buttonDown);
        e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, d, b) {
        h[a] = d;
        g[a] = b
    };
    this.buttonRelease = function() {
        e.scaleX = 1;
        e.scaleY = 1;
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(g[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        e.scaleX = .9;
        e.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, d) {
        e.x = a;
        e.y = d
    };
    this.setX = function(a) {
        e.x = a
    };
    this.setY = function(a) {
        e.y = a
    };
    this.getButtonImage = function() {
        return e
    };
    this.getX = function() {
        return e.x
    };
    this.getY = function() {
        return e.y
    };
    this._init(a, c, b, d);
    return this
}
function CGame(a) {
    function c(a) {
        a || (a = window.event);
        switch (a.keyCode) {//按键编码
            case 37:
                s_oGame.shiftLeft();
                break;
            case 38:
                s_oGame.releaseButUp();
                break;
            case 39:
                s_oGame.shiftRight();
                break;
            case 40:
                s_oGame.pressButDown()
        }
    }
    var b = 0, d = [], h = [], g = [], e, s, v, k, p, q, r, u = !0, A, t = 0, f, w;
    this._init = function() {
        !1 === s_bMobile && (document.onkeyup = c);
        var a = new createjs.Bitmap(s_oSpriteLibrary.getSprite("game_bg"));
        s_oStage.addChild(a);
        for (a = 0; a < GRID_COLS; a++)
            d[a] = Array(GRID_ROWS), h[a] = Array(GRID_ROWS), g[a] = Array(GRID_ROWS);
        for (var b =  {}, a = 0; a < NUM_COLORS; a++)
            b["block_" + (a + 1)] = [a, a + 1];
        b.invisible = [-1, 0];
        for (var a = {images: [s_oSpriteLibrary.getSprite("block")],frames: {width: GRID_SIZE,height: GRID_SIZE,regX: 0,regY: 0},animations: b}, b = new createjs.SpriteSheet(a), l = 0; l < GRID_ROWS; l++)
            for (a = 0; a < GRID_COLS; a++) {
                d[a][l] = BLOCK_EMPTY;
                var m = new createjs.Sprite(b, "invisible");
                m.stop();
                g[a][l] = m;
                m.x = GRID_OFFSET_X + a * GRID_SIZE;
                m.y = GRID_OFFSET_Y + l * GRID_SIZE;
                s_oStage.addChild(m)
            }
        do
            p = Math.floor(1 + Math.random() * NUM_COLORS), q = Math.floor(1 + Math.random() * 
            NUM_COLORS), r = Math.floor(1 + Math.random() * NUM_COLORS);
        while (p === q && p === r && q === r);
        f = new CFallingBlock(b);
        w = new CInterface(b);
        a = s_oSpriteLibrary.getSprite("bg_help");
        new CHelp(a);
        this.setFallingInfo();
        A = 0;
        e = STATE_MOVE
    };
    this.unload = function() {
        w.unload()
    };
    this.onExitHelp = function() {
        u = !1
    };
    this.setFallingInfo = function() {
        f.setSpeed(BLOCK_SPEED + b);
        var a = Math.floor(GRID_COLS / 2) * GRID_SIZE;
        f.setY(0);
        f.setX(GRID_OFFSET_X + a);
        s = p;
        v = q;
        k = r;
        this.refreshFallingBlock();
        do
            p = Math.floor(1 + Math.random() * NUM_COLORS), q = Math.floor(1 + 
            Math.random() * NUM_COLORS), r = Math.floor(1 + Math.random() * NUM_COLORS);
        while (p === q && p === r && q === r);
        w.setNextBlock(p, q, r)
    };
    this.refreshFallingBlock = function() {
        f.setBlock(s, v, k)
    };
    this.blockDown = function() {
        if (A > TIME_SHOW_NEW_BLOCK) {
            var a = Math.floor((f.getX() - GRID_OFFSET_X) / GRID_SIZE), b = Math.floor((f.getY() + f.getSpeed() - GRID_OFFSET_Y) / GRID_SIZE);
            f.getY() + f.getSpeed() < GRID_OFFSET_Y + GRID_ROWS * GRID_SIZE && (d[a][b] === BLOCK_EMPTY || void 0 === d[a][b]) ? (w.setNextBlock(p, q, r), f.increaseHeight()) : f.getY() < GRID_OFFSET_Y + 
            3 * GRID_SIZE ? this.gameOver() : (A = 0, this.putBlk(a, b - 1, s), this.putBlk(a, b - 2, v), this.putBlk(a, b - 3, k), this.setFallingInfo(), e = STATE_LINE)
        }
    };
    this.putBlk = function(a, b, e) {
        0 <= b && (d[a][b] = e, g[a][b].gotoAndStop("block_" + e))
    };
    this.checkColorMatching = function() {
        var a, c;
        u = !1;
        for (var l = 0; l < GRID_ROWS; l++)
            for (var m = 0; m < GRID_COLS; m++)
                h[m][l] = !1;
        for (l = 0; l < GRID_ROWS; l++)
            for (var k = 0; k < GRID_COLS; k++)
                if (d[k][l] !== BLOCK_EMPTY) {
                    a = d[k][l];
                    c = 0;
                    for (var n = k; n < GRID_COLS; n++)
                        if (d[n][l] === a)
                            c++;
                        else {
                            n--;
                            break
                        }
                    if (c >= BLOCK_LINE) {
                        u = 
                        !0;
                        n === GRID_COLS && n--;
                        for (m = k; m <= n; m++)
                            h[m][l] = !0;
                        t += c * c
                    }
                    k = n
                }
        for (m = 0; m < GRID_COLS; m++)
            for (n = 0; n < GRID_ROWS; n++)
                if (d[m][n] !== BLOCK_EMPTY) {
                    a = d[m][n];
                    c = 0;
                    for (var f = n; f < GRID_ROWS; f++)
                        if (d[m][f] === a)
                            c++;
                        else {
                            f--;
                            break
                        }
                    if (c >= BLOCK_LINE) {
                        u = !0;
                        f === GRID_ROWS && f--;
                        for (l = n; l <= f; l++)
                            h[m][l] = !0;
                        t += c * c
                    }
                    n = f
                }
        for (l = 0; l < GRID_ROWS - (BLOCK_LINE - 1); l++)
            for (m = 0; m < GRID_COLS - (BLOCK_LINE - 1); m++)
                if (n = m, f = l, a = d[n][f], a !== BLOCK_EMPTY) {
                    for (c = 0; n < GRID_COLS && f < GRID_ROWS && d[n][f] === a; )
                        c++, n++, f++;
                    if (c >= BLOCK_LINE) {
                        u = !0;
                        f--;
                        k = m;
                        for (n = 
                        l; n <= f; )
                            h[k++][n++] = !0;
                        t += c * c * 2
                    }
                }
        for (l = 0; l < GRID_ROWS - (BLOCK_LINE - 1); l++)
            for (m = GRID_COLS - 1; m >= BLOCK_LINE - 1; m--)
                if (n = m, f = l, a = d[n][f], a !== BLOCK_EMPTY) {
                    for (c = 0; 0 <= n && f < GRID_ROWS && d[n][f] === a; )
                        c++, n--, f++;
                    if (c >= BLOCK_LINE) {
                        u = !0;
                        f--;
                        k = m;
                        for (n = l; n <= f; )
                            h[k--][n++] = !0;
                        t += c * c * 2
                    }
                }
        if (u) {
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("explosion");
            for (l = 0; l < GRID_ROWS; l++)
                for (m = 0; m < GRID_COLS; m++)
                    h[m][l] && (d[m][l] = BLOCK_EMPTY, g[m][l].gotoAndStop("invisible"));
            w.refreshScore(t);
            b = Math.floor(t / 100);
            e = STATE_FALL;
            u = !1
        } else
            e = STATE_MOVE
    };
    this.blockFall = function() {
        for (var a = !1, b = GRID_ROWS - 1; 0 < b; b--)
            for (var c = 0; c < GRID_COLS; c++)
                if (d[c][b] === BLOCK_EMPTY && d[c][b - 1] !== BLOCK_EMPTY) {
                    var a = !0, f = d[c][b - 1];
                    d[c][b] = f;
                    g[c][b].gotoAndStop("block_" + f);
                    d[c][b - 1] = BLOCK_EMPTY;
                    g[c][b - 1].gotoAndStop("invisible")
                }
        a || (e = STATE_LINE)
    };
    this.gameOver = function() {
        u = !0;
        w.gameOver(t)
    };
    this.shiftLeft = function() {
        if (e === STATE_MOVE) {
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("move");
            var a = Math.floor((f.getX() - 
            GRID_OFFSET_X) / GRID_SIZE), b = Math.floor((f.getY() - GRID_OFFSET_Y) / GRID_SIZE);
            0 < a && 0 < f.getX() && d[a - 1][b + 1] === BLOCK_EMPTY && f.setX(f.getX() - GRID_SIZE)
        }
    };
    this.shiftRight = function() {
        if (e === STATE_MOVE) {
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("move");
            var a = Math.floor((f.getX() - GRID_OFFSET_X) / GRID_SIZE), b = Math.floor((f.getY() - GRID_OFFSET_Y) / GRID_SIZE);
            f.getX() < GRID_OFFSET_Y + (GRID_COLS - 1) * GRID_SIZE && d[a + 1][b + 1] === BLOCK_EMPTY && f.setX(f.getX() + GRID_SIZE)
        }
    };
    this.pressButDown = function() {
        100 > 
        f.getY() || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("move"), f.setSpeed(BLOCK_DOWN_SPEED))
    };
    this.releaseButUp = function() {
        var a = k;
        k = v;
        v = s;
        s = a;
        this.refreshFallingBlock()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("restart")
    };
    this.update = function() {
        if (!u)
            switch (A += s_iTimeElaps, e) {
                case STATE_MOVE:
                    this.blockDown();
                    break;
                case STATE_LINE:
                    this.checkColorMatching();
                    break;
                case STATE_FALL:
                    this.blockFall()
            }
    };
    s_oGame = this;
    var x = CANVAS_HEIGHT / 480, x = x.toFixed(2);
    GRID_ROWS = a.rows;
    GRID_COLS = a.cols;
    GRID_SIZE = a.cell_size;
    GRID_OFFSET_X = a.offset_x;
    GRID_OFFSET_Y = a.offset_y;
    TIME_SHOW_NEW_BLOCK = a.time_show_block;
    NUM_COLORS = a.num_colors;
    BLOCK_SPEED = a.speed * x;
    BLOCK_DOWN_SPEED = a.speed_down * x;
    this._init()
}
var s_oGame;
function CFallingBlock(a) {
    var c = BLOCK_SPEED, b, d, h, g;
    this._init = function(a) {
        b = new createjs.Container;
        d = new createjs.Sprite(a, "invisible");
        d.y = 2 * GRID_SIZE;
        h = new createjs.Sprite(a, "invisible");
        h.y = GRID_SIZE;
        g = new createjs.Sprite(a, "invisible");
        g.y = 0;
        b.addChild(d);
        b.addChild(h);
        b.addChild(g);
        b.regY = 3 * GRID_SIZE;
        s_oStage.addChild(b)
    };
    this.setBlock = function(a, b, c) {
        d.gotoAndStop("block_" + a);
        h.gotoAndStop("block_" + b);
        g.gotoAndStop("block_" + c)
    };
    this.decreaseY = function(a) {
        b.y -= a
    };
    this.increaseHeight = function() {
        b.y += c
    };
    this.setSpeed = function(a) {
        c = a
    };
    this.setX = function(a) {
        b.x = a
    };
    this.setY = function(a) {
        b.y = a
    };
    this.getX = function() {
        return b.x
    };
    this.getY = function() {
        return b.y
    };
    this.getSpeed = function() {
        return c
    };
    this._init(a);
    return this
}
function CEndPanel(a) {
    var c, b, d, h, g, e;
    this._init = function(a) {
        c = new createjs.Bitmap(a);
        c.x = 0;
        c.y = 0;
        g = new createjs.Text("", "bold 56px Arial", "#000");
        g.x = CANVAS_WIDTH / 2 + 2;
        g.y = CANVAS_HEIGHT / 2 - 76;
        g.textAlign = "center";
        h = new createjs.Text("", "bold 56px Arial", "#ffffff");
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2 - 80;
        h.textAlign = "center";
        b = new createjs.Text("", "bold 40px Arial", "#000");
        b.x = CANVAS_WIDTH / 2 + 2;
        b.y = CANVAS_HEIGHT / 2 + 22;
        b.textAlign = "center";
        d = new createjs.Text("", "bold 40px Arial", "#ffffff");
        d.x = CANVAS_WIDTH / 
        2;
        d.y = CANVAS_HEIGHT / 2 + 20;
        d.textAlign = "center";
        e = new createjs.Container;
        e.alpha = 0;
        e.visible = !1;
        e.addChild(c, b, d, g, h);
        s_oStage.addChild(e)
    };
    this._initListener = function() {
        e.on("mousedown", this._onExit)
    };
    this.show = function(a) {
        g.text = TEXT_GAME_OVER;
        h.text = TEXT_GAME_OVER;
        b.text = TEXT_SCORE + ": " + a;
        d.text = TEXT_SCORE + ": " + a;
        e.visible = !0;
        var c = this;
        createjs.Tween.get(e).to({alpha: 1}, 500).call(function() {
            c._initListener()
        });
        $(s_oMain).trigger("save_score", a)
        document.title=b.text;
    };
    this._onExit = function() {
        e.off("mousedown");
        s_oGame.onExit()
    };

    this._init(a)
};
/***手机背景乐***/
    $(function() {
        if (!1 === DISABLE_SOUND_MOBILE) {
            var audio = $('audio');
            var blnP = true;
            $('#btn_music').click(function() {
                if (blnP) {
                    $('#btn_music').removeClass('mopen');
                    $('#btn_music').addClass('mclose');
                    audio.pause();
                    blnP = false;
                } else {
                    $('#btn_music').removeClass('mclose');
                    $('#btn_music').addClass('mopen');
                    audio.play();
                    blnP = true;
                }
            })
        }else{
             var audio = $('audio');
            var blnP = true;
             $('#btn_music').removeClass('mopen');
            $('#btn_music').addClass('mclose');
              audio.pause();
              blnP = false;
        }
    })