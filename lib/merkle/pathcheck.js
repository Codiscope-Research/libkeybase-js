// Generated by IcedCoffeeScript 1.8.0-e
(function() {
  var BaseTree, C, Leaf, LegacyUidNameTree, MainTree, PathChecker, a_json_parse, hash, iced, make_esc, merkle, pathcheck, sha256, sha512, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  C = require('../constants');

  make_esc = require('iced-error').make_esc;

  hash = require('triplesec').hash;

  merkle = require('merkle-tree');

  a_json_parse = require('iced-utils').util.a_json_parse;

  Leaf = require('./leaf').Leaf;

  sha256 = function(s) {
    return (new hash.SHA256).bufhash(new Buffer(s, 'utf8')).toString('hex');
  };

  sha512 = function(s) {
    return (new hash.SHA512).bufhash(new Buffer(s, 'utf8')).toString('hex');
  };

  module.exports = pathcheck = function(_arg, cb) {
    var err, km, pc, res, server_reply, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    server_reply = _arg.server_reply, km = _arg.km;
    pc = new PathChecker({
      server_reply: server_reply,
      km: km
    });
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced"
        });
        pc.run(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              err = arguments[0];
              return res = arguments[1];
            };
          })(),
          lineno: 26
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        return cb(err, res);
      };
    })(this));
  };

  PathChecker = (function() {
    function PathChecker(_arg) {
      this.server_reply = _arg.server_reply, this.km = _arg.km;
    }

    PathChecker.prototype.run = function(cb) {
      var esc, leaf, uid, username, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "PathChecker::run");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
            funcname: "PathChecker.run"
          });
          _this._verify_sig(esc(__iced_deferrals.defer({
            lineno: 39
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
              funcname: "PathChecker.run"
            });
            _this._verify_username(esc(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  uid = arguments[0];
                  return username = arguments[1];
                };
              })(),
              lineno: 40
            })));
            __iced_deferrals._fulfill();
          })(function() {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
                funcname: "PathChecker.run"
              });
              _this._verify_path({
                uid: uid
              }, esc(__iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return leaf = arguments[0];
                  };
                })(),
                lineno: 41
              })));
              __iced_deferrals._fulfill();
            })(function() {
              return cb(null, {
                leaf: leaf,
                uid: uid,
                username: username
              });
            });
          });
        };
      })(this));
    };

    PathChecker.prototype._verify_sig = function(cb) {
      var err, esc, kid, raw, sig, sigeng, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "_verify_sig");
      kid = this.km.get_ekid().toString('hex');
      err = null;
      (function(_this) {
        return (function(__iced_k) {
          var _ref;
          if ((sig = (_ref = _this.server_reply.root.sigs[kid]) != null ? _ref.sig : void 0) == null) {
            return __iced_k(err = new Error("No signature found for kid: " + kid));
          } else {
            sigeng = _this.km.make_sig_eng();
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
                funcname: "PathChecker._verify_sig"
              });
              sigeng.unbox(sig, esc(__iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return raw = arguments[0];
                  };
                })(),
                lineno: 54
              })));
              __iced_deferrals._fulfill();
            })(function() {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
                  funcname: "PathChecker._verify_sig"
                });
                a_json_parse(raw.toString('utf8'), esc(__iced_deferrals.defer({
                  assign_fn: (function(__slot_1) {
                    return function() {
                      return __slot_1._signed_payload = arguments[0];
                    };
                  })(_this),
                  lineno: 55
                })));
                __iced_deferrals._fulfill();
              })(__iced_k);
            });
          }
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    PathChecker.prototype._extract_nodes = function(_arg, cb) {
      var esc, list, node, ret, val, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      list = _arg.list;
      esc = make_esc(cb, "PathChecker::_extract_nodes");
      ret = {};
      (function(_this) {
        return (function(__iced_k) {
          var _i, _len, _ref, _results, _while;
          _ref = list;
          _len = _ref.length;
          _i = 0;
          _results = [];
          _while = function(__iced_k) {
            var _break, _continue, _next;
            _break = function() {
              return __iced_k(_results);
            };
            _continue = function() {
              return iced.trampoline(function() {
                ++_i;
                return _while(__iced_k);
              });
            };
            _next = function(__iced_next_arg) {
              _results.push(__iced_next_arg);
              return _continue();
            };
            if (!(_i < _len)) {
              return _break();
            } else {
              node = _ref[_i].node;
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
                  funcname: "PathChecker._extract_nodes"
                });
                a_json_parse(node.val, esc(__iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      return val = arguments[0];
                    };
                  })(),
                  lineno: 64
                })));
                __iced_deferrals._fulfill();
              })(function() {
                return _next(ret[node.hash] = val);
              });
            }
          };
          _while(__iced_k);
        });
      })(this)((function(_this) {
        return function() {
          return cb(null, ret);
        };
      })(this));
    };

    PathChecker.prototype._verify_username_legacy = function(_arg, cb) {
      var err, esc, leaf, nodes, root, tree, uid, username, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      uid = _arg.uid, username = _arg.username;
      esc = make_esc(cb, "PathChecker::_verify_username_legacy");
      root = this._signed_payload.body.legacy_uid_root;
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
            funcname: "PathChecker._verify_username_legacy"
          });
          _this._extract_nodes({
            list: _this.server_reply.uid_proof_path
          }, esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return nodes = arguments[0];
              };
            })(),
            lineno: 73
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          tree = new LegacyUidNameTree({
            root: root,
            nodes: nodes
          });
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
              funcname: "PathChecker._verify_username_legacy"
            });
            tree.find({
              key: sha256(username)
            }, esc(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return leaf = arguments[0];
                };
              })(),
              lineno: 75
            })));
            __iced_deferrals._fulfill();
          })(function() {
            err = leaf === uid ? null : new Error("UID mismatch " + leaf + " != " + uid + " in tree for " + username);
            return cb(err);
          });
        };
      })(this));
    };

    PathChecker.prototype._verify_path = function(_arg, cb) {
      var err, esc, leaf, leaf_raw, nodes, root, tree, uid, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      uid = _arg.uid;
      esc = make_esc(cb, "PathChecker::_verify_path");
      root = this._signed_payload.body.root;
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
            funcname: "PathChecker._verify_path"
          });
          _this._extract_nodes({
            list: _this.server_reply.path
          }, esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return nodes = arguments[0];
              };
            })(),
            lineno: 85
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          tree = new MainTree({
            root: root,
            nodes: nodes
          });
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
              funcname: "PathChecker._verify_path"
            });
            tree.find({
              key: uid
            }, esc(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return leaf_raw = arguments[0];
                };
              })(),
              lineno: 87
            })));
            __iced_deferrals._fulfill();
          })(function() {
            var _ref, _ref1;
            if (typeof leaf_raw !== "undefined" && leaf_raw !== null) {
              _ref = Leaf.parse(leaf_raw), err = _ref[0], leaf = _ref[1];
            } else {
              _ref1 = [null, null], err = _ref1[0], leaf = _ref1[1];
            }
            return cb(err, leaf);
          });
        };
      })(this));
    };

    PathChecker.prototype._verify_username = function(cb) {
      var err, uid, username, username_cased, ___iced_passed_deferral, __iced_deferrals, __iced_k, _ref;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      _ref = this.server_reply, uid = _ref.uid, username = _ref.username, username_cased = _ref.username_cased;
      err = null;
      (function(_this) {
        return (function(__iced_k) {
          if (uid.slice(-2) === '00') {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
                funcname: "PathChecker._verify_username"
              });
              _this._verify_username_legacy({
                username: username,
                uid: uid
              }, __iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return err = arguments[0];
                  };
                })(),
                lineno: 102
              }));
              __iced_deferrals._fulfill();
            })(__iced_k);
          } else {
            err = _this._verify_username_hash({
              uid: uid,
              username: username,
              lc: false
            });
            return __iced_k((err != null) && (username_cased != null) && (username_cased !== username) && (username_cased.toLowerCase() === username) ? err = _this._verify_username_hash({
              uid: uid,
              username: username_cased
            }) : void 0);
          }
        });
      })(this)((function(_this) {
        return function() {
          return cb(err, uid, username);
        };
      })(this));
    };

    PathChecker.prototype._verify_username_hash = function(_arg) {
      var err, h, uid, uid2, username;
      uid = _arg.uid, username = _arg.username;
      h = (new hash.SHA256).bufhash(new Buffer(username, "utf8"));
      uid2 = h.slice(0, 15).toString('hex') + '19';
      if (uid !== uid2) {
        err = new Error("bad UID: " + uid + " != " + uid2 + " for username " + username);
      }
      return err;
    };

    return PathChecker;

  })();

  BaseTree = (function(_super) {
    __extends(BaseTree, _super);

    function BaseTree(_arg) {
      this.root = _arg.root, this.nodes = _arg.nodes;
      BaseTree.__super__.constructor.call(this, {});
    }

    BaseTree.prototype.lookup_root = function(cb) {
      return cb(null, this.root);
    };

    BaseTree.prototype.lookup_node = function(_arg, cb) {
      var err, key, ret;
      key = _arg.key;
      ret = this.nodes[key];
      err = ret != null ? null : new Error("key not found: '" + key + "'");
      return cb(err, ret);
    };

    return BaseTree;

  })(merkle.Base);

  LegacyUidNameTree = (function(_super) {
    __extends(LegacyUidNameTree, _super);

    function LegacyUidNameTree() {
      return LegacyUidNameTree.__super__.constructor.apply(this, arguments);
    }

    LegacyUidNameTree.prototype.hash_fn = function(s) {
      return sha256(s);
    };

    return LegacyUidNameTree;

  })(BaseTree);

  MainTree = (function(_super) {
    __extends(MainTree, _super);

    function MainTree() {
      return MainTree.__super__.constructor.apply(this, arguments);
    }

    MainTree.prototype.hash_fn = function(s) {
      return sha512(s);
    };

    return MainTree;

  })(BaseTree);

  __iced_k_noop();

}).call(this);
