Ember.TEMPLATES["album"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                                <div>\r\n                                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("results__result-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "song", "song", options) : helperMissing.call(depth0, "link-to", "song", "song", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </div>\r\n                            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                        <div class=\"results__result-item__container\">\r\n                                            <div class=\"results__result-item__meta\">\r\n                                                <span>");
  stack1 = helpers._triageMustache.call(depth0, "song.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"main-content__banner\">\r\n    <div class=\"main-content__banner__header\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1\">\r\n                    <a class=\"name\" href=\"\">Album/<span>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-content__banner__image-container\">\r\n        <div class=\"main-content__banner__transparent-background\"></div>\r\n        <img class=\"main-content__banner__image\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"\"/>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1\">\r\n            <div class=\"main-content__details-titles\">\r\n                <a class=\"detail-title\" href=\"\">Tracks</a>\r\n                <a class=\"detail-title\" href=\"\">Description</a>\r\n            </div>\r\n            <div class=\"main-content__details\">\r\n                <div class=\"main-content__detail main-content__details__tracks\">\r\n                    <div class=\"results song-results\">\r\n                        <div class=\"results__result-items\">\r\n                            ");
  stack1 = helpers.each.call(depth0, "song", "in", "songs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"main-content__detail main-content__details__bio\">\r\n                    <p>\r\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "notes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </p>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n                        MUSICA | Where Music Lives\r\n                    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("-->\r\n			<!--");
  stack1 = helpers.unless.call(depth0, "sidebarPermanent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n		<!--");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("-->\r\n				<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSidebar", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"sidebar__sidebar-toggler\">Close Menu</button>-->\r\n			<!--");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("-->\r\n			<!--<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSidebar", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"sidebar__sidebar-toggler\">Open Menu</button>-->\r\n		<!--");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sidebarPermanent:sidebar-permanent")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/search-overlay", options) : helperMissing.call(depth0, "partial", "partials/search-overlay", options))));
  data.buffer.push("\r\n    <nav class=\"main-nav\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("logo")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSearchOverlay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"main-nav__search-button\"><span class=\"glyphicon glyphicon-search\"></span> Search</span>\r\n                </div>\r\n            </div>\r\n            <!--<nav class=\"navbar navbar navbar-fixed-top\" role=\"navigation\">-->\r\n            <!--<div class=\"container\">-->\r\n            <!--<div class=\"navbar-header\">-->\r\n            <!--<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">-->\r\n            <!--<span class=\"sr-only\">Toggle navigation</span>-->\r\n            <!--<span class=\"icon-bar\"></span>-->\r\n            <!--<span class=\"icon-bar\"></span>-->\r\n            <!--<span class=\"icon-bar\"></span>-->\r\n            <!--</button>-->\r\n            <!--<a class=\"navbar-brand\" href=\"/\"><span class=\"glyphicon glyphicon-home\"></span> Third Year Music</a>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">-->\r\n            <!--<ul class=\"nav navbar-nav\">-->\r\n            <!--<li><a href=\"/browse\">Browse</a></li>-->\r\n            <!--<li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSearchOverlay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"\" class=\"\"><span class=\"glyphicon glyphicon-search\"></span> Search</a></li>-->\r\n            <!--</ul>-->\r\n            <!--<ul class=\"nav navbar-nav navbar-right\">-->\r\n            <!--<li><a href=\"/logout\">Log Out</a></li>-->\r\n            <!--<li><a href=\"/login\">Login</a></li>-->\r\n            <!--<li><a href=\"/register\">Sign Up</a></li>-->\r\n            <!--</ul>-->\r\n\r\n            <!--</div>&lt;!&ndash; /.navbar-collapse &ndash;&gt;-->\r\n            <!--</div>-->\r\n            <!--</nav>-->\r\n        </div>\r\n    </nav>\r\n	<!--<header class=\"main-header\">-->\r\n		<!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n	<!--</header>-->\r\n	<!--<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":sidebar sidebarOpen:sidebar--open")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">-->\r\n		<!--<nav class=\"menu\">-->\r\n\r\n		<!--</nav>-->\r\n		<!--");
  stack1 = helpers['if'].call(depth0, "sidebarOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n\r\n		<!--<div class=\"main-content__menu-permanent-container\">-->\r\n			<!--<label>Make menu permanently Open</label>-->\r\n			<!--");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'checked': ("sidebarPermanent"),
    'type': ("checkbox")
  },hashTypes:{'checked': "ID",'type': "STRING"},hashContexts:{'checked': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n		<!--</div>-->\r\n	<!--</div>-->\r\n    <div class=\"main-content\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["artist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("results__result-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "album", "album", options) : helperMissing.call(depth0, "link-to", "album", "album", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                    <div class=\"results__result-item__container\">\r\n                                        <img src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "outputPicture", "album.picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("\" alt=\"\"/>\r\n                                        <div class=\"results__result-item__meta\">\r\n                                            <span>");
  stack1 = helpers._triageMustache.call(depth0, "album.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                                        </div>\r\n                                    </div>\r\n                                ");
  return buffer;
  }

  data.buffer.push("<div class=\"main-content__banner\">\r\n    <div class=\"main-content__banner__header\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1\">\r\n                    <a class=\"name\" href=\"\">Artists/<span>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-content__banner__image-container\">\r\n        <div class=\"main-content__banner__transparent-background\"></div>\r\n        <img class=\"main-content__banner__image\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"\"/>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1\">\r\n            <div class=\"main-content__details-titles\">\r\n                <a class=\"detail-title\" href=\"\">Videos</a>\r\n                <!--<a class=\"detail-title\" href=\"\">Related Artists</a>-->\r\n                <a class=\"detail-title\" href=\"\">Albums</a>\r\n                <a class=\"detail-title\" href=\"\">Biography</a>\r\n                <!--<a class=\"detail-title\" href=\"\">Links</a>-->\r\n            </div>\r\n            <div class=\"main-content__details\">\r\n                <div class=\"main-content__details__videos\">\r\n                    <div class=\"results video-results\">\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchVideos2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"main-content__details__albums\">\r\n                    <div class=\"results results\">\r\n                        <div class=\"results__result-items\">\r\n                            ");
  stack1 = helpers.each.call(depth0, "album", "in", "albums", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"main-content__details__related-artists\">\r\n\r\n                </div>\r\n\r\n                <div class=\"main-content__details__bio\">\r\n                    <p>\r\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "profile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"main-content__details__links\">\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1\">\r\n            <div class=\"results video-results\">\r\n                <h4 class=\"results__header\">Popular Videos</h4>\r\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchVideos", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index2"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n				<div class=\"main-content__searchbox-container__search-options__search-option-container\">\r\n					<label class=\"main-content__searchbox-container__search-options__search-option-container__search-option-label\">");
  stack1 = helpers._triageMustache.call(depth0, "searchType.typeName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\r\n					<input type=\"radio\" name=\"search-option\" class=\"main-content__searchbox-container__search-options__search-option-container__search-option\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("searchType.typeName")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("searchType.typeName")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSearchType", "searchType", {hash:{
    'bubbles': (false),
    'on': ("click")
  },hashTypes:{'bubbles': "BOOLEAN",'on': "STRING"},hashContexts:{'bubbles': depth0,'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" />\r\n				</div>\r\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n					<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchItemClicked", "item", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n						");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n					</li>\r\n				");
  return buffer;
  }

  data.buffer.push("<div class=\"main-content sidebarOpen::main-content--expanded\">\r\n	<div class=\"main-content__searchbox-container\">\r\n		<div class=\"main-content__searchbox-container__search-options\">\r\n			\r\n\r\n			");
  stack1 = helpers.each.call(depth0, "searchType", "in", "searchTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n\r\n		<div class=\"main-content__searchbox-container__searchbox\">\r\n			");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchboxView", {hash:{
    'valueBinding': ("searchValue")
  },hashTypes:{'valueBinding': "STRING"},hashContexts:{'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n			<ul ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":main-content__searchbox-container__searchbox__dropdown searchBoxHasFocus::main-content__searchbox-container__searchbox__dropdown--invisible")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				");
  stack1 = helpers.each.call(depth0, "item", "in", "controller.dropDownSearchItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			</ul>	\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["layouts/search-videos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <a href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "video.url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"results__result-item\">\r\n            <div class=\"results__result-item__container\">\r\n                <div class=\"results__result-item__container__overlay\">\r\n                    <span class=\"glyphicon glyphicon-play-circle\"></span>\r\n                </div>\r\n                <img src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "video.picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" alt=\"\"/>\r\n                <div class=\"results__result-item__meta\">\r\n                    <span>");
  stack1 = helpers._triageMustache.call(depth0, "video.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                </div>\r\n            </div>\r\n        </a>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"results__result-items\">\r\n    ");
  stack1 = helpers.each.call(depth0, "video", "in", "controller.videoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["partials/_search-overlay"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                <a href=\"#\" class=\"results__result-item\">\r\n                                    <div class=\"results__result-item__container\">\r\n                                        <img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>\r\n                                        <div class=\"results__result-item__meta\">\r\n                                            <span>");
  stack1 = helpers._triageMustache.call(depth0, "song.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </a>\r\n                            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("results__result-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "artist", "artist", options) : helperMissing.call(depth0, "link-to", "artist", "artist", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                    <div class=\"results__result-item__container\">\r\n                                        <img src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "outputPicture", "artist.picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("\" alt=\"\"/>\r\n                                        <div class=\"results__result-item__meta\">\r\n                                            <span>");
  stack1 = helpers._triageMustache.call(depth0, "artist.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                                        </div>\r\n                                    </div>\r\n                                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("results__result-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "album", "album", options) : helperMissing.call(depth0, "link-to", "album", "album", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                    <div class=\"results__result-item__container\">\r\n                                        <img src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "outputPicture", "album.picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("\" alt=\"\"/>\r\n                                        <div class=\"results__result-item__meta\">\r\n                                            <span>");
  stack1 = helpers._triageMustache.call(depth0, "album.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                                        </div>\r\n                                    </div>\r\n                                ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":search-overlay searchOverlayVisible:search-overlay-visible")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1\">\r\n                <div class=\"search-overlay-content\">\r\n                    <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeSearchOverlay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"close-search-overlay-sign\">\r\n                        <span class=\"glyphicon glyphicon-remove close-search-overlay-button\"></span>\r\n                    </div>\r\n                    <div>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("searchTerm"),
    'class': ("search-overlay__searchbox"),
    'placeholder': ("Search for music and videos here")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n\r\n                    <!--Video results-->\r\n\r\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":results :video-results videoResultsInvisible:results--invisible")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                        <h4 class=\"results__header\">VIDEO RESULTS</h4>\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchVideos", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                    </div>\r\n                    <!--/Video Results-->\r\n\r\n                    <!--Song results-->\r\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":results :artist-results songResultsInvisible:results--invisible")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                        <h4 class=\"results__header\">SONG RESULTS</h4>\r\n                        <div class=\"results__result-items\">\r\n                            ");
  stack1 = helpers.each.call(depth0, "song", "in", "songResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/emis-killa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                        </div>\r\n                    </div>\r\n                    <!--/Song Results-->\r\n\r\n                    <!--Artist Results-->\r\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":results :artist-results artistResultsInvisible:results--invisible")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                        <h4 class=\"results__header\">ARTIST RESULTS</h4>\r\n                        <div class=\"results__result-items\">\r\n                            ");
  stack1 = helpers.each.call(depth0, "artist", "in", "artistResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/eminem.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                        </div>\r\n                    </div>\r\n                    <!--/Artist Results-->\r\n\r\n                    <!--Album Results-->\r\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":results :artist-results albumResultsInvisible:results--invisible")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                        <h4 class=\"results__header\">ALBUM RESULTS</h4>\r\n                        <div class=\"results__result-items\">\r\n                            ");
  stack1 = helpers.each.call(depth0, "album", "in", "albumResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                            <!--<a href=\"#\" class=\"results__result-item\">-->\r\n                                <!--<div class=\"results__result-item__container\">-->\r\n                                    <!--<img src=\"http://localhost:8000/images/artists/shareefa.jpg\" alt=\"\"/>-->\r\n                                    <!--<div class=\"results__result-item__meta\">-->\r\n                                        <!--<span>name</span>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                            <!--</a>-->\r\n                        </div>\r\n                    </div>\r\n                    <!--/Album Results-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n				<div class=\"main-content__searchbox-container__search-options__search-option-container\">\r\n					<label class=\"main-content__searchbox-container__search-options__search-option-container__search-option-label\">");
  stack1 = helpers._triageMustache.call(depth0, "searchType.typeName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\r\n					<input type=\"radio\" name=\"search-option\" class=\"main-content__searchbox-container__search-options__search-option-container__search-option\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("searchType.typeName")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("searchType.typeName")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSearchType", "searchType", {hash:{
    'bubbles': (false),
    'on': ("click")
  },hashTypes:{'bubbles': "BOOLEAN",'on': "STRING"},hashContexts:{'bubbles': depth0,'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" />\r\n				</div>\r\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n					<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchItemClicked", "item", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n						");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n					</li>\r\n				");
  return buffer;
  }

  data.buffer.push("<div class=\"main-content sidebarOpen::main-content--expanded\">\r\n	<div class=\"main-content__searchbox-container\">\r\n		<div class=\"main-content__searchbox-container__search-options\">\r\n			");
  stack1 = helpers.each.call(depth0, "searchType", "in", "searchTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n\r\n		<div class=\"main-content__searchbox-container__searchbox\">\r\n			");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchboxView", {hash:{
    'value': ("searchValues")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n			<ul ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":main-content__searchbox-container__searchbox__dropdown searchBoxHasFocus::main-content__searchbox-container__searchbox__dropdown--invisible")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				");
  stack1 = helpers.each.call(depth0, "item", "in", "controller.dropDownSearchItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			</ul>	\r\n		</div>\r\n		");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["searchResult"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n  		<div class=\"main-content__search-results__search-result\">\r\n  			");
  stack1 = helpers.each.call(depth0, "result", "in", "results", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			<div class=\"other-results\">\r\n				<h3>Other Less relevant Results</h3>\r\n				");
  stack1 = helpers.each.call(depth0, "item", "in", "otherResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\r\n			</div>\r\n		</div>\r\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n		  		<p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "album", "result", options) : helperMissing.call(depth0, "link-to", "album", "result", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n  			");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "result.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n					  <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "album", "item", options) : helperMissing.call(depth0, "link-to", "album", "item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n				");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n		");
  stack1 = helpers['if'].call(depth0, "isSong", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n			<div class=\"main-content__search-results__search-result\">\r\n				");
  stack1 = helpers.each.call(depth0, "result", "in", "results", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				<div class=\"other-results\">\r\n					<h3>Other Less relevant Results</h3>\r\n					");
  stack1 = helpers.each.call(depth0, "item", "in", "otherResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\r\n				</div>\r\n			</div>\r\n		");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n			  		<p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "song", "result", options) : helperMissing.call(depth0, "link-to", "song", "result", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n	  			");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n						  <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "song", "item", options) : helperMissing.call(depth0, "link-to", "song", "item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n					");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n			<div class=\"main-content__search-results__search-result\">\r\n				");
  stack1 = helpers.each.call(depth0, "result", "in", "results", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				<div class=\"other-results\">\r\n					<h3>Other Less relevant Results</h3>\r\n					");
  stack1 = helpers.each.call(depth0, "item", "in", "otherResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\r\n				</div>\r\n			</div>\r\n		");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n			  		<p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "artist", "result", options) : helperMissing.call(depth0, "link-to", "artist", "result", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n	  			");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n						  <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "artist", "item", options) : helperMissing.call(depth0, "link-to", "artist", "item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n					");
  return buffer;
  }

  data.buffer.push("<h2>");
  stack1 = helpers._triageMustache.call(depth0, "resultHeader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Results</h2>\r\n<div class=\"main-content__search-results\">\r\n	");
  stack1 = helpers['if'].call(depth0, "isAlbum", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["song"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"main-content sidebarOpen::main-content--expanded\">\r\n	<div class=\"main-content__details\">\r\n		<h2>Song Title: ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\r\n		");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n<div class=\"confirm-box\">\r\n  <h4>Really?</h4>\r\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirmDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> yes </button>\r\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> no </button>\r\n</div>\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"user-profile\">\r\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Edit</button>\r\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</button>\r\n	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatarUrl"),
    'alt': ("User's avatar")
  },hashTypes:{'src': "STRING",'alt': "STRING"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\r\n	<h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\r\n	<span>");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n	<p>");
  stack1 = helpers._triageMustache.call(depth0, "bio", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n	<span>Created ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "creationDate", options) : helperMissing.call(depth0, "formatDate", "creationDate", options))));
  data.buffer.push("</span>\r\n</div>\r\n\r\n");
  stack1 = helpers['if'].call(depth0, "deleteMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["user/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"user-edit\">\r\n  <label>Choose user avatar</label>\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("avatarUrl")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n\r\n  <label>User name</label>\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n\r\n  <label>User email</label>\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n\r\n  <label>User short bio</label>\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("bio")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n</div>\r\n\r\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> ok </button>\r\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> cancel </button>");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" Add user ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n		<li>\r\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "user", options) : helperMissing.call(depth0, "link-to", "user", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \r\n		</li>\r\n	");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n				");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\r\n		<li>no users... :-(</li>\r\n	");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("create-btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.create", options) : helperMissing.call(depth0, "link-to", "users.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<ul class=\"users-listing\">\r\n	");
  stack1 = helpers.each.call(depth0, "user", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</ul>\r\n\r\n<div>Users: ");
  stack1 = helpers._triageMustache.call(depth0, "usersCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});