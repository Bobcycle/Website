! function() {
    "use strict";
    const t = {
        "color-gull-gray": "#9db2bd",
        "color-brand": "#2962FF",
        "color-brand-hover": "#1E53E5",
        "color-brand-active": "#1848CC"
    };
    const e = document.createElement("a");

    function i(t) {
        e.href = t, e.host || (e.href = e.href);
        let {
            host: i,
            pathname: r
        } = e;
        return "http:" === e.protocol && (i = i.replace(/:80$/, "")), "https:" === e.protocol && (i = i.replace(/:443$/, "")), r = ("/" === e.pathname[0] ? "" : "/") + e.pathname, {
            host: i,
            pathname: r,
            href: e.href
        }
    }
    var r, n, s = {
        "crypto-mkt-screener": {
            width: 1e3,
            height: 490,
            defaultColumn: "overview",
            market: "crypto",
            screener_type: "crypto_mkt",
            displayCurrency: "USD",
            isTransparent: !1
        },
        events: {
            width: 510,
            height: 600,
            isTransparent: !1,
            hideImportanceIndicator: !1,
            autosize: !1
        },
        "forex-cross-rates": {
            width: 770,
            height: 400,
            isTransparent: !1,
            currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
            frameElementId: null,
            autosize: !1
        },
        "forex-heat-map": {
            width: 770,
            height: 400,
            isTransparent: !1,
            currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
            frameElementId: null,
            autosize: !1
        },
        hotlists: {
            width: 400,
            height: 600,
            isTransparent: !1,
            dateRange: "12M",
            showSymbolLogo: !1
        },
        "market-overview": {
            width: 400,
            height: 650,
            isTransparent: !1,
            dateRange: "12M",
            showSymbolLogo: !0
        },
        "market-quotes": {
            width: 770,
            height: 450,
            isTransparent: !1,
            showSymbolLogo: !1
        },
        "mini-symbol-overview": {
            width: 350,
            height: 220,
            symbol: "FX:EURUSD",
            dateRange: "12M",
            trendLineColor: "rgba(41, 98, 255, 1)",
            underLineColor: "rgba(41, 98, 255, 0.3)",
            underLineBottomColor: "rgba(41, 98, 255, 0)",
            isTransparent: !1,
            autosize: !1,
            largeChartUrl: ""
        },
        screener: {
            width: 1100,
            height: 523,
            defaultColumn: "overview",
            defaultScreen: "general",
            market: "forex",
            showToolbar: !0,
            isTransparent: !1
        },
        "single-quote": {
            width: 350,
            symbol: "FX:EURUSD",
            isTransparent: !1
        },
        "symbol-profile": {
            width: 480,
            height: 650,
            symbol: "NASDAQ:AAPL",
            isTransparent: !1
        },
        "symbol-info": {
            width: 1e3,
            symbol: "NASDAQ:AAPL",
            isTransparent: !1
        },
        "technical-analysis": {
            interval: "1m",
            width: 425,
            isTransparent: !1,
            height: 450,
            symbol: "NASDAQ:AAPL",
            showIntervalTabs: !0
        },
        "ticker-tape": {
            isTransparent: !1,
            displayMode: "adaptive",
            showSymbolLogo: !1
        },
        tickers: {
            isTransparent: !1,
            showSymbolLogo: !1
        },
        financials: {
            width: 480,
            height: 830,
            autosize: !1,
            symbol: "NASDAQ:AAPL",
            isTransparent: !1,
            displayMode: "regular",
            largeChartUrl: ""
        },
        timeline: {
            width: 480,
            height: 830,
            autosize: !1,
            isTransparent: !1,
            displayMode: "regular",
            feedMode: "all_symbols"
        }
    };
    ! function(t) {
        let e;
        ! function(t) {
            t.SetSymbol = "set-symbol", t.SetInterval = "set-interval"
        }(e = t.Names || (t.Names = {}))
    }(r || (r = {})),
    function(t) {
        let e;
        ! function(t) {
            t.SymbolClick = "tv-widget-symbol-click", t.WidgetLoad = "tv-widget-load", t.ResizeIframe = "tv-widget-resize-iframe", t.NoData = "tv-widget-no-data"
        }(e = t.Names || (t.Names = {}))
    }(n || (n = {}));
    const o = ["locale", "symbol", "market"];
    const a = 767;
    var c, h, l, d;
    ! function(t) {
        t.Adaptive = "adaptive", t.Regular = "regular", t.Compact = "compact"
    }(c || (c = {})),
    function(t) {
        t.AllSymbols = "all_symbols", t.Market = "market", t.Symbol = "symbol"
    }(h || (h = {})),
    function(t) {
        t.Cryptocurrencies = "crypto", t.Currencies = "forex", t.Stocks = "stock", t.Indices = "index", t.Futures = "futures", t.Bonds = "cfd"
    }(l || (l = {})),
    function(t) {
        t[t.TickerItemHeightNormal = 44] = "TickerItemHeightNormal", t[t.TickerItemHeightCompact = 72] = "TickerItemHeightCompact"
    }(d || (d = {}));
    const g = a;

    function p(t, e, i, r) {
        let n = function(t) {
            return t ? d.TickerItemHeightCompact : d.TickerItemHeightNormal
        }(t === c.Adaptive && r ? r <= g : t === c.Compact);
        return e || (n += 2), i && (n += 32), n
    }
    new class extends class {
        constructor() {
            this._getScriptsInfo().forEach((t => {
                this._replaceScript(t)
            }))
        }
        get widgetId() {
            throw new Error("Method must be overridden")
        }
        get widgetUtmName() {
            return this.widgetId
        }
        get defaultSettings() {
            return s[this.widgetId]
        }
        get propertiesToWorkWith() {
            return []
        }
        get useWidgetHostForProduction() {
            return !1
        }
        filterRawSettings(t) {
            const e = {};
            return Object.keys(t).forEach((i => {
                -1 !== this.propertiesToWorkWith.indexOf(i) && (e[i] = t[i])
            })), e
        }
        get propertiesToSkipInHash() {
            return ["customer", "locale"]
        }
        get propertiesToAddToGetParams() {
            return ["locale"]
        }
        _getScriptsInfo() {
            const t = function() {
                if (document.currentScript) return document.currentScript.src;
                const t = document.getElementsByTagName("script");
                for (let e = 0; e < t.length; e++)
                    if ("interactive" === t[e].readyState) return t[e].src;
                try {
                    throw new Error
                } catch (t) {
                    const e = /\((.*?):\d+:\d+\)\s*$/m.exec(t.stack);
                    if (e) return e[1]
                }
                return null
            }();
            if (!t) return console.error("Could not self-replace the script, widget embedding has been aborted"), [];
            const {
                host: e,
                href: r
            } = i(t), n = document.getElementsByTagName("script"), s = [];
            for (let t = 0; t < n.length; t++) {
                const e = n.item(t);
                e.src && i(e.src).href === r && s.push(e)
            }
            const o = function(t = location.host) {
                return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(t) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(t) || t.match(/^[a-z]{2}\.tradingview\.com/) || t.match(/prod-[^.]+.tradingview.com/) ? "battle" : t.includes("tradingview.com") || t.includes("staging") ? "staging" : t.match(/webcharts/) ? "staging_local" : (t.match(/^localhost(:\d+)?$/), "local")
            }(e);
            return s.map((t => ({
                scriptHost: e,
                scriptEnv: o,
                scriptElement: t
            })))
        }
        _replaceScript(e) {
            const {
                scriptEnv: i,
                scriptHost: r,
                scriptElement: s
            } = e;
            this.script = s;
            const o = this._scriptContentToJSON(),
                a = function(t) {
                    if (null === t) return null;
                    const e = t.querySelector("#tradingview-copyright"),
                        i = t.querySelector("#tradingview-quotes"),
                        r = e || i;
                    return r && t.removeChild(r), r
                }(this.script.parentNode),
                c = !!this.script.parentNode.querySelector(".tradingview-widget-copyright");
            this.hasCopyright = a || c, o && (this.settings = this.filterRawSettings(o)), o && this._isValidSettings() || (console.error("Invalid settings provided, fall back to defaults"), this.settings = this.filterRawSettings(this.defaultSettings));
            const h = "32px",
                l = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px",
                d = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px",
                g = this.script.parentNode.classList.contains("tradingview-widget-container");
            this.script.parentNode && g ? this.iframeContainer = this.script.parentNode : this.iframeContainer = document.createElement("div"), this.iframeContainer.style.width = d, this.iframeContainer.style.height = l, this.iframeContainer.appendChild(function() {
                const e = document.createElement("style");
                return e.innerHTML = `\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Arial, sans-serif !important;\n\t\tcolor: ${t["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: ${t["color-brand"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: ${t["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: ${t["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: ${t["color-brand-hover"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: ${t["color-brand-active"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: ${t["color-brand"]} !important;\n\t}\n\t`, e
            }());
            const p = a && !this.settings.whitelabel,
                m = this.hasCopyright ? `calc(${l} - 32px)` : l;
            this.settings.utm_source = location.hostname, this.settings.utm_medium = c ? "widget_new" : "widget", this.settings.utm_campaign = this.widgetUtmName, this.iframe = this._createIframe(m, d, r, i, s.id);
            const u = this.iframeContainer.querySelector(".tradingview-widget-container__widget");
            if (u ? (this.script.parentNode.replaceChild(this.iframe, u), this.script.parentNode.removeChild(this.script)) : g ? (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.removeChild(this.script)) : (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.replaceChild(this.iframeContainer, this.script)), function(t, e, i) {
                    const r = e.contentWindow;
                    if (!r) return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"), () => {};

                    function n(e) {
                        e.source && e.source === r && e.data && e.data.name && e.data.name === t && i(e.data.data)
                    }
                    window.addEventListener("message", n, !1)
                }(n.Names.ResizeIframe, this.iframe, (t => {
                    t.width && (this.iframe.style.width = t.width + "px", this.iframeContainer.style.width = t.width + "px"), this.iframe.style.height = t.height + "px", this.iframeContainer.style.height = t.height + (this.hasCopyright ? 32 : 0) + "px"
                })), p) {
                const t = document.createElement("div");
                t.style.height = h, t.style.lineHeight = h, t.style.width = d, t.style.textAlign = "center", t.style.verticalAlign = "middle", t.innerHTML = a.innerHTML, this.iframeContainer.appendChild(t)
            }
        }
        _iframeSrcBase(t, e) {
            const i = "https://www.tradingview-widget.com";
            let r = this.useWidgetHostForProduction ? i : "https://s.tradingview.com";
            return this.settings.useWidgetHost ? r = i : "local" === e ? r = `http://${t}` : "staging" === e && (r = -1 !== t.indexOf("beta.tradingview.com") ? "https://betacdn.tradingview.com" : `https://${t}`), r += `/embed-widget/${this.widgetId}/`, this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (r += `${this.settings.customer}/`), r
        }
        _isValidSettings() {
            const t = function(t) {
                if (void 0 === t) return !0;
                const e = parseInt(t) + "%" == t + "";
                return parseInt(t) + "" == t + "" || e || "auto" === t
            };
            return t(this.settings.width) && t(this.settings.height)
        }
        _buildGetQueryString() {
            const t = this.propertiesToAddToGetParams.filter((t => -1 !== o.indexOf(t)));
            return 0 === t.length ? "" : "?" + function(t) {
                const e = [];
                for (const i in t) t.hasOwnProperty(i) && null != t[i] && e.push({
                    key: i,
                    pair: encodeURIComponent(i) + "=" + encodeURIComponent(t[i])
                });
                return e.sort(((t, e) => t.key > e.key ? 1 : t.key < e.key ? -1 : 0)).map((t => t.pair)).join("&")
            }(function(t, e) {
                const i = Object.create(Object.getPrototypeOf(t));
                for (const r of e) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                return i
            }(this.settings, t))
        }
        _buildHashString(t) {
            const e = {};
            t && (e.frameElementId = t), Object.keys(this.settings).forEach((t => {
                -1 === this.propertiesToSkipInHash.indexOf(t) && (e[t] = this.settings[t])
            }));
            return Object.keys(e).length > 0 ? "#" + encodeURIComponent(JSON.stringify(e)) : ""
        }
        _scriptContentToJSON() {
            const t = this.script.innerHTML.trim();
            try {
                return JSON.parse(t)
            } catch (t) {
                return console.error(`Widget settings parse error: ${t}`), null
            }
        }
        _createIframe(t, e, i, r, n) {
            const s = document.createElement("iframe");
            n && (s.id = n), this.settings.enableScrolling || s.setAttribute("scrolling", "no"), s.setAttribute("allowtransparency", !0), s.setAttribute("frameborder", 0), s.style.boxSizing = "border-box", s.style.height = t, s.style.width = e;
            const o = this._iframeSrcBase(i, r) + this._buildGetQueryString() + this._buildHashString(n);
            return s.setAttribute("src", o), s
        }
    } {
        get widgetId() {
            return "ticker-tape"
        }
        filterRawSettings(t) {
            void 0 !== t.theme && (t.colorTheme = t.theme);
            const e = super.filterRawSettings(t);
            let i;
            e.width = "100%";
            try {
                i = this.script.parentNode.getBoundingClientRect().width
            } finally {
                e.height = p(t.displayMode, t.isTransparent, this.hasCopyright, i)
            }
            return e
        }
        get propertiesToWorkWith() {
            return ["symbols", "locale", "showSymbolLogo", "colorTheme", "isTransparent", "largeChartUrl", "displayMode", "customer", "useWidgetHost"]
        }
    }
}();